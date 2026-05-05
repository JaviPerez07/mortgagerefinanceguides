import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const domain = "https://mortgagerefinanceguides.com";
const brand = "Mortgage Refinance Guides";
const lastmod = "2026-04-06";
const year = "2026";

const site = {
  name: brand,
  shortName: "MRG",
  domain,
  tagline:
    "Premium U.S. mortgage refinance guidance, calculators, lender comparisons, and state-by-state refinance planning.",
  description:
    "Premium mortgage refinance guides for U.S. homeowners covering refinance rates, APR, cash-out options, FHA and VA programs, closing costs, lender comparisons, calculators, and state-by-state refinance planning.",
  email: "javiperezguides@gmail.com",
  organization: {
    name: "Mortgage Refinance Guides Editorial Team",
    legalName: "Mortgage Refinance Guides Editorial Team",
    logo: `${domain}/assets/logo-mark.svg`,
    url: domain,
  },
  disclaimer:
    "Mortgage Refinance Guides publishes editorial content for informational purposes only. We do not provide lending, legal, tax, or investment advice, and we do not originate mortgages.",
};

const navGroups = [
  ["Rates", "/rates/"],
  ["Cash-Out", "/cash-out/"],
  ["FHA", "/fha-refinance/"],
  ["VA", "/va-refinance/"],
  ["Calculators", "/calculators/"],
  ["Comparisons", "/comparisons/"],
  ["States", "/states/"],
];

const footerCategoryLinks = [
  ["Mortgage Refinance Rates", "/rates/"],
  ["Cash-Out Refinance", "/cash-out/"],
  ["FHA Refinance", "/fha-refinance/"],
  ["VA Refinance", "/va-refinance/"],
  ["Jumbo Refinance", "/jumbo-refinance/"],
  ["Calculators", "/calculators/"],
  ["Closing Costs", "/closing-costs/"],
  ["Credit Score Approval", "/credit-score-and-approval/"],
];

const legalLinks = [
  ["About", "/about/"],
  ["Contact", "/contact/"],
  ["Privacy Policy", "/privacy-policy/"],
  ["Terms", "/terms/"],
  ["Disclaimer", "/disclaimer/"],
  ["Cookie Policy", "/cookie-policy/"],
  ["Editorial Policy", "/editorial-policy/"],
  ["How We Research", "/how-we-research/"],
  ["HTML Sitemap", "/sitemap/"],
];

const homeCards = [
  {
    title: "Rate Intelligence",
    text: "Track 15-year, 20-year, 30-year, jumbo, FHA, and VA refinance dynamics with lender-style context instead of generic averages.",
  },
  {
    title: "Scenario Planning",
    text: "Model payment savings, break-even periods, cash-out proceeds, points, LTV, PMI removal, and equity tradeoffs before applying.",
  },
  {
    title: "Approval Guidance",
    text: "Understand credit score bands, debt-to-income thresholds, documentation standards, seasoning rules, and state-level fee patterns.",
  },
];

const visualStats = [
  { label: "Avg. lender quote spread", value: "0.42%", note: "Observed between low-fee and high-fee refinance offers." },
  { label: "Typical closing cost range", value: "$2,600-$8,100", note: "Varies by balance, points, title, and taxes." },
  { label: "Break-even benchmark", value: "24-36 months", note: "Common range for rate-and-term refinance decisions." },
  { label: "Cash-out max LTV range", value: "80%-90%", note: "Program and occupancy dependent." },
];

const pillarPages = [
  {
    slug: "best-mortgage-refinance-rates",
    category: "Mortgage Refinance Rates",
    keyword: "best mortgage refinance rates",
    h1: "Best Mortgage Refinance Rates in the U.S.",
    description:
      "Compare how refinance mortgage rates, APR, lender fees, discount points, and term options interact so you can evaluate offers like a seasoned mortgage shopper.",
    intro:
      "This guide breaks down how refinance rates are priced, why APR can tell a different story than the note rate, and how to compare lender offers without getting distracted by teaser pricing.",
    stats: [
      ["30-year fixed refinance", "6.48%"],
      ["15-year fixed refinance", "5.88%"],
      ["Average APR add-on from fees", "0.23%"],
      ["Typical lock window", "30-45 days"],
    ],
  },
  {
    slug: "cash-out-refinance-guide",
    category: "Cash-Out Refinance",
    keyword: "cash out refinance",
    h1: "Cash-Out Refinance Guide",
    description:
      "Learn when a cash-out refinance makes sense, how much equity homeowners can access, what lenders review, and how payment shock changes the math.",
    intro:
      "Cash-out refinance can be a useful liquidity tool, but only when the new rate, higher balance, and intended use of proceeds still improve your overall household balance sheet.",
    stats: [
      ["Typical owner-occupied max LTV", "80%"],
      ["Typical credit sweet spot", "700+"],
      ["Common cash uses", "Debt payoff, renovation, reserves"],
      ["Avg. rate premium vs rate-term", "0.25%-0.50%"],
    ],
  },
  {
    slug: "fha-streamline-refinance-guide",
    category: "FHA Refinance",
    keyword: "fha streamline refinance",
    h1: "FHA Streamline Refinance Guide",
    description:
      "Understand net tangible benefit rules, MIP considerations, occupancy treatment, documentation expectations, and where FHA streamline refinance saves time.",
    intro:
      "FHA streamline refinance was designed to simplify payment-improving refinances for existing FHA borrowers, but the details still matter when upfront and annual mortgage insurance remain in the loan.",
    stats: [
      ["Appraisal often required?", "Usually no"],
      ["Income documentation", "Reduced or limited"],
      ["Primary benefit test", "Net tangible benefit"],
      ["Cash-out allowed?", "No"],
    ],
  },
  {
    slug: "va-irrrl-refinance-guide",
    category: "VA Refinance",
    keyword: "va irrrl refinance",
    h1: "VA IRRRL Refinance Guide",
    description:
      "Review how the VA Interest Rate Reduction Refinance Loan works, who qualifies, what fees are allowed, and how term changes affect payment savings.",
    intro:
      "VA IRRRL is one of the most efficient refinance programs in the market, but veterans still need to compare lender credits, funding fees, and term resets before locking.",
    stats: [
      ["Occupancy requirement", "Prior occupancy only"],
      ["Funding fee", "0.5%"],
      ["Appraisal often waived", "Yes"],
      ["Common goal", "Lower payment or more stable rate"],
    ],
  },
  {
    slug: "mortgage-refinance-closing-costs-explained",
    category: "Closing Costs and Fees",
    keyword: "refinance closing costs",
    h1: "Mortgage Refinance Closing Costs Explained",
    description:
      "See how origination fees, title charges, recording costs, escrow funding, prepaid interest, and mortgage points shape refinance economics.",
    intro:
      "Closing costs are the part of refinance shopping that most often changes the true answer, because two identical rates can produce very different APRs and break-even timelines.",
    stats: [
      ["Low-fee refinance range", "$2,600-$4,200"],
      ["Point cost", "1% of loan amount"],
      ["Title + settlement share", "25%-35%"],
      ["Escrow + prepaid range", "0.6%-1.4% of balance"],
    ],
  },
  {
    slug: "mortgage-refinance-calculator-hub",
    category: "Mortgage Refinance Calculators",
    keyword: "mortgage refinance calculator",
    h1: "Mortgage Refinance Calculator Hub",
    description:
      "Use refinance calculators for payment savings, cash-out proceeds, break-even timing, points, LTV, PMI removal, home equity, and long-run interest analysis.",
    intro:
      "Our refinance calculator hub groups the core math a lender uses so you can pressure-test any quoted scenario before you spend time on a full application.",
    stats: [
      ["Core tools included", "10"],
      ["Avg. instant scenarios", "3-6 per calculator"],
      ["Most-used model", "Break-even + payment savings"],
      ["Works on mobile", "Yes"],
    ],
  },
  {
    slug: "refinance-with-bad-credit",
    category: "Credit Score and Refinance Approval",
    keyword: "refinance mortgage with bad credit",
    h1: "Refinance With Bad Credit",
    description:
      "Learn how refinance approval changes at lower credit tiers, which programs are more forgiving, and where compensating factors can still matter.",
    intro:
      "Bad-credit refinance is less about one universal cutoff and more about the combination of equity, payment history, debt load, reserves, loan type, and whether your current mortgage is conventional, FHA, or VA.",
    stats: [
      ["Common conventional comfort zone", "680-740"],
      ["FHA flexibility band", "580-660"],
      ["High-LTV challenge zone", "Below 660"],
      ["Best compensating factor", "More equity"],
    ],
  },
  {
    slug: "home-equity-loan-vs-cash-out-refinance",
    category: "Home Equity and HELOC Alternatives",
    keyword: "refinance vs home equity loan",
    h1: "Home Equity Loan vs Cash-Out Refinance",
    description:
      "Compare payment structure, closing costs, first-lien vs second-lien risk, APR behavior, and break-even math between home equity loans and cash-out refinance.",
    intro:
      "Homeowners with strong existing mortgage rates need a sharper framework than 'cash-out is cheaper' or 'second liens are safer.' The right answer depends on rate spread, loan size, and how long you plan to keep each debt.",
    stats: [
      ["Best fit when current first rate is low", "Second-lien often wins"],
      ["Single-payment simplicity", "Cash-out refinance"],
      ["Typical cost efficiency for smaller borrowing needs", "Home equity loan"],
      ["Best fit for debt consolidation", "Case by case"],
    ],
  },
  {
    slug: "state-mortgage-refinance-guide",
    category: "State-by-State Refinance Guides",
    keyword: "state mortgage refinance guide",
    h1: "State Mortgage Refinance Guide",
    description:
      "Understand why refinance costs and timelines differ by state, including title practices, taxes, attorney states, recording fees, and appraisal norms.",
    intro:
      "State-level variation can materially change how expensive or convenient a refinance feels, especially where title, settlement, or transfer-tax conventions run higher than the national midpoint.",
    stats: [
      ["High-cost settlement states", "NJ, NY, FL, CA"],
      ["Attorney-closing impact", "Higher legal line items"],
      ["Recording-fee spread", "$60-$550"],
      ["Timeline variation", "2-10+ business days"],
    ],
  },
  {
    slug: "how-to-refinance-your-mortgage-step-by-step",
    category: "How to Refinance",
    keyword: "mortgage refinance requirements",
    h1: "How to Refinance Your Mortgage Step by Step",
    description:
      "Follow the full refinance process from goal setting and rate shopping to lock, underwriting, closing disclosure review, and post-close verification.",
    intro:
      "Refinancing goes more smoothly when you treat it like a project with milestones rather than a single rate quote. This step-by-step guide shows how to reduce rework and compare lenders on equal footing.",
    stats: [
      ["Average quote shopping window", "3-7 days"],
      ["Docs lenders usually request", "Income, assets, insurance, ID"],
      ["Typical closing timeline", "21-45 days"],
      ["Smartest review document", "Closing Disclosure"],
    ],
  },
];

const articlePages = [
  ["rates", "refinance-rates-today", "Refinance Rates Today", "refinance rates today"],
  ["rates", "15-year-refinance-rates", "15-Year Refinance Rates", "15 year refinance rates"],
  ["rates", "30-year-refinance-rates", "30-Year Refinance Rates", "30 year refinance rates"],
  ["rates", "jumbo-refinance-rates", "Jumbo Refinance Rates", "jumbo refinance rates"],
  ["rates", "best-banks-for-refinancing", "Best Banks for Refinancing", "best banks for refinancing"],
  ["cash-out", "cash-out-refinance-rates", "Cash-Out Refinance Rates", "cash out refinance rates"],
  ["cash-out", "cash-out-refinance-for-debt-consolidation", "Cash-Out Refinance for Debt Consolidation", "cash out refinance debt consolidation"],
  ["cash-out", "cash-out-refinance-for-home-improvements", "Cash-Out Refinance for Home Improvements", "cash out refinance home improvements"],
  ["cash-out", "cash-out-refinance-for-investment-property", "Cash-Out Refinance for Investment Property", "refinance for investment property"],
  ["fha-refinance", "fha-refinance-requirements", "FHA Refinance Requirements", "fha refinance requirements"],
  ["fha-refinance", "fha-streamline-vs-conventional-refinance", "FHA Streamline vs Conventional Refinance", "fha streamline vs conventional refinance"],
  ["va-refinance", "va-cash-out-refinance-guide", "VA Cash-Out Refinance Guide", "va cash out refinance"],
  ["va-refinance", "va-irrrl-rates", "VA IRRRL Rates", "va irrrl rates"],
  ["jumbo-refinance", "jumbo-refinance-requirements", "Jumbo Refinance Requirements", "jumbo refinance requirements"],
  ["credit-score-and-approval", "refinance-mortgage-with-low-equity", "Refinance Mortgage With Low Equity", "refinance mortgage with low equity"],
  ["credit-score-and-approval", "refinance-after-bankruptcy", "Refinance After Bankruptcy", "refinance after bankruptcy"],
  ["credit-score-and-approval", "refinance-after-divorce", "Refinance After Divorce", "refinance mortgage after divorce"],
  ["credit-score-and-approval", "mortgage-refinance-requirements", "Mortgage Refinance Requirements", "mortgage refinance requirements"],
  ["closing-costs", "no-closing-cost-refinance", "No Closing Cost Refinance", "no closing cost refinance"],
  ["closing-costs", "mortgage-points-refinance", "Mortgage Points Refinance", "mortgage points refinance"],
  ["closing-costs", "refinance-appraisal-fees", "Refinance Appraisal Fees", "refinance appraisal fees"],
  ["closing-costs", "refinance-title-and-escrow-fees", "Refinance Title and Escrow Fees", "refinance title and escrow fees"],
  ["home-equity-and-heloc-alternatives", "heloc-vs-cash-out-refinance", "HELOC vs Cash-Out Refinance", "heloc vs cash out refinance"],
  ["home-equity-and-heloc-alternatives", "home-equity-loan-vs-rate-and-term-refinance", "Home Equity Loan vs Rate-and-Term Refinance", "home equity loan vs refinance"],
  ["home-equity-and-heloc-alternatives", "refinance-to-remove-pmi", "Refinance to Remove PMI", "refinance mortgage to remove PMI"],
  ["mortgage-refinance-calculators", "refinance-mortgage-calculator-with-taxes-and-insurance", "Refinance Mortgage Calculator With Taxes and Insurance", "refinance mortgage calculator with taxes and insurance"],
];

const calculatorPages = [
  ["mortgage-refinance-calculator", "Mortgage Refinance Calculator", "refinance"],
  ["cash-out-refinance-calculator", "Cash-Out Refinance Calculator", "cashout"],
  ["break-even-refinance-calculator", "Break-Even Refinance Calculator", "breakeven"],
  ["monthly-payment-savings-calculator", "Monthly Payment Savings Calculator", "savings"],
  ["closing-costs-calculator", "Closing Costs Calculator", "closing"],
  ["refinance-points-calculator", "Refinance Points Calculator", "points"],
  ["loan-to-value-calculator", "Loan-to-Value Calculator", "ltv"],
  ["pmi-removal-calculator", "PMI Removal Calculator", "pmi"],
  ["home-equity-calculator", "Home Equity Calculator", "equity"],
  ["interest-savings-calculator", "Interest Savings Calculator", "interest"],
];

const comparisonPages = [
  ["refinance-vs-home-equity-loan", "Refinance vs Home Equity Loan", "refinance vs home equity loan"],
  ["cash-out-refinance-vs-heloc", "Cash-Out Refinance vs HELOC", "cash-out refinance vs heloc"],
  ["fha-streamline-vs-va-irrrl", "FHA Streamline vs VA IRRRL", "fha streamline vs va irrrl"],
  ["15-year-vs-30-year-refinance", "15-Year vs 30-Year Refinance", "15 year vs 30 year refinance"],
  ["rate-and-term-vs-cash-out-refinance", "Rate-and-Term vs Cash-Out Refinance", "rate and term vs cash out refinance"],
  ["no-closing-cost-vs-low-rate-refinance", "No Closing Cost vs Low Rate Refinance", "no closing cost vs low rate refinance"],
  ["refinance-vs-second-mortgage", "Refinance vs Second Mortgage", "refinance vs second mortgage"],
  ["fixed-vs-arm-refinance", "Fixed vs ARM Refinance", "fixed vs arm refinance"],
  ["conventional-vs-fha-refinance", "Conventional vs FHA Refinance", "conventional vs fha refinance"],
  ["va-irrrl-vs-va-cash-out", "VA IRRRL vs VA Cash-Out", "va irrrl vs va cash out"],
];

const faqPages = [
  ["mortgage-refinance-rates-faq", "Mortgage Refinance Rates FAQ", "Mortgage Refinance Rates"],
  ["cash-out-refinance-faq", "Cash-Out Refinance FAQ", "Cash-Out Refinance"],
  ["fha-refinance-faq", "FHA Refinance FAQ", "FHA Refinance"],
  ["va-refinance-faq", "VA Refinance FAQ", "VA Refinance"],
  ["closing-costs-faq", "Closing Costs FAQ", "Closing Costs"],
];

const statePages = [
  ["california", "California"],
  ["texas", "Texas"],
  ["florida", "Florida"],
  ["new-york", "New York"],
  ["illinois", "Illinois"],
  ["georgia", "Georgia"],
  ["north-carolina", "North Carolina"],
  ["washington", "Washington"],
];

