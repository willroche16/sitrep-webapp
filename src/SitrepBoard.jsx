import React, { useState, useEffect, useRef } from "react";
import { Globe2, Radio, ShieldAlert, Satellite, Anchor, Radiation, Users, RefreshCw, ExternalLink, TriangleAlert, Settings2, X, Plus, Trash2, Clock3, ListChecks, Play, Pause, Square, BookOpen, Youtube, Mic2, Compass, Zap } from "lucide-react";

const LAND_PATH_D = "M321,445L321,445L321,445ZM55,443L55,443L55,443ZM360,439L360,439L360,439ZM157,427L157,427L157,427ZM145,427L145,427L145,427ZM216,423L216,423L216,423ZM297,421L297,421L297,421ZM0,457L0,457L0,457L58,459L71,455L79,452L89,444L66,442L97,436L119,430L164,429L204,425L228,428L256,430L285,431L315,430L274,436L279,445L321,451L367,449L404,446L385,440L408,436L426,432L453,421L479,423L507,423L533,421L558,419L597,414L630,407L664,413L661,423L691,416L715,408L746,411L776,414L807,415L839,413L868,410L898,417L937,423L926,435L918,441L906,447L925,452L955,457L960,457L960,471L480,471L0,471ZM299,375L299,375L299,375ZM324,368L324,368L324,368ZM667,364L667,364L667,364ZM868,340L868,340L868,340ZM941,340L941,340L941,340ZM946,328L946,328L946,328ZM926,290L926,290L926,290ZM956,278L956,278L956,278ZM960,276L958,276L958,275L960,274L960,276ZM0,274L0,274L0,276L0,276L0,276L0,274ZM928,275L928,275L928,275ZM926,271L926,271L926,271ZM613,268L606,298L599,275ZM863,268L888,299L880,331L855,333L830,315L795,325L782,296L809,279L833,261L856,278ZM912,259L912,259L912,259ZM802,259L802,259L802,259ZM909,258L909,258L909,258ZM911,257L911,257L911,257ZM812,258L812,258L812,258ZM794,253L794,253L794,253ZM808,253L808,253L808,253ZM906,254L906,254L906,254ZM900,251L900,251L900,251ZM770,249L770,249L770,249ZM839,248L839,248L839,248ZM896,250L896,250L896,250ZM885,246L885,246L885,246ZM819,241L819,241L819,241ZM828,240L828,240L828,240ZM888,243L888,243L888,243ZM838,234L866,242L860,256ZM814,228L814,228L814,228ZM823,228L823,228L823,228ZM762,247L734,218L757,231ZM794,226L790,242L771,233L792,213ZM817,209L817,209L817,209ZM697,215L697,215L697,215ZM318,204L318,204L318,204ZM811,204L811,204L811,204ZM796,207L796,207L796,207ZM805,200L805,200L805,200ZM815,199L815,199L815,199ZM804,197L804,197L804,197ZM804,182L804,182L804,182ZM305,183L305,183L305,183ZM275,184L275,184L275,184ZM286,178L286,178L286,178ZM774,182L774,182L774,182ZM65,180L65,180L65,180ZM64,176L64,176L64,176ZM62,175L62,175L62,175ZM60,175L60,175L60,175ZM55,173L55,173L55,173ZM268,171L268,171L268,171ZM273,168L273,168L273,168ZM803,171L803,171L803,171ZM272,160L272,160L272,160ZM275,160L275,160L275,160ZM839,140L839,140L839,140ZM572,136L572,136L572,136ZM543,136L543,136L543,136ZM521,129L521,129L521,129ZM505,121L505,121L505,121ZM856,132L856,132L856,132ZM505,119L505,119L505,119ZM864,114L864,114L864,114ZM310,107L310,107L310,107ZM315,100L315,100L315,100ZM151,102L151,102L151,102ZM330,96L330,96L330,96ZM126,87L126,87L126,87ZM863,96L863,96L863,96ZM462,92L462,92L462,92ZM514,83L514,83L514,83ZM72,79L72,79L72,79ZM472,75L481,96L465,98ZM38,72L38,72L38,72ZM269,66L269,66L269,66ZM262,64L262,64L262,64ZM22,61L22,61L22,61ZM253,56L253,56L253,56ZM441,54L441,54L441,54ZM278,52L278,52L278,52ZM611,121L611,121L611,121ZM960,58L960,58L936,64L916,72L906,83L898,95L894,84L916,68L887,70L859,74L848,95L840,116L816,121L793,128L806,152L789,171L762,181L760,205L724,171L694,189L687,210L674,174L642,162L608,151L634,181L596,198L616,199L583,249L589,271L573,295L555,319L532,324L521,300L511,276L516,263L492,215L460,220L436,199L435,175L448,155L464,136L505,132L510,143L541,144L571,148L576,136L550,126L570,121L591,118L562,107L557,122L529,124L504,113L488,123L474,134L456,133L455,117L477,101L503,87L537,84L536,64L524,74L515,84L505,75L493,66L509,55L531,45L555,42L587,50L573,60L595,49L624,41L663,34L712,31L743,28L776,27L772,34L812,33L850,35L883,40L909,46L935,46L960,47L960,58ZM0,47L0,47L0,47L27,55L0,58L0,58L0,47ZM225,47L225,47L225,47ZM960,42L960,42L957,42L960,41L960,42ZM0,41L0,41L0,41L0,42L0,41ZM0,41L0,41L0,41ZM239,46L251,54L239,61L229,69L234,79L276,81L272,65L308,70L321,81L332,92L303,97L289,117L278,137L257,152L227,153L228,183L248,174L263,208L315,203L350,232L386,246L368,293L356,296L343,313L329,330L314,335L304,355L291,375L278,356L290,318L292,280L263,244L274,221L237,195L197,171L176,148L150,127L148,102L137,89L122,76L88,69L59,78L47,67L32,56L45,48L62,41L91,44L116,48L138,43L176,49L207,46ZM176,36L211,45L178,49ZM201,36L201,36L201,36ZM276,36L276,36L276,36ZM249,36L275,39L297,43L315,53L307,64L272,57L284,50L244,44ZM212,34L212,34L212,34ZM863,36L863,36L863,36ZM231,37L231,37L231,37ZM159,41L159,41L159,41ZM882,31L882,31L882,31ZM230,31L230,31L230,31ZM867,30L867,30L867,30ZM217,27L217,27L217,27ZM191,28L191,28L191,28ZM633,43L628,31L662,26L645,34ZM228,26L228,26L228,26ZM170,24L170,24L170,24ZM230,25L230,25L230,25ZM186,24L186,24L186,24ZM546,24L546,24L546,24ZM188,22L188,22L188,22ZM224,23L224,23L224,23ZM213,22L213,22L213,22ZM760,23L760,23L760,23ZM529,19L529,19L529,19ZM548,17L548,17L548,17ZM616,17L616,17L616,17ZM747,21L747,21L747,21ZM248,19L248,19L248,19ZM297,10L315,12L296,16L283,20L265,28L254,20L236,13ZM408,9L447,15L427,21L423,33L420,44L395,50L374,57L351,69L342,49L335,40L324,30L285,22L302,17L327,12L364,10Z";

const REGIONS = [
  { id: "euro-atlantic", label: "Euro-Atlantic", sub: "NATO / N. Europe", icon: ShieldAlert },
  { id: "mena", label: "MENA", sub: "CENTCOM AOR", icon: Radiation },
  { id: "indo-pacific", label: "Indo-Pacific", sub: "INDOPACOM AOR", icon: Anchor },
  { id: "africa", label: "Africa", sub: "AFRICOM AOR", icon: Globe2 },
  { id: "americas", label: "Americas", sub: "NORTHCOM / SOUTHCOM", icon: Users },
  { id: "global", label: "Global / Strategic", sub: "Cross-theatre", icon: Satellite },
];

// Map viewBox is 960x480 (equirectangular). These constants convert lon/lat to pixel x/y.
const MAP_WIDTH = 960;
const MAP_HEIGHT = 480;
const PROJ_SCALE_X = 2.6666666666666687;
const PROJ_SCALE_Y = -2.6666666666666656;
const PROJ_OFFSET_X = 480;
const PROJ_OFFSET_Y = 231.35984088447125;

function lonToX(lon) {
  return PROJ_SCALE_X * lon + PROJ_OFFSET_X;
}
function latToY(lat) {
  return PROJ_SCALE_Y * lat + PROJ_OFFSET_Y;
}

// Rough AOR-style bounding zones for each geographic region (lon/lat box corners).
// Simplified overlay boxes in the style of unified-command AOR maps, not precise borders.
const MAP_ZONES = [
  { regionId: "euro-atlantic", lonMin: -28, lonMax: 42, latMin: 34, latMax: 71 },
  { regionId: "mena", lonMin: -12, lonMax: 64, latMin: 10, latMax: 38 },
  { regionId: "indo-pacific", lonMin: 62, lonMax: 179, latMin: -47, latMax: 53 },
  { regionId: "africa", lonMin: -19, lonMax: 52, latMin: -35, latMax: 12 },
  { regionId: "americas", lonMin: -170, lonMax: -32, latMin: -57, latMax: 75 },
];

