
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
      link.setAttribute("href", href.replace(/\/$/, "") + ".html");
    }
  });
}

function markCurrentNav() {
  const path = window.location.pathname.replace(/index\.html$/, "").replace(/\/+/g, "/");
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (!href.startsWith(".")) return;
    if (window.location.protocol === "file:") return;
    const url = new URL(href, window.location.href);
    const target = url.pathname.replace(/index\.html$/, "").replace(/\/+/g, "/");
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