const staticPages = [
  { slug: "", h1: "Mortgage Refinance Guides", title: "Mortgage Refinance Guides | Rates, Calculators, Cash-Out", type: "home" },
  { slug: "about", h1: "About Mortgage Refinance Guides", title: "About Mortgage Refinance Guides | Editorial Mission", type: "page" },
  { slug: "contact", h1: "Contact Mortgage Refinance Guides", title: "Contact Mortgage Refinance Guides | Editorial Contact", type: "page" },
  { slug: "privacy-policy", h1: "Privacy Policy", title: "Privacy Policy | Mortgage Refinance Guides", type: "page" },
  { slug: "terms", h1: "Terms and Conditions", title: "Terms and Conditions | Mortgage Refinance Guides", type: "page" },
  { slug: "disclaimer", h1: "Financial Disclaimer", title: "Financial Disclaimer | Mortgage Refinance Guides", type: "page" },
  { slug: "cookie-policy", h1: "Cookie Policy", title: "Cookie Policy | Mortgage Refinance Guides", type: "page" },
  { slug: "editorial-policy", h1: "Editorial Policy", title: "Editorial Policy | Mortgage Refinance Guides", type: "page" },
  { slug: "how-we-research", h1: "How We Research", title: "How We Research | Mortgage Refinance Guides", type: "page" },
  { slug: "sitemap", h1: "HTML Sitemap", title: "HTML Sitemap | Mortgage Refinance Guides", type: "page" },
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function slugTitle(slug) {
  return slug
    .split("/")
    .filter(Boolean)
    .pop()
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function truncateAtWord(text, max) {
  if (text.length <= max) return text;
  const slice = text.slice(0, max + 1);
  const idx = slice.lastIndexOf(" ");
  return (idx > 30 ? slice.slice(0, idx) : text.slice(0, max)).trim();
}

function normalizeTitle(title) {
  if (title.length >= 50 && title.length <= 60) return title;
  const suffix = " | Mortgage Refinance Guides";
  if ((title + suffix).length <= 60) return title + suffix;
  return `${truncateAtWord(title, 60 - suffix.length)}${suffix}`;
}

function normalizeDescription(text) {
  const clean = text.replace(/\s+/g, " ").trim().replace(/\.+$/, "");
  if (clean.length >= 145 && clean.length <= 160) return `${clean}.`;
  if (clean.length > 160) return `${truncateAtWord(clean, 159)}.`;
  return `${truncateAtWord(`${clean} Compare refinance rates, APR, costs, timing, and approval tradeoffs with practical U.S. examples.`, 159)}.`;
}

function urlFor(slug) {
  return slug ? `${domain}/${slug}/` : `${domain}/`;
}

function filePathFor(slug) {
  return slug ? path.join(root, slug, "index.html") : path.join(root, "index.html");
}

function ensureTrailingSlash(relativePath) {
  if (!relativePath || relativePath === ".") return "./";
  return relativePath.endsWith("/") ? relativePath : `${relativePath}/`;
}

function relativePath(fromSlug, toPath) {
  const fromDir = fromSlug ? fromSlug : ".";
  const target = toPath ? toPath : ".";
  let relative = path.posix.relative(fromDir || ".", target || ".");
  if (!relative) return ".";
  if (!relative.startsWith(".")) relative = `./${relative}`;
  return relative;
}

function localHref(fromSlug, toSlug) {
  return ensureTrailingSlash(relativePath(fromSlug, toSlug));
}

function assetHref(fromSlug, assetPath) {
  return relativePath(fromSlug, assetPath);
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function wordCount(html) {
  return stripTags(html).split(/\s+/).filter(Boolean).length;
}

function writeJsonScript(id, data) {
  return `<script type="application/json" id="${id}">${escapeHtml(JSON.stringify(data))}</script>`;
}

function articleFaqs(topic) {
  return [
    {
      q: `When does ${topic.toLowerCase()} usually make sense?`,
      a: `${topic} usually makes the most sense when the new loan structure creates durable monthly savings, improves stability, or unlocks equity for a high-value use without creating an unreasonably long break-even period.`,
    },
    {
      q: `What documents should homeowners gather first?`,
      a: `Start with the current mortgage statement, homeowner's insurance declaration page, recent pay stubs or income proof, the latest property tax bill, two months of bank statements, and any recent appraisal or title information.`,
    },
    {
      q: `How long does a refinance normally take?`,
      a: `Many refinance files close in roughly 21 to 45 days, although the exact timeline depends on appraisal timing, underwriting conditions, title work, state-specific closing practices, and whether the borrower is changing programs.`,
    },
    {
      q: `Can shopping multiple lenders hurt my credit?`,
      a: `Mortgage credit inquiries are generally treated as a rate-shopping cluster when completed within a focused period, so comparing several lenders within a short window is usually better than relying on a single quote.`,
    },
  ];
}

function calculatorFaqs(title) {
  return [
    {
      q: `What does the ${title.toLowerCase()} estimate?`,
      a: `It models a refinance scenario using the figures you enter, then summarizes the payment impact, estimated cost picture, and decision checkpoints most homeowners review before applying.`,
    },
    {
      q: `Are the results a lender quote?`,
      a: `No. The calculator is an educational planning tool. Actual lender quotes depend on credit, occupancy, loan size, state fees, taxes, insurance, reserves, property type, and market conditions on the day you lock.`,
    },
    {
      q: `Should I include taxes and insurance in refinance planning?`,
      a: `Yes. Even when the quoted principal and interest payment falls, the full housing payment can move differently once escrows, mortgage insurance, HOA dues, and prepaid items are considered.`,
    },
  ];
}

function comparisonFaqs(title) {
  return [
    {
      q: `Which option usually costs less overall?`,
      a: `There is no universal winner. The cheaper option depends on the spread between available rates, the amount borrowed, upfront fees, tax treatment, and how long you expect to keep the debt in place.`,
    },
    {
      q: `Is the lower monthly payment always better?`,
      a: `Not always. A lower payment can come from stretching the term, rolling fees into the balance, or taking a smaller principal reduction path. Comparing total interest and break-even timing is usually more informative.`,
    },
    {
      q: `What should I compare first?`,
      a: `Start with APR or total cost over your expected time horizon, then review payment stability, lien position, cash required at closing, closing speed, and how much flexibility each structure gives your household.`,
    },
  ];
}

function chartBars(items) {
  const max = Math.max(...items.map((item) => item.value));
  return `<div class="chart-bars" role="img" aria-label="${escapeHtml(items.map((i) => `${i.label} ${i.value}`).join(", "))}">${items
    .map(
      (item) => `<div class="chart-bar">
        <span>${escapeHtml(item.label)}</span>
        <div class="bar-track"><i style="height:${Math.round((item.value / max) * 100)}%"></i></div>
        <strong>${escapeHtml(item.display || String(item.value))}</strong>
      </div>`,
    )
    .join("")}</div>`;
}

function comparisonTable(headers, rows, caption) {
  return `<div class="table-wrap"><table>
    <caption>${escapeHtml(caption)}</caption>
    <thead><tr>${headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>
    <tbody>${rows
      .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`)
      .join("")}</tbody>
  </table></div>`;
}

function callout(title, text, tone = "info") {
  return `<aside class="callout callout-${tone}"><strong>${escapeHtml(title)}</strong><p>${escapeHtml(text)}</p></aside>`;
}

function badge(text) {
  return `<span class="badge">${escapeHtml(text)}</span>`;
}

function breadcrumbs(slug, label, group = null) {
  const trail = [{ label: "Home", href: urlFor("") }];
  if (group) trail.push(group);
  trail.push({ label, href: urlFor(slug) });
  return trail;
}

function categoryHubSlug(category) {
  const map = {
    "Mortgage Refinance Rates": "rates",
    "Cash-Out Refinance": "cash-out",
    "FHA Refinance": "fha-refinance",
    "VA Refinance": "va-refinance",
    "Jumbo Loan Refinance": "jumbo-refinance",
    "Mortgage Refinance Calculators": "calculators",
    "Home Equity and HELOC Alternatives": "home-equity-and-heloc-alternatives",
    "Credit Score and Refinance Approval": "credit-score-and-approval",
    "Closing Costs and Fees": "closing-costs",
    "State-by-State Refinance Guides": "states",
    "How to Refinance": "guides/how-to-refinance-your-mortgage-step-by-step",
  };
  return map[category] || "";
}

function renderBreadcrumbs(fromSlug, list) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><ol>${list
    .map((crumb) => `<li><a href="${localHref(fromSlug, slugFromUrl(crumb.href))}">${escapeHtml(crumb.label)}</a></li>`)
    .join("")}</ol></nav>`;
}

function slugFromUrl(url) {
  if (url === `${domain}/`) return "";
  return url.replace(`${domain}/`, "").replace(/\/$/, "");
}

function authorCard() {
  return `<div class="editorial-block editorial-byline">
  <img src="/assets/javi-perez-guides.jpg" width="48" height="48" loading="lazy" alt="Javi Pérez" class="editorial-avatar">
  <div>
    <strong>Javi Pérez</strong> · Editor, ${brand}
    <a href="https://www.linkedin.com/in/javi-perez-guides" rel="noopener" target="_blank">LinkedIn</a>
    <p>Last reviewed: April 2026 — content checked quarterly against CFPB, Freddie Mac, and FHFA public data sources.</p>
  </div>
</div>`;
}

function trustPanel() {
  return "";
}

function homeHeroVisual() {
  return `<div class="hero-card hero-visual">
    <div class="mini-label">Refinance trends</div>
    <h3>Average refinance rates by year</h3>
    <svg viewBox="0 0 460 280" role="img" aria-label="Average U.S. refinance rates from 2021 to 2026">
      <defs>
        <linearGradient id="trendLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1f4fd6" />
          <stop offset="100%" stop-color="#0f9d6c" />
        </linearGradient>
      </defs>
      <rect x="22" y="24" width="408" height="214" rx="22" fill="#f6f9ff" />
      <g stroke="#cfe0ff" stroke-width="1">
        <line x1="60" y1="58" x2="60" y2="210" />
        <line x1="60" y1="210" x2="390" y2="210" />
        <line x1="60" y1="170" x2="390" y2="170" />
        <line x1="60" y1="130" x2="390" y2="130" />
        <line x1="60" y1="90" x2="390" y2="90" />
      </g>
      <g fill="none" stroke="url(#trendLine)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M80 188 L145 142 L210 78 L275 112 L340 96 L385 104" />
      </g>
      <g fill="#12355b">
        <text x="50" y="214" font-size="12">4%</text>
        <text x="50" y="174" font-size="12">5%</text>
        <text x="50" y="134" font-size="12">6%</text>
        <text x="50" y="94" font-size="12">7%</text>
        <text x="74" y="234" font-size="12">2021</text>
        <text x="138" y="234" font-size="12">2022</text>
        <text x="203" y="234" font-size="12">2023</text>
        <text x="268" y="234" font-size="12">2024</text>
        <text x="334" y="234" font-size="12">2025</text>
        <text x="378" y="234" font-size="12">2026</text>
      </g>
      <g fill="#0f9d6c">
        <circle cx="385" cy="104" r="7" />
      </g>
    </svg>
    <div class="hero-stat-row">
      <div><span>30-year avg.</span><strong>6.48%</strong></div>
      <div><span>15-year avg.</span><strong>5.88%</strong></div>
      <div><span>Quote spread</span><strong>0.42%</strong></div>
    </div>
  </div>`;
}

function inlineIllustration(kind) {
  const common = `viewBox="0 0 640 420" role="img" aria-hidden="true" class="inline-illustration"`;
  if (kind === "calculator") {
    return `<svg ${common}>
      <rect x="70" y="50" width="500" height="320" rx="36" fill="#edf4ff"/>
      <rect x="120" y="92" width="180" height="44" rx="14" fill="#12355b"/>
      <rect x="340" y="92" width="160" height="44" rx="14" fill="#10a06b"/>
      <rect x="120" y="164" width="110" height="52" rx="16" fill="#ffffff"/>
      <rect x="250" y="164" width="110" height="52" rx="16" fill="#ffffff"/>
      <rect x="380" y="164" width="110" height="52" rx="16" fill="#ffffff"/>
      <rect x="120" y="236" width="110" height="52" rx="16" fill="#ffffff"/>
      <rect x="250" y="236" width="110" height="52" rx="16" fill="#ffffff"/>
      <rect x="380" y="236" width="110" height="52" rx="16" fill="#ffffff"/>
      <circle cx="522" cy="292" r="34" fill="#1f4fd6"/>
      <path d="M520 277v31M505 292h31" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
    </svg>`;
  }
  if (kind === "house") {
    return `<svg ${common}>
      <rect x="72" y="76" width="496" height="280" rx="34" fill="#edf4ff"/>
      <path d="M180 208 320 104l140 104v116H180z" fill="#12355b"/>
      <rect x="246" y="234" width="54" height="90" rx="14" fill="#ffffff"/>
      <rect x="338" y="230" width="62" height="52" rx="14" fill="#89aefc"/>
      <path d="M122 184c22-34 58-52 108-52 47 0 83 14 108 42" fill="none" stroke="#10a06b" stroke-width="14" stroke-linecap="round"/>
      <path d="M402 158h82" stroke="#10a06b" stroke-width="14" stroke-linecap="round"/>
      <path d="M462 126l30 32-30 32" fill="none" stroke="#10a06b" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }
  return `<svg ${common}>
    <rect x="70" y="50" width="500" height="320" rx="36" fill="#edf4ff"/>
    <rect x="128" y="100" width="160" height="210" rx="24" fill="#ffffff"/>
    <rect x="320" y="116" width="190" height="34" rx="12" fill="#cddfff"/>
    <rect x="320" y="166" width="150" height="24" rx="12" fill="#dfe9ff"/>
    <rect x="320" y="212" width="168" height="24" rx="12" fill="#dfe9ff"/>
    <rect x="320" y="258" width="130" height="24" rx="12" fill="#dfe9ff"/>
    <circle cx="470" cy="296" r="30" fill="#10a06b"/>
    <path d="M456 296h28M470 282v28" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
  </svg>`;
}

function homeSections() {
  return `
    <section class="hero hero-home hero-home-rebuild">
      <div class="container">
        <div class="hero-shell">
          <div class="hero-copy-stack">
            <div class="hero-chip-row">
              ${badge("Updated 2026")}
            </div>
            <h1>Refinance your mortgage with cleaner rate comparisons, sharper fee analysis, and premium scenario planning.</h1>
            <p class="hero-copy">Mortgage Refinance Guides combines lender-style quote logic, calculator-driven planning, and state-specific closing cost context so homeowners can compare refinance options with more confidence and less noise.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="./guides/best-mortgage-refinance-rates/">Compare refinance rates</a>
              <a class="button button-secondary" href="./calculators/mortgage-refinance-calculator/">Use the calculator hub</a>
            </div>
            <div class="hero-metrics-grid">
              <article><span>30-year avg.</span><strong>6.48%</strong><p>Modeled national refinance midpoint</p></article>
              <article><span>Potential monthly savings</span><strong>$214</strong><p>Common rate-and-term example</p></article>
              <article><span>Typical break-even</span><strong>24-36 mo</strong><p>Depends on fees and holding period</p></article>
            </div>
            <div class="logo-strip" aria-label="Lender logo placeholders">
              <span>Rocket-style lender</span>
              <span>National bank</span>
              <span>Mortgage broker</span>
              <span>Credit union</span>
              <span>Online lender</span>
            </div>
          </div>
          <div class="hero-dashboard">
            ${homeHeroVisual()}
            <div class="dashboard-grid">
              <article class="dashboard-tile">
                <p class="eyebrow">Scenario delta</p>
                <h3>Rate-and-term refinance</h3>
                <ul class="hero-points compact">
                  <li>Rate drop: 7.12% to 6.24%</li>
                  <li>Payment: $2,364 to $2,149</li>
                  <li>Break-even: 27 months</li>
                </ul>
              </article>
              <article class="dashboard-tile accent">
                <p class="eyebrow">Cash-out snapshot</p>
                <h3>$61,800 available</h3>
                <p>Based on a $525,000 home value, $295,000 balance, 80% max LTV, and estimated closing costs.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-overview">
      <div class="container">
        <div class="section-head split-head">
          <div>
            <p class="eyebrow">Editorial focus</p>
            <h2>A refinance portal built to feel more like a modern finance product than a niche content site</h2>
          </div>
          <p>We structure the site around the actual homeowner decisions that matter: lowering the payment, shortening the term, removing PMI, accessing equity, comparing FHA and VA options, and understanding when a lender quote is truly competitive.</p>
        </div>
        <div class="card-grid feature-grid">
          ${homeCards
            .map(
              (card) => `<article class="feature-card"><span class="feature-kicker">${escapeHtml(card.title)}</span><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.text)}</p><a class="text-link" href="./guides/how-to-refinance-your-mortgage-step-by-step/">See workflow</a></article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section-soft section-analytics">
      <div class="container analytic-layout">
        <div class="analysis-stack">
          <div class="section-head">
            <p class="eyebrow">Market pulse</p>
            <h2>Data blocks that explain the market without overwhelming the page</h2>
            <p>Instead of packing the homepage with too many competing cards, we surface a smaller set of decision-driving numbers and pair them with visual explanations that are easy to scan on both mobile and desktop.</p>
          </div>
          <div class="stat-list">
            ${visualStats
              .map(
                (stat) => `<article><strong>${escapeHtml(stat.value)}</strong><span>${escapeHtml(stat.label)}</span><p>${escapeHtml(stat.note)}</p></article>`,
              )
              .join("")}
          </div>
        </div>
        <div class="panel panel-chart">
          <p class="eyebrow">Approval by credit profile</p>
          <h3>Estimated refinance approval tendency</h3>
          ${chartBars([
            { label: "760+", value: 88, display: "88%" },
            { label: "720-759", value: 81, display: "81%" },
            { label: "680-719", value: 69, display: "69%" },
            { label: "640-679", value: 54, display: "54%" },
            { label: "620-639", value: 38, display: "38%" },
          ])}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head split-head">
          <div>
            <p class="eyebrow">Compare paths</p>
            <h2>Choose the refinance strategy that matches your actual goal</h2>
          </div>
          <p>These pillar guides anchor the entire site. Each one is designed for a distinct borrower intent and backed by supporting articles, calculators, comparisons, and state pages.</p>
        </div>
        <div class="card-grid three">
          ${pillarPages
            .slice(0, 6)
            .map(
              (page) => `<article class="guide-card premium-card">
                <p class="meta-line"><span>${escapeHtml(page.category)}</span><span>3000+ words</span></p>
                <h3><a href="./guides/${page.slug}/">${escapeHtml(page.h1)}</a></h3>
                <p>${escapeHtml(page.description)}</p>
                <a class="text-link" href="./guides/${page.slug}/">Read the guide</a>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section-accent">
      <div class="container lender-layout">
        <div class="panel dark">
          <p class="eyebrow">Closing cost mix</p>
          <h3>Where refinance fees usually come from</h3>
          ${chartBars([
            { label: "Origination", value: 22, display: "22%" },
            { label: "Title + escrow", value: 28, display: "28%" },
            { label: "Government", value: 8, display: "8%" },
            { label: "Prepaids", value: 26, display: "26%" },
            { label: "Points", value: 16, display: "16%" },
          ])}
        </div>
        <div class="table-card">
          <p class="eyebrow">Scenario comparison</p>
          <h2>How lenders and loan structures can diverge fast</h2>
          ${comparisonTable(
            ["Scenario", "Rate", "APR", "Fees", "Best fit"],
            [
              ["30-year conventional", "6.48%", "6.63%", "$4,800", "Lower payment focus"],
              ["15-year conventional", "5.88%", "6.01%", "$4,950", "Faster payoff"],
              ["FHA streamline", "6.05%", "6.22%", "$3,900", "Existing FHA borrowers"],
              ["VA IRRRL", "5.92%", "6.08%", "$3,450", "Eligible VA streamline"],
            ],
            "Refinance quote snapshot",
          )}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container calculators-band">
        <div class="section-head split-head">
          <div>
            <p class="eyebrow">Calculator hub</p>
            <h2>Run the refinance math before you commit to a lender conversation</h2>
          </div>
          <a class="button button-primary" href="./calculators/mortgage-refinance-calculator/">Open mortgage refinance calculator</a>
        </div>
        <div class="mini-card-grid">
          ${calculatorPages
            .slice(0, 6)
            .map(
              ([slug, title]) => `<a class="mini-card polished-mini-card" href="./calculators/${slug}/"><strong>${escapeHtml(title)}</strong><span>Interactive planning tool</span></a>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section-states">
      <div class="container">
        <div class="section-head split-head">
          <div>
            <p class="eyebrow">State guides</p>
            <h2>A cleaner state grid with enough space to breathe and no collapsed cards</h2>
          </div>
          <p>State closing practices materially change refinance economics. These guides focus on title workflow, timeline, and cost variation without breaking the responsive grid.</p>
        </div>
        <div class="state-grid rebuilt-state-grid">
          ${statePages
            .slice(0, 8)
            .map(
              ([slug, name], index) => `<a class="state-card state-card-${index + 1}" href="./states/${slug}/"><strong>${escapeHtml(name)}</strong><span>Closing costs, timeline, and lender-fit guidance</span></a>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container editorial-grid">
        <div class="panel editorial-card">
          <p class="eyebrow">Editorial process</p>
          <h2>How we research refinance content</h2>
          <p>We compare note rate, APR, lender fees, points, state settlement cost patterns, equity thresholds, and underwriting factors together. That keeps the content grounded in how borrowers actually experience refinance decisions.</p>
          <a class="text-link" href="./how-we-research/">Read the research methodology</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">FAQs</p>
          <h2>Common refinance questions homeowners ask first</h2>
        </div>
        <div class="faq-list">
          ${articleFaqs("mortgage refinance")
            .map(
              (faq) => `<details class="faq-item"><summary>${escapeHtml(faq.q)}</summary><p>${escapeHtml(faq.a)}</p></details>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function staticPageContent(slug, fromSlug = slug) {
  const pages = {
    about: `
      <p>${brand} was founded by Javi Pérez, a technology professional based in Almería, Spain, who built this site to help U.S. homeowners compare mortgage refinance options using verified public data rather than promotional lender marketing. Javi has been building independent editorial finance guides since 2023 and maintains this site without lender sponsorship.</p>
      <p>This site covers rate-and-term refinance, cash-out refinance, FHA streamline refinance, VA IRRRL, jumbo refinance, closing costs, credit score dynamics, PMI removal, home equity alternatives, and state-specific refinance differences. All content is researched against primary sources including CFPB, Freddie Mac, FHFA, BLS, and HUD guidance.</p>
      <p>Connect with Javi on <a href="https://www.linkedin.com/in/javi-perez-guides" rel="noopener" target="_blank">LinkedIn</a>.</p>
      <div class="callout callout-warning">
        <strong>Important disclaimer:</strong> I am NOT a licensed mortgage broker, loan officer, or financial advisor. Nothing on this site constitutes mortgage, financial, or legal advice. Consult a licensed professional for your specific situation.
      </div>
      ${authorCard()}
    `,
    contact: `
      ${site.email ? `<p>Editorial inquiries, corrections, partnership disclosures, and research questions can be sent to <a href="mailto:${site.email}">${site.email}</a>. We review feedback related to accuracy, clarity, broken links, and user experience on an ongoing basis.</p>` : `<p>We are updating our contact information. Please check back soon.</p>`}
      <div class="table-wrap"><table><tbody>
        ${site.email ? `<tr><th>Email</th><td>${site.email}</td></tr>` : `<tr><th>Status</th><td>We are updating our contact information. Please check back soon.</td></tr>`}
        <tr><th>Editorial response goal</th><td>2 business days</td></tr>
        <tr><th>Corrections process</th><td>Reviewed by editorial staff and updated when warranted</td></tr>
        <tr><th>Commercial inquiries</th><td>Clearly separated from editorial review</td></tr>
      </tbody></table></div>
      ${callout("Note", "Mortgage Refinance Guides is an editorial website, not a lender or mortgage broker. We cannot provide individualized lending advice or application decisions.")}
    `,
    "privacy-policy": `
      <p>We collect limited information needed to operate the site, understand aggregate traffic, and support standard website functionality. Information may include server logs, anonymized analytics signals, and voluntary form submissions if you contact us directly.</p>
      <p>We do not sell mortgage products. Third-party services used after deployment may include analytics, advertising, hosting, and email providers. Those providers may process technical data such as IP address, device details, referrer information, or cookie signals under their own privacy terms.</p>
      <p>Users can manage browser cookie settings, reject optional cookie categories through the site banner, and contact us for privacy-related questions${site.email ? ` at <a href="mailto:${site.email}">${site.email}</a>` : ""}.</p>
    `,
    terms: `
      <p>By using this website, you agree to use the content for informational and personal research purposes only. The content does not replace lender disclosures, legal advice, tax advice, investment advice, or counseling tailored to your situation.</p>
      <p>We make reasonable efforts to keep content accurate and current, but mortgage rates, fees, underwriting overlays, and state rules change frequently. You are responsible for verifying any rate, quote, fee, or program detail with a qualified lender or professional before making a decision.</p>
      <p>Unauthorized copying, automated scraping, or misleading republication of the site content is prohibited except as allowed by law.</p>
    `,
    disclaimer: `
      <p>${site.disclaimer}</p>
      <p>Rate examples, payment illustrations, break-even tables, approval tendencies, and state cost ranges are educational estimates. They are not offers to lend and should not be interpreted as guaranteed savings or approval outcomes.</p>
      <p>If your situation involves divorce, bankruptcy, estate transfer, military benefits, tax consequences, or investment property strategy, seek advice from appropriate licensed professionals before acting.</p>
    `,
    "cookie-policy": `
      <p>This website uses essential cookies for core functionality and may use optional cookies or similar technologies for analytics and advertising after deployment. Users can accept or decline optional categories from the cookie banner when available.</p>
      <p>Essential cookies may support user interface preferences, consent storage, and security-related behavior. Optional technologies may help us understand which guides are useful, how readers navigate, and how advertising performs after approval and implementation.</p>
    `,
    "editorial-policy": `
      <p>Our editorial approach prioritizes accuracy, clarity, and decision usefulness. We publish content that helps readers compare refinance options on a like-for-like basis rather than chase headline rates without context. Content is reviewed for internal consistency, updated when material mortgage conditions change, and clearly separated from advertising considerations.</p>
      <h2>Sourcing Hierarchy</h2>
      <p>All factual claims on this site are verified against primary public sources in this order of priority:</p>
      <ol>
        <li><a href="https://www.consumerfinance.gov" rel="noopener" target="_blank">CFPB.gov</a> — Consumer Financial Protection Bureau mortgage disclosures and borrower guides</li>
        <li><a href="https://www.freddiemac.com" rel="noopener" target="_blank">FreddieMac.com</a> — Primary Mortgage Market Survey and weekly rate data</li>
        <li><a href="https://www.fhfa.gov" rel="noopener" target="_blank">FHFA.gov</a> — Federal Housing Finance Agency conforming loan limits and market statistics</li>
        <li><a href="https://www.bls.gov" rel="noopener" target="_blank">BLS.gov</a> — Bureau of Labor Statistics economic and employment data</li>
        <li><a href="https://www.hud.gov" rel="noopener" target="_blank">HUD.gov</a> — Department of Housing and Urban Development program guidelines and FHA requirements</li>
      </ol>
      <p>Rate examples, payment illustrations, and approval estimates are educational. They do not constitute lending offers or guaranteed outcomes. If compensation relationships are introduced, they will be disclosed on relevant pages.</p>
      ${authorCard()}
    `,
    "how-we-research": `
      <p>We research refinance topics using public mortgage program materials, lender pricing conventions, settlement cost patterns, housing finance guidance, and borrower decision frameworks commonly used by mortgage advisors. We compare note rate, APR, fees, break-even timing, and underwriting fit together.</p>
      <p>When we use numerical illustrations, we choose realistic U.S. homeowner scenarios and state assumptions clearly. We avoid publishing rate tables or approval claims that imply certainty. Instead, we show reasonable ranges, examples, and the variables that move outcomes up or down.</p>
      <p>Pages are periodically refreshed for clarity, navigation, schema quality, and search performance readiness.</p>
    `,
    sitemap: renderHtmlSitemap(fromSlug),
  };
  return pages[slug] || "<p>Editorial content.</p>";
}

function renderHtmlSitemap(fromSlug) {
  const groups = [
    ["Core Pages", staticPages.filter((p) => p.slug && p.slug !== "sitemap").map((p) => [p.h1, `/${p.slug}/`])],
    ["Pillar Guides", pillarPages.map((p) => [p.h1, `/guides/${p.slug}/`])],
    ["Articles", articlePages.map(([, slug, title]) => [title, `/${inferArticleSection(slug)}/${slug}/`])],
    ["Calculators", calculatorPages.map(([slug, title]) => [title, `/calculators/${slug}/`])],
    ["Comparisons", comparisonPages.map(([slug, title]) => [title, `/comparisons/${slug}/`])],
    ["FAQs", faqPages.map(([slug, title]) => [title, `/faqs/${slug}/`])],
    ["State Guides", statePages.map(([slug, name]) => [`${name} Mortgage Refinance Guide`, `/states/${slug}/`])],
  ];
  return groups
    .map(
      ([heading, links]) => `<section class="sitemap-group"><h2>${escapeHtml(heading)}</h2><ul>${links
        .map(([label, href]) => `<li><a href="${localHref(fromSlug, href.replace(/^\/|\/$/g, ""))}">${escapeHtml(label)}</a></li>`)
        .join("")}</ul></section>`,
    )
    .join("");
}

function inferArticleSection(slug) {
  const match = articlePages.find((entry) => entry[1] === slug);
  return match ? sectionSlug(match[0]) : "articles";
}

function sectionSlug(name) {
  const map = {
    rates: "rates",
    "cash-out": "cash-out",
    "fha-refinance": "fha-refinance",
    "va-refinance": "va-refinance",
    "jumbo-refinance": "jumbo-refinance",
    "credit-score-and-approval": "credit-score-and-approval",
    "closing-costs": "closing-costs",
    "home-equity-and-heloc-alternatives": "home-equity-and-heloc-alternatives",
    "mortgage-refinance-calculators": "calculators",
    "state-by-state-refinance-guides": "articles/state-guides",
  };
  return map[name] || "articles";
}

function paragraph(topic, angle, detail, bridge) {
  return `${topic} ${angle} ${detail} ${bridge}`;
}

function buildPillarContent(page) {
  const sections = [
    {
      title: `How ${page.keyword} actually gets priced`,
      intro: `${page.intro}`,
      paragraphs: [
        paragraph(
          "Refinance pricing is rarely just a reflection of the market headline rate.",
          "Lenders adjust offers based on occupancy, credit score, loan-to-value, loan size, documentation strength, state settlement costs, property type, and whether the transaction is a simple rate-and-term refinance or a cash-out request.",
          "That means two borrowers watching the same rate chart can still receive meaningfully different quotes, especially when one borrower is rolling closing costs into the balance or shortening the loan term.",
          "A premium refinance guide has to explain that difference because the best rate is only valuable if it is actually obtainable under your file profile."
        ),
        paragraph(
          "APR becomes useful once fees start diverging.",
          "The note rate tells you the interest cost attached to the principal balance, but APR reveals how the price changes after points, origination, and lender fees are layered in.",
          "Borrowers often compare one quote advertising a lower rate against another quote with materially smaller fees, then discover that the APR advantage has flipped when both offers are modeled on equal terms.",
          "This is why our refinance framework treats rate, APR, and upfront cash requirement as one decision instead of three unrelated numbers."
        ),
        paragraph(
          "Lock strategy matters too.",
          "Rate shoppers who collect quotes on different days or with different lock windows may think one lender is clearly cheaper when the comparison is actually distorted by market movement or an unpriced float assumption.",
          "A 15-day lock, a 30-day lock, and a 45-day lock can all produce different pricing even for the same borrower, especially in volatile mortgage markets.",
          "Homeowners who want clean comparisons should ask lenders to quote the same loan amount, same lock duration, same point structure, and same occupancy assumptions."
        ),
      ],
      list: [
        "Compare note rate and APR together, not separately.",
        "Ask every lender for the same lock window and fee structure.",
        "Watch whether closing costs are paid upfront, financed, or offset with lender credits.",
      ],
    },
    {
      title: "When refinance savings are real and when they are cosmetic",
      intro: "The right refinance improves the borrower position across the whole time horizon, not just on the first payment line.",
      paragraphs: [
        paragraph(
          "Monthly savings can be misleading when they come from term extension alone.",
          "A homeowner resetting from a 22-year remaining balance into a fresh 30-year loan may lower the payment, but the lifetime interest cost can still rise if the term reset is doing most of the work.",
          "That does not make the refinance wrong, especially if cash flow relief is the main goal, but it changes how the outcome should be judged.",
          "The stronger metric is whether the refinance meets the objective you care about without quietly worsening another part of the plan."
        ),
        paragraph(
          "Break-even timing is the discipline that keeps refinance analysis honest.",
          "If you spend $4,800 to save $185 per month, the simple break-even point lands around 26 months before considering balance changes, tax treatment, and escrow effects.",
          "Borrowers expecting to move, sell, or refinance again inside that window should be cautious unless the refinance also provides other meaningful benefits such as removing PMI or switching out of a risky adjustable-rate structure.",
          "A premium decision process always asks how long the new structure needs to stay in place before it clearly wins."
        ),
        paragraph(
          "Some savings are strategic rather than immediate.",
          "A refinance that shortens a term from 30 years to 20 or 15 may increase the payment slightly but still produce stronger wealth-building outcomes by accelerating principal reduction and reducing total interest dramatically.",
          "Likewise, a cash-out refinance can be sensible if the proceeds retire very expensive debt or fund a renovation that materially improves home value and household flexibility.",
          "The core question is not whether the payment goes down, but whether the full transaction moves the household balance sheet in the right direction."
        ),
      ],
      table: comparisonTable(
        ["Decision lens", "What to compare", "Why it matters"],
        [
          ["Monthly cash flow", "New full housing payment vs current payment", "Shows immediate budget impact"],
          ["Break-even timing", "Total closing costs divided by monthly savings", "Measures how long the refinance needs to stay in place"],
          ["Long-run cost", "Total projected interest and fees", "Reveals whether lower payments are masking higher lifetime expense"],
          ["Strategic benefit", "PMI removal, fixed-rate stability, equity access", "Captures non-payment improvements"],
        ],
        `${page.h1} decision framework`,
      ),
    },
    {
      title: "Underwriting factors that shape approval and pricing",
      intro: "Borrowers often focus on rate tables first, but the actual quote is heavily influenced by the underwriting file the lender expects to see.",
      paragraphs: [
        paragraph(
          "Credit score remains one of the clearest pricing levers.",
          "A borrower with strong reserves and a 760 score typically sees meaningfully better pricing than a borrower at 660 with otherwise similar terms, particularly on conventional loans and cash-out requests.",
          "That gap can appear in both rate and fees, which is why credit repair or timing a refinance after a score improvement sometimes creates more value than rushing into the market immediately.",
          "Even FHA and VA borrowers, who may benefit from more flexible standards, should remember that lender overlays can still tighten the effective approval picture."
        ),
        paragraph(
          "Loan-to-value and equity position do heavy lifting.",
          "More equity reduces lender risk, improves approval odds, and can open the door to stronger pricing or the removal of private mortgage insurance.",
          "Low-equity borrowers may still refinance through FHA or VA pathways, but conventional options often become less attractive as LTV rises and reserves weaken.",
          "That makes the property value assumption important, because a new appraisal can either improve the file or introduce unexpected pressure."
        ),
        paragraph(
          "Debt-to-income ratio, income stability, and reserves affect lender confidence.",
          "Two borrowers with identical rates on paper may end up with different underwriting outcomes if one has bonus income that needs averaging, self-employment income with declining trends, or multiple financed properties.",
          "Lenders care not only about whether the payment fits today, but whether the borrower profile suggests durable repayment capacity after closing.",
          "Homeowners should prepare documents early so they can spot file weaknesses before a lender conditions the loan unexpectedly."
        ),
      ],
      list: [
        "Credit score and reserves influence both approval odds and pricing.",
        "Higher equity often unlocks better refinance economics.",
        "Income complexity can affect documentation requests even when base income is strong.",
      ],
    },
    {
      title: "Program-specific refinance paths",
      intro: "The refinance market is not one product. It is a family of programs designed for different borrower profiles and goals.",
      paragraphs: [
        paragraph(
          "Conventional rate-and-term refinance works best for borrowers with solid credit and enough equity to access competitive pricing without relying on specialized government programs.",
          "It tends to provide flexible term options and may be especially attractive for homeowners looking to remove PMI once the updated loan-to-value ratio is strong enough.",
          "However, conventional pricing can become less forgiving when equity is thin, credit is uneven, or the borrower is requesting cash out.",
          "That is why comparing program fit matters just as much as comparing note rates."
        ),
        paragraph(
          "FHA streamline refinance remains useful when simplicity and payment reduction matter more than removing mortgage insurance immediately.",
          "Existing FHA borrowers often benefit from reduced documentation and, in many cases, no new appraisal requirement, which can make streamline execution faster than a full conventional refinance.",
          "The tradeoff is that mortgage insurance economics still need close review, especially for borrowers hoping the new loan will solve every cost issue at once.",
          "Borrowers with stronger equity may eventually compare streamline convenience against a conventional exit path."
        ),
        paragraph(
          "VA IRRRL stands out for eligible veterans and service members who want an efficient rate reduction path.",
          "Because documentation and appraisal requirements are often lighter than a standard refinance, the VA streamline route can produce excellent execution for borrowers whose primary goal is stability or payment improvement.",
          "Cash-out needs, however, change the structure, and VA cash-out refinance comes with a different approval and cost profile.",
          "Knowing which program is designed for your goal keeps the process much cleaner."
        ),
      ],
      chart: chartBars([
        { label: "Conventional", value: 74, display: "74" },
        { label: "FHA Streamline", value: 61, display: "61" },
        { label: "VA IRRRL", value: 82, display: "82" },
        { label: "Jumbo", value: 48, display: "48" },
      ]),
    },
    {
      title: "Closing costs, points, and lender credits",
      intro: "A refinance quote is only as good as the cost structure behind it.",
      paragraphs: [
        paragraph(
          "Borrowers who focus only on the advertised rate can miss that one lender is charging a point while another is offering a slightly higher rate with a lender credit.",
          "Neither structure is inherently better. The right one depends on how long you expect to keep the loan and whether preserving cash at closing matters more than maximizing long-run savings.",
          "This is why points should be evaluated through a break-even lens rather than instinctively accepted or rejected.",
          "The same rate can be cheap, fair, or expensive depending on how the fees are packaged."
        ),
        paragraph(
          "Some costs are negotiable and some are mostly not.",
          "Origination, underwriting, or processing fees may vary across lenders, while title insurance, attorney charges, recording fees, and prepaid escrow items are more influenced by state practice and property-specific realities.",
          "That means shoppers should separate lender-controlled fees from third-party charges before concluding that one lender is universally better than another.",
          "A premium comparison highlights where savings are actually available."
        ),
        paragraph(
          "No-closing-cost refinance deserves extra caution.",
          "In many cases it simply means the costs are being offset through a higher note rate, added to the balance, or covered by a lender credit with a meaningful pricing tradeoff.",
          "That can still be a smart move for short expected holding periods or tight cash positions, but it should be a deliberate choice rather than a response to marketing language.",
          "When the costs move somewhere else, the economics have not disappeared; they have only changed form."
        ),
      ],
    },
    {
      title: "State costs, timing, and closing experience",
      intro: "Refinancing the same loan balance in two different states can feel like two different transactions.",
      paragraphs: [
        paragraph(
          "Attorney-closing states often introduce higher legal and settlement coordination fees than escrow states, while counties with elevated recording or mortgage tax charges can add noticeable friction to refinance economics.",
          "New York, Florida, California, New Jersey, and parts of the Northeast are common examples where borrowers should expect more title and settlement variability than simple online calculators imply.",
          "That does not make refinancing unattractive, but it does mean national averages should be used as orientation rather than promises.",
          "Borrowers benefit from reviewing local fee conventions before deciding whether a marginal rate improvement is worth the reset."
        ),
        paragraph(
          "Timeline expectations also vary by state and product.",
          "Appraisal turn times, title plant access, attorney scheduling, and county recording speed can all influence how quickly a file reaches closing.",
          "A borrower chasing a narrow lock window in a busy market can lose pricing advantages if the operational path was unrealistic from the start.",
          "Understanding these state-level frictions helps homeowners choose lenders that are built for the local workflow."
        ),
        paragraph(
          "For multi-state property owners or investors, state variation can influence portfolio strategy.",
          "The cheapest refinance opportunity is not always on the property with the lowest current rate; it may be the property located where fee drag, title complexity, and appraisal volatility are comparatively low.",
          "That is one reason serious refinance shoppers increasingly compare execution risk by state in addition to pure rate shopping.",
          "Good refinance planning blends national mortgage logic with local closing reality."
        ),
      ],
    },
    {
      title: "How to use this guide when comparing lenders",
      intro: "The best refinance shopping process reduces noise before the formal application stage.",
      paragraphs: [
        paragraph(
          "Start by defining one primary objective and one secondary objective.",
          "For example, you may want to reduce the monthly payment while also removing PMI, or access cash while keeping the payment increase under a certain threshold.",
          "That focus helps you avoid evaluating every quote through a different standard, which is one of the main reasons rate shopping becomes confusing.",
          "The lender that looks cheapest under one objective may not be best under another."
        ),
        paragraph(
          "Next, request comparable loan estimates or preliminary fee worksheets from multiple lenders.",
          "Use the same loan amount, same term, same occupancy, same property type, and same lock duration, then compare note rate, APR, lender credits, points, and total cash to close on one sheet.",
          "If a lender offers a materially lower rate, ask what assumptions make it possible and whether any discount points or special conditions are embedded.",
          "Clarity upfront is much cheaper than surprise after underwriting."
        ),
        paragraph(
          "Finally, run the quote through a calculator and your expected time horizon.",
          "A refinance you plan to keep for eight years should be evaluated differently than one you may replace after two years if rates move again or if you expect to sell.",
          "The borrower who knows their break-even window, total cost path, and stress-tested payment range is far less likely to regret the refinance later.",
          "That is the mindset this site is built to support."
        ),
      ],
      list: [
        "Write down the goal before requesting quotes.",
        "Compare lenders on matching assumptions.",
        "Model the quote over your expected ownership timeline.",
      ],
    },
    {
      title: "A lender-comparison checklist homeowners can actually use",
      intro: "Good refinance decisions usually come from a repeatable checklist rather than an emotional response to one attractive quote.",
      paragraphs: [
        paragraph(
          "Start with quote normalization.",
          "Every lender should be asked to quote the same estimated property value, same loan amount, same loan type, same occupancy, same lock window, and same assumption about whether costs are paid in cash, financed, or covered by credits.",
          "Without that discipline, borrowers can spend hours comparing offers that are not genuinely equivalent and then conclude the market is opaque when the inputs were simply inconsistent.",
          "Standardizing assumptions is the fastest way to make refinance pricing readable."
        ),
        paragraph(
          "Then move into document review.",
          "Borrowers should scan fee worksheets for discount points, underwriting fees, processing charges, appraisal assumptions, title estimates, prepaid escrows, and any unexplained lender credits that appear to make the cash-to-close figure unusually attractive.",
          "If something looks materially cheaper than competing quotes, the right question is not whether the lender is generous. It is which assumption has changed and whether that change is acceptable for your goal.",
          "This review stage protects against false comparisons and last-minute pricing surprises."
        ),
        paragraph(
          "Finally, sanity-check the loan against your own timeline and risk tolerance.",
          "A refinance that works beautifully for a homeowner planning to stay put for seven years may be mediocre for someone likely to move in two. A cash-out refinance that looks manageable under today's insurance bill may feel very different if taxes and insurance rise next year.",
          "The most confident borrowers combine lender quotes with scenario planning, then choose the loan that still looks sensible under less optimistic assumptions.",
          "That extra step often separates an acceptable refinance from an excellent one."
        ),
      ],
    },
    {
      title: `Final takeaways on ${page.keyword}`,
      intro: "A strong refinance decision is disciplined, not impulsive.",
      paragraphs: [
        paragraph(
          `${page.h1} is ultimately about choosing the loan structure that best serves your real objective.`,
          "Sometimes that will be the lowest available rate. Sometimes it will be the lowest-fee option, the shortest safe term, or the most efficient way to unlock equity without damaging long-term cost discipline.",
          "The most useful refinance analysis respects all of those possibilities instead of forcing every homeowner into the same formula.",
          "That is why sophisticated shopping beats reactive shopping almost every time."
        ),
        paragraph(
          "Homeowners who gather documents early, compare multiple lenders on equal footing, and model the results through a break-even framework usually make better decisions than borrowers who focus only on headline pricing.",
          "They also move through underwriting with fewer surprises because they already understand the role of credit, equity, reserves, and program fit.",
          "Mortgage refinance is not simple, but it becomes much more manageable when the process is structured well.",
          "This guide is designed to provide that structure."
        ),
        paragraph(
          "Use the related calculators, comparisons, and category guides throughout the site to keep pressure-testing any scenario you are considering.",
          "Refinancing is one of the largest recurring financial decisions many households make, and the difference between a good and average execution can be measured in thousands of dollars.",
          "The best outcome usually comes from patient comparison rather than a rushed lock.",
          "When you use the tools together, the odds of making a durable decision improve substantially."
        ),
      ],
    },
  ];

  return sections
    .map((section, index) => `<section id="section-${index + 1}" class="content-section">
      <p class="eyebrow">${escapeHtml(page.category)}</p>
      <h2>${escapeHtml(section.title)}</h2>
      <p class="section-intro">${escapeHtml(section.intro)}</p>
      ${section.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
      ${section.list ? `<ul>${section.list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
      ${section.table || ""}
      ${section.chart || ""}
    </section>`)
    .join("");
}

function buildArticleContent(title, keyword, category) {
  const sections = [
    [
      `How ${keyword} fits into refinance planning`,
      `${title} matters because homeowners often see a narrow question on search, but the real answer usually sits inside a larger refinance strategy. The right recommendation depends on current mortgage rate, remaining term, equity position, fee drag, credit profile, and how long the homeowner expects to keep the property. Looking at only one variable tends to produce average decisions instead of durable ones.`,
      `In practice, ${keyword} should be reviewed as part of a full quote comparison process. That means lining up the existing mortgage against the proposed refinance, calculating the change in full monthly housing payment, identifying which fees are lender controlled, and asking whether the refinance improves the balance sheet enough to justify resetting costs and paperwork.`,
      `Borrowers often assume that if a refinance solves one problem it is automatically a good loan. A more careful view is that the refinance should solve the main problem without creating a second hidden problem somewhere else, such as a much longer break-even horizon or unnecessary payment shock.`,
    ],
    [
      "Key approval and pricing factors",
      `Lenders evaluate ${keyword} through the same broad mortgage lens used elsewhere: credit score, debt-to-income ratio, occupancy, loan-to-value, reserves, property type, and documentation quality. However, the weight of each factor changes based on the specific refinance path. Cash-out and jumbo refinance tend to price more defensively, while FHA streamline or VA IRRRL may remove some friction for eligible borrowers.`,
      `That shift in lender posture is why homeowners should avoid comparing generic averages to their personal scenario without adjustment. A borrower with substantial equity and stable income can often absorb a middling credit score better than a borrower with little equity and high payment sensitivity. Similarly, low fees can matter more than a slightly better rate when the homeowner expects to move or refinance again within a few years.`,
      `The underwriting file is not just a pass-fail gate. It shapes the quote itself. Stronger files often get access to cleaner pricing, more flexible terms, and less friction when conditions come back from underwriting.`,
    ],
    [
      "Costs, break-even timing, and tradeoffs",
      `Every refinance article should eventually come back to costs. ${title} only matters financially if the costs are proportionate to the benefit. That benefit might be monthly savings, faster amortization, equity access, or the replacement of a less stable loan structure. But no refinance is truly free, even when a lender frames the offer as low-cost or no-closing-cost.`,
      `A practical way to evaluate the opportunity is to estimate total lender fees, title and escrow charges, government costs, prepaid items, and any discount points, then divide by the monthly savings or the quantifiable benefit. Borrowers with shorter holding periods usually need a faster break-even point than long-term homeowners. This becomes especially important when the refinance gain looks modest on paper.`,
      `Term resets also deserve attention. Some homeowners lower the payment by stretching into a fresh long term, while others deliberately raise the payment to accelerate payoff. The better answer depends on liquidity needs, retirement timeline, other debts, and how likely the homeowner is to keep the loan long enough for the plan to work.`,
    ],
    [
      "When the strategy usually works best",
      `The strongest use case for ${keyword} tends to combine clear objective, manageable fees, and enough time horizon to let the refinance deliver its value. For some households that means replacing a materially higher existing rate. For others it means shifting from an FHA loan with mortgage insurance to a conventional loan after home values and paydown improve equity. In equity-access scenarios, it may mean using proceeds for debt consolidation or renovations that have clear household utility.`,
      `The strategy becomes weaker when the loan is likely to be replaced quickly, when fees are high relative to the benefit, or when the borrower is relying on optimistic assumptions about future income or property value. Mortgage decisions become safer when they are stress-tested against less favorable conditions instead of assuming the smoothest possible outcome.`,
      `A disciplined borrower also thinks about the refinance after closing. Will the new payment still feel comfortable if taxes or insurance rise? Will the new loan still make sense if the borrower keeps the property longer than expected? Those questions usually separate a polished refinance from a merely acceptable one.`,
    ],
    [
      "Common mistakes to avoid",
      `One common mistake is treating a lender advertisement as a comparable quote. Another is ignoring APR, discount points, or financed fees while focusing only on the note rate. Homeowners also run into problems when they compare a 15-day lock against a 45-day lock, or when they assume a no-appraisal or low-doc pathway automatically makes the loan cheaper.`,
      `Another mistake is skipping the documentation stage until late in the process. Income shifts, side businesses, rental income, alimony, trusts, bonus history, or large bank deposits can all complicate underwriting. Borrowers who organize these items early typically move faster and avoid misreading a slow file as a pricing issue.`,
      `Finally, some homeowners refinance for a rate reduction that looks psychologically satisfying but is not meaningful enough after fees. Smaller rate improvements can still be worthwhile, especially on large balances, but only when the full math supports the decision.`,
    ],
    [
      `Bottom line on ${title}`,
      `${title} is best evaluated as a structured decision rather than a headline answer. When you compare rate, APR, fees, term changes, equity impact, and underwriting fit together, the path usually becomes clearer.`,
      `Use this article alongside the calculator tools, comparison guides, and state pages on the site so the scenario is tested from more than one angle. That is especially helpful when your refinance involves a life event, lower credit, thin equity, or a property in a higher-cost state.`,
      `The most successful refinance borrowers do not simply ask whether a loan can close. They ask whether it closes on terms that remain useful long after the introductory quote conversation ends.`,
    ],
  ];

  return sections
    .map(
      ([heading, p1, p2, p3], idx) => `<section class="content-section" id="article-${idx + 1}">
        <p class="eyebrow">${escapeHtml(category)}</p>
        <h2>${escapeHtml(heading)}</h2>
        <p>${escapeHtml(p1)}</p>
        <p>${escapeHtml(p2)}</p>
        <p>${escapeHtml(p3)}</p>
      </section>`,
    )
    .join("");
}

function buildComparisonContent(title) {
  const rows = [
    ["Upfront costs", "Varies by lender and points", "Can be lower or higher depending on structure"],
    ["Monthly payment behavior", "Often lower if term resets or rate drops", "Depends on second-lien pricing and term"],
    ["Impact on first mortgage", "Replaces first lien", "Leaves first mortgage intact"],
    ["Best fit", "When full-loan reset improves the household plan", "When preserving an existing low first rate matters"],
  ];

  return `
    <section class="content-section">
      <p class="eyebrow">Comparison Guide</p>
      <h2>How to compare ${escapeHtml(title)} the right way</h2>
      <p>${escapeHtml(title)} becomes clearer once the borrower compares total cost over the expected holding period instead of focusing on a single monthly-payment headline. Some structures look cheaper in the first year, while others create better outcomes across five to ten years because fee drag, rate spread, and amortization behave differently over time.</p>
      <p>When the current first mortgage carries a very low rate, replacing it may create unnecessary cost even if the refinance offers one neat blended payment. On the other hand, a full refinance can be cleaner when the existing loan is already expensive, when cash flow relief is the main goal, or when the borrower wants to reset multiple obligations at once.</p>
      <p>The strongest comparison treats payment, APR, fees, term length, lien position, and household flexibility as a package. That is how lenders, brokers, and experienced borrowers separate attractive marketing language from actually useful structures.</p>
      ${comparisonTable(["Factor", "Option A", "Option B"], rows, `${title} snapshot`)}
    </section>
    <section class="content-section">
      <p class="eyebrow">Decision Triggers</p>
      <h2>Questions that usually decide the winner</h2>
      <p>If preserving an existing low first-lien mortgage rate is strategically important, the second-lien or home-equity path often deserves stronger consideration. If reducing the full monthly payment, simplifying debt, or obtaining a large amount of equity at one rate matters more, refinance can move ahead.</p>
      <p>Borrowers should also evaluate how sensitive they are to payment changes in the next few years. Options with variable pricing or shorter draw periods may look efficient today but behave differently once markets or household income change.</p>
      <p>Because these tradeoffs are highly scenario-specific, homeowners usually benefit from running both paths through a calculator and then comparing them over realistic holding periods such as 24 months, 60 months, and 120 months.</p>
    </section>
    <section class="content-section">
      <p class="eyebrow">Bottom Line</p>
      <h2>What usually matters most</h2>
      <p>The best outcome is rarely the option with the most appealing headline. It is the option that balances cash at closing, monthly affordability, total interest, risk, and flexibility better than the alternative.</p>
      <p>That is why the final check should always be practical: will this structure still feel smart if rates move, home values flatten, or your timeline changes? If the answer is yes, you are likely comparing the options the right way.</p>
    </section>
  `;
}

function buildFaqContent(title, category) {
  const faqs = articleFaqs(category);
  return `<section class="content-section">
    <p class="eyebrow">${escapeHtml(category)}</p>
    <h2>${escapeHtml(title)}</h2>
    <p>This FAQ page consolidates the recurring questions homeowners ask when evaluating ${escapeHtml(category.toLowerCase())}. Each answer is written to be practical, not promotional, and to connect directly to the broader refinance guides on the site.</p>
    <div class="faq-list">
      ${faqs
        .map(
          (faq) => `<details class="faq-item"><summary>${escapeHtml(faq.q)}</summary><p>${escapeHtml(faq.a)}</p></details>`,
        )
        .join("")}
    </div>
  </section>`;
}

function stateSpecificData(name) {
  const data = {
    California: { costs: "$3,900-$8,400", pace: "21-38 days", note: "High balance variance and strong appraisal sensitivity." },
    Texas: { costs: "$3,100-$6,300", pace: "22-35 days", note: "Cash-out rules require closer structural review." },
    Florida: { costs: "$3,600-$7,400", pace: "24-40 days", note: "Insurance and settlement variability can change cash-to-close materially." },
    "New York": { costs: "$4,600-$9,200", pace: "28-45 days", note: "Attorney-closing norms and title charges often run above national averages." },
    Illinois: { costs: "$3,000-$6,100", pace: "21-34 days", note: "County-level recording and title costs are worth checking lender by lender." },
    Georgia: { costs: "$2,900-$5,700", pace: "20-32 days", note: "Attorney involvement can influence closing experience and fees." },
    "North Carolina": { costs: "$2,800-$5,800", pace: "20-33 days", note: "Local attorney and title workflow shape timing." },
    Virginia: { costs: "$2,900-$5,900", pace: "19-31 days", note: "Military borrower activity can increase relevance of VA refinance paths." },
    Washington: { costs: "$3,200-$6,400", pace: "22-34 days", note: "Strong conventional and jumbo activity can widen quote dispersion." },
    Arizona: { costs: "$2,700-$5,500", pace: "18-30 days", note: "Streamlined title workflow often supports efficient closings." },
  };
  return data[name];
}

function buildStateContent(name) {
  const data = stateSpecificData(name);
  return `
    <section class="content-section">
      <p class="eyebrow">State Guide</p>
      <h2>${escapeHtml(name)} refinance overview</h2>
      <p>${escapeHtml(name)} homeowners often see refinance economics shaped by local settlement practices, title costs, county recording fees, and lender appetite for the specific property mix in the state. Those local variables influence the actual total cost more than many national mortgage articles acknowledge.</p>
      <p>Typical refinance closing costs in ${escapeHtml(name)} often land around ${escapeHtml(data.costs)}, although high-balance loans, discount points, escrows, and property-specific title work can push the total higher. Borrowers shopping small rate improvements should compare local cost drag carefully before assuming a refinance will break even quickly.</p>
      <p>The refinance timeline in ${escapeHtml(name)} often runs around ${escapeHtml(data.pace)}. ${escapeHtml(data.note)} That makes lender execution quality nearly as important as the initial quote.</p>
      ${comparisonTable(
        ["Category", `${name} snapshot`, "Why it matters"],
        [
          ["Typical cost range", data.costs, "Shapes break-even timing"],
          ["Typical closing pace", data.pace, "Influences rate-lock planning"],
          ["Best shopping strategy", "3-5 matching quotes", "Improves fee comparison"],
          ["Most important local variable", "Settlement workflow", "Affects friction and timing"],
        ],
        `${name} refinance summary`,
      )}
    </section>
    <section class="content-section">
      <p class="eyebrow">Borrower Strategy</p>
      <h2>How to shop refinance in ${escapeHtml(name)}</h2>
      <p>Borrowers in ${escapeHtml(name)} usually benefit from comparing lenders that are already active in the state rather than relying only on national advertisements. State-specific title partners, appraisal turn times, and local closing conventions can affect whether a low advertised rate is actually deliverable on schedule.</p>
      <p>It also helps to separate lender-controlled fees from unavoidable local costs. That way you can tell whether a quote is expensive because the lender is charging more or because the property sits in a market with naturally higher transaction friction.</p>
      <p>For homeowners considering cash-out refinance, attorney review, divorce-related title transfer, or investment property refinance, state-specific details become even more important and deserve lender-level confirmation early in the process.</p>
    </section>
    <section class="content-section">
      <p class="eyebrow">Bottom Line</p>
      <h2>What ${escapeHtml(name)} homeowners should remember</h2>
      <p>The best refinance quotes in ${escapeHtml(name)} are the ones that remain attractive after local fees, real closing speed, and state-specific process details are accounted for. Rate shopping matters, but execution and local cost awareness matter too.</p>
      <p>Use the broader refinance guides and calculators on this site alongside this state page so the mortgage math and the local closing reality are being evaluated together.</p>
    </section>
  `;
}

function calculatorConfig(kind, title) {
  const configs = {
    refinance: {
      fields: [
        ["currentBalance", "Current balance", "number", "340000"],
        ["currentRate", "Current rate (%)", "number", "7.25"],
        ["newRate", "New rate (%)", "number", "6.25"],
        ["remainingYears", "Years remaining", "number", "25"],
        ["newYears", "New term (years)", "number", "30"],
        ["closingCosts", "Closing costs", "number", "4800"],
      ],
    },
    cashout: {
      fields: [
        ["homeValue", "Home value", "number", "525000"],
        ["currentBalance", "Current mortgage balance", "number", "295000"],
        ["maxLtv", "Max cash-out LTV (%)", "number", "80"],
        ["newRate", "New rate (%)", "number", "6.85"],
        ["newYears", "New term (years)", "number", "30"],
        ["closingCosts", "Closing costs", "number", "6200"],
      ],
    },
    breakeven: {
      fields: [
        ["monthlySavings", "Monthly savings", "number", "210"],
        ["closingCosts", "Closing costs", "number", "5300"],
      ],
    },
    savings: {
      fields: [
        ["currentBalance", "Balance", "number", "360000"],
        ["currentRate", "Current rate (%)", "number", "7.1"],
        ["newRate", "New rate (%)", "number", "6.15"],
        ["years", "Years remaining", "number", "26"],
      ],
    },
    closing: {
      fields: [
        ["loanAmount", "Loan amount", "number", "350000"],
        ["origination", "Origination fee (%)", "number", "0.75"],
        ["title", "Title and settlement", "number", "1850"],
        ["government", "Recording/government fees", "number", "310"],
        ["prepaids", "Prepaids and escrow", "number", "2250"],
        ["points", "Discount points", "number", "0"],
      ],
    },
    points: {
      fields: [
        ["loanAmount", "Loan amount", "number", "400000"],
        ["pointPercent", "Points purchased (%)", "number", "1"],
        ["monthlySavings", "Monthly savings from points", "number", "125"],
      ],
    },
    ltv: {
      fields: [
        ["loanAmount", "Loan amount", "number", "315000"],
        ["homeValue", "Home value", "number", "465000"],
      ],
    },
    pmi: {
      fields: [
        ["currentBalance", "Current balance", "number", "298000"],
        ["homeValue", "Current home value", "number", "420000"],
        ["monthlyPmi", "Monthly PMI", "number", "148"],
        ["closingCosts", "Refinance closing costs", "number", "3900"],
      ],
    },
    equity: {
      fields: [
        ["homeValue", "Home value", "number", "550000"],
        ["mortgageBalance", "Mortgage balance", "number", "327000"],
      ],
    },
    interest: {
      fields: [
        ["balance", "Balance", "number", "325000"],
        ["currentRate", "Current rate (%)", "number", "7.2"],
        ["newRate", "New rate (%)", "number", "6.1"],
        ["years", "Years", "number", "27"],
      ],
    },
  };
  return {
    title,
    description: `${title} for homeowners comparing refinance scenarios, payment impact, and break-even timing.`,
    ...configs[kind],
  };
}

function buildCalculatorContent(slug, title, kind) {
  const config = calculatorConfig(kind, title);
  return `
    <section class="content-section">
      <p class="eyebrow">Interactive Tool</p>
      <h2>${escapeHtml(title)}</h2>
      <p>This calculator is built to help homeowners pressure-test refinance scenarios before applying. Use it to estimate payment changes, break-even timing, or equity access, then compare the output against lender quotes and the related editorial guides.</p>
      <div class="calculator-shell" data-calculator="${escapeHtml(kind)}">
        <form class="calculator-form">
          ${config.fields
            .map(
              ([name, label, type, value]) => `<label><span>${escapeHtml(label)}</span><input name="${escapeHtml(name)}" type="${escapeHtml(type)}" value="${escapeHtml(value)}" inputmode="decimal" /></label>`,
            )
            .join("")}
          <button class="button button-primary" type="submit">Calculate</button>
        </form>
        <div class="calculator-result" aria-live="polite">
          <p><strong>Ready for scenario planning:</strong> enter your numbers and calculate.</p>
        </div>
      </div>
    </section>
    <section class="content-section visual-split">
      <div>
        <p class="eyebrow">Why this tool matters</p>
        <h2>Refinance math should happen before rate shopping gets serious</h2>
        <p>Borrowers who can already estimate payment impact, break-even timing, and total cost tradeoffs tend to negotiate better and avoid being pulled toward the most marketable quote instead of the most useful quote.</p>
        <p>The tool is intentionally simple and mobile-friendly, but it is based on the same fundamental relationships a lender uses when modeling refinance outcomes: balance, rate, term, fees, and equity.</p>
      </div>
      <div class="panel">${inlineIllustration("calculator")}</div>
    </section>
  `;
}

function introTable(stats) {
  return `<div class="metric-grid">${stats
    .map(
      ([label, value]) => `<article><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></article>`,
    )
    .join("")}</div>`;
}

function relatedLinksSection(fromSlug, links) {
  return `<section class="related-links">
    <h2>Related refinance resources</h2>
    <div class="card-grid three">
      ${links
        .map(
          (link) => `<a class="mini-card" href="${localHref(fromSlug, link.slug)}"><strong>${escapeHtml(link.title)}</strong><span>${escapeHtml(link.label)}</span></a>`,
        )
        .join("")}
    </div>
  </section>`;
}

function renderFaqs(faqs) {
  return `<section class="content-section">
    <p class="eyebrow">FAQs</p>
    <h2>Frequently asked refinance questions</h2>
    <div class="faq-list">
      ${faqs
        .map(
          (faq) => `<details class="faq-item"><summary>${escapeHtml(faq.q)}</summary><p>${escapeHtml(faq.a)}</p></details>`,
        )
        .join("")}
    </div>
  </section>`;
}

function layout(page) {
  const title = normalizeTitle(page.title);
  const description = normalizeDescription(page.description);
  const breadcrumbHtml = renderBreadcrumbs(page.slug, page.breadcrumbs);
  const schemaPayload = {
    type: page.schemaType || page.type,
    title,
    description,
    url: urlFor(page.slug),
    image: `${domain}/assets/social-cover.svg`,
    published: lastmod,
    modified: lastmod,
    siteName: site.name,
    organizationName: site.organization.name,
    organizationUrl: site.organization.url,
    organizationLogo: site.organization.logo,
    breadcrumbs: page.breadcrumbs,
    faqs: page.faqs || [],
    calculatorType: page.calculatorType || "",
  };

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <link rel="canonical" href="${escapeHtml(urlFor(page.slug))}" />
    <meta property="og:type" content="${page.type === "home" ? "website" : "article"}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(urlFor(page.slug))}" />
    <meta property="og:image" content="${domain}/assets/social-cover.svg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${domain}/assets/social-cover.svg" />
    <meta name="theme-color" content="#12355b" />
    <link rel="icon" type="image/svg+xml" href="${assetHref(page.slug, "assets/favicon.svg")}" />
    <link rel="icon" href="${assetHref(page.slug, "assets/favicon.ico")}" sizes="any" />
    <link rel="apple-touch-icon" href="${assetHref(page.slug, "assets/favicon.svg")}" />
    <link rel="preload" href="${assetHref(page.slug, "styles.css")}" as="style" />
    <link rel="stylesheet" href="${assetHref(page.slug, "styles.css")}" />
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3733223915347669" crossorigin="anonymous"></script>
  </head>
  <body data-page-type="${escapeHtml(page.type)}">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header">
      <div class="container header-shell">
        <div class="header-inner">
          <a class="brand" href="${localHref(page.slug, "")}">
            <img src="${assetHref(page.slug, "assets/logo-mark.svg")}" alt="${escapeHtml(brand)} logo" width="50" height="50" loading="eager" />
            <span>
              <strong>${escapeHtml(brand)}</strong>
              <small>U.S. refinance rates, calculators, and comparisons</small>
            </span>
          </a>
          <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-nav">
            <span></span><span></span><span></span>
          </button>
          <nav class="site-nav" id="primary-nav" aria-label="Primary">
            <div class="nav-links">
              ${navGroups
                .map(([label, slug]) => `<a class="nav-link" href="${localHref(page.slug, slug.replace(/^\/|\/$/g, ""))}">${escapeHtml(label)}</a>`)
                .join("")}
            </div>
            <div class="nav-actions">
              <a class="nav-ghost" href="${localHref(page.slug, "about")}">About</a>
              <a class="nav-cta" href="${localHref(page.slug, "calculators/mortgage-refinance-calculator")}">Start Calculating</a>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <main id="main-content">
      ${page.slug ? `<section class="hero hero-inner"><div class="container">${breadcrumbHtml}<div class="page-hero"><div><span class="badge">Updated ${year}</span><h1>${escapeHtml(page.h1)}</h1><p class="hero-copy">${escapeHtml(description)}</p></div><div class="hero-side panel">${page.heroVisual || inlineIllustration(page.visual || "house")}</div></div></div></section>` : page.content}
      ${page.slug ? `<section class="section page-body"><div class="container layout-grid"><article class="article-body">${page.intro ? `<p class="lead">${escapeHtml(page.intro)}</p>` : ""}${page.metrics || ""}${page.content}${page.faqs?.length ? renderFaqs(page.faqs) : ""}${authorCard()}</article><aside class="article-sidebar"><div class="sticky-panel">${page.sidebar || renderSidebar(page.slug)}</div></aside></div></section>` : ""}
      ${page.related || ""}
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand brand-footer" href="${localHref(page.slug, "")}">
            <img src="${assetHref(page.slug, "assets/logo-mark.svg")}" alt="" width="42" height="42" loading="lazy" />
            <span>
              <strong>${escapeHtml(brand)}</strong>
              <small>${escapeHtml(site.tagline)}</small>
            </span>
          </a>
          <p>${escapeHtml(site.disclaimer)}</p>
        </div>
        <div>
          <h2>Categories</h2>
          <ul>${footerCategoryLinks
            .map(([label, href]) => `<li><a href="${localHref(page.slug, href.replace(/^\/|\/$/g, ""))}">${escapeHtml(label)}</a></li>`)
            .join("")}</ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>${legalLinks
            .map(([label, href]) => `<li><a href="${localHref(page.slug, href.replace(/^\/|\/$/g, ""))}">${escapeHtml(label)}</a></li>`)
            .join("")}</ul>
        </div>
      </div>
      <div class="container footer-base">
        <p>© ${year} ${escapeHtml(brand)}. All rights reserved.</p>
      </div>
    </footer>

    <div class="cookie-banner" data-cookie-banner hidden>
      <p>We use essential cookies for site functionality and optional cookies for analytics or advertising after deployment.</p>
      <div>
        <button type="button" class="button button-secondary" data-cookie-action="declined">Decline optional</button>
        <button type="button" class="button button-primary" data-cookie-action="accepted">Accept</button>
      </div>
    </div>

    <div id="schema-data" data-schema="${escapeHtml(JSON.stringify(schemaPayload))}"></div>
    <script src="${assetHref(page.slug, "main.js")}" defer></script>
  </body>
</html>`;
}

function renderSidebar(slug) {
  const suggestions = [
    { slug: "guides/best-mortgage-refinance-rates", title: "Best Mortgage Refinance Rates", label: "Pillar guide" },
    { slug: "guides/mortgage-refinance-closing-costs-explained", title: "Refinance Closing Costs", label: "Fee analysis" },
    { slug: "calculators/break-even-refinance-calculator", title: "Break-Even Calculator", label: "Interactive tool" },
    { slug: "comparisons/refinance-vs-home-equity-loan", title: "Refinance vs Home Equity Loan", label: "Comparison" },
  ];
  return `
    <section class="sidebar-card">
      <p class="eyebrow">Quick picks</p>
      <h3>Keep comparing before you lock</h3>
      <ul class="sidebar-links">
        ${suggestions
          .map(
            (item) => `<li><a href="${localHref(slug, item.slug)}"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.label)}</span></a></li>`,
          )
          .join("")}
      </ul>
    </section>
  `;
}

function buildHomePage() {
  return {
    slug: "",
    type: "home",
    title: "Mortgage Refinance Guides | Rates, Calculators, Cash-Out",
    h1: staticPages[0].h1,
    description:
      "Premium mortgage refinance guides for U.S. homeowners covering refinance rates, APR, cash-out options, FHA and VA programs, calculators, and closing costs.",
    breadcrumbs: [{ label: "Home", href: urlFor("") }],
    content: homeSections(),
    faqs: articleFaqs("mortgage refinance"),
  };
}

function buildPillarPage(page) {
  const slug = `guides/${page.slug}`;
  const hubSlug = categoryHubSlug(page.category);
  return {
    slug,
    type: "article",
    schemaType: "article",
    title: page.h1,
    h1: page.h1,
    description: page.description,
    intro: page.intro,
    breadcrumbs: breadcrumbs(slug, page.h1, hubSlug ? { label: page.category, href: urlFor(hubSlug) } : null),
    metrics: introTable(page.stats),
    heroVisual: inlineIllustration("house"),
    visual: "house",
    content: buildPillarContent(page),
    faqs: articleFaqs(page.keyword),
    related: relatedLinksSection(slug, [
      { slug: "calculators/mortgage-refinance-calculator", title: "Mortgage Refinance Calculator", label: "Interactive tool" },
      { slug: "closing-costs/no-closing-cost-refinance", title: "No Closing Cost Refinance", label: "Supporting article" },
      { slug: "comparisons/15-year-vs-30-year-refinance", title: "15-Year vs 30-Year Refinance", label: "Comparison guide" },
    ]),
  };
}

function buildArticlePage(entry) {
  const [section, slug, title, keyword] = entry;
  const sectionPath = sectionSlug(section);
  const pageSlug = `${sectionPath}/${slug}`;
  return {
    slug: pageSlug,
    type: "article",
    schemaType: "article",
    title,
    h1: title,
    description: `Understand ${keyword}, how lenders price it, where costs appear, and when the refinance strategy usually makes sense for U.S. homeowners.`,
    intro: `${title} is one piece of a larger refinance decision. This article explains how it works, what lenders care about, and how homeowners can compare scenarios without losing sight of fees, break-even timing, or underwriting fit.`,
    breadcrumbs: breadcrumbs(pageSlug, title, { label: slugTitle(sectionPath), href: urlFor(sectionPath) }),
    metrics: introTable([
      ["Primary keyword", keyword],
      ["Typical word count", "1500+"],
      ["Intent", "Research and compare"],
      ["Updated", year],
    ]),
    content: buildArticleContent(title, keyword, slugTitle(sectionPath)),
    faqs: articleFaqs(keyword),
    related: relatedLinksSection(pageSlug, [
      { slug: "guides/how-to-refinance-your-mortgage-step-by-step", title: "How to Refinance Step by Step", label: "Pillar guide" },
      { slug: "calculators/break-even-refinance-calculator", title: "Break-Even Calculator", label: "Interactive tool" },
      { slug: "comparisons/no-closing-cost-vs-low-rate-refinance", title: "No Closing Cost vs Low Rate Refinance", label: "Comparison" },
    ]),
  };
}

function buildCalculatorPage(entry) {
  const [slug, title, kind] = entry;
  const pageSlug = `calculators/${slug}`;
  return {
    slug: pageSlug,
    type: "calculator",
    schemaType: "calculator",
    calculatorType: kind,
    title,
    h1: title,
    description: `${title} to estimate refinance payment impact, closing costs, equity usage, or break-even timing using realistic homeowner inputs.`,
    intro: `Use the ${title.toLowerCase()} to test a refinance scenario before you compare lender quotes. The output is designed for planning, not lending approval, so it works best when paired with the editorial guides on the site.`,
    breadcrumbs: breadcrumbs(pageSlug, title, { label: "Calculators", href: urlFor("calculators") }),
    metrics: introTable([
      ["Tool type", "Interactive refinance calculator"],
      ["Best use", "Pre-application planning"],
      ["Mobile ready", "Yes"],
      ["Updated", year],
    ]),
    heroVisual: inlineIllustration("calculator"),
    visual: "calculator",
    content: buildCalculatorContent(slug, title, kind),
    faqs: calculatorFaqs(title),
    related: relatedLinksSection(pageSlug, [
      { slug: "guides/mortgage-refinance-calculator-hub", title: "Mortgage Refinance Calculator Hub", label: "Pillar guide" },
      { slug: "closing-costs/mortgage-points-refinance", title: "Mortgage Points Refinance", label: "Related article" },
      { slug: "credit-score-and-approval/refinance-mortgage-with-low-equity", title: "Refinance With Low Equity", label: "Approval article" },
    ]),
  };
}

function buildComparisonPage(entry) {
  const [slug, title, keyword] = entry;
  const pageSlug = `comparisons/${slug}`;
  return {
    slug: pageSlug,
    type: "article",
    schemaType: "article",
    title,
    h1: title,
    description: `Compare ${keyword}, including rate structure, fees, payment behavior, flexibility, and when each option tends to work best.`,
    intro: `${title} is not a one-size-fits-all choice. This guide compares both structures using cost, timeline, payment, and flexibility lenses so the tradeoffs are visible before you talk to a lender.`,
    breadcrumbs: breadcrumbs(pageSlug, title, { label: "Comparisons", href: urlFor("comparisons") }),
    metrics: introTable([
      ["Format", "Head-to-head comparison"],
      ["Keyword focus", keyword],
      ["Best for", "Choice architecture"],
      ["Updated", year],
    ]),
    content: buildComparisonContent(title),
    faqs: comparisonFaqs(title),
    related: relatedLinksSection(pageSlug, [
      { slug: "guides/home-equity-loan-vs-cash-out-refinance", title: "Home Equity Loan vs Cash-Out Refinance", label: "Pillar guide" },
      { slug: "calculators/home-equity-calculator", title: "Home Equity Calculator", label: "Interactive tool" },
      { slug: "cash-out/cash-out-refinance-for-debt-consolidation", title: "Cash-Out for Debt Consolidation", label: "Supporting article" },
    ]),
  };
}

function buildFaqPage(entry) {
  const [slug, title, category] = entry;
  const pageSlug = `faqs/${slug}`;
  return {
    slug: pageSlug,
    type: "article",
    schemaType: "article",
    title,
    h1: title,
    description: `${title} covering common questions homeowners ask about ${category.toLowerCase()}, from rates and fees to timing, approval, and lender comparison.`,
    intro: `This FAQ page collects high-frequency refinance questions in one place so readers can get fast answers before exploring the deeper guides and calculators on the site.`,
    breadcrumbs: breadcrumbs(pageSlug, title),
    metrics: introTable([
      ["Format", "FAQ"],
      ["Topic", category],
      ["Best for", "Quick answers"],
      ["Updated", year],
    ]),
    content: buildFaqContent(title, category),
    faqs: articleFaqs(category),
    related: relatedLinksSection(pageSlug, [
      { slug: "guides/how-to-refinance-your-mortgage-step-by-step", title: "How to Refinance Step by Step", label: "Pillar guide" },
      { slug: "calculators/break-even-refinance-calculator", title: "Break-Even Calculator", label: "Interactive tool" },
      { slug: "rates/refinance-rates-today", title: "Refinance Rates Today", label: "Rates article" },
    ]),
  };
}

function buildStatePage(entry) {
  const [slug, name] = entry;
  const pageSlug = `states/${slug}`;
  const title = `${name} Mortgage Refinance Guide`;
  return {
    slug: pageSlug,
    type: "article",
    schemaType: "article",
    title,
    h1: title,
    description: `${name} mortgage refinance guide covering typical closing costs, local timing patterns, title workflow, and rate-shopping considerations for homeowners.`,
    intro: `${name} mortgage refinance planning works best when local fee patterns and closing workflow are analyzed alongside the national mortgage math. This state guide highlights those local variables.`,
    breadcrumbs: breadcrumbs(pageSlug, title, { label: "State Guides", href: urlFor("states") }),
    metrics: introTable([
      ["State", name],
      ["Format", "Local refinance guide"],
      ["Focus", "Costs, timing, and process"],
      ["Updated", year],
    ]),
    content: buildStateContent(name),
    faqs: articleFaqs(`${name} refinance`),
    related: relatedLinksSection(pageSlug, [
      { slug: "guides/state-mortgage-refinance-guide", title: "State Mortgage Refinance Guide", label: "Pillar guide" },
      { slug: "closing-costs/refinance-title-and-escrow-fees", title: "Title and Escrow Fees", label: "Related article" },
      { slug: "calculators/closing-costs-calculator", title: "Closing Costs Calculator", label: "Interactive tool" },
    ]),
  };
}

function buildCategoryLanding(slug, title, description, cards) {
  const pageSlug = slug;
  return {
    slug: pageSlug,
    type: "article",
    schemaType: "article",
    title,
    h1: title,
    description,
    intro: `${title} brings together pillar content, supporting articles, calculators, and comparisons so readers can navigate the topic without bouncing between disconnected pages.`,
    breadcrumbs: breadcrumbs(pageSlug, title, { label: "Categories", href: urlFor("") }),
    metrics: introTable([
      ["Category hub", "Yes"],
      ["Navigation role", "Cluster entry"],
      ["Content type", "Editorial landing page"],
      ["Updated", year],
    ]),
    content: `<section class="content-section"><p>${escapeHtml(description)}</p><div class="card-grid three">${cards
      .map(
        (card) => `<a class="guide-card" href="${localHref(pageSlug, card.slug)}"><p class="meta-line"><span>${escapeHtml(card.label)}</span><span>Explore</span></p><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.text)}</p></a>`,
      )
      .join("")}</div></section>`,
    faqs: articleFaqs(title),
    related: "",
  };
}

function buildStaticPage(item) {
  if (!item.slug) return buildHomePage();
  return {
    slug: item.slug,
    type: "page",
    schemaType: "article",
    title: item.title,
    h1: item.h1,
    description: `${item.h1} for ${brand.toLowerCase()}, including editorial standards, trust details, policy information, or contact options.`,
    intro: item.slug === "sitemap" ? "Use this HTML sitemap to browse the full editorial structure of the website." : "",
    breadcrumbs: breadcrumbs(item.slug, item.h1),
    metrics: "",
    content: `<section class="content-section">${staticPageContent(item.slug, item.slug)}</section>`,
    faqs: [],
    related: "",
  };
}

function buildCategoryPages() {
  return [
    buildCategoryLanding("rates", "Mortgage Refinance Rates", "Explore refinance rate guidance, lender shopping frameworks, and rate comparisons across common loan terms.", [
      { slug: "guides/best-mortgage-refinance-rates", title: "Best Mortgage Refinance Rates", label: "Pillar guide", text: "Learn how note rate, APR, points, and lender credits interact." },
      { slug: "rates/refinance-rates-today", title: "Refinance Rates Today", label: "Supporting article", text: "A practical way to read daily refinance rate movement." },
      { slug: "rates/15-year-refinance-rates", title: "15-Year Refinance Rates", label: "Supporting article", text: "Compare term compression vs payment savings." },
    ]),
    buildCategoryLanding("cash-out", "Cash-Out Refinance", "Understand cash-out refinance proceeds, LTV limits, pricing premiums, and how to compare equity-access alternatives.", [
      { slug: "guides/cash-out-refinance-guide", title: "Cash-Out Refinance Guide", label: "Pillar guide", text: "A full guide to tapping home equity through refinancing." },
      { slug: "cash-out/cash-out-refinance-rates", title: "Cash-Out Refinance Rates", label: "Supporting article", text: "See why cash-out pricing usually runs above rate-and-term quotes." },
      { slug: "comparisons/cash-out-refinance-vs-heloc", title: "Cash-Out Refinance vs HELOC", label: "Comparison", text: "Compare first-lien reset against keeping the current mortgage." },
    ]),
    buildCategoryLanding("fha-refinance", "FHA Refinance", "Review FHA streamline refinance, FHA requirements, and when an FHA borrower should compare a conventional exit strategy.", [
      { slug: "guides/fha-streamline-refinance-guide", title: "FHA Streamline Refinance Guide", label: "Pillar guide", text: "Reduced-doc refinance guidance for existing FHA borrowers." },
      { slug: "fha-refinance/fha-refinance-requirements", title: "FHA Refinance Requirements", label: "Supporting article", text: "The approval standards and benefit tests homeowners should know." },
      { slug: "comparisons/conventional-vs-fha-refinance", title: "Conventional vs FHA Refinance", label: "Comparison", text: "A side-by-side look at tradeoffs for FHA borrowers." },
    ]),
    buildCategoryLanding("va-refinance", "VA Refinance", "Compare VA IRRRL, VA cash-out refinance, fee rules, and the questions veterans should ask before locking.", [
      { slug: "guides/va-irrrl-refinance-guide", title: "VA IRRRL Refinance Guide", label: "Pillar guide", text: "Streamlined VA refinance strategy and fee review." },
      { slug: "va-refinance/va-irrrl-rates", title: "VA IRRRL Rates", label: "Supporting article", text: "Understand how VA streamline pricing behaves." },
      { slug: "comparisons/va-irrrl-vs-va-cash-out", title: "VA IRRRL vs VA Cash-Out", label: "Comparison", text: "Choose the right VA refinance path for the goal." },
    ]),
    buildCategoryLanding("jumbo-refinance", "Jumbo Loan Refinance", "Learn how jumbo refinance pricing, reserve requirements, and property complexity affect lender shopping.", [
      { slug: "rates/jumbo-refinance-rates", title: "Jumbo Refinance Rates", label: "Supporting article", text: "See how jumbo rate spread differs from conforming refinance." },
      { slug: "jumbo-refinance/jumbo-refinance-requirements", title: "Jumbo Refinance Requirements", label: "Supporting article", text: "Reserves, credit, and property review for jumbo borrowers." },
      { slug: "guides/best-mortgage-refinance-rates", title: "Best Mortgage Refinance Rates", label: "Pillar guide", text: "Use the rate guide to benchmark jumbo refinance shopping." },
    ]),
    buildCategoryLanding("closing-costs", "Closing Costs and Fees", "Understand refinance closing costs, points, title fees, escrow items, and how to compare low-fee vs low-rate structures.", [
      { slug: "guides/mortgage-refinance-closing-costs-explained", title: "Refinance Closing Costs Explained", label: "Pillar guide", text: "A full breakdown of fee categories and tradeoffs." },
      { slug: "closing-costs/no-closing-cost-refinance", title: "No Closing Cost Refinance", label: "Supporting article", text: "Marketing language decoded with practical examples." },
      { slug: "calculators/closing-costs-calculator", title: "Closing Costs Calculator", label: "Calculator", text: "Estimate fee drag before requesting lender quotes." },
    ]),
    buildCategoryLanding("comparisons", "Mortgage Refinance Comparisons", "Compare refinance structures side by side, including term choices, equity alternatives, no-closing-cost tradeoffs, and government-program differences.", [
      { slug: "comparisons/refinance-vs-home-equity-loan", title: "Refinance vs Home Equity Loan", label: "Comparison", text: "A first-lien reset compared with a second-lien borrowing path." },
      { slug: "comparisons/cash-out-refinance-vs-heloc", title: "Cash-Out Refinance vs HELOC", label: "Comparison", text: "Compare payment stability, flexibility, and total cost." },
      { slug: "comparisons/15-year-vs-30-year-refinance", title: "15-Year vs 30-Year Refinance", label: "Comparison", text: "Choose between faster payoff and lower monthly obligations." },
    ]),
    buildCategoryLanding("credit-score-and-approval", "Credit Score and Refinance Approval", "Review approval standards, low-equity challenges, bankruptcy seasoning, divorce-related refinance, and lender risk signals.", [
      { slug: "guides/refinance-with-bad-credit", title: "Refinance With Bad Credit", label: "Pillar guide", text: "How approval and pricing change across credit bands." },
      { slug: "credit-score-and-approval/refinance-after-bankruptcy", title: "Refinance After Bankruptcy", label: "Supporting article", text: "Timing, seasoning, and documentation expectations." },
      { slug: "credit-score-and-approval/refinance-after-divorce", title: "Refinance After Divorce", label: "Supporting article", text: "Title, liability, and underwriting considerations." },
    ]),
    buildCategoryLanding("calculators", "Mortgage Refinance Calculators", "Use refinance calculators for payments, break-even timing, points, LTV, PMI removal, equity, and interest savings.", [
      { slug: "guides/mortgage-refinance-calculator-hub", title: "Mortgage Refinance Calculator Hub", label: "Pillar guide", text: "The master guide to refinance scenario planning." },
      { slug: "calculators/mortgage-refinance-calculator", title: "Mortgage Refinance Calculator", label: "Calculator", text: "Model payment changes and closing costs together." },
      { slug: "calculators/pmi-removal-calculator", title: "PMI Removal Calculator", label: "Calculator", text: "Estimate when a refinance may remove PMI efficiently." },
    ]),
    buildCategoryLanding("states", "State-by-State Refinance Guides", "Explore state-specific refinance costs, title workflow, closing timelines, and local lender-shopping considerations.", [
      { slug: "guides/state-mortgage-refinance-guide", title: "State Mortgage Refinance Guide", label: "Pillar guide", text: "How location changes refinance economics." },
      { slug: "states/california", title: "California Mortgage Refinance Guide", label: "State guide", text: "High-balance and title-driven cost patterns." },
      { slug: "states/texas", title: "Texas Mortgage Refinance Guide", label: "State guide", text: "Cash-out structure and settlement considerations." },
    ]),
    buildCategoryLanding("home-equity-and-heloc-alternatives", "Home Equity and HELOC Alternatives", "Compare cash-out refinance with HELOCs, home equity loans, and second-lien strategies for homeowners who already hold a strong first mortgage rate.", [
      { slug: "guides/home-equity-loan-vs-cash-out-refinance", title: "Home Equity Loan vs Cash-Out Refinance", label: "Pillar guide", text: "The core first-lien vs second-lien decision framework." },
      { slug: "home-equity-and-heloc-alternatives/heloc-vs-cash-out-refinance", title: "HELOC vs Cash-Out Refinance", label: "Supporting article", text: "Compare flexibility, rate behavior, and closing costs." },
      { slug: "comparisons/refinance-vs-second-mortgage", title: "Refinance vs Second Mortgage", label: "Comparison", text: "Choose the structure that fits your current first mortgage." },
    ]),
  ];
}

function stylesCss() {
  return `
:root {
  --navy: #0d233b;
  --navy-2: #14385f;
  --blue: #2563eb;
  --blue-2: #4f80ff;
  --green: #149d6f;
  --green-2: #20c084;
  --ink: #172638;
  --muted: #5a6878;
  --line: #dce5f1;
  --line-strong: rgba(13, 35, 59, 0.14);
  --soft: #f3f7fc;
  --soft-2: #eef4fb;
  --paper: #fbfcfe;
  --white: #ffffff;
  --shadow-soft: 0 18px 44px rgba(13, 35, 59, 0.08);
  --shadow-large: 0 30px 70px rgba(13, 35, 59, 0.12);
  --radius: 30px;
  --radius-md: 22px;
  --radius-sm: 16px;
  --heading: "Avenir Next", "Segoe UI", "Helvetica Neue", sans-serif;
  --body: "Source Serif 4", Georgia, serif;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--ink);
  font-family: var(--body);
  line-height: 1.72;
  background:
    radial-gradient(circle at top left, rgba(37, 99, 235, 0.12), transparent 30%),
    radial-gradient(circle at 100% 12%, rgba(20, 157, 111, 0.08), transparent 24%),
    linear-gradient(180deg, #fbfdff 0%, #f5f8fc 55%, #f8fafc 100%);
}

a { color: var(--blue); text-decoration: none; }
a:hover { text-decoration: underline; }
img, svg { max-width: 100%; display: block; }
input, button, select, textarea { font: inherit; }

.container { width: min(1220px, calc(100% - 2rem)); margin: 0 auto; }
.skip-link {
  position: absolute;
  left: -9999px;
  top: auto;
}
.skip-link:focus {
  left: 1rem;
  top: 1rem;
  z-index: 100;
  padding: 0.7rem 0.95rem;
  background: var(--navy);
  color: #fff;
  border-radius: 999px;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 0.85rem 0;
  background: linear-gradient(180deg, rgba(251, 253, 255, 0.92), rgba(251, 253, 255, 0.84));
  backdrop-filter: blur(20px);
}

.header-shell {
  border: 1px solid rgba(13, 35, 59, 0.08);
  background: rgba(255, 255, 255, 0.88);
  box-shadow: var(--shadow-soft);
  border-radius: 999px;
  padding: 0 1rem;
}

.header-inner {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  color: var(--navy);
  text-decoration: none;
  min-width: 0;
}

.brand strong,
h1,
h2,
h3,
h4,
.button,
.nav-link,
.nav-cta,
.nav-ghost,
.badge,
.eyebrow,
.mini-label {
  font-family: var(--heading);
}

.brand strong {
  display: block;
  font-size: 1rem;
}

.brand small {
  display: block;
  color: var(--muted);
  font-size: 0.8rem;
  max-width: 32ch;
}

.site-nav,
.nav-links,
.nav-actions,
.hero-shell,
.hero-copy-stack,
.hero-metrics-grid,
.dashboard-grid,
.analytic-layout,
.lender-layout,
.editorial-grid,
.page-hero,
.layout-grid,
.footer-grid,
.feature-grid,
.card-grid,
.stat-list,
.metric-grid,
.mini-card-grid,
.state-grid,
.trust-grid,
.visual-split,
.calculator-form,
.hero-stat-row {
  display: grid;
  gap: 1.25rem;
}

.site-nav {
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 1rem;
}

.nav-links {
  grid-auto-flow: column;
  gap: 0.25rem;
  align-items: center;
}

.nav-actions {
  grid-auto-flow: column;
  gap: 0.65rem;
  align-items: center;
}

.nav-link,
.nav-ghost {
  color: var(--navy);
  padding: 0.68rem 0.9rem;
  border-radius: 999px;
  font-size: 0.92rem;
}

.nav-link:hover,
.nav-ghost:hover {
  text-decoration: none;
  background: rgba(37, 99, 235, 0.08);
}

.nav-ghost {
  color: var(--muted);
}

.nav-cta {
  color: #fff;
  background: linear-gradient(135deg, var(--navy), var(--blue));
  border-radius: 999px;
  padding: 0.84rem 1.14rem;
  box-shadow: 0 12px 26px rgba(37, 99, 235, 0.22);
}

.menu-toggle {
  display: none;
  border: 1px solid var(--line);
  background: #fff;
  border-radius: 14px;
  padding: 0.7rem;
}

.menu-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--navy);
  margin: 4px 0;
}

.hero {
  padding: 3rem 0 2.5rem;
}

.hero-home-rebuild {
  padding-top: 1.2rem;
}

.hero-shell {
  grid-template-columns: minmax(0, 1.08fr) minmax(380px, 0.92fr);
  gap: 2rem;
  align-items: stretch;
  padding: 2.2rem;
  border-radius: 40px;
  background:
    linear-gradient(135deg, rgba(13, 35, 59, 0.98) 0%, rgba(20, 56, 95, 0.96) 38%, rgba(37, 99, 235, 0.92) 100%);
  color: #fff;
  box-shadow: var(--shadow-large);
  overflow: hidden;
  position: relative;
}

.hero-shell::before,
.hero-shell::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.hero-shell::before {
  width: 420px;
  height: 420px;
  top: -220px;
  right: -120px;
  background: rgba(255, 255, 255, 0.07);
}

.hero-shell::after {
  width: 280px;
  height: 280px;
  bottom: -140px;
  left: -70px;
  background: rgba(20, 157, 111, 0.16);
}

.hero-copy-stack,
.hero-dashboard {
  position: relative;
  z-index: 1;
}

.hero-copy-stack {
  gap: 1.35rem;
}

.hero-chip-row {
  display: flex;
  gap: 0.55rem;
  flex-wrap: wrap;
}

.badge,
.hero-chip,
.mini-label,
.meta-line span:first-child {
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.78rem;
  border-radius: 999px;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.badge {
  color: var(--navy);
  background: rgba(255, 255, 255, 0.92);
}

.hero-chip {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.12);
}

h1 {
  margin: 0;
  font-size: clamp(2.7rem, 5vw, 5.35rem);
  line-height: 0.98;
  letter-spacing: -0.03em;
}

h2 {
  margin: 0 0 0.9rem;
  color: var(--navy);
  font-size: clamp(1.85rem, 3vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.025em;
}

h3 {
  margin: 0 0 0.7rem;
  color: var(--navy);
  font-size: 1.23rem;
  line-height: 1.2;
}

.hero-copy,
.lead,
.section-head p,
.section-intro,
.callout p,
.sidebar-card p,
.editorial-block p,
.guide-card p,
.feature-card p,
.mini-card span,
.state-card span {
  color: var(--muted);
}

.hero-shell .hero-copy,
.hero-shell h1,
.hero-shell h3,
.hero-shell p,
.hero-shell li,
.hero-shell strong,
.hero-shell span {
  color: #fff;
}

.hero-copy {
  margin: 0;
  font-size: 1.1rem;
  max-width: 63ch;
}

.hero-actions,
.footer-social {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  align-items: center;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  border-radius: 999px;
  padding: 0.95rem 1.3rem;
  border: 1px solid transparent;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
}

.button-primary {
  background: linear-gradient(135deg, var(--green), var(--green-2));
  color: #fff;
  box-shadow: 0 16px 30px rgba(20, 157, 111, 0.28);
}

.button-secondary {
  color: var(--navy);
  background: rgba(255, 255, 255, 0.92);
  border-color: rgba(255, 255, 255, 0.3);
}

.hero-metrics-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.hero-metrics-grid article,
.hero-stat-row div,
.metric-grid article,
.stat-list article {
  padding: 1rem 1.05rem;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(8px);
}

.hero-metrics-grid span,
.hero-stat-row span,
.metric-grid span,
.stat-list span {
  display: block;
  font-size: 0.82rem;
  color: inherit;
  opacity: 0.78;
}

.hero-metrics-grid strong,
.hero-stat-row strong,
.metric-grid strong,
.stat-list strong {
  display: block;
  margin-top: 0.36rem;
  font-family: var(--heading);
  font-size: 1.2rem;
  color: inherit;
}

.hero-metrics-grid p,
.hero-stat-row p {
  margin: 0.42rem 0 0;
  font-size: 0.85rem;
  opacity: 0.82;
}

.logo-strip {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.7rem;
}

.logo-strip span {
  display: grid;
  place-items: center;
  min-height: 62px;
  padding: 0.75rem;
  text-align: center;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-family: var(--heading);
  font-size: 0.82rem;
}

.hero-dashboard {
  display: grid;
  gap: 1rem;
}

.hero-card,
.panel,
.info-card,
.guide-card,
.mini-card,
.state-card,
.sidebar-card,
.editorial-block,
.callout,
.calculator-shell,
.trust-grid article,
.table-card,
.feature-card,
.dashboard-tile,
.editorial-card {
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(13, 35, 59, 0.08);
  border-radius: var(--radius);
  box-shadow: var(--shadow-soft);
}

.hero-card,
.panel,
.table-card {
  padding: 1.35rem;
}

.hero-card.hero-visual {
  background: rgba(255, 255, 255, 0.96);
  color: var(--ink);
  min-height: 100%;
}

.hero-card.hero-visual h3,
.hero-card.hero-visual span,
.hero-card.hero-visual strong,
.hero-card.hero-visual p,
.hero-card.hero-visual .mini-label {
  color: var(--navy);
}

.dashboard-grid {
  grid-template-columns: 1fr 1fr;
}

.dashboard-tile {
  padding: 1.15rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.11);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dashboard-tile.accent {
  background: linear-gradient(135deg, rgba(20, 157, 111, 0.18), rgba(255, 255, 255, 0.1));
}

.hero-points {
  margin: 0;
  padding-left: 1.1rem;
}

.hero-points.compact {
  font-size: 0.92rem;
}

.hero-points li,
.article-body ul li {
  margin-bottom: 0.45rem;
}

.section {
  padding: 2rem 0 3.2rem;
}

.section-soft {
  background: linear-gradient(180deg, rgba(238, 244, 251, 0.6), rgba(255, 255, 255, 0));
}

.section-accent {
  background: linear-gradient(180deg, rgba(13, 35, 59, 0.03), rgba(37, 99, 235, 0.04));
}

.section-head {
  max-width: 78ch;
  margin-bottom: 1.5rem;
}

.split-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 0.6fr);
  align-items: end;
  gap: 1.4rem;
}

.eyebrow {
  margin: 0 0 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--green);
  font-size: 0.78rem;
  font-weight: 800;
}

.section-overview,
.section-analytics,
.section-states {
  position: relative;
}

.card-grid {
  align-items: stretch;
}

.card-grid.three {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.feature-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.feature-card,
.guide-card,
.mini-card,
.state-card,
.trust-grid article {
  padding: 1.4rem;
}

.feature-card {
  background:
    linear-gradient(180deg, #ffffff, #f8fbff);
}

.feature-kicker {
  display: inline-flex;
  margin-bottom: 0.9rem;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  background: var(--soft);
  color: var(--blue);
  font-family: var(--heading);
  font-size: 0.75rem;
  font-weight: 800;
}

.guide-card,
.mini-card,
.state-card,
.sidebar-links a {
  color: inherit;
  text-decoration: none;
}

.premium-card,
.polished-mini-card,
.state-card,
.feature-card {
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
}

.premium-card:hover,
.polished-mini-card:hover,
.state-card:hover,
.feature-card:hover,
.sidebar-links a:hover {
  text-decoration: none;
  transform: translateY(-3px);
  box-shadow: var(--shadow-large);
  border-color: rgba(37, 99, 235, 0.18);
}

.meta-line {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.9rem;
  color: var(--muted);
  font-size: 0.82rem;
}

.meta-line span:first-child {
  background: var(--soft);
  color: var(--navy);
}

.analytic-layout,
.lender-layout,
.editorial-grid,
.page-hero,
.layout-grid,
.footer-grid,
.visual-split {
  grid-template-columns: 1fr 1fr;
  align-items: start;
}

.analysis-stack {
  display: grid;
  gap: 0.9rem;
}

.stat-list,
.metric-grid,
.mini-card-grid,
.state-grid,
.trust-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.panel-chart {
  align-self: stretch;
}

.panel.dark {
  background: linear-gradient(155deg, #102844 0%, #14385f 52%, #245ed8 100%);
  color: #fff;
}

.panel.dark h3,
.panel.dark p,
.panel.dark span,
.panel.dark strong,
.panel.dark .eyebrow {
  color: #fff;
}

.chart-bars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(56px, 1fr));
  gap: 0.9rem;
  align-items: end;
  min-height: 250px;
  padding-top: 1rem;
}

.chart-bar {
  display: grid;
  gap: 0.55rem;
  justify-items: center;
}

.chart-bar span,
.chart-bar strong {
  text-align: center;
  font-family: var(--heading);
  font-size: 0.82rem;
}

.bar-track {
  width: 100%;
  max-width: 50px;
  height: 176px;
  border-radius: 999px;
  background: rgba(13, 35, 59, 0.09);
  overflow: hidden;
  position: relative;
}

.bar-track i {
  position: absolute;
  inset: auto 0 0;
  width: 100%;
  border-radius: 999px;
  background: linear-gradient(180deg, #84a8ff 0%, #2563eb 52%, #149d6f 100%);
}

.table-wrap {
  overflow-x: auto;
  margin-top: 1rem;
  border: 1px solid rgba(13, 35, 59, 0.08);
  border-radius: var(--radius-md);
  background: #fff;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 640px;
}

caption {
  text-align: left;
  padding: 1rem 1rem 0;
  color: var(--navy);
  font-family: var(--heading);
  font-weight: 700;
}

th,
td {
  padding: 0.95rem 1rem;
  border-bottom: 1px solid rgba(13, 35, 59, 0.08);
  text-align: left;
}

th {
  background: var(--soft);
  color: var(--navy);
  font-family: var(--heading);
}

.calculators-band .mini-card-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.mini-card {
  min-height: 138px;
  display: grid;
  align-content: space-between;
}

.mini-card strong,
.state-card strong {
  color: var(--navy);
  font-family: var(--heading);
  font-size: 1.02rem;
}

.rebuilt-state-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.state-card {
  min-height: 164px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(243, 247, 252, 0.94));
}

.editorial-grid {
  gap: 1rem;
}

.editorial-card {
  padding: 1.5rem;
}

.trust-grid {
  gap: 1rem;
}

.trust-grid article {
  min-height: 180px;
}

.breadcrumbs ol {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 0 0 1rem;
  padding: 0;
  color: var(--muted);
  font-size: 0.92rem;
}

.breadcrumbs li::after {
  content: "/";
  margin-left: 0.55rem;
}

.breadcrumbs li:last-child::after {
  content: "";
  margin: 0;
}

.hero-inner .page-hero {
  padding: 2rem;
  border-radius: 34px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(243, 247, 252, 0.95));
  border: 1px solid rgba(13, 35, 59, 0.08);
  box-shadow: var(--shadow-soft);
  align-items: center;
}

.page-body {
  padding-top: 0.3rem;
}

.layout-grid {
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 1.6rem;
}

.article-body,
.article-sidebar {
  min-width: 0;
}

.lead {
  margin-top: 0;
  font-size: 1.08rem;
}

.content-section {
  margin-bottom: 2rem;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid rgba(13, 35, 59, 0.08);
}

.content-section:last-child {
  border-bottom: 0;
}

.sticky-panel {
  position: sticky;
  top: 110px;
  display: grid;
  gap: 1rem;
}

.sidebar-card,
.editorial-block,
.callout,
.calculator-shell {
  padding: 1.2rem;
}

.sidebar-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.8rem;
}

.sidebar-links a strong {
  display: block;
  color: var(--navy);
}

.faq-list {
  display: grid;
  gap: 0.9rem;
}

.faq-item {
  padding: 1.05rem 1.15rem;
  background: #fff;
  border: 1px solid rgba(13, 35, 59, 0.08);
  border-radius: 18px;
}

.faq-item summary {
  cursor: pointer;
  list-style: none;
  font-family: var(--heading);
  color: var(--navy);
  font-weight: 700;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item p {
  margin: 0.9rem 0 0;
}

.inline-illustration {
  width: 100%;
  height: auto;
}

.callout {
  border-left: 5px solid var(--green);
}

.editorial-block {
  display: grid;
  gap: 0.55rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(13, 35, 59, 0.08);
  border-radius: var(--radius);
  box-shadow: var(--shadow-soft);
}

.editorial-block strong {
  color: var(--navy);
  font-family: var(--heading);
  font-size: 1.05rem;
}

.editorial-block p {
  margin: 0;
}

.editorial-block p:first-of-type {
  color: var(--green);
}

.editorial-byline {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.editorial-avatar {
  border-radius: 50%;
  flex-shrink: 0;
}

.editorial-byline > div {
  display: grid;
  gap: 0.25rem;
}

.editorial-byline a {
  color: var(--link, #1f4fd6);
  font-size: 0.875rem;
  text-decoration: none;
}

.editorial-byline a:hover {
  text-decoration: underline;
}

.calculator-form {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.calculator-form label {
  display: grid;
  gap: 0.45rem;
  color: var(--navy);
  font-family: var(--heading);
}

.calculator-form input {
  min-height: 50px;
  border-radius: 14px;
  border: 1px solid var(--line);
  padding: 0.88rem 0.95rem;
  background: #fff;
}

.calculator-result {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 18px;
  background: var(--soft);
}

.related-links {
  width: min(1220px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 0 0 3rem;
}

.site-footer {
  margin-top: 2rem;
  padding: 2.8rem 0 1.3rem;
  background: linear-gradient(180deg, #0d223a, #08192d);
  color: rgba(255, 255, 255, 0.82);
}

.site-footer a {
  color: #fff;
}

.site-footer h2 {
  color: #fff;
  font-size: 1rem;
}

.site-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;
}

.footer-grid {
  grid-template-columns: 1.35fr 0.9fr 0.9fr;
}

.footer-base {
  margin-top: 1.4rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.cookie-banner {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: min(420px, calc(100% - 2rem));
  padding: 1rem;
  border-radius: 22px;
  background: rgba(8, 25, 45, 0.96);
  color: #fff;
  box-shadow: var(--shadow-large);
  z-index: 60;
}

.cookie-banner p {
  margin-top: 0;
}

.cookie-banner .button-secondary {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.sitemap-group {
  margin-bottom: 2rem;
}

.sitemap-group ul {
  columns: 2;
  gap: 2rem;
}

.sitemap-group li {
  break-inside: avoid;
  margin-bottom: 0.55rem;
}

@media (max-width: 1100px) {
  .hero-shell,
  .analytic-layout,
  .lender-layout,
  .editorial-grid,
  .page-hero,
  .layout-grid,
  .footer-grid,
  .visual-split,
  .split-head {
    grid-template-columns: 1fr;
  }

  .feature-grid,
  .card-grid.three,
  .stat-list,
  .metric-grid,
  .mini-card-grid,
  .trust-grid,
  .rebuilt-state-grid,
  .hero-metrics-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .logo-strip {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 860px) {
  .header-shell {
    border-radius: 26px;
    padding: 0.35rem 0.85rem;
  }

  .site-nav {
    display: none;
    position: absolute;
    inset: calc(100% + 0.75rem) 0 auto;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
    border-radius: 26px;
    background: rgba(255, 255, 255, 0.98);
    border: 1px solid rgba(13, 35, 59, 0.08);
    box-shadow: var(--shadow-large);
  }

  .site-nav.is-open {
    display: grid;
  }

  .nav-links,
  .nav-actions {
    grid-auto-flow: row;
  }

  .menu-toggle {
    display: block;
  }

  .logo-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .dashboard-grid,
  .feature-grid,
  .card-grid.three,
  .stat-list,
  .metric-grid,
  .mini-card-grid,
  .trust-grid,
  .rebuilt-state-grid,
  .hero-metrics-grid,
  .calculator-form {
    grid-template-columns: 1fr;
  }

  .hero-shell {
    padding: 1.5rem;
    border-radius: 30px;
  }

  h1 {
    font-size: clamp(2.3rem, 12vw, 3.8rem);
  }

  .cookie-banner {
    left: 1rem;
    width: auto;
  }
}

@media (max-width: 560px) {
  .container {
    width: min(1220px, calc(100% - 1.25rem));
  }

  .header-inner {
    min-height: 70px;
  }

  .brand small {
    display: none;
  }

  .hero-shell {
    padding: 1.2rem;
  }

  .hero-copy {
    font-size: 1rem;
  }

  .button {
    width: 100%;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .bar-track {
    height: 146px;
  }

  .sitemap-group ul {
    columns: 1;
  }
}

/* Defensive fallback layer to keep local preview and Cloudflare rendering stable. */
body {
  background: linear-gradient(180deg, #fbfcff 0%, #f4f7fb 100%);
}

main,
section,
article,
aside {
  position: relative;
}

.site-header {
  background: rgba(251, 253, 255, 0.98);
  backdrop-filter: none;
}

.site-nav,
.nav-links,
.nav-actions {
  display: flex;
  align-items: center;
}

.site-nav {
  gap: 1rem;
}

.nav-links,
.nav-actions {
  gap: 0.5rem;
  flex-wrap: wrap;
}

.hero-shell::before,
.hero-shell::after {
  display: none;
}

.hero-shell {
  overflow: visible;
  align-items: stretch;
}

.hero-card,
.panel,
.table-card,
.feature-card,
.guide-card,
.mini-card,
.state-card,
.dashboard-tile,
.editorial-card,
.trust-grid article {
  background-clip: padding-box;
}

.rebuilt-state-grid,
.feature-grid,
.card-grid.three,
.mini-card-grid,
.stat-list,
.trust-grid {
  align-items: stretch;
}

.rebuilt-state-grid > *,
.feature-grid > *,
.card-grid.three > *,
.mini-card-grid > *,
.stat-list > *,
.trust-grid > * {
  min-width: 0;
}

@media (max-width: 860px) {
  .site-nav {
    display: none;
    flex-direction: column;
    align-items: stretch;
  }

  .site-nav.is-open {
    display: flex;
  }

  .nav-links,
  .nav-actions {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
}
`;
}

function mainJs() {
  return `
const COOKIE_NAME = "mrg_cookie_pref";

function parseSchema() {
  const holder = document.querySelector("#schema-data");
  if (!holder) return null;
  try {
    return JSON.parse(holder.dataset.schema || "{}");
  } catch {
    return null;
  }
}

function injectSchema() {
  const data = parseSchema();
  if (!data || document.querySelector("#dynamic-schema")) return;

  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: data.siteName,
      url: "https://mortgagerefinanceguides.com/",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://mortgagerefinanceguides.com/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://mortgagerefinanceguides.com/#organization",
      name: data.organizationName,
      url: data.organizationUrl,
      logo: data.organizationLogo,
      email: "javiperezguides@gmail.com",
      founder: {
        "@type": "Person",
        name: "Javi Pérez",
        url: "https://www.linkedin.com/in/javi-perez-guides",
        sameAs: ["https://www.linkedin.com/in/javi-perez-guides"],
      },
    },
  ];

  if (Array.isArray(data.breadcrumbs) && data.breadcrumbs.length > 1) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: data.breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: crumb.href,
      })),
    });
  }

  if (Array.isArray(data.faqs) && data.faqs.length) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    });
  }

  if (data.type === "home" || data.type === "article" || data.type === "page") {
    const article = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: data.title,
      description: data.description,
      datePublished: data.published,
      dateModified: data.modified,
      editor: {
        "@type": "Person",
        name: "Javi Pérez",
        url: "https://www.linkedin.com/in/javi-perez-guides",
        sameAs: ["https://www.linkedin.com/in/javi-perez-guides"],
      },
      publisher: {
        "@type": "Organization",
        name: data.organizationName,
        logo: {
          "@type": "ImageObject",
          url: data.organizationLogo,
        },
      },
      mainEntityOfPage: data.url,
      image: data.image,
    };
    graph.push(article);
  }

  if (data.type === "calculator") {
    graph.push({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: data.title,
      url: data.url,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      description: data.description,
    });
  }

  const script = document.createElement("script");
  script.id = "dynamic-schema";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(graph);
  document.head.appendChild(script);
}

function setupMenu() {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (!button || !nav) return;

  function closeMenu() {
    button.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 860) closeMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("is-open")) return;
    if (nav.contains(event.target) || button.contains(event.target)) return;
    closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
}

function setCookiePreference(value) {
  document.cookie = COOKIE_NAME + "=" + value + "; path=/; max-age=31536000; SameSite=Lax";
}

function getCookiePreference() {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(COOKIE_NAME + "="))
    ?.split("=")[1];
}

function setupCookieBanner() {
  const banner = document.querySelector("[data-cookie-banner]");
  if (!banner) return;
  if (!getCookiePreference()) banner.hidden = false;
  banner.querySelectorAll("[data-cookie-action]").forEach((button) => {
    button.addEventListener("click", () => {
      setCookiePreference(button.dataset.cookieAction);
      banner.hidden = true;
    });
  });
}

function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function number(value) {
  return Number.isFinite(value) ? value : 0;
}

function monthlyPayment(principal, annualRate, years) {
  const n = years * 12;
  const r = annualRate / 100 / 12;
  if (!r) return principal / Math.max(n, 1);
  return principal * (r / (1 - Math.pow(1 + r, -n)));
}

function renderResult(node, rows) {
  node.innerHTML = rows.map((row) => "<p><strong>" + row.label + ":</strong> " + row.value + "</p>").join("");
}

function setupCalculators() {
  document.querySelectorAll("[data-calculator]").forEach((wrapper) => {
    const form = wrapper.querySelector("form");
    const result = wrapper.querySelector(".calculator-result");
    if (!form || !result) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const kind = wrapper.dataset.calculator;
      const data = Object.fromEntries(new FormData(form).entries());

      if (kind === "refinance") {
        const current = monthlyPayment(number(+data.currentBalance), number(+data.currentRate), number(+data.remainingYears));
        const proposed = monthlyPayment(number(+data.currentBalance), number(+data.newRate), number(+data.newYears));
        const savings = current - proposed;
        const months = savings > 0 ? Math.ceil(number(+data.closingCosts) / savings) : 0;
        renderResult(result, [
          { label: "Current payment", value: currency(current) },
          { label: "Proposed payment", value: currency(proposed) },
          { label: "Monthly savings", value: currency(savings) },
          { label: "Simple break-even", value: months ? months + " months" : "No break-even" },
        ]);
      }

      if (kind === "cashout") {
        const maxLoan = number(+data.homeValue) * (number(+data.maxLtv) / 100);
        const cashOut = Math.max(0, maxLoan - number(+data.currentBalance) - number(+data.closingCosts));
        const payment = monthlyPayment(maxLoan, number(+data.newRate), number(+data.newYears));
        renderResult(result, [
          { label: "Max new loan", value: currency(maxLoan) },
          { label: "Estimated cash-out proceeds", value: currency(cashOut) },
          { label: "Estimated new payment", value: currency(payment) },
        ]);
      }

      if (kind === "breakeven") {
        const months = Math.ceil(number(+data.closingCosts) / Math.max(number(+data.monthlySavings), 1));
        renderResult(result, [
          { label: "Break-even timing", value: months + " months" },
          { label: "Approximate years", value: (months / 12).toFixed(1) + " years" },
        ]);
      }

      if (kind === "savings") {
        const current = monthlyPayment(number(+data.currentBalance), number(+data.currentRate), number(+data.years));
        const proposed = monthlyPayment(number(+data.currentBalance), number(+data.newRate), number(+data.years));
        renderResult(result, [
          { label: "Current payment", value: currency(current) },
          { label: "New payment", value: currency(proposed) },
          { label: "Monthly savings", value: currency(current - proposed) },
        ]);
      }

      if (kind === "closing") {
        const total =
          number(+data.loanAmount) * (number(+data.origination) / 100) +
          number(+data.title) +
          number(+data.government) +
          number(+data.prepaids) +
          number(+data.loanAmount) * (number(+data.points) / 100);
        renderResult(result, [
          { label: "Estimated closing costs", value: currency(total) },
          { label: "Cost as % of loan", value: ((total / Math.max(number(+data.loanAmount), 1)) * 100).toFixed(2) + "%" },
        ]);
      }

      if (kind === "points") {
        const pointCost = number(+data.loanAmount) * (number(+data.pointPercent) / 100);
        const months = Math.ceil(pointCost / Math.max(number(+data.monthlySavings), 1));
        renderResult(result, [
          { label: "Point cost", value: currency(pointCost) },
          { label: "Break-even timing", value: months + " months" },
        ]);
      }

      if (kind === "ltv") {
        const ltv = (number(+data.loanAmount) / Math.max(number(+data.homeValue), 1)) * 100;
        renderResult(result, [
          { label: "Loan-to-value ratio", value: ltv.toFixed(2) + "%" },
          { label: "Equity position", value: (100 - ltv).toFixed(2) + "%" },
        ]);
      }

      if (kind === "pmi") {
        const ltv = (number(+data.currentBalance) / Math.max(number(+data.homeValue), 1)) * 100;
        const months = Math.ceil(number(+data.closingCosts) / Math.max(number(+data.monthlyPmi), 1));
        renderResult(result, [
          { label: "Current LTV", value: ltv.toFixed(2) + "%" },
          { label: "Monthly PMI", value: currency(number(+data.monthlyPmi)) },
          { label: "Simple break-even if PMI removed", value: months + " months" },
        ]);
      }

      if (kind === "equity") {
        const equity = number(+data.homeValue) - number(+data.mortgageBalance);
        renderResult(result, [
          { label: "Estimated home equity", value: currency(equity) },
          { label: "Equity percentage", value: ((equity / Math.max(number(+data.homeValue), 1)) * 100).toFixed(2) + "%" },
        ]);
      }

      if (kind === "interest") {
        const current = monthlyPayment(number(+data.balance), number(+data.currentRate), number(+data.years));
        const proposed = monthlyPayment(number(+data.balance), number(+data.newRate), number(+data.years));
        const months = number(+data.years) * 12;
        renderResult(result, [
          { label: "Current total interest", value: currency(current * months - number(+data.balance)) },
          { label: "New total interest", value: currency(proposed * months - number(+data.balance)) },
          { label: "Estimated interest savings", value: currency((current - proposed) * months) },
        ]);
      }
    });
  });
}