const THEMES = [
  { id: "air-space", label: "Air & Space Power", desc: "Order of battle, sorties, air defence, space" },
  { id: "maritime-land", label: "Maritime & Land Ops", desc: "Force posture, manoeuvre, naval activity" },
  { id: "cyber-info", label: "Cyber & Info Warfare", desc: "Intrusions, disinformation, EW" },
  { id: "wmd-arms", label: "Nuclear, WMD & Arms Control", desc: "Proliferation, treaties, deterrence" },
  { id: "alliances", label: "Alliances & Coalition Posture", desc: "NATO, Five Eyes, AUKUS, coalitions" },
  { id: "non-state", label: "Non-State Threats", desc: "Terrorism, militias, proxies" },
  { id: "great-power", label: "Great Power Competition", desc: "Strategic rivalry, defence industry" },
];

const TIME_PERIODS = [
  { id: "24h", label: "Last 24 Hours", hours: 24 },
  { id: "72h", label: "Last 72 Hours", hours: 72 },
  { id: "7d", label: "Last 7 Days", hours: 168 },
  { id: "30d", label: "Last 30 Days", hours: 720 },
];

const CCIR_PRIORITIES = [
  { id: 1, label: "Vital", color: "#E0453C" },
  { id: 2, label: "Interesting", color: "#C98A3E" },
  { id: 3, label: "Semi-Interesting", color: "#6B8F71" },
];

const DEFAULT_SOURCES = [
  { id: "reuters", name: "Reuters", domain: "reuters.com" },
  { id: "ap", name: "Associated Press", domain: "apnews.com" },
  { id: "afp", name: "AFP", domain: "afp.com" },
  { id: "bbc", name: "BBC News", domain: "bbc.co.uk" },
  { id: "guardian", name: "The Guardian", domain: "theguardian.com" },
  { id: "ft", name: "Financial Times", domain: "ft.com" },
  { id: "economist", name: "The Economist", domain: "economist.com" },
  { id: "janes", name: "Janes", domain: "janes.com" },
  { id: "breaking-defense", name: "Breaking Defense", domain: "breakingdefense.com" },
  { id: "wotr", name: "War on the Rocks", domain: "warontherocks.com" },
  { id: "defense-news", name: "Defense News", domain: "defensenews.com" },
  { id: "gov-uk", name: "UK Government / MOD", domain: "gov.uk" },
  { id: "nato", name: "NATO", domain: "nato.int" },
  { id: "dod", name: "US Department of Defense", domain: "defense.gov" },
];

function useZulu() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const dd = String(now.getUTCDate()).padStart(2, "0");
  const hh = String(now.getUTCHours()).padStart(2, "0");
  const mm = String(now.getUTCMinutes()).padStart(2, "0");
  const mon = now.toLocaleString("en-GB", { month: "short", timeZone: "UTC" }).toUpperCase();
  const yy = String(now.getUTCFullYear()).slice(2);
  return `${dd}${hh}${mm}Z ${mon} ${yy}`;
}

function parseMarkerBlocks(text, markers) {
  const cleaned = text.replace(/```/g, "").trim();
  const sections = {};
  let currentKey = null;
  const lines = cleaned.split("\n");

  for (const rawLine of lines) {
    const line = rawLine.trim();
    const markerMatch = markers.find((m) => line.toUpperCase() === `###${m}###`);
    if (markerMatch) {
      currentKey = markerMatch;
      sections[currentKey] = [];
      continue;
    }
    if (currentKey && line.length > 0) {
      sections[currentKey].push(line);
    }
  }
  return sections;
}

const MARKERS = ["CLASSIFICATION", "EXEC_SUMMARY", "SOURCES", "CCIR_STATUS", "NARRATIVE", "WATCH_ITEMS"];

function parseSitrep(text) {
  const sections = parseMarkerBlocks(text, MARKERS);

  if (!sections.NARRATIVE) throw new Error("Briefing was missing expected sections");

  const bulletsFrom = (arr) =>
    (arr || [])
      .map((l) => l.replace(/^[-*•]\s*/, "").trim())
      .filter(Boolean);

  const sourcesFrom = (arr) =>
    (arr || [])
      .map((l) => {
        const stripped = l.replace(/^[-*•]\s*/, "").trim();
        if (stripped.includes("|")) {
          const [name, url] = stripped.split("|").map((s) => s.trim());
          if (name && url) return { name, url };
        }
        const urlMatch = stripped.match(/https?:\/\/\S+/);
        if (urlMatch) {
          const url = urlMatch[0].replace(/[),.]+$/, "");
          const name = stripped.slice(0, urlMatch.index).replace(/[-–—:]\s*$/, "").trim() || url.replace(/^https?:\/\//, "").split("/")[0];
          return { name, url };
        }
        return null;
      })
      .filter(Boolean);

  return {
    classification_line: (sections.CLASSIFICATION || []).join(" ").trim() || "OPEN SOURCE // NOT FOR OPERATIONAL USE",
    exec_summary: bulletsFrom(sections.EXEC_SUMMARY),
    narrative: (sections.NARRATIVE || []).join(" ").trim(),
    watch_items: bulletsFrom(sections.WATCH_ITEMS),
    sources: sourcesFrom(sections.SOURCES),
    ccir_status_lines: (sections.CCIR_STATUS || []).map((l) => l.replace(/^[-*•]\s*/, "").trim()).filter(Boolean),
  };
}

function itemsFromLines(arr) {
  return (arr || [])
    .map((l) => {
      const stripped = l.replace(/^[-*•]\s*/, "").trim();
      const parts = stripped.split("|").map((s) => s.trim());
      if (parts.length >= 3 && parts[0] && parts[2]) {
        return { title: parts[0], meta: parts[1], url: parts[2] };
      }
      const urlMatch = stripped.match(/https?:\/\/\S+/);
      if (urlMatch) {
        const url = urlMatch[0].replace(/[),.]+$/, "");
        const rest = stripped.slice(0, urlMatch.index).trim();
        const restParts = rest.split("|").map((s) => s.trim());
        return { title: restParts[0] || url, meta: restParts[1] || "", url };
      }
      return null;
    })
    .filter(Boolean);
}

const FURTHER_MARKERS = ["READING", "VIDEOS", "PODCASTS"];

function parseFurther(text) {
  const sections = parseMarkerBlocks(text, FURTHER_MARKERS);
  return {
    reading: itemsFromLines(sections.READING),
    videos: itemsFromLines(sections.VIDEOS),
    podcasts: itemsFromLines(sections.PODCASTS),
  };
}

const BREAKING_MARKERS = ["HEADLINES"];

function parseBreaking(text) {
  const sections = parseMarkerBlocks(text, BREAKING_MARKERS);
  return itemsFromLines(sections.HEADLINES);
}

const MARKETS_MARKERS = ["MARKETS"];

function parseMarkets(text) {
  const sections = parseMarkerBlocks(text, MARKETS_MARKERS);
  return itemsFromLines(sections.MARKETS);
}

async function callClaudeWithSearch(prompt, maxTokens = 1500, attempt = 0) {
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, maxTokens }),
  });

  if (!response.ok) {
    if (response.status >= 500 && attempt < 1) {
      await new Promise((r) => setTimeout(r, 700 + Math.random() * 500));
      return callClaudeWithSearch(prompt, maxTokens, attempt + 1);
    }
    throw new Error(`Request failed (${response.status})`);
  }

  const data = await response.json();
  const textBlocks = (data.content || [])
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("\n");

  if (!textBlocks.trim()) {
    if (attempt < 1) {
      await new Promise((r) => setTimeout(r, 700));
      return callClaudeWithSearch(prompt, maxTokens, attempt + 1);
    }
    throw new Error("No content returned");
  }

  return { textBlocks, stopReason: data.stop_reason };
}

