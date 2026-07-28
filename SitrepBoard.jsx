// Vercel serverless function. Deployed automatically at /api/generate.
// Keeps the Anthropic API key server-side — it must never be sent to the browser.
//
// Requires the ANTHROPIC_API_KEY environment variable to be set in the
// Vercel project settings (Settings → Environment Variables). Get a key from
// https://console.anthropic.com/settings/keys — this is billed separately
// from any Claude.ai subscription, on a pay-per-use basis.

const ALLOWED_MODELS = new Set(["claude-sonnet-4-6", "claude-haiku-4-5-20251001"]);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Server is missing ANTHROPIC_API_KEY. Set it in Vercel project settings." });
    return;
  }

  const { prompt, maxTokens, model, maxSearches } = req.body || {};
  if (!prompt || typeof prompt !== "string") {
    res.status(400).json({ error: "Missing 'prompt' in request body" });
    return;
  }

  const safeMaxTokens = Math.min(Math.max(Number(maxTokens) || 1500, 100), 4000);
  const safeModel = ALLOWED_MODELS.has(model) ? model : "claude-haiku-4-5-20251001";
  // Hard ceiling regardless of what's requested — bounds worst-case cost per call
  // even if this endpoint is ever called directly rather than through the app.
  const safeMaxSearches = Math.min(Math.max(Number(maxSearches) || 4, 1), 8);

  try {
    const upstream = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: safeModel,
        max_tokens: safeMaxTokens,
        messages: [{ role: "user", content: prompt }],
        tools: [{ type: "web_search_20250305", name: "web_search", max_uses: safeMaxSearches }],
      }),
    });

    const data = await upstream.json();
    res.status(upstream.status).json(data);
  } catch (e) {
    res.status(502).json({ error: `Upstream request failed: ${e.message}` });
  }
}