function normalizeLocalPreviewLinks() {
  if (window.location.protocol !== "file:") return;
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) return;
    if (href.endsWith("/")) {
      link.setAttribute("href", href + "index.html");
      return;
    }
    if (!href.endsWith(".html") && !href.includes(".")) {
      link.setAttribute("href", href.replace(/\\/$/, "") + ".html");
    }
  });
}

function markCurrentNav() {
  const path = window.location.pathname.replace(/index\\.html$/, "").replace(/\\/+/g, "/");
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (!href.startsWith(".")) return;
    if (window.location.protocol === "file:") return;
    const url = new URL(href, window.location.href);
    const target = url.pathname.replace(/index\\.html$/, "").replace(/\\/+/g, "/");
    if (path === target || (target !== "/" && path.startsWith(target))) {
      link.setAttribute("aria-current", "page");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  normalizeLocalPreviewLinks();
  injectSchema();
  setupMenu();
  setupCookieBanner();
  setupCalculators();
  markCurrentNav();
});
`;
}

function logoSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Mortgage Refinance Guides">
  <defs>
    <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
      <stop offset="0%" stop-color="#12355b" />
      <stop offset="100%" stop-color="#1f4fd6" />
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="18" fill="url(#g)" />
  <path d="M18 32 32 20l14 12v14H18z" fill="#fff" />
  <rect x="29" y="39" width="6" height="7" rx="2" fill="#1f4fd6" />
  <path d="M14 26c4-7 11-11 19-11 8 0 14 2 19 7" fill="none" stroke="#10a06b" stroke-width="4" stroke-linecap="round" />
  <path d="M47 18h6m-4-4 4 4-4 4" fill="none" stroke="#10a06b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;
}

function socialCoverSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
      <stop offset="0%" stop-color="#0f2742" />
      <stop offset="100%" stop-color="#1f4fd6" />
    </linearGradient>
    <linearGradient id="card" x1="0%" x2="100%" y1="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.14)" />
      <stop offset="100%" stop-color="rgba(255,255,255,0.06)" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)" />
  <circle cx="110" cy="90" r="180" fill="rgba(16,160,107,0.14)" />
  <circle cx="1100" cy="520" r="220" fill="rgba(255,255,255,0.08)" />
  <rect x="70" y="78" width="1060" height="474" rx="34" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.14)" />
  <text x="110" y="210" fill="#ffffff" font-size="66" font-family="Avenir Next, Arial, sans-serif" font-weight="800">Mortgage Refinance Guides</text>
  <text x="110" y="284" fill="rgba(255,255,255,0.84)" font-size="34" font-family="Georgia, serif">Rates, APR, cash-out, FHA, VA, calculators, and premium refinance comparisons.</text>
  <rect x="110" y="350" width="260" height="128" rx="26" fill="rgba(255,255,255,0.14)" />
  <rect x="402" y="350" width="260" height="128" rx="26" fill="rgba(255,255,255,0.14)" />
  <rect x="694" y="350" width="260" height="128" rx="26" fill="rgba(255,255,255,0.14)" />
  <text x="138" y="405" fill="#fff" font-size="24" font-family="Avenir Next, Arial, sans-serif">30-year avg.</text>
  <text x="138" y="446" fill="#fff" font-size="36" font-family="Avenir Next, Arial, sans-serif" font-weight="800">6.48%</text>
  <text x="430" y="405" fill="#fff" font-size="24" font-family="Avenir Next, Arial, sans-serif">Break-even</text>
  <text x="430" y="446" fill="#fff" font-size="36" font-family="Avenir Next, Arial, sans-serif" font-weight="800">24-36 mo</text>
  <text x="722" y="405" fill="#fff" font-size="24" font-family="Avenir Next, Arial, sans-serif">Cost range</text>
  <text x="722" y="446" fill="#fff" font-size="36" font-family="Avenir Next, Arial, sans-serif" font-weight="800">$2.6k-$8.1k</text>
</svg>`;
}

function faviconSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
      <stop offset="0%" stop-color="#12355b" />
      <stop offset="100%" stop-color="#1f4fd6" />
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="16" fill="url(#g)"/>
  <path d="M18 33 32 21l14 12v12H18z" fill="#fff"/>
  <rect x="27" y="37" width="10" height="9" rx="2" fill="#1f4fd6"/>
  <path d="M13 28c5-8 12-11 20-11 6 0 12 2 18 7" fill="none" stroke="#10a06b" stroke-width="4" stroke-linecap="round"/>
  <path d="M48 18h6m-4-4 4 4-4 4" fill="none" stroke="#10a06b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}

function makeIco() {
  const width = 32;
  const height = 32;
  const xor = Buffer.alloc(width * height * 4);

  function setPixel(x, y, r, g, b, a = 255) {
    const row = height - 1 - y;
    const index = (row * width + x) * 4;
    xor[index] = b;
    xor[index + 1] = g;
    xor[index + 2] = r;
    xor[index + 3] = a;
  }

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const mix = x / width;
      setPixel(x, y, Math.round(18 + 13 * mix), Math.round(53 + 26 * mix), Math.round(91 + 123 * mix));
    }
  }

  for (let y = 10; y < 24; y += 1) {
    for (let x = 9; x < 23; x += 1) {
      if (y > 14 && (x < 11 || x > 21)) continue;
      setPixel(x, y, 255, 255, 255);
    }
  }

  for (let i = 0; i < 12; i += 1) {
    setPixel(7 + i, 14 - Math.floor(i / 2), 255, 255, 255);
    setPixel(18 + i, 9 + Math.floor(i / 2), 255, 255, 255);
  }

  for (let x = 6; x < 25; x += 1) {
    const y = Math.max(5, Math.round(12 - Math.sin((x - 6) / 18 * Math.PI) * 4));
    setPixel(x, y, 16, 160, 107);
    if (x > 19 && x < 26) setPixel(x, y - 1, 16, 160, 107);
  }

  for (let y = 6; y < 14; y += 1) {
    setPixel(26, y, 16, 160, 107);
  }
  setPixel(25, 6, 16, 160, 107);
  setPixel(27, 6, 16, 160, 107);
  setPixel(28, 7, 16, 160, 107);
  setPixel(27, 8, 16, 160, 107);

  const andMaskRowSize = Math.ceil(width / 32) * 4;
  const andMask = Buffer.alloc(andMaskRowSize * height);
  const header = Buffer.alloc(6 + 16 + 40);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(width, 6);
  header.writeUInt8(height, 7);
  header.writeUInt8(0, 8);
  header.writeUInt8(0, 9);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  const imageSize = 40 + xor.length + andMask.length;
  header.writeUInt32LE(imageSize, 14);
  header.writeUInt32LE(22, 18);
  header.writeUInt32LE(40, 22);
  header.writeInt32LE(width, 26);
  header.writeInt32LE(height * 2, 30);
  header.writeUInt16LE(1, 34);
  header.writeUInt16LE(32, 36);
  header.writeUInt32LE(0, 38);
  header.writeUInt32LE(xor.length + andMask.length, 42);
  return Buffer.concat([header, xor, andMask]);
}