export default function SitrepBoard() {
  const [region, setRegion] = useState(REGIONS[0]);
  const [theme, setTheme] = useState(THEMES[0]);
  const [timePeriod, setTimePeriod] = useState(TIME_PERIODS[1]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [brief, setBrief] = useState(null);
  const zulu = useZulu();
  const requestId = useRef(0);

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [disabledSourceIds, setDisabledSourceIds] = useState([]);
  const [customSources, setCustomSources] = useState([]);
  const [newSourceName, setNewSourceName] = useState("");
  const [newSourceDomain, setNewSourceDomain] = useState("");
  const [sourceFormError, setSourceFormError] = useState(null);

  const [speechState, setSpeechState] = useState("idle"); // idle | speaking | paused
  const speechSupported = typeof window !== "undefined" && !!window.speechSynthesis;

  const [further, setFurther] = useState(null);
  const [furtherLoading, setFurtherLoading] = useState(false);
  const [furtherError, setFurtherError] = useState(null);
  const furtherRequestId = useRef(0);

  function buildSpeechText(b) {
    const parts = [
      "Executive summary.",
      ...(b.exec_summary || []),
      "Narrative.",
      b.narrative,
      "Watch items.",
      ...(b.watch_items || []),
    ];
    return parts.join(". ");
  }

  function speak() {
    if (!speechSupported || !brief) return;
    window.speechSynthesis.cancel();
    const utter = new window.SpeechSynthesisUtterance(buildSpeechText(brief));
    utter.rate = 1;
    utter.onend = () => setSpeechState("idle");
    utter.onerror = () => setSpeechState("idle");
    window.speechSynthesis.speak(utter);
    setSpeechState("speaking");
  }

  function togglePause() {
    if (!speechSupported) return;
    if (speechState === "speaking") {
      window.speechSynthesis.pause();
      setSpeechState("paused");
    } else if (speechState === "paused") {
      window.speechSynthesis.resume();
      setSpeechState("speaking");
    }
  }

  function stopSpeech() {
    if (!speechSupported) return;
    window.speechSynthesis.cancel();
    setSpeechState("idle");
  }

  useEffect(() => {
    return () => {
      if (speechSupported) window.speechSynthesis.cancel();
    };
  }, []);

  async function generateFurther() {
    if (!brief) return;
    const myId = ++furtherRequestId.current;
    setFurtherLoading(true);
    setFurtherError(null);
    setFurther(null);

    const prompt = `Based on this current-events briefing for a defence intelligence audience, suggest real further-exploration content. Do not invent titles or URLs — only include resources you can confirm exist via web search.

Region: ${region.label}
Theme: ${theme.label}
Exec summary: ${(brief.exec_summary || []).join(" ")}
Narrative summary: ${brief.narrative.slice(0, 500)}

Find:
- 2 to 4 in-depth articles, reports, or long-form analysis pieces (e.g. think tanks, established outlets, defence journals)
- 2 to 3 relevant YouTube videos (explainers, documentaries, news analysis segments)
- 2 to 3 relevant podcast episodes discussing related topics

Respond with ONLY plain text in exactly this format, no preamble, no markdown:

###READING###
Title | Publication | https://...

###VIDEOS###
Title | Channel | https://...

###PODCASTS###
Title | Show name | https://...

If you cannot find enough real results for a category, include fewer lines rather than inventing any.`;

    try {
      const { textBlocks } = await callClaudeWithSearch(prompt, 1500);
      const parsed = parseFurther(textBlocks);
      if (myId === furtherRequestId.current) setFurther(parsed);
    } catch (e) {
      if (myId === furtherRequestId.current) setFurtherError(e.message || "Something went wrong finding further content");
    } finally {
      if (myId === furtherRequestId.current) setFurtherLoading(false);
    }
  }

  const [breakingLoading, setBreakingLoading] = useState(false);
  const [breakingError, setBreakingError] = useState(null);
  const [breakingHeadlines, setBreakingHeadlines] = useState(null);
  const [breakingFetchedAt, setBreakingFetchedAt] = useState(null);
  const [breakingIndex, setBreakingIndex] = useState(0);
  const breakingRequestId = useRef(0);

  async function generateBreaking() {
    const myId = ++breakingRequestId.current;
    setBreakingLoading(true);
    setBreakingError(null);

    const sourceListText2 =
      enabledSources.length > 0
        ? enabledSources.map((s) => `${s.name} (${s.domain})`).join(", ")
        : null;
    const sourceInstruction2 = sourceListText2
      ? `Restrict to these sources only: ${sourceListText2}.`
      : `Draw only from established, reputable open-source outlets (Reuters, AP, AFP, BBC, official MOD/NATO/government releases, Janes, Breaking Defense, War on the Rocks). Avoid unverified social media or partisan outlets.`;

    const prompt = `Give a short blast of globally significant breaking headlines, across all regions and themes — not limited to any single area. ${sourceInstruction2}

Search for today's most current news across a few different angles (major politics, conflict/security, markets, disasters, other fast-moving stories) so you don't miss things. Prioritize whatever appears most recently published or most prominently covered as breaking right now. Exact publish timestamps are often not visible in search results — use your best judgement from context (dateline, "today", "hours ago", top-of-page placement) rather than requiring certain proof of an 8-hour window. Genuinely global breaking news almost always exists somewhere, so only leave the list empty if, after searching multiple angles, you truly find nothing current.

Respond with ONLY plain text in exactly this format, no preamble, no markdown:

###HEADLINES###
Headline text | Source name | https://...
Headline text | Source name | https://...

Include up to 8 headlines, most globally significant and most recent first. Do not invent items or sources — every headline must come from an actual search result.`;

    try {
      const { textBlocks } = await callClaudeWithSearch(prompt, 1500);
      const parsed = parseBreaking(textBlocks);
      if (myId === breakingRequestId.current) {
        setBreakingHeadlines(parsed);
        setBreakingFetchedAt(zulu);
        setBreakingIndex(0);
      }
    } catch (e) {
      if (myId === breakingRequestId.current) setBreakingError(e.message || "Something went wrong fetching breaking headlines");
    } finally {
      if (myId === breakingRequestId.current) setBreakingLoading(false);
    }
  }

  // Auto-fetch once on mount. Delayed briefly — firing a network request in the
  // first instant after the artifact mounts can hit the host app's request bridge
  // before it's fully ready, which is a likelier cause of a generic server error
  // here than anything in the request itself.
  useEffect(() => {
    const t = setTimeout(() => generateBreaking(), 2000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-advance through headlines
  useEffect(() => {
    if (!breakingHeadlines || breakingHeadlines.length <= 1) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const interval = prefersReducedMotion ? 9000 : 6000;
    const t = setInterval(() => {
      setBreakingIndex((i) => (i + 1) % breakingHeadlines.length);
    }, interval);
    return () => clearInterval(t);
  }, [breakingHeadlines]);

  const [marketsLoading, setMarketsLoading] = useState(false);
  const [marketsError, setMarketsError] = useState(null);
  const [markets, setMarkets] = useState(null);
  const [marketsFetchedAt, setMarketsFetchedAt] = useState(null);
  const [marketsIndex, setMarketsIndex] = useState(0);
  const marketsRequestId = useRef(0);
  const marketHistoryRef = useRef({});

  const DRAMATIC_SWING_THRESHOLD = 12; // percentage points

  function extractProbability(metaStr) {
    if (!metaStr) return null;
    const m = metaStr.match(/(\d{1,3})\s*%/);
    if (!m) return null;
    const val = parseInt(m[1], 10);
    return Number.isNaN(val) ? null : val;
  }

  function marketKey(m) {
    return (m.url || m.title || "").trim();
  }

  function persistMarketHistory(hist) {
    if (!storageAvailable) return;
    try {
      window.localStorage.setItem("sitrep-market-history", JSON.stringify(hist));
    } catch (e) {}
  }

  async function generateMarkets() {
    const myId = ++marketsRequestId.current;
    setMarketsLoading(true);
    setMarketsError(null);

    const prompt = `Find real, currently active Polymarket prediction markets relevant to ${region.label} (${region.sub}) and the theme "${theme.label}" (${theme.desc}). Search polymarket.com and coverage of it. Only include markets that genuinely exist right now — never invent a question, probability, or link.

Respond with ONLY plain text in exactly this format, no preamble, no markdown:

###MARKETS###
Market question | XX% likelihood on leading outcome | https://polymarket.com/...
Market question | XX% likelihood on leading outcome | https://polymarket.com/...

Include up to 6 markets, most relevant to the region and theme first. If you cannot find genuinely relevant active markets, leave the MARKETS block empty rather than inventing any.`;

    try {
      const { textBlocks } = await callClaudeWithSearch(prompt, 1500);
      const parsed = parseMarkets(textBlocks);

      const now = Date.now();
      const prevHistory = marketHistoryRef.current || {};
      const nextHistory = { ...prevHistory };

      const annotated = parsed.map((m) => {
        const key = marketKey(m);
        const prob = extractProbability(m.meta);
        let dramatic = false;
        let delta = null;
        const prevEntry = key ? prevHistory[key] : null;
        if (prob !== null && prevEntry && typeof prevEntry.prob === "number") {
          delta = prob - prevEntry.prob;
          if (Math.abs(delta) >= DRAMATIC_SWING_THRESHOLD) dramatic = true;
        }
        if (key && prob !== null) {
          nextHistory[key] = { prob, lastSeen: now };
        }
        return { ...m, dramatic, delta };
      });

      // Prune anything not seen in the last 45 days so history doesn't grow forever
      const cutoff = now - 45 * 24 * 3600 * 1000;
      for (const k of Object.keys(nextHistory)) {
        if (!nextHistory[k].lastSeen || nextHistory[k].lastSeen < cutoff) delete nextHistory[k];
      }

      marketHistoryRef.current = nextHistory;
      if (storageReady) persistMarketHistory(nextHistory);

      // Show the most attention-worthy markets first
      annotated.sort((a, b) => (b.dramatic ? 1 : 0) - (a.dramatic ? 1 : 0));

      if (myId === marketsRequestId.current) {
        setMarkets(annotated);
        setMarketsFetchedAt(zulu);
        setMarketsIndex(0);
      }
    } catch (e) {
      if (myId === marketsRequestId.current) setMarketsError(e.message || "Something went wrong fetching market trends");
    } finally {
      if (myId === marketsRequestId.current) setMarketsLoading(false);
    }
  }

  // Auto-fetch on mount and whenever region or theme changes.
  // Staggered slightly so it never fires in the same instant as the breaking-news
  // fetch (which also fires on mount) — running both at once can trip the platform's
  // per-artifact concurrency limit and surface as a generic server error.
  useEffect(() => {
    const t = setTimeout(() => generateMarkets(), 3200);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region.id, theme.id]);

  // Auto-advance through markets
  useEffect(() => {
    if (!markets || markets.length <= 1) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const interval = prefersReducedMotion ? 9000 : 6000;
    const t = setInterval(() => {
      setMarketsIndex((i) => (i + 1) % markets.length);
    }, interval);
    return () => clearInterval(t);
  }, [markets]);

  function toggleSource(id) {
    setDisabledSourceIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function addCustomSource() {
    const name = newSourceName.trim();
    const domain = newSourceDomain.trim().replace(/^https?:\/\//, "").replace(/\/.*$/, "");
    if (!name || !domain) {
      setSourceFormError("Enter both a name and a domain (e.g. example.com)");
      return;
    }
    setCustomSources((prev) => [...prev, { id: `custom-${Date.now()}`, name, domain }]);
    setNewSourceName("");
    setNewSourceDomain("");
    setSourceFormError(null);
  }

  function removeCustomSource(id) {
    setCustomSources((prev) => prev.filter((s) => s.id !== id));
  }

  const [ccirs, setCcirs] = useState([]);
  const [ccirOpen, setCcirOpen] = useState(false);
  const [newCcirText, setNewCcirText] = useState("");
  const [newCcirThemeId, setNewCcirThemeId] = useState(THEMES[0].id);
  const [newCcirPriority, setNewCcirPriority] = useState(2);
  const [ccirFormError, setCcirFormError] = useState(null);

  function addCcir() {
    const text = newCcirText.trim();
    if (!text) {
      setCcirFormError("Enter a short phrase or keyword to watch for");
      return;
    }
    setCcirs((prev) => [
      ...prev,
      { id: `ccir-${Date.now()}`, text, themeId: newCcirThemeId, priority: newCcirPriority },
    ]);
    setNewCcirText("");
    setCcirFormError(null);
  }

  function removeCcir(id) {
    setCcirs((prev) => prev.filter((c) => c.id !== id));
  }

  function priorityInfo(p) {
    return CCIR_PRIORITIES.find((x) => x.id === p) || CCIR_PRIORITIES[1];
  }

  const activeThemeCcirs = ccirs
    .filter((c) => c.themeId === theme.id)
    .slice()
    .sort((a, b) => (a.priority || 2) - (b.priority || 2));

  // --- Persistence: CCIRs and source settings are saved per-device via the
  // artifact's built-in storage, so they survive closing and reopening. ---
  const [storageReady, setStorageReady] = useState(false);
  const storageAvailable = typeof window !== "undefined" && !!window.localStorage;

  useEffect(() => {
    if (!storageAvailable) {
      setStorageReady(true);
      return;
    }
    try {
      const ccirRaw = window.localStorage.getItem("sitrep-ccirs");
      if (ccirRaw) setCcirs(JSON.parse(ccirRaw));
    } catch (e) {
      // no saved CCIRs yet — that's fine
    }
    try {
      const srcRaw = window.localStorage.getItem("sitrep-source-settings");
      if (srcRaw) {
        const parsed = JSON.parse(srcRaw);
        if (Array.isArray(parsed.customSources)) setCustomSources(parsed.customSources);
        if (Array.isArray(parsed.disabledSourceIds)) setDisabledSourceIds(parsed.disabledSourceIds);
      }
    } catch (e) {
      // no saved source settings yet — that's fine
    }
    try {
      const histRaw = window.localStorage.getItem("sitrep-market-history");
      if (histRaw) marketHistoryRef.current = JSON.parse(histRaw);
    } catch (e) {
      // no saved market history yet — that's fine
    }
    setStorageReady(true);
  }, []);

  useEffect(() => {
    if (!storageReady || !storageAvailable) return;
    try {
      window.localStorage.setItem("sitrep-ccirs", JSON.stringify(ccirs));
    } catch (e) {}
  }, [ccirs, storageReady]);

  useEffect(() => {
    if (!storageReady || !storageAvailable) return;
    try {
      window.localStorage.setItem(
        "sitrep-source-settings",
        JSON.stringify({ customSources, disabledSourceIds })
      );
    } catch (e) {}
  }, [customSources, disabledSourceIds, storageReady]);

  const allSources = [...DEFAULT_SOURCES, ...customSources];
  const enabledSources = allSources.filter((s) => !disabledSourceIds.includes(s.id));

  async function generate() {
    const myId = ++requestId.current;
    setLoading(true);
    setError(null);
    setBrief(null);
    setFurther(null);
    setFurtherError(null);
    if (speechSupported) window.speechSynthesis.cancel();
    setSpeechState("idle");

    const sourceListText =
      enabledSources.length > 0
        ? enabledSources.map((s) => `${s.name} (${s.domain})`).join(", ")
        : null;

    const sourceInstruction = sourceListText
      ? `Restrict web search and every citation strictly to these sources only: ${sourceListText}. If you cannot find enough relevant reporting from this list for the time window, say so plainly in the narrative rather than drawing on other outlets.`
      : `No sources are currently enabled in settings, so use your judgement to draw only from established, reputable open-source outlets (e.g. Reuters, AP, AFP, BBC, official MOD/NATO/government releases, Janes, Breaking Defense, War on the Rocks). Avoid unverified social media or partisan outlets as primary sources.`;

    const ccirInstruction =
      activeThemeCcirs.length > 0
        ? `\nCommander's Critical Information Requirements (CCIRs) for this theme — short phrases/keywords the officer is specifically watching for, already ordered by priority. Treat priority 1 (VITAL) items as must-address: search specifically for each and give them prominent space in EXEC_SUMMARY, explicitly stating if open-source reporting cannot answer one. Treat priority 2 (INTERESTING) items as worth addressing if relevant reporting exists, briefly. Treat priority 3 (SEMI-INTERESTING) items as a light touch only — a single clause in the narrative if something turns up, otherwise skip silently rather than padding. After the briefing, you must also report back on each one in CCIR_STATUS — see format below:\n${activeThemeCcirs
            .map((c, i) => `${i + 1}. [Priority ${c.priority || 2} — ${priorityInfo(c.priority || 2).label}] ${c.text}`)
            .join("\n")}\n`
        : "";

    const now = new Date();
    const cutoff = new Date(now.getTime() - timePeriod.hours * 3600 * 1000);
    const fmt = (d) => d.toISOString().slice(0, 16).replace("T", " ") + "Z";
    const timeInstruction = `The current date and time is ${fmt(now)}. Only include developments with a publication or event date on or after ${fmt(cutoff)} — that is, strictly within the ${timePeriod.label.toLowerCase()}. For every item you consider including, check its date against this cutoff before using it: look for an explicit dateline, a "published"/"updated" timestamp, or clear contextual language (e.g. "today", "this morning", "yesterday", "on Tuesday"). If a search result's date is ambiguous or you cannot place it within the window with reasonable confidence, leave it out rather than including it on the assumption it's recent. Do not fall back on older background/context reporting to fill space — if there is genuinely little within the window, say so plainly in the narrative rather than reaching outside it.`;

    const ccirStatusBlock =
      activeThemeCcirs.length > 0
        ? `\n###CCIR_STATUS###\nOne line per CCIR listed above, in the exact same order, stating plainly whether and how it was addressed (or "Not addressed — no relevant open-source reporting found in this window" if not). Do not number them or restate the priority — just the status sentence.\n`
        : "";

    const prompt = `You are an open-source current-events briefing assistant supporting a defence intelligence audience (RAF-style targeting/ISR officer).

Region focus: ${region.label} (${region.sub})
Thematic focus: ${theme.label} — ${theme.desc}
Time window: ${timePeriod.label}

${timeInstruction}
${ccirInstruction}
${sourceInstruction}

Distil developments from the time window above into a concise SITREP. Respond with ONLY plain text in exactly this format, no preamble, no markdown, no extra commentary — just these marker blocks in this order. Write SOURCES immediately after EXEC_SUMMARY, before the narrative, so the source list is never at risk of being cut off:

###CLASSIFICATION###
OPEN SOURCE // NOT FOR OPERATIONAL USE

###EXEC_SUMMARY###
- one sentence judgment
- one sentence judgment
- one sentence judgment

###SOURCES###
Publication name | https://...
Publication name | https://...
${ccirStatusBlock}
###NARRATIVE###
A single flowing narrative of 280-380 words distilling the picture across the region and theme, written in professional intelligence-briefing prose, as one block of text with no line breaks in the middle of it.

###WATCH_ITEMS###
- one sentence forward-looking item
- one sentence forward-looking item

Include 4-8 sources actually used, one per line in "Name | URL" format, straight after EXEC_SUMMARY. If there is genuinely little current activity in this region/theme combination, say so plainly in the narrative rather than inventing content. Do not use the "|" character anywhere except in the SOURCES lines.`;

    try {
      const { textBlocks, stopReason } = await callClaudeWithSearch(prompt, 2000);

      const parsed = parseSitrep(textBlocks);
      if (parsed.sources.length === 0) {
        parsed.sourcesNote =
          stopReason === "max_tokens"
            ? "The response was cut off before sources could be listed — try a narrower theme or shorter time period."
            : "No sources were returned for this combination — try compiling again, or widen the enabled source list.";
      }

      parsed.ccirStatus = activeThemeCcirs.map((c, i) => ({
        id: c.id,
        text: c.text,
        priority: c.priority || 2,
        status: parsed.ccir_status_lines[i] || "Not reported on in this briefing.",
      }));

      if (myId === requestId.current) setBrief(parsed);
    } catch (e) {
      if (myId === requestId.current) setError(e.message || "Something went wrong generating the briefing");
    } finally {
      if (myId === requestId.current) setLoading(false);
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.scanline} />
      <header style={styles.header}>
        <div>
          <div style={styles.eyebrow}>OPEN-SOURCE CURRENT EVENTS BOARD</div>
          <h1 style={styles.title}>SITREP</h1>
        </div>
        <div style={styles.clockBlock}>
          <div style={styles.clockLabel}>DTG</div>
          <div style={styles.clock}>{zulu}</div>
        </div>
      </header>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
        @keyframes breakingFade {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes dramaticGlow {
          0%, 100% { background-color: rgba(242,196,56,0); }
          50% { background-color: rgba(242,196,56,0.10); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="dramaticGlow"] { animation: none !important; }
        }
      `}</style>

      <div style={styles.breakingPanel}>
        <div style={styles.breakingHeader}>
          <span style={styles.breakingTitle}>BREAKING — LAST 8 HOURS · GLOBAL</span>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {breakingFetchedAt && <span style={styles.briefMeta}>AS OF {breakingFetchedAt}</span>}
            <button onClick={generateBreaking} style={styles.iconBtn} aria-label="Refresh breaking headlines">
              <RefreshCw size={14} style={breakingLoading ? styles.spin : {}} />
            </button>
          </div>
        </div>

        {breakingLoading && !breakingHeadlines && <div style={styles.empty}>Scanning for breaking headlines…</div>}

        {breakingError && (
          <div style={styles.errorBox}>
            <TriangleAlert size={16} />
            <span>{breakingError}</span>
          </div>
        )}

        {!breakingError && breakingHeadlines && breakingHeadlines.length === 0 && (
          <div style={styles.sourceEmptyNote}>Nothing significant reported globally in the last 8 hours.</div>
        )}

        {breakingHeadlines && breakingHeadlines.length > 0 && (
          <>
            <div key={breakingIndex} style={styles.breakingTickerItem}>
              <span style={styles.breakingBar} />
              <div>
                <a
                  href={breakingHeadlines[breakingIndex].url}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.breakingLink}
                >
                  {breakingHeadlines[breakingIndex].title}
                </a>
                {breakingHeadlines[breakingIndex].meta && (
                  <div style={styles.furtherMeta}>{breakingHeadlines[breakingIndex].meta}</div>
                )}
              </div>
            </div>
            <div style={styles.breakingDots}>
              {breakingHeadlines.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setBreakingIndex(i)}
                  aria-label={`Show headline ${i + 1}`}
                  style={{ ...styles.breakingDot, ...(i === breakingIndex ? styles.breakingDotActive : {}) }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div style={styles.marketsPanel}>
        <div style={styles.marketsHeader}>
          <span style={styles.marketsTitle}>
            MARKET SIGNAL — POLYMARKET · {region.label.toUpperCase()} / {theme.label.toUpperCase()}
          </span>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {marketsFetchedAt && <span style={styles.briefMeta}>AS OF {marketsFetchedAt}</span>}
            <button onClick={generateMarkets} style={styles.iconBtn} aria-label="Refresh market trends">
              <RefreshCw size={14} style={marketsLoading ? styles.spin : {}} />
            </button>
          </div>
        </div>

        {marketsLoading && !markets && <div style={styles.empty}>Scanning Polymarket for relevant trends…</div>}

        {marketsError && (
          <div style={styles.errorBox}>
            <TriangleAlert size={16} />
            <span>{marketsError}</span>
          </div>
        )}

        {!marketsError && markets && markets.length === 0 && (
          <div style={styles.sourceEmptyNote}>No clearly relevant active markets found for this region and theme.</div>
        )}

        {markets && markets.length > 0 && (
          <>
            <div
              key={marketsIndex}
              style={{
                ...styles.marketsTickerItem,
                ...(markets[marketsIndex].dramatic ? styles.marketsTickerItemDramatic : {}),
              }}
            >
              <span
                style={{
                  ...styles.marketsBar,
                  ...(markets[marketsIndex].dramatic ? styles.marketsBarDramatic : {}),
                }}
              />
              <div style={{ flex: 1 }}>
                {markets[marketsIndex].dramatic && (
                  <div style={styles.dramaticFlag}>
                    <Zap size={12} />
                    SWING {markets[marketsIndex].delta > 0 ? "+" : ""}
                    {markets[marketsIndex].delta} PTS
                  </div>
                )}
                <a href={markets[marketsIndex].url} target="_blank" rel="noreferrer" style={styles.marketsLink}>
                  {markets[marketsIndex].title}
                </a>
                {markets[marketsIndex].meta && <div style={styles.furtherMeta}>{markets[marketsIndex].meta}</div>}
              </div>
            </div>
            <div style={styles.breakingDots}>
              {markets.map((m, i) => (
                <button
                  key={i}
                  onClick={() => setMarketsIndex(i)}
                  aria-label={`Show market ${i + 1}${m.dramatic ? " (significant swing)" : ""}`}
                  style={{
                    ...styles.marketsDot,
                    ...(i === marketsIndex ? styles.marketsDotActive : {}),
                    ...(m.dramatic ? styles.marketsDotDramatic : {}),
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <section style={styles.selectorRow}>
        <div style={styles.selectorGroup}>
          <div style={styles.groupLabel}>REGION</div>

          <div style={styles.mapWrap}>
            <svg viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} style={styles.mapSvg} role="img" aria-label="World map region selector">
              <rect x={0} y={0} width={MAP_WIDTH} height={MAP_HEIGHT} fill="#10151A" />
              <path d={LAND_PATH_D} fill="#232B31" stroke="#2E383E" strokeWidth={0.6} />
              {MAP_ZONES.map((z) => {
                const active = z.regionId === region.id;
                const x = lonToX(z.lonMin);
                const yTop = latToY(z.latMax);
                const w = lonToX(z.lonMax) - x;
                const h = latToY(z.latMin) - yTop;
                const r = REGIONS.find((rg) => rg.id === z.regionId);
                return (
                  <g key={z.regionId} onClick={() => setRegion(r)} style={{ cursor: "pointer" }}>
                    <rect
                      x={x}
                      y={yTop}
                      width={w}
                      height={h}
                      fill={active ? "rgba(201,138,62,0.28)" : "rgba(143,163,154,0.07)"}
                      stroke={active ? "#C98A3E" : "#4A565C"}
                      strokeWidth={active ? 1.6 : 0.8}
                      rx={2}
                    />
                  </g>
                );
              })}
            </svg>
            <div style={styles.mapLabels}>
              {MAP_ZONES.map((z) => {
                const active = z.regionId === region.id;
                const r = REGIONS.find((rg) => rg.id === z.regionId);
                const cx = (lonToX(z.lonMin) + lonToX(z.lonMax)) / 2;
                const cy = (latToY(z.latMin) + latToY(z.latMax)) / 2;
                return (
                  <button
                    key={z.regionId}
                    onClick={() => setRegion(r)}
                    style={{
                      ...styles.mapLabelBtn,
                      left: `${(cx / MAP_WIDTH) * 100}%`,
                      top: `${(cy / MAP_HEIGHT) * 100}%`,
                      color: active ? "#F1D9B0" : "#8FA39A",
                      fontWeight: active ? 700 : 500,
                    }}
                  >
                    {r.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={styles.chipGrid}>
            {REGIONS.filter((r) => !MAP_ZONES.some((z) => z.regionId === r.id)).map((r) => {
              const Icon = r.icon;
              const active = r.id === region.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setRegion(r)}
                  style={{ ...styles.chip, ...(active ? styles.chipActive : {}) }}
                >
                  <Icon size={15} style={{ opacity: active ? 1 : 0.6 }} />
                  <div>
                    <div style={styles.chipLabel}>{r.label}</div>
                    <div style={styles.chipSub}>{r.sub}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div style={styles.selectorGroup}>
          <div style={styles.groupLabel}>THEME</div>
          <div style={styles.chipGrid}>
            {THEMES.map((t) => {
              const active = t.id === theme.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTheme(t)}
                  style={{ ...styles.chip, ...(active ? styles.chipActive : {}) }}
                >
                  <Radio size={15} style={{ opacity: active ? 1 : 0.6 }} />
                  <div>
                    <div style={styles.chipLabel}>{t.label}</div>
                    <div style={styles.chipSub}>{t.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div style={styles.selectorGroup}>
          <div style={styles.groupLabel}>TIME PERIOD</div>
          <div style={styles.chipGrid}>
            {TIME_PERIODS.map((tp) => {
              const active = tp.id === timePeriod.id;
              return (
                <button
                  key={tp.id}
                  onClick={() => setTimePeriod(tp)}
                  style={{ ...styles.chip, ...(active ? styles.chipActive : {}) }}
                >
                  <Clock3 size={15} style={{ opacity: active ? 1 : 0.6 }} />
                  <div style={styles.chipLabel}>{tp.label}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div style={styles.actionRow}>
        <button onClick={generate} disabled={loading} style={styles.generateBtn}>
          <RefreshCw size={15} style={loading ? styles.spin : {}} />
          {loading ? "COMPILING BRIEFING…" : "COMPILE BRIEFING"}
        </button>
        <button onClick={() => setSettingsOpen(true)} style={styles.settingsBtn} aria-label="Source settings">
          <Settings2 size={16} />
        </button>
        <button onClick={() => setCcirOpen(true)} style={styles.settingsBtn} aria-label="CCIRs">
          <ListChecks size={16} />
        </button>
        <div style={styles.actionHint}>
          {region.label} · {theme.label} · {timePeriod.label} · {enabledSources.length} source{enabledSources.length === 1 ? "" : "s"}
          {activeThemeCcirs.length > 0 ? ` · ${activeThemeCcirs.length} CCIR${activeThemeCcirs.length === 1 ? "" : "s"}` : ""}
        </div>
      </div>

      {settingsOpen && (
        <div style={styles.modalOverlay} onClick={() => setSettingsOpen(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <div style={styles.groupLabel}>SOURCES</div>
              <button onClick={() => setSettingsOpen(false)} style={styles.iconBtn} aria-label="Close">
                <X size={18} />
              </button>
            </div>

            <div style={styles.modalBody}>
              <div style={styles.sourceGrid}>
                {DEFAULT_SOURCES.map((s) => {
                  const enabled = !disabledSourceIds.includes(s.id);
                  return (
                    <label key={s.id} style={styles.sourceRow}>
                      <input
                        type="checkbox"
                        checked={enabled}
                        onChange={() => toggleSource(s.id)}
                        style={styles.checkbox}
                      />
                      <div>
                        <div style={styles.sourceName}>{s.name}</div>
                        <div style={styles.sourceDomain}>{s.domain}</div>
                      </div>
                    </label>
                  );
                })}
              </div>

              {customSources.length > 0 && (
                <>
                  <div style={{ ...styles.groupLabel, marginTop: 18 }}>ADDED SOURCES</div>
                  <div style={styles.sourceGrid}>
                    {customSources.map((s) => {
                      const enabled = !disabledSourceIds.includes(s.id);
                      return (
                        <div key={s.id} style={styles.sourceRow}>
                          <input
                            type="checkbox"
                            checked={enabled}
                            onChange={() => toggleSource(s.id)}
                            style={styles.checkbox}
                          />
                          <div style={{ flex: 1 }}>
                            <div style={styles.sourceName}>{s.name}</div>
                            <div style={styles.sourceDomain}>{s.domain}</div>
                          </div>
                          <button
                            onClick={() => removeCustomSource(s.id)}
                            style={styles.iconBtn}
                            aria-label={`Remove ${s.name}`}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              <div style={{ ...styles.groupLabel, marginTop: 18 }}>ADD A SOURCE</div>
              <div style={styles.addSourceForm}>
                <input
                  placeholder="Source name"
                  value={newSourceName}
                  onChange={(e) => setNewSourceName(e.target.value)}
                  style={styles.textInput}
                />
                <input
                  placeholder="Domain (e.g. example.com)"
                  value={newSourceDomain}
                  onChange={(e) => setNewSourceDomain(e.target.value)}
                  style={styles.textInput}
                />
                <button onClick={addCustomSource} style={styles.addBtn}>
                  <Plus size={14} /> Add
                </button>
              </div>
              {sourceFormError && <div style={styles.sourceFormError}>{sourceFormError}</div>}
              <div style={styles.modalNote}>
                Web search only reaches publicly accessible pages — it can't use logins, so paywalled
                sources will only surface whatever preview content is public. Your source list is saved
                automatically on this device.
              </div>
            </div>
          </div>
        </div>
      )}

      {ccirOpen && (
        <div style={styles.modalOverlay} onClick={() => setCcirOpen(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <div style={styles.groupLabel}>CCIRs — CRITICAL INFORMATION REQUIREMENTS</div>
              <button onClick={() => setCcirOpen(false)} style={styles.iconBtn} aria-label="Close">
                <X size={18} />
              </button>
            </div>

            <div style={styles.modalBody}>
              {THEMES.map((t) => {
                const themeCcirs = ccirs
                  .filter((c) => c.themeId === t.id)
                  .slice()
                  .sort((a, b) => (a.priority || 2) - (b.priority || 2));
                if (themeCcirs.length === 0) return null;
                return (
                  <div key={t.id} style={{ marginBottom: 16 }}>
                    <div style={styles.ccirThemeLabel}>{t.label}</div>
                    {themeCcirs.map((c) => {
                      const pInfo = priorityInfo(c.priority || 2);
                      return (
                        <div key={c.id} style={styles.ccirRow}>
                          <span style={{ ...styles.ccirPriorityBadge, color: pInfo.color, borderColor: pInfo.color }}>
                            {pInfo.id}
                          </span>
                          <span style={styles.ccirText}>{c.text}</span>
                          <button
                            onClick={() => removeCcir(c.id)}
                            style={styles.iconBtn}
                            aria-label="Remove CCIR"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                );
              })}

              {ccirs.length === 0 && (
                <div style={styles.modalNote}>
                  No CCIRs added yet. Add a short phrase or keyword below, set its priority, and attach
                  it to a theme — it'll be worked into every briefing compiled for that theme.
                </div>
              )}

              <div style={{ ...styles.groupLabel, marginTop: 18 }}>ADD A CCIR</div>
              <div style={styles.addSourceForm}>
                <input
                  placeholder="e.g. IADS posture change / nuclear rhetoric shift"
                  value={newCcirText}
                  onChange={(e) => setNewCcirText(e.target.value)}
                  style={{ ...styles.textInput, flex: "1 1 220px" }}
                />
                <select
                  value={newCcirThemeId}
                  onChange={(e) => setNewCcirThemeId(e.target.value)}
                  style={styles.selectInput}
                >
                  {THEMES.map((t) => (
                    <option key={t.id} value={t.id}>{t.label}</option>
                  ))}
                </select>
                <select
                  value={newCcirPriority}
                  onChange={(e) => setNewCcirPriority(Number(e.target.value))}
                  style={styles.selectInput}
                >
                  {CCIR_PRIORITIES.map((p) => (
                    <option key={p.id} value={p.id}>{p.id} — {p.label}</option>
                  ))}
                </select>
                <button onClick={addCcir} style={styles.addBtn}>
                  <Plus size={14} /> Add
                </button>
              </div>
              {ccirFormError && <div style={styles.sourceFormError}>{ccirFormError}</div>}
              <div style={styles.modalNote}>
                Keep these to short phrases or keywords rather than full sentences — they read best as
                things to watch for, not questions. Each briefing only pulls in the CCIRs attached to the
                theme currently selected on the board, addressed in priority order. Your CCIRs are saved
                automatically on this device.
              </div>
            </div>
          </div>
        </div>
      )}

      <main style={styles.brief}>
        {error && (
          <div style={styles.errorBox}>
            <TriangleAlert size={16} />
            <span>{error} — try compiling again.</span>
          </div>
        )}

        {!brief && !loading && !error && (
          <div style={styles.empty}>
            Select a region and theme above, then compile a briefing. Nothing has been generated yet.
          </div>
        )}

        {loading && <div style={styles.empty}>Gathering open-source reporting and drafting the SITREP…</div>}

        {brief && (
          <article>
            <div style={styles.briefHeader}>
              <span style={styles.classLine}>{brief.classification_line}</span>
              <span style={styles.briefMeta}>{region.label.toUpperCase()} · {theme.label.toUpperCase()} · {zulu}</span>
            </div>

            {speechSupported && (
              <div style={styles.listenRow}>
                {speechState === "idle" && (
                  <button onClick={speak} style={styles.listenBtn}>
                    <Play size={13} /> LISTEN
                  </button>
                )}
                {speechState !== "idle" && (
                  <>
                    <button onClick={togglePause} style={styles.listenBtn}>
                      {speechState === "speaking" ? <Pause size={13} /> : <Play size={13} />}
                      {speechState === "speaking" ? "PAUSE" : "RESUME"}
                    </button>
                    <button onClick={stopSpeech} style={styles.listenBtn}>
                      <Square size={12} /> STOP
                    </button>
                  </>
                )}
              </div>
            )}

            <h2 style={styles.sectionTitle}>Exec Summary</h2>
            <ul style={styles.list}>
              {(brief.exec_summary || []).map((kj, i) => (
                <li key={i} style={styles.listItem}>{kj}</li>
              ))}
            </ul>

            <h2 style={styles.sectionTitle}>Narrative</h2>
            <p style={styles.narrative}>{brief.narrative}</p>

            <h2 style={styles.sectionTitle}>Watch Items</h2>
            <ul style={styles.list}>
              {(brief.watch_items || []).map((w, i) => (
                <li key={i} style={styles.listItem}>{w}</li>
              ))}
            </ul>

            <h2 style={styles.sectionTitle}>Sources</h2>
            {brief.sources && brief.sources.length > 0 ? (
              <ul style={styles.sourceList}>
                {brief.sources.map((s, i) => (
                  <li key={i}>
                    <a href={s.url} target="_blank" rel="noreferrer" style={styles.sourceLink}>
                      <ExternalLink size={12} /> {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div style={styles.sourceEmptyNote}>{brief.sourcesNote || "No sources were returned."}</div>
            )}

            {brief.ccirStatus && brief.ccirStatus.length > 0 && (
              <>
                <h2 style={styles.sectionTitle}>CCIRs Addressed</h2>
                <ul style={styles.ccirStatusList}>
                  {brief.ccirStatus.map((c) => {
                    const pInfo = priorityInfo(c.priority);
                    return (
                      <li key={c.id} style={styles.ccirStatusItem}>
                        <span
                          style={{ ...styles.ccirPriorityBadge, color: pInfo.color, borderColor: pInfo.color }}
                        >
                          {c.priority}
                        </span>
                        <div>
                          <div style={styles.ccirStatusQuestion}>{c.text}</div>
                          <div style={styles.ccirStatusAnswer}>{c.status}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            <div style={styles.furtherSection}>
              {!further && !furtherLoading && (
                <button onClick={generateFurther} style={styles.furtherBtn}>
                  <Compass size={14} /> FIND FURTHER READING, VIDEOS & PODCASTS
                </button>
              )}

              {furtherLoading && <div style={styles.empty}>Searching for related reading, videos and podcasts…</div>}

              {furtherError && (
                <div style={styles.errorBox}>
                  <TriangleAlert size={16} />
                  <span>{furtherError} — try again.</span>
                </div>
              )}

              {further && (
                <>
                  {further.reading.length > 0 && (
                    <>
                      <h2 style={styles.sectionTitle}>Further Reading</h2>
                      <ul style={styles.furtherList}>
                        {further.reading.map((item, i) => (
                          <li key={i} style={styles.furtherItem}>
                            <BookOpen size={13} style={styles.furtherIcon} />
                            <a href={item.url} target="_blank" rel="noreferrer" style={styles.furtherLink}>
                              {item.title}
                            </a>
                            {item.meta && <span style={styles.furtherMeta}> — {item.meta}</span>}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {further.videos.length > 0 && (
                    <>
                      <h2 style={styles.sectionTitle}>Videos</h2>
                      <ul style={styles.furtherList}>
                        {further.videos.map((item, i) => (
                          <li key={i} style={styles.furtherItem}>
                            <Youtube size={13} style={styles.furtherIcon} />
                            <a href={item.url} target="_blank" rel="noreferrer" style={styles.furtherLink}>
                              {item.title}
                            </a>
                            {item.meta && <span style={styles.furtherMeta}> — {item.meta}</span>}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {further.podcasts.length > 0 && (
                    <>
                      <h2 style={styles.sectionTitle}>Podcasts</h2>
                      <ul style={styles.furtherList}>
                        {further.podcasts.map((item, i) => (
                          <li key={i} style={styles.furtherItem}>
                            <Mic2 size={13} style={styles.furtherIcon} />
                            <a href={item.url} target="_blank" rel="noreferrer" style={styles.furtherLink}>
                              {item.title}
                            </a>
                            {item.meta && <span style={styles.furtherMeta}> — {item.meta}</span>}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {further.reading.length === 0 && further.videos.length === 0 && further.podcasts.length === 0 && (
                    <div style={styles.sourceEmptyNote}>No confirmed further content found for this briefing.</div>
                  )}
                </>
              )}
            </div>
          </article>
        )}
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#12161A",
    color: "#E7E4DA",
    fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
    padding: "28px 20px 60px",
    maxWidth: 880,
    margin: "0 auto",
    position: "relative",
  },
  scanline: {
    position: "absolute",
    top: 0, left: 0, right: 0, height: 3,
    background: "linear-gradient(90deg, transparent, #C98A3E, transparent)",
    opacity: 0.6,
  },
  header: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 12,
    borderBottom: "1px solid #33393F",
    paddingBottom: 16,
    marginBottom: 24,
  },
  eyebrow: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    letterSpacing: "0.14em",
    color: "#8FA39A",
  },
  title: {
    fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
    fontSize: "clamp(26px, 8vw, 40px)",
    letterSpacing: "0.06em",
    margin: "4px 0 0",
    color: "#E7E4DA",
    fontWeight: 600,
  },
  clockBlock: { textAlign: "right", flexShrink: 0 },
  clockLabel: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10,
    color: "#6B7680",
    letterSpacing: "0.1em",
    whiteSpace: "nowrap",
  },
  clock: {
    fontFamily: "'Share Tech Mono', 'IBM Plex Mono', monospace",
    fontSize: 18,
    fontWeight: 700,
    color: "#FF2A2A",
    letterSpacing: "0.04em",
    whiteSpace: "nowrap",
    fontVariantNumeric: "tabular-nums",
    textShadow: "0 0 8px rgba(255,42,42,0.65), 0 0 2px rgba(255,42,42,0.9)",
  },
  selectorRow: { display: "flex", flexDirection: "column", gap: 18, marginBottom: 20 },
  selectorGroup: {},
  groupLabel: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    color: "#6B7680",
    letterSpacing: "0.12em",
    marginBottom: 8,
  },
  mapWrap: {
    position: "relative",
    width: "100%",
    borderRadius: 6,
    overflow: "hidden",
    border: "1px solid #2E353B",
    marginBottom: 10,
  },
  mapSvg: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  mapLabels: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
  },
  mapLabelBtn: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    background: "transparent",
    border: "none",
    padding: 0,
    fontSize: "clamp(8px, 1.6vw, 11px)",
    fontFamily: "'IBM Plex Mono', monospace",
    letterSpacing: "0.02em",
    whiteSpace: "nowrap",
    cursor: "pointer",
    pointerEvents: "auto",
    textShadow: "0 1px 3px rgba(0,0,0,0.9)",
  },
  chipGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: 8,
  },
  chip: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    textAlign: "left",
    background: "#1A2024",
    border: "1px solid #2E353B",
    borderRadius: 4,
    padding: "8px 10px",
    color: "#B9C0BE",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  chipActive: {
    background: "#22292B",
    border: "1px solid #C98A3E",
    color: "#F1EEE4",
  },
  chipLabel: { fontSize: 12.5, fontWeight: 600, lineHeight: 1.2 },
  chipSub: { fontSize: 10.5, color: "#7C877F", marginTop: 1 },
  actionRow: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    marginBottom: 22,
  },
  generateBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#C98A3E",
    color: "#14181C",
    border: "none",
    borderRadius: 4,
    padding: "10px 16px",
    fontWeight: 700,
    fontSize: 12.5,
    letterSpacing: "0.06em",
    cursor: "pointer",
    fontFamily: "'IBM Plex Mono', monospace",
  },
  spin: { animation: "spin 1s linear infinite" },
  actionHint: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    color: "#6B7680",
  },
  brief: {
    borderTop: "1px solid #33393F",
    paddingTop: 20,
  },
  errorBox: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#2A2020",
    border: "1px solid #6B3A3A",
    color: "#E0A0A0",
    padding: "10px 12px",
    borderRadius: 4,
    fontSize: 13,
  },
  empty: {
    color: "#6B7680",
    fontSize: 13.5,
    fontFamily: "'IBM Plex Mono', monospace",
    lineHeight: 1.6,
  },
  briefHeader: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 8,
    borderBottom: "1px dashed #3A4249",
    paddingBottom: 10,
    marginBottom: 16,
  },
  classLine: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    letterSpacing: "0.08em",
    color: "#C98A3E",
  },
  briefMeta: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    color: "#6B7680",
  },
  sectionTitle: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: 15,
    letterSpacing: "0.08em",
    color: "#8FBF9F",
    textTransform: "uppercase",
    marginTop: 22,
    marginBottom: 8,
  },
  list: { margin: 0, paddingLeft: 18, color: "#D8D5CB" },
  listItem: { marginBottom: 6, lineHeight: 1.5, fontSize: 14 },
  narrative: {
    fontFamily: "'Source Serif 4', Georgia, serif",
    fontSize: 15.5,
    lineHeight: 1.7,
    color: "#E7E4DA",
  },
  sourceList: { margin: 0, paddingLeft: 18, color: "#8FA39A" },
  sourceLink: {
    color: "#8FA39A",
    fontSize: 12.5,
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    textDecoration: "none",
  },
  settingsBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#1A2024",
    border: "1px solid #2E353B",
    borderRadius: 4,
    width: 38,
    height: 38,
    color: "#B9C0BE",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(10,12,14,0.7)",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    zIndex: 50,
  },
  modal: {
    background: "#181D21",
    border: "1px solid #33393F",
    borderBottom: "none",
    borderRadius: "10px 10px 0 0",
    width: "100%",
    maxWidth: 720,
    maxHeight: "82vh",
    display: "flex",
    flexDirection: "column",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 18px",
    borderBottom: "1px solid #2E353B",
  },
  modalBody: {
    padding: "14px 18px 24px",
    overflowY: "auto",
  },
  iconBtn: {
    background: "transparent",
    border: "none",
    color: "#8C948F",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  sourceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: 8,
  },
  sourceRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#1E2428",
    border: "1px solid #2E353B",
    borderRadius: 4,
    padding: "8px 10px",
    cursor: "pointer",
  },
  checkbox: {
    accentColor: "#C98A3E",
    width: 16,
    height: 16,
    flexShrink: 0,
  },
  sourceName: { fontSize: 12.5, fontWeight: 600, color: "#E7E4DA" },
  sourceDomain: { fontSize: 10.5, color: "#7C877F", fontFamily: "'IBM Plex Mono', monospace" },
  addSourceForm: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 4,
  },
  textInput: {
    flex: "1 1 160px",
    background: "#1E2428",
    border: "1px solid #2E353B",
    borderRadius: 4,
    padding: "9px 10px",
    color: "#E7E4DA",
    fontSize: 13,
    fontFamily: "inherit",
  },
  addBtn: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: "#2A3B33",
    border: "1px solid #45614F",
    color: "#B9E0C4",
    borderRadius: 4,
    padding: "9px 14px",
    fontSize: 12.5,
    fontWeight: 600,
    cursor: "pointer",
  },
  sourceFormError: {
    color: "#E0A0A0",
    fontSize: 12,
    marginTop: 6,
  },
  modalNote: {
    fontSize: 11.5,
    color: "#6B7680",
    lineHeight: 1.6,
    marginTop: 18,
    borderTop: "1px dashed #2E353B",
    paddingTop: 12,
  },
  selectInput: {
    flex: "1 1 160px",
    background: "#1E2428",
    border: "1px solid #2E353B",
    borderRadius: 4,
    padding: "9px 10px",
    color: "#E7E4DA",
    fontSize: 13,
    fontFamily: "inherit",
  },
  ccirThemeLabel: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    letterSpacing: "0.08em",
    color: "#C98A3E",
    marginBottom: 6,
  },
  ccirRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    background: "#1E2428",
    border: "1px solid #2E353B",
    borderRadius: 4,
    padding: "8px 10px",
    marginBottom: 6,
  },
  ccirText: { fontSize: 13, color: "#D8D5CB", lineHeight: 1.4, flex: 1 },
  ccirPriorityBadge: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    fontWeight: 700,
    border: "1px solid",
    borderRadius: "50%",
    width: 18,
    height: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  ccirStatusList: { listStyle: "none", margin: 0, padding: 0 },
  ccirStatusItem: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
    marginBottom: 10,
  },
  ccirStatusQuestion: {
    fontSize: 13.5,
    color: "#D8D5CB",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  ccirStatusAnswer: {
    fontSize: 13,
    color: "#9AA39C",
    lineHeight: 1.45,
    marginTop: 2,
  },
  sourceEmptyNote: {
    fontSize: 13,
    color: "#C98A3E",
    fontFamily: "'IBM Plex Mono', monospace",
    lineHeight: 1.5,
  },
  listenRow: {
    display: "flex",
    gap: 8,
    marginBottom: 4,
  },
  listenBtn: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: "#1E2428",
    border: "1px solid #2E353B",
    color: "#B9C0BE",
    borderRadius: 4,
    padding: "6px 10px",
    fontSize: 11,
    letterSpacing: "0.05em",
    fontFamily: "'IBM Plex Mono', monospace",
    cursor: "pointer",
  },
  furtherSection: {
    marginTop: 22,
    borderTop: "1px dashed #3A4249",
    paddingTop: 18,
  },
  furtherBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#22292B",
    border: "1px solid #45614F",
    color: "#B9E0C4",
    borderRadius: 4,
    padding: "10px 14px",
    fontSize: 12,
    letterSpacing: "0.05em",
    fontFamily: "'IBM Plex Mono', monospace",
    cursor: "pointer",
  },
  furtherList: { listStyle: "none", margin: 0, padding: 0 },
  furtherItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 8,
    fontSize: 13.5,
    lineHeight: 1.4,
  },
  furtherIcon: { marginTop: 2, flexShrink: 0, color: "#8FA39A" },
  furtherLink: { color: "#E7E4DA", textDecoration: "underline", textDecorationColor: "#3A4249" },
  furtherMeta: { color: "#7C877F" },
  breakingToggle: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    background: "transparent",
    border: "1px solid #6B4A3A",
    color: "#D99A6C",
    borderRadius: 4,
    padding: "8px 12px",
    fontSize: 11.5,
    letterSpacing: "0.06em",
    fontFamily: "'IBM Plex Mono', monospace",
    cursor: "pointer",
    marginBottom: 18,
  },
  breakingToggleActive: {
    background: "#2A1E18",
    border: "1px solid #C9702E",
    color: "#F0B98A",
  },
  breakingPanel: {
    border: "1px solid #4A3126",
    background: "#1C1611",
    borderRadius: 6,
    padding: "14px 16px",
    marginBottom: 22,
  },
  breakingHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    flexWrap: "wrap",
    gap: 8,
  },
  breakingTitle: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    letterSpacing: "0.08em",
    color: "#D99A6C",
  },
  breakingList: { listStyle: "none", margin: 0, padding: 0 },
  breakingItem: {
    display: "flex",
    gap: 10,
    marginBottom: 10,
  },
  breakingBar: {
    width: 3,
    borderRadius: 2,
    background: "#C9702E",
    flexShrink: 0,
    alignSelf: "stretch",
  },
  breakingLink: {
    color: "#EFE9DD",
    fontSize: 14,
    lineHeight: 1.4,
    textDecoration: "underline",
    textDecorationColor: "#4A3126",
  },
  breakingTickerItem: {
    display: "flex",
    gap: 10,
    minHeight: 48,
    animation: "breakingFade 0.5s ease",
  },
  breakingDots: {
    display: "flex",
    gap: 6,
    marginTop: 12,
  },
  breakingDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    border: "none",
    background: "#4A3126",
    cursor: "pointer",
    padding: 0,
  },
  breakingDotActive: {
    background: "#C9702E",
  },
  marketsPanel: {
    border: "1px solid #1E3A42",
    background: "#0F1C20",
    borderRadius: 6,
    padding: "14px 16px",
    marginBottom: 22,
  },
  marketsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    flexWrap: "wrap",
    gap: 8,
  },
  marketsTitle: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    letterSpacing: "0.08em",
    color: "#6FC3D9",
  },
  marketsTickerItem: {
    display: "flex",
    gap: 10,
    minHeight: 48,
    animation: "breakingFade 0.5s ease",
  },
  marketsTickerItemDramatic: {
    animation: "breakingFade 0.5s ease, dramaticGlow 1.6s ease-in-out infinite",
    borderRadius: 4,
    padding: "6px 8px",
    margin: "-6px -8px",
  },
  marketsBar: {
    width: 3,
    borderRadius: 2,
    background: "#2E93AE",
    flexShrink: 0,
    alignSelf: "stretch",
  },
  marketsBarDramatic: {
    background: "#F2C438",
    width: 4,
  },
  dramaticFlag: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    background: "#3A2E0E",
    border: "1px solid #F2C438",
    color: "#F2C438",
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    fontWeight: 700,
    letterSpacing: "0.05em",
    padding: "2px 7px",
    borderRadius: 3,
    marginBottom: 5,
  },
  marketsLink: {
    color: "#EAF6F9",
    fontSize: 14,
    lineHeight: 1.4,
    textDecoration: "underline",
    textDecorationColor: "#1E3A42",
  },
  marketsDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    border: "none",
    background: "#1E3A42",
    cursor: "pointer",
    padding: 0,
  },
  marketsDotActive: {
    background: "#2E93AE",
  },
  marketsDotDramatic: {
    background: "#F2C438",
    boxShadow: "0 0 4px rgba(242,196,56,0.8)",
  },
};
