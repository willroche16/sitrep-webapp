# SITREP — Standalone Web App

A standalone version of the SITREP current-events board — runs in any
browser, no Claude account needed. Good for sharing with someone who doesn't
have Claude, or for using somewhere Claude itself is blocked (your own
backend function is the only thing that talks to Anthropic; your browser
never needs to reach `api.anthropic.com` directly, only your own domain).

## What you need first

An Anthropic API key from **https://console.anthropic.com/settings/keys**.
This is billed separately, pay-per-use, from any Claude.ai/Claude Pro
subscription — it's a different product. Usage here is modest (a handful of
short web-search-augmented completions per session), but it isn't free.

### Cost notes (read this)

Every action that searches the web has a real cost: the web search itself
(a small per-search fee) plus tokens for the response. To keep this
predictable:

- **Nothing fires automatically.** Breaking News and Market Signal both
  require an explicit tap to load — opening the page or browsing between
  regions/themes doesn't cost anything by itself.
- **All-Haiku by default.** Every feature — Compile Briefing, Breaking News,
  Market Signal, and Further Reading — runs on Claude Haiku, the cheapest
  model with web search support. Worth knowing: Haiku is capable but less
  sharp than Sonnet at nuanced synthesis, so briefings may occasionally miss
  subtler connections a larger model would catch. If briefing quality ever
  feels thin, the fix is switching Compile Briefing back to Sonnet — that's
  a one-line change (`callClaudeWithSearch(prompt, 2000, "claude-sonnet-4-6")`
  in the `generate()` function).
- **Search count is capped.** Without a limit, Claude can decide to run as
  many searches as it wants per call — for open-ended prompts this can spiral
  well beyond what's needed. Every feature now caps searches per call
  (4–6 depending on the feature), bounding worst-case cost regardless of how
  thorough the model decides to be. This is enforced both in the app and
  server-side in `api/generate.js`, so it holds even if the endpoint is ever
  called directly.
- **Set a spend limit.** In the Anthropic console under Settings → Limits,
  you can cap monthly spend so nothing runs away unexpectedly.

- **Check usage.** The console's Usage page breaks down cost by model and
  by day, useful for spotting which feature is driving cost if it's higher
  than expected.

## Deploy it (Vercel — free tier is fine)

1. Push this folder to a GitHub repo (see the commands at the bottom).
2. Go to **vercel.com**, sign in with GitHub, click **Add New → Project**,
   and import the repo you just pushed.
3. Vercel will auto-detect it as a Vite project — leave the build settings
   as default.
4. Before deploying, open **Environment Variables** and add:
   - Name: `ANTHROPIC_API_KEY`
   - Value: (paste your key from the Anthropic console)
5. Click **Deploy**. You'll get a URL like `sitrep-board.vercel.app` —
   that's the whole app, usable from any browser, no login required.

To update later: edit the code, `git push`, Vercel redeploys automatically.

## Push to GitHub

```bash
cd sitrep-webapp
git init
git add -A
git commit -m "Standalone SITREP web app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sitrep-webapp.git
git push -u origin main
```

(Create the empty `sitrep-webapp` repo on GitHub first via "New repository".)

## Run it locally instead (optional, for testing)

```bash
npm install
npm run dev
```

Local dev needs the same `ANTHROPIC_API_KEY` available — either run
`vercel dev` instead of `vite dev` (via the Vercel CLI, `npm i -g vercel`),
or create a `.env.local` file (never commit this) if testing the API route
locally with a small Node server of your own.

## Sharing with your friend

Once deployed, just send them the Vercel URL. They don't need a Claude
account, an API key, or anything installed — it's a normal website to them.
Every request still runs through *your* API key on the backend, so usage
(and cost) is tied to your Anthropic account, not theirs.

## Notes on the work-network use case

- Only your Vercel domain needs to be reachable from the network you're on —
  the Anthropic call itself happens server-side, invisible to your browser's
  network requests.
- If your workplace blocks Vercel's domains generally, a custom domain
  pointed at the same Vercel project is a common workaround.
- CCIRs and enabled sources are saved in that browser's `localStorage`, so
  they're per-browser/device, not synced across machines.