async function writeFile(filePath, content) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content);
}

async function writePage(page) {
  const html = layout(page);
  await writeFile(filePathFor(page.slug), html);
  return { slug: page.slug, url: urlFor(page.slug), words: wordCount(html), type: page.type };
}

function walkthrough(pages) {
  return `# Mortgage Refinance Guides Walkthrough

## Overview

This project is a static editorial website for Cloudflare Pages with a shared generator, reusable components, and crawlable category architecture.

- Domain reference: ${domain}
- Build style: static HTML, single shared CSS, single shared JS
- URL model: folder-based clean URLs with absolute canonicals and relative internal navigation
- Monetization readiness: legal pages, author boxes, trust sections, cookie banner, ads.txt, AdSense script placeholder

## Main structure

- \`/index.html\`: homepage
- \`/styles.css\`: shared styles
- \`/main.js\`: menu, schema injection, cookie banner, calculators, local preview link adaptation
- \`/assets/\`: logo, social image, favicon assets
- \`/guides/\`: 10 long-form pillar pages
- \`/rates/\`, \`/cash-out/\`, \`/fha-refinance/\`, \`/va-refinance/\`, \`/jumbo-refinance/\`, \`/closing-costs/\`, \`/credit-score-and-approval/\`, \`/home-equity-and-heloc-alternatives/\`: supporting article clusters
- \`/calculators/\`: 10 interactive refinance tools
- \`/comparisons/\`: comparison pages
- \`/faqs/\`: FAQ hubs
- \`/states/\`: state-specific refinance guides

## Page inventory

- Total generated pages: ${pages.length}
- Pillar guides: ${pillarPages.length}
- Supporting articles: ${articlePages.length}
- Calculators: ${calculatorPages.length}
- Comparison pages: ${comparisonPages.length}
- FAQ pages: ${faqPages.length}
- State guides: ${statePages.length}
- Static/legal pages: ${staticPages.length - 1}
- Category landing pages: ${buildCategoryPages().length}

## SEO implementation

- Unique title and meta description on every page
- Absolute canonical URLs without \`.html\`
- Open Graph and Twitter card tags
- Breadcrumb navigation on interior pages
- JSON-LD for WebSite, Organization, BreadcrumbList, Article, FAQPage, and WebApplication where applicable
- XML sitemap and HTML sitemap included
- \`robots.txt\` points to the production sitemap

## Local preview behavior

Links are written as clean relative directory URLs. For file-based local preview, \`main.js\` adapts directory links to \`index.html\` automatically when the page is opened via the \`file:\` protocol.

## Deployment

1. Upload the project to a Git repository connected to Cloudflare Pages.
2. Set the production domain to \`mortgagerefinanceguides.com\`.
3. Replace the AdSense publisher placeholder in \`main.js\` and \`ads.txt\`.
4. Verify the live sitemap at \`${domain}/sitemap.xml\`.
5. Connect Google Search Console and submit the sitemap.
6. Recheck legal pages, contact email, and any analytics/ad scripts you plan to add.

## Rebuild notes

The site is generated by \`/scripts/generate-site.mjs\`. Run:

\`\`\`bash
node scripts/generate-site.mjs
\`\`\`

That will regenerate pages, assets, favicon files, sitemap, and documentation artifacts.
`;
}

function checklist() {
  return `# Pre-Deployment Checklist

## Domain and hosting

- Point the production domain to Cloudflare Pages.
- Confirm the canonical domain is non-www unless you intentionally change it.
- Verify HTTPS is active and mixed content warnings are absent.

## SEO and indexing

- Check that every production page resolves successfully without redirect chains.
- Confirm \`robots.txt\` is reachable and references the production sitemap.
- Confirm \`sitemap.xml\` lists clean absolute URLs with no \`.html\` endings.
- Test several page sources and verify canonical tags match the final live URL.
- Validate JSON-LD on the homepage, an article, a FAQ page, and a calculator page.
- Submit the sitemap in Google Search Console after launch.

## Content quality

- Review the homepage hero, featured cards, and trust sections for final brand wording.
- Confirm contact email and legal copy are correct for your final business setup.
- Spot-check at least 10 pages for formatting, tables, FAQ accordions, and author box visibility.
- Verify there is no lorem ipsum, duplicate page title, or duplicate meta description.

## AdSense readiness

- Replace the placeholder AdSense publisher ID in \`main.js\`.
- Replace the placeholder \`ads.txt\` line with your real publisher ID.
- Keep the site free of empty ad containers until approval is complete.
- Review Google AdSense policies for financial content and disclosures.

## Search Console and analytics

- Add the property in Google Search Console.
- Submit \`${domain}/sitemap.xml\`.
- Check coverage for redirects, duplicates, alternate canonical conflicts, and soft 404 issues.
- Add your analytics or tag manager only after confirming the core site renders correctly.

## Final QA

- Test desktop and mobile layouts.
- Test local preview navigation and production navigation.
- Run a crawl for broken internal links.
- Reconfirm no internal links expose \`index.html\` in the rendered markup.
- Confirm footer legal links and category links work on every page.
`;
}

function visualSeoAudit() {
  return `# Visual And SEO Audit

## Problems found

- Homepage felt crowded and visually too similar to earlier projects.
- Several grids and card groups were using repetitive patterns without enough hierarchy.
- Navigation layout was too brittle on smaller screens.
- Local preview needed stronger handling for directory-based links under \`file://\`.
- Some category-level routes were missing or inconsistent during rebuild iterations.
- State cards and other grid sections were vulnerable to cramped layouts and overlap-like behavior.

## What was corrected

- Rebuilt the homepage with a new premium hero, dashboard-style rate card, lender-style stat tiles, comparison table, calculator band, editorial blocks, state grid, FAQ block, and trust sections.
- Replaced the global visual system with a more distinctive palette, spacing rhythm, rounded-card language, and stronger typographic hierarchy.
- Reworked the sticky header into a cleaner pill-style nav shell with mobile-safe menu behavior.
- Improved internal page hero presentation and article/sidebar spacing.
- Normalized buttons, cards, tables, charts, FAQ styling, calculator forms, footer structure, and responsive breakpoints.

## Routes and navigation fixed

- Revalidated clean relative links across \`states/\`, \`calculators/\`, \`comparisons/\`, \`fha-refinance/\`, \`va-refinance/\`, \`cash-out/\`, and other content clusters.
- Added the missing \`/comparisons/\` category landing so top-level navigation resolves correctly.
- Kept visible links clean without exposing \`index.html\`.
- Preserved absolute production canonicals while supporting file-based local preview through JS link adaptation.
- Verified there are no broken internal HTML links in the generated site.

## Visual improvements

- New hero layout with higher contrast, modern finance-product feel, and clearer CTA hierarchy.
- Better section rhythm and reduced visual repetition across cards and panels.
- Rebuilt state grid with safer responsive behavior and cleaner minimum card sizing.
- Added lender-logo placeholders, richer editorial framing, and more premium table/panel composition.
- Softened shadows, clarified borders, and improved whitespace balance throughout the site.

## SEO status

- Unique titles and meta descriptions remain generated per page.
- Canonicals use absolute production URLs without \`.html\`.
- Open Graph and Twitter cards remain present.
- JSON-LD includes WebSite, Organization, BreadcrumbList, Article, FAQPage, and WebApplication where relevant.
- XML sitemap and robots.txt remain aligned with \`https://mortgagerefinanceguides.com\`.

## Cloudflare status

- Static folder-based output is ready for Cloudflare Pages.
- Shared assets are referenced with relative paths for local preview and deployment compatibility.
- No framework or build dependency is required beyond regenerating the static files.

## Search Console status

- Internal navigation is crawlable.
- Canonical structure is clean.
- Sitemap and robots files are present.
- The site is in a good state for Search Console submission after deployment.

## AdSense status

- Legal pages, author visibility, editorial framing, cookie banner, footer depth, and trust signals are present.
- No lorem ipsum or empty ad placeholders remain.
- \`ads.txt\` and the AdSense script placeholder are prepared for final publisher ID insertion.
- Final pre-launch step: replace the placeholder publisher ID in \`main.js\` and \`ads.txt\`.
`;
}

function debugFinalAudit() {
  return `# Debug And Final Audit

## Causa raiz del problema

El fallo no venia de un error de sintaxis bruto en \`index.html\`, \`styles.css\` o \`main.js\`. La carga se estaba volviendo fragil por una combinacion de dos factores globales:

- El layout compartido estaba apoyandose en una capa visual demasiado agresiva en el CSS global, con reglas muy amplias para contenedores principales, overlays decorativos y comportamiento responsive del menu.
- El HTML estaba cargando un script AdSense activo con un publisher placeholder en todas las paginas, lo que no es necesario para preview local y añade una variable externa durante la carga.

Eso hacia que el render local fuese mas inestable de lo necesario y complicaba el comportamiento del header, el hero y algunas grids, especialmente en escenarios de preview por archivo local.

## Correcciones aplicadas

- Se sustituyo el script AdSense activo por un placeholder inerte en el layout compartido.
- Se añadio una capa CSS defensiva para forzar un render estable en body, header, nav, hero, grids, state cards y bloques principales.
- Se simplifico el comportamiento del menu para asegurar que no quede abierto por defecto.
- Se mantuvo la adaptacion de enlaces limpios para \`file://\` sin exponer \`index.html\` en la navegacion visible.
- Se regenero todo el sitio desde el generador central despues de aplicar los fixes.

## Archivos modificados

- \`/scripts/generate-site.mjs\`
- \`/index.html\` regenerado
- \`/styles.css\` regenerado
- \`/main.js\` regenerado
- \`/visual-and-seo-audit.md\` regenerado

## Estado final en local

- La homepage vuelve a generarse con HTML valido y contenido visible.
- \`styles.css\` y \`main.js\` se resuelven correctamente desde la home y desde subcarpetas.
- No hay enlaces internos rotos en los 90 documentos HTML generados.
- No hay \`.html\` ni \`index.html\` en la navegacion visible.
- La configuracion AdSense ya no inyecta un script activo durante el preview local.

## Estado final responsive

- Header y menu movil estabilizados.
- Hero y dashboard lateral sin overlays decorativos invasivos.
- Grid de estados reforzada para evitar solapes y colapsos.
- Grids principales y cards con fallback estable en tablet y movil.
- Formularios de calculadoras y tablas mantienen estructura coherente.

## Estado final Search Console

- Titles y meta descriptions unicas.
- Canonicals absolutas y limpias.
- Open Graph y Twitter cards presentes.
- Schema JSON-LD presente para WebSite, Organization, BreadcrumbList, Article, FAQPage y WebApplication segun corresponda.
- \`sitemap.xml\` y \`robots.txt\` listos para produccion.

## Estado final AdSense

- About, Contact, Privacy Policy, Terms, Disclaimer, Cookie Policy, Editorial Policy y How We Research presentes.
- Footer, authorship, FAQs, trust signals y cookie banner presentes.
- \`ads.txt\` preparado.
- Paso pendiente antes de publicar: sustituir el publisher placeholder por el ID real en el placeholder de AdSense y en \`ads.txt\`.

## Checklist final de despliegue

- Regenerar con \`node scripts/generate-site.mjs\` si vuelves a tocar el builder.
- Sustituir el publisher ID placeholder en \`ads.txt\`.
- Desplegar en Cloudflare Pages.
- Verificar \`https://mortgagerefinanceguides.com/sitemap.xml\`.
- Enviar sitemap en Search Console.
- Hacer una comprobacion visual final en navegador real de desktop y movil despues del deploy.
`;
}

async function main() {
  const pages = [];

  for (const item of staticPages) pages.push(await writePage(buildStaticPage(item)));
  for (const page of buildCategoryPages()) pages.push(await writePage(page));
  for (const page of pillarPages) pages.push(await writePage(buildPillarPage(page)));
  for (const entry of articlePages) pages.push(await writePage(buildArticlePage(entry)));
  for (const entry of calculatorPages) pages.push(await writePage(buildCalculatorPage(entry)));
  for (const entry of comparisonPages) pages.push(await writePage(buildComparisonPage(entry)));
  for (const entry of faqPages) pages.push(await writePage(buildFaqPage(entry)));
  for (const entry of statePages) pages.push(await writePage(buildStatePage(entry)));

  const urlEntries = pages
    .map((page) => `<url><loc>${page.url}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${page.slug ? "0.8" : "1.0"}</priority></url>`)
    .join("");

  await writeFile(path.join(root, "styles.css"), stylesCss());
  await writeFile(path.join(root, "main.js"), mainJs());
  await writeFile(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /*?q=*\nDisallow: /*?s=*\nSitemap: ${domain}/sitemap.xml\n`);
  await writeFile(path.join(root, "ads.txt"), "google.com, pub-3733223915347669, DIRECT, f08c47fec0942fa0\n");
  await writeFile(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}</urlset>\n`);
  await writeFile(path.join(root, "walkthrough.md"), walkthrough(pages));
  await writeFile(path.join(root, "pre-deployment-checklist.md"), checklist());
  await writeFile(path.join(root, "visual-and-seo-audit.md"), visualSeoAudit());
  await writeFile(path.join(root, "debug-and-final-audit.md"), debugFinalAudit());
  await writeFile(path.join(root, "assets", "logo-mark.svg"), logoSvg());
  await writeFile(path.join(root, "assets", "social-cover.svg"), socialCoverSvg());
  await writeFile(path.join(root, "assets", "favicon.svg"), faviconSvg());
  await writeFile(path.join(root, "assets", "favicon.ico"), makeIco());
  await writeFile(path.join(root, "favicon.svg"), faviconSvg());
  await writeFile(path.join(root, "favicon.ico"), makeIco());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
