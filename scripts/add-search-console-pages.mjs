import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const domain = "https://mortgagerefinanceguides.com";
const dateModified = "2026-04-18";
const brand = "MortgageRefinanceGuides";
const socialImage = `${domain}/assets/social-cover.svg`;

const site = {
  name: "Mortgage Refinance Guides",
};

const marketSnapshot =
  "As of April 16, 2026, Freddie Mac's weekly survey showed a 6.30% average 30-year fixed mortgage rate and a 5.65% average 15-year fixed mortgage rate. Those benchmarks are not refinance quotes, but they are useful anchors when deciding whether lender pricing is competitive.";

const pageGroups = {
  calculators: { label: "Calculators", cleanHref: "/calculators/" },
  states: { label: "States", cleanHref: "/states/" },
  guides: { label: "Guides", cleanHref: "/guides/" },
};

const pages = [
  {
    type: "companion",
    file: "calculators/cash-out-refinance-guide.html",
    cleanPath: "/calculators/cash-out-refinance-guide",
    title: "Cash-Out Refinance Guide: Costs, Equity, and Timing",
    description:
      "Cash-out refinance guide covering equity access, payment impact, closing costs, 80% LTV limits, and when tapping home equity actually makes sense.",
    h1: "Cash-Out Refinance Guide",
    keyword: "cash out refinance",
    category: "calculators",
    topic: "cash-out refinance",
    calculatorCleanPath: "/calculators/cash-out-refinance-calculator/",
    stats: [
      ["Common owner-occupied cap", "80% LTV"],
      ["Typical rate premium", "0.25%-0.50%"],
      ["Common credit sweet spot", "700+"],
      ["Best uses", "Renovation, debt payoff, reserves"],
    ],
    tableCaption: "Cash-out refinance planning benchmarks for 2025-2026",
    tableRows: [
      ["Conventional primary home", "Up to 80% LTV", "Most common mainstream cash-out ceiling"],
      ["FHA cash-out", "Up to 80% LTV", "More flexible credit profile, higher MI costs"],
      ["VA cash-out", "Varies by lender, often up to 90%", "Veteran-specific pricing and eligibility"],
      ["Typical closing costs", "2%-5% of loan amount", "Depends on balance, title, and points"],
      ["Best pricing band", "740+ FICO", "Lower rate and fee pressure"],
    ],
    faqs: [
      [
        "How does a cash-out refinance work?",
        "A cash-out refinance replaces your current mortgage with a larger new loan. The old balance is paid off, closing costs are settled, and you receive the remaining amount in cash if the final loan stays within program limits.",
      ],
      [
        "How much equity do you usually need?",
        "Most conventional lenders want to leave at least 20% equity behind, which is why an 80% LTV cap is common. FHA cash-out also commonly tops out at 80%, while some VA lenders allow higher leverage for eligible borrowers.",
      ],
      [
        "Is cash-out refinance better than a HELOC?",
        "It depends on your current first-mortgage rate and how much cash you need. Cash-out refinance can simplify everything into one payment, but a HELOC or home equity loan may be cheaper if your existing first mortgage rate is far below today's market.",
      ],
      [
        "What do lenders check first?",
        "The main checkpoints are equity, credit score, debt-to-income ratio, occupancy, property type, seasoning, and whether the purpose of the funds makes sense relative to your overall risk profile.",
      ],
      [
        "When is cash-out refinance a red flag?",
        "It becomes risky when you are stretching the term back to 30 years, using home equity to solve recurring spending problems, or taking cash from a property that does not have enough margin for market volatility or future repairs.",
      ],
    ],
  },
  {
    type: "companion",
    file: "calculators/refinance-break-even-guide.html",
    cleanPath: "/calculators/refinance-break-even-guide",
    title: "Refinance Break-Even Guide: How to Measure Payback",
    description:
      "Refinance break-even guide explaining how to compare closing costs, monthly savings, APR, and time-to-recover before replacing a mortgage.",
    h1: "Refinance Break-Even Guide",
    keyword: "refinance break even",
    category: "calculators",
    topic: "refinance break-even timing",
    calculatorCleanPath: "/calculators/break-even-refinance-calculator/",
    stats: [
      ["Common payback window", "24-36 months"],
      ["Inputs that matter most", "Fees, rate gap, term reset"],
      ["Hidden drag", "Escrows and points"],
      ["Best use", "Shortlisting lender quotes"],
    ],
    tableCaption: "Simple break-even examples for refinance shoppers",
    tableRows: [
      ["$180 monthly savings", "$4,500 costs", "25 months"],
      ["$240 monthly savings", "$6,000 costs", "25 months"],
      ["$320 monthly savings", "$7,800 costs", "25 months"],
      ["$115 monthly savings", "$5,000 costs", "44 months"],
      ["$410 monthly savings", "$8,200 costs", "20 months"],
    ],
    faqs: [
      [
        "What is break-even on a refinance?",
        "Break-even is the point where accumulated monthly savings finally recover the upfront cost of refinancing. Before that month, the refinance has not yet paid for itself in simple cash-flow terms.",
      ],
      [
        "Why can two loans with the same rate have different break-even periods?",
        "Because fees, points, lender credits, prepaid items, and term changes can make the real cost of the same note rate very different. APR and cash-to-close usually explain the difference.",
      ],
      [
        "Should I refinance if I might move soon?",
        "Only if the refinance still makes sense within your expected ownership horizon. If you may sell, relocate, or convert the home to a rental before break-even, a lower-fee structure is usually safer.",
      ],
      [
        "Does a shorter term always improve break-even?",
        "No. A shorter term often lowers total interest over time, but it can raise the monthly payment enough that the traditional savings-based break-even picture looks worse even though long-run interest savings improve.",
      ],
      [
        "What is a realistic target payback window?",
        "Many disciplined borrowers want simple break-even inside roughly two to three years, although the right answer changes when the refinance also removes PMI, stabilizes an ARM, or materially cuts total interest.",
      ],
    ],
  },
  {
    type: "companion",
    file: "calculators/closing-costs-guide.html",
    cleanPath: "/calculators/closing-costs-guide",
    title: "Refinance Closing Costs Guide: What Fees Really Matter",
    description:
      "Refinance closing costs guide covering origination, title, prepaid interest, escrow funding, discount points, and ways to reduce total fees.",
    h1: "Closing Costs Guide",
    keyword: "refinance closing costs",
    category: "calculators",
    topic: "refinance closing costs",
    calculatorCleanPath: "/calculators/closing-costs-calculator/",
    stats: [
      ["Common range", "2%-5% of loan amount"],
      ["Largest variable fee", "Points or lender credits"],
      ["Fixed local costs", "Title, recording, tax lines"],
      ["Best comparison tool", "Loan Estimate page 2"],
    ],
    tableCaption: "Common refinance closing cost categories",
    tableRows: [
      ["Origination / underwriting", "0%-1.0%", "Lender-controlled and negotiable"],
      ["Discount points", "0%-2.0%", "Buys rate down but raises upfront cost"],
      ["Title / settlement", "$1,000-$2,800", "State and provider dependent"],
      ["Recording / government", "$75-$450", "County and state dependent"],
      ["Prepaids / escrow funding", "$1,000-$4,000+", "Insurance, taxes, interest"],
    ],
    faqs: [
      [
        "What is included in refinance closing costs?",
        "Most refinance closings include lender fees, title or settlement charges, recording costs, prepaid interest, escrow funding, and any discount points used to buy the rate down.",
      ],
      [
        "Can you roll closing costs into the loan?",
        "Often yes on conventional and VA rate-term refinances, but increasing the balance changes the payment and can reduce available equity. FHA streamline has tighter rules because FHA does not allow standard closing costs to be added to the new base loan amount.",
      ],
      [
        "How do I lower refinance closing costs?",
        "Shop multiple lenders on the same day, compare lender credits versus lower-rate options, ask for title reissue discounts where available, and separate unavoidable third-party fees from negotiable lender charges.",
      ],
      [
        "Are no-closing-cost refinances really free?",
        "Usually not. The lender often offsets the cost by charging a higher rate, using smaller credits elsewhere, or building the expense into the overall pricing structure.",
      ],
      [
        "What is the best document for fee comparison?",
        "The Loan Estimate is the best starting point because it standardizes lender fees and third-party costs into comparable sections. Once you are closer to closing, compare the Closing Disclosure line by line.",
      ],
    ],
  },
  {
    type: "companion",
    file: "calculators/pmi-removal-guide.html",
    cleanPath: "/calculators/pmi-removal-guide",
    title: "PMI Removal Guide: 80%, 78%, and Refinance Options",
    description:
      "PMI removal guide explaining 80% borrower-request thresholds, 78% automatic termination, appraisals, and refinance strategies to remove PMI sooner.",
    h1: "PMI Removal Guide",
    keyword: "remove PMI",
    category: "calculators",
    topic: "PMI removal",
    calculatorCleanPath: "/calculators/pmi-removal-calculator/",
    stats: [
      ["Borrower request point", "80% original value"],
      ["Automatic termination", "78% original value"],
      ["Other path", "New appraisal or refinance"],
      ["Best use", "Lower monthly housing payment"],
    ],
    tableCaption: "Conventional PMI removal checkpoints",
    tableRows: [
      ["Borrower-request threshold", "80% original value", "Usually requires good payment history"],
      ["Automatic termination", "78% original value", "Payments must be current"],
      ["Final backstop", "Midpoint of loan term", "Applies even if scheduled LTV is higher"],
      ["Refinance alternative", "New loan based on current value", "Useful when appreciation is strong"],
      ["Common PMI cost range", "0.46%-1.50% annually", "Varies by score, LTV, and coverage"],
    ],
    faqs: [
      [
        "When does PMI fall off automatically?",
        "On many conventional loans, PMI must terminate automatically when the scheduled balance reaches 78% of the home's original value and the mortgage is current. That rule comes from the Homeowners Protection Act.",
      ],
      [
        "Can I ask for PMI removal earlier?",
        "Yes. Many borrowers can request removal at 80% of original value if payments are current and the servicer's seasoning and valuation rules are satisfied.",
      ],
      [
        "Does appreciation help remove PMI sooner?",
        "Sometimes. If your servicer allows a new appraisal, appreciation can support earlier removal. A refinance can also remove PMI when the new loan is based on a lower current LTV.",
      ],
      [
        "Is refinancing worth it just to remove PMI?",
        "Only when the new rate, fees, and term still create a better overall outcome. Replacing PMI with a noticeably higher interest rate is not always a win.",
      ],
      [
        "Does FHA mortgage insurance work the same way?",
        "No. FHA mortgage insurance follows different rules. Many FHA borrowers use an FHA-to-conventional refinance when home equity and credit have improved enough to exit mortgage insurance altogether.",
      ],
    ],
  },
  {
    type: "companion",
    file: "calculators/home-equity-calculator-guide.html",
    cleanPath: "/calculators/home-equity-calculator-guide",
    title: "Home Equity Calculator Guide: How to Use Your Equity Safely",
    description:
      "Home equity guide explaining how equity is calculated, how lenders use CLTV, and when cash-out refinance, HEL, or HELOC makes the most sense.",
    h1: "Home Equity Calculator Guide",
    keyword: "home equity calculator",
    category: "calculators",
    topic: "home equity planning",
    calculatorCleanPath: "/calculators/home-equity-calculator/",
    stats: [
      ["Basic equity formula", "Value minus mortgage balance"],
      ["Key underwriting limit", "LTV or CLTV cap"],
      ["Safer use cases", "Repairs, reserves, strategic debt"],
      ["Main risk", "Turning equity into long-term debt"],
    ],
    tableCaption: "Home equity planning examples",
    tableRows: [
      ["$500,000", "$300,000", "$200,000", "40%"],
      ["$425,000", "$340,000", "$85,000", "20%"],
      ["$640,000", "$410,000", "$230,000", "35.9%"],
      ["$375,000", "$250,000", "$125,000", "33.3%"],
      ["$780,000", "$530,000", "$250,000", "32.1%"],
    ],
    tableHeaders: ["Home value", "Mortgage balance", "Equity", "Equity share"],
    faqs: [
      [
        "What is home equity?",
        "Home equity is the difference between your home's current market value and the amount you still owe on your mortgage or other liens secured by the property.",
      ],
      [
        "Why do lenders care about equity?",
        "Equity provides the cushion that protects the lender if home prices soften or the property needs to be sold after default. Higher equity usually improves approval odds and pricing.",
      ],
      [
        "Can I use all of my equity?",
        "Usually no. Most lenders require you to keep a meaningful ownership stake after refinancing or opening another lien. That is why LTV and CLTV caps are central to approval.",
      ],
      [
        "What is the difference between LTV and CLTV?",
        "LTV looks at the first mortgage versus property value. CLTV includes all liens together, which matters when a homeowner keeps a first mortgage and adds a HELOC or home equity loan.",
      ],
      [
        "Should I use equity to pay off debt?",
        "Only after comparing the new payment, term, total interest cost, and the risk of converting unsecured debt into debt backed by your home.",
      ],
    ],
  },
  {
    type: "calculator",
    file: "calculators/refinance-closing-costs-calculator.html",
    cleanPath: "/calculators/refinance-closing-costs-calculator",
    title: "Refinance Closing Costs Calculator",
    description:
      "Refinance closing costs calculator to estimate lender fees, title, prepaids, and points using realistic 2026 refinance assumptions.",
    h1: "Refinance Closing Costs Calculator",
    keyword: "refinance closing cost calculator",
    category: "calculators",
    topic: "refinance closing costs calculator",
    calculatorType: "closing",
    calculatorFields: [
      ["Loan amount", "loanAmount", "number", "365000"],
      ["Origination fee (%)", "origination", "number", "0.75"],
      ["Title and settlement", "title", "number", "1850"],
      ["Recording/government fees", "government", "number", "290"],
      ["Prepaids and escrow", "prepaids", "number", "2400"],
      ["Discount points (%)", "points", "number", "0.25"],
    ],
    stats: [
      ["Best use", "Quote comparison"],
      ["Common total", "2%-5% of balance"],
      ["State-sensitive items", "Title and recording"],
      ["High-impact input", "Discount points"],
    ],
    tableCaption: "Illustrative refinance closing cost totals",
    tableRows: [
      ["$250,000", "$4,050", "1.62%", "Lean, low-fee structure"],
      ["$350,000", "$6,180", "1.77%", "Typical rate-term refinance"],
      ["$450,000", "$8,900", "1.98%", "Includes larger prepaids"],
      ["$550,000", "$11,850", "2.15%", "High-balance with points"],
      ["$700,000", "$15,950", "2.28%", "More title and escrow friction"],
    ],
    tableHeaders: ["Loan amount", "Estimated total cost", "Cost as % of balance", "Scenario"],
    faqs: [
      [
        "What does this calculator include?",
        "It models common lender fees, title charges, government lines, prepaid items, and discount points. It is intentionally simple so borrowers can compare quotes before the Loan Estimate arrives.",
      ],
      [
        "Why are prepaids so variable?",
        "Prepaid interest, property taxes, and homeowner's insurance depend on your state, closing date, escrow setup, and how much has already been collected through the current servicer.",
      ],
      [
        "Can closing costs exceed 5%?",
        "Yes, especially on smaller loans, high-cost states, cash-out refinance files, or transactions that include significant discount points or attorney-driven settlement expenses.",
      ],
      [
        "Should I compare cost as a percentage or as a dollar amount?",
        "Use both. Dollar cost determines cash-to-close and break-even timing, while the percentage helps you benchmark whether a lender's quote is lean or unusually expensive for your loan size.",
      ],
      [
        "How do I compare two lenders fairly?",
        "Ask both lenders for the same lock period on the same day, then compare rate, APR, cash to close, lender credits, and whether points are being used to manufacture a lower note rate.",
      ],
    ],
  },
  {
    type: "calculator",
    file: "calculators/cash-out-refinance-calculator-texas.html",
    cleanPath: "/calculators/cash-out-refinance-calculator-texas",
    title: "Texas Cash-Out Refinance Calculator",
    description:
      "Texas cash-out refinance calculator for homeowners modeling 80% LTV, proceeds after closing costs, and estimated new mortgage payments.",
    h1: "Texas Cash-Out Refinance Calculator",
    keyword: "cash out refinance calculator texas",
    category: "calculators",
    topic: "Texas cash-out refinance calculator",
    calculatorType: "cashout",
    calculatorFields: [
      ["Texas home value", "homeValue", "number", "465000"],
      ["Current mortgage balance", "currentBalance", "number", "268000"],
      ["Texas cash-out max LTV (%)", "maxLtv", "number", "80"],
      ["New rate (%)", "newRate", "number", "6.95"],
      ["New term (years)", "newYears", "number", "30"],
      ["Closing costs", "closingCosts", "number", "7400"],
    ],
    stats: [
      ["Texas planning cap", "80% LTV"],
      ["Key caution", "Fee and seasoning rules"],
      ["Best use", "Pre-screening proceeds"],
      ["Rate anchor", "Often above rate-term pricing"],
    ],
    tableCaption: "Texas cash-out planning examples",
    tableRows: [
      ["$400,000", "$210,000", "$102,600", "After $7,400 costs at 80% LTV"],
      ["$500,000", "$320,000", "$72,500", "After $7,500 costs at 80% LTV"],
      ["$650,000", "$390,000", "$122,000", "After $8,000 costs at 80% LTV"],
      ["$750,000", "$450,000", "$142,500", "After $7,500 costs at 80% LTV"],
      ["$900,000", "$620,000", "$92,000", "After $8,000 costs at 80% LTV"],
    ],
    tableHeaders: ["Home value", "Current balance", "Estimated cash available", "Notes"],
    faqs: [
      [
        "Why is Texas cash-out more specialized?",
        "Texas cash-out refinance commonly follows stricter home-equity rules than many other states, so homeowners should verify fee, timing, and closing requirements with a lender familiar with the state framework.",
      ],
      [
        "What does the 80% cap mean?",
        "It means the new first-lien mortgage generally cannot exceed 80% of the home's value in the Texas cash-out structure. That cap determines the ceiling for proceeds before closing costs.",
      ],
      [
        "Can I use this for a rate-term refinance?",
        "This page is built for cash-out planning. If you are not taking equity out, a standard refinance payment or break-even calculator usually gives a cleaner answer.",
      ],
      [
        "Why might actual proceeds be lower than the estimate?",
        "Appraisal results, title payoffs, lender overlays, state-specific fees, escrows, and existing subordinate liens can all reduce the amount you actually receive.",
      ],
      [
        "Is Texas cash-out always a good idea for debt consolidation?",
        "Not automatically. It can help when it meaningfully lowers the blended household payment and the borrower avoids running new unsecured balances back up afterward.",
      ],
    ],
  },
  {
    type: "calculator",
    file: "calculators/mortgage-breakeven-calculator.html",
    cleanPath: "/calculators/mortgage-breakeven-calculator",
    title: "Mortgage Breakeven Calculator",
    description:
      "Mortgage breakeven calculator for homeowners comparing refinance savings against closing costs to see how long it takes to recover fees.",
    h1: "Mortgage Breakeven Calculator",
    keyword: "mortgage breakeven calculator",
    category: "calculators",
    topic: "mortgage breakeven calculator",
    calculatorType: "breakeven",
    calculatorFields: [
      ["Estimated monthly savings", "monthlySavings", "number", "235"],
      ["Estimated closing costs", "closingCosts", "number", "5600"],
    ],
    stats: [
      ["Most common range", "20-40 months"],
      ["Shortest payback", "Large savings, lean fees"],
      ["Longest payback", "Small rate drop, high costs"],
      ["Best use", "Move or keep analysis"],
    ],
    tableCaption: "Breakeven timing reference points",
    tableRows: [
      ["$150", "$4,500", "30 months", "Longer hold needed"],
      ["$225", "$5,400", "24 months", "Solid rate-term case"],
      ["$300", "$6,000", "20 months", "Strong savings profile"],
      ["$90", "$4,800", "53 months", "Usually too slow"],
      ["$410", "$8,200", "20 months", "Higher-cost but fast recovery"],
    ],
    tableHeaders: ["Monthly savings", "Closing costs", "Simple breakeven", "Read"],
    faqs: [
      [
        "How is breakeven calculated?",
        "Simple breakeven divides total upfront cost by expected monthly savings. If the result is 24, the refinance needs about 24 months of steady savings to recover the cost.",
      ],
      [
        "What is not included in a simple breakeven formula?",
        "A basic formula does not capture taxes, opportunity cost, different amortization schedules, changing escrow amounts, or the total interest impact of extending the term.",
      ],
      [
        "What is a good breakeven result?",
        "Many homeowners prefer a breakeven window under about three years, but the threshold can be more generous when the refinance also removes risk, such as converting an ARM into a fixed rate.",
      ],
      [
        "Can breakeven still matter if my payment goes up?",
        "Yes. Some borrowers choose a shorter term refinance that raises the payment but reduces lifetime interest. In that case, you need a broader framework than payment savings alone.",
      ],
      [
        "Should I use lender credits to improve breakeven?",
        "Sometimes. Credits can reduce upfront cost and shorten payback, but they usually come with a higher rate. That tradeoff only works if you do not plan to keep the loan for too long.",
      ],
    ],
  },
  {
    type: "calculator",
    file: "calculators/refinance-equity-calculator.html",
    cleanPath: "/calculators/refinance-equity-calculator",
    title: "Refinance Equity Calculator",
    description:
      "Refinance equity calculator for estimating equity position, remaining ownership share, and whether a new loan still fits common LTV limits.",
    h1: "Refinance Equity Calculator",
    keyword: "refinance equity calculator",
    category: "calculators",
    topic: "refinance equity calculator",
    calculatorType: "equity",
    calculatorFields: [
      ["Current home value", "homeValue", "number", "575000"],
      ["Mortgage balance", "mortgageBalance", "number", "338000"],
    ],
    stats: [
      ["Core formula", "Value minus mortgage"],
      ["Owner cushion to watch", "20% equity"],
      ["Pricing improves fastest", "Below 75%-80% LTV"],
      ["Best use", "Approval pre-check"],
    ],
    tableCaption: "Equity and LTV planning ranges",
    tableRows: [
      ["$350,000", "$300,000", "$50,000", "85.7% LTV"],
      ["$450,000", "$330,000", "$120,000", "73.3% LTV"],
      ["$550,000", "$385,000", "$165,000", "70.0% LTV"],
      ["$725,000", "$510,000", "$215,000", "70.3% LTV"],
      ["$900,000", "$760,000", "$140,000", "84.4% LTV"],
    ],
    tableHeaders: ["Home value", "Mortgage balance", "Equity", "Approximate LTV"],
    faqs: [
      [
        "Why does equity matter so much in refinancing?",
        "Equity affects approval, pricing, reserve expectations, appraisal sensitivity, and whether you can remove mortgage insurance or qualify for cash-out proceeds.",
      ],
      [
        "What is a strong equity position?",
        "Many borrowers see noticeably better refinance flexibility once they have at least 20% equity, though strong-credit borrowers may still have solid options above 80% LTV in some programs.",
      ],
      [
        "Can a refinance raise my LTV?",
        "Yes. Rolling costs into the loan, taking cash out, or refinancing into a larger balance can push LTV higher, which may reduce pricing advantages or eligibility.",
      ],
      [
        "Do lenders use my estimate or an appraisal?",
        "They use their accepted valuation method, which may be an appraisal, automated valuation model, or another approved review process depending on the program.",
      ],
      [
        "What if I have a HELOC too?",
        "Then combined loan-to-value matters. A second lien can make a file look much tighter than the first mortgage alone, so CLTV should be calculated before shopping seriously.",
      ],
    ],
  },
  {
    type: "calculator",
    file: "calculators/refinance-savings-calculator.html",
    cleanPath: "/calculators/refinance-savings-calculator",
    title: "Refinance Savings Calculator",
    description:
      "Refinance savings calculator for comparing current mortgage payments against a proposed lower rate and estimating monthly cash-flow improvement.",
    h1: "Refinance Savings Calculator",
    keyword: "refinance savings calculator",
    category: "calculators",
    topic: "refinance savings calculator",
    calculatorType: "savings",
    calculatorFields: [
      ["Current balance", "currentBalance", "number", "325000"],
      ["Current rate (%)", "currentRate", "number", "7.25"],
      ["New rate (%)", "newRate", "number", "6.30"],
      ["Remaining term (years)", "years", "number", "27"],
    ],
    stats: [
      ["Best use", "Monthly budget planning"],
      ["Primary driver", "Rate gap and balance"],
      ["Big hidden variable", "Closing costs"],
      ["Best next step", "Run break-even too"],
    ],
    tableCaption: "Payment savings examples at common refinance gaps",
    tableRows: [
      ["$250,000", "7.00% to 6.25%", "$122", "Usually worth deeper review"],
      ["$325,000", "7.25% to 6.30%", "$206", "Strong payment relief"],
      ["$400,000", "6.90% to 6.40%", "$135", "Depends on fees"],
      ["$525,000", "7.10% to 6.35%", "$281", "Often compelling"],
      ["$650,000", "6.80% to 6.10%", "$299", "Savings are meaningful if fees are controlled"],
    ],
    tableHeaders: ["Balance", "Rate move", "Estimated monthly savings", "Interpretation"],
    faqs: [
      [
        "Does lower rate always mean better savings?",
        "Not necessarily. Fees, points, and term extension can erase part of the rate benefit. The best savings analysis pairs payment math with break-even and total-interest review.",
      ],
      [
        "Can this estimate taxes and insurance?",
        "This specific calculator focuses on principal and interest, because escrows vary by state and servicer. You should still review your total housing payment before deciding.",
      ],
      [
        "Why can my new payment still feel high after refinancing?",
        "Property taxes, homeowners insurance, mortgage insurance, HOA dues, or a shorter loan term can keep the full payment elevated even if the note rate improves.",
      ],
      [
        "What savings level usually gets attention?",
        "There is no universal threshold, but many borrowers take a quote more seriously once the rate drop creates durable monthly savings and a sensible payback period.",
      ],
      [
        "Should I chase the absolute lowest rate?",
        "Only if the closing-cost structure still works. Sometimes the lowest-fee option creates better net savings than a lower rate paired with heavy points.",
      ],
    ],
  },
  {
    type: "state",
    file: "states/california-refinance-guide.html",
    cleanPath: "/states/california-refinance-guide",
    title: "California Mortgage Refinance Guide 2026",
    description:
      "California mortgage refinance guide for 2026 covering rates, high-balance loan costs, escrow patterns, and lender-shopping advice for homeowners.",
    h1: "California Mortgage Refinance Guide 2026",
    keyword: "California mortgage refinance guide",
    category: "states",
    topic: "California refinance planning",
    stateName: "California",
    stats: [
      ["Typical closing costs", "$3,500-$8,500"],
      ["Local pressure point", "Higher balances and escrows"],
      ["Best comparison item", "APR plus cash to close"],
      ["Useful tool", "Closing cost calculator"],
    ],
    tableCaption: "California refinance planning benchmarks",
    tableRows: [
      ["Conforming rate-term refi", "$3,500-$6,200", "Title, escrow, prepaids"],
      ["High-balance conventional", "$4,800-$8,500", "Larger balances and impounds"],
      ["Cash-out refinance", "$4,500-$8,900", "More underwriting friction"],
      ["Break-even target", "24-36 months", "Depends on fees and loan size"],
      ["Fastest quote discipline", "3-5 same-day quotes", "Reduces market noise"],
    ],
    faqs: [
      [
        "Why are California refinance costs often higher?",
        "California loan sizes are frequently larger than the national average, which increases prepaid items, settlement totals, and the cost impact of discount points.",
      ],
      [
        "Does California refinance automatically mean jumbo pricing?",
        "No. Many areas still fit conforming or high-balance limits, but borrowers should confirm whether their loan amount changes the pricing bucket because that can materially affect rate comparisons.",
      ],
      [
        "What should California borrowers compare besides rate?",
        "APR, lender credits, title and escrow estimates, impound requirements, and the expected timeline to close are all important because fee drift can erase a headline rate advantage.",
      ],
      [
        "Are no-closing-cost offers common in California?",
        "They do exist, but the higher loan sizes in many California markets make it especially important to compare whether the lender is using a noticeably higher rate to cover the credits.",
      ],
      [
        "What is the safest shopping strategy?",
        "Collect several same-day quotes with the same lock length, then compare them next to a break-even calculation and a realistic estimate of how long you plan to keep the property.",
      ],
    ],
  },
  {
    type: "state",
    file: "states/florida-refinance-guide.html",
    cleanPath: "/states/florida-refinance-guide",
    title: "Florida Mortgage Refinance Guide 2026",
    description:
      "Florida mortgage refinance guide for 2026 covering condo and insurance issues, closing costs, timeline expectations, and how homeowners should shop lenders.",
    h1: "Florida Mortgage Refinance Guide 2026",
    keyword: "Florida mortgage refinance guide",
    category: "states",
    topic: "Florida refinance planning",
    stateName: "Florida",
    stats: [
      ["Typical closing costs", "$3,400-$7,400"],
      ["Local pressure point", "Insurance and condo reviews"],
      ["Best comparison item", "Cash to close"],
      ["Useful tool", "Savings calculator"],
    ],
    tableCaption: "Florida refinance planning benchmarks",
    tableRows: [
      ["Standard rate-term refi", "$3,400-$5,900", "Common primary-home scenario"],
      ["Condo refinance", "$4,100-$7,400", "Association and insurance complexity"],
      ["Cash-out refinance", "$4,300-$7,700", "Higher risk and cost profile"],
      ["Typical closing pace", "23-38 days", "Insurance and title can slow files"],
      ["Best shopper behavior", "Quote early and verify docs", "Prevents lock surprises"],
    ],
    faqs: [
      [
        "Why do Florida refinance files need extra attention?",
        "Insurance costs, condo project review, and local title workflow can all make Florida refinances more document-heavy than borrowers expect from a national mortgage ad.",
      ],
      [
        "Do rising insurance costs affect refinance qualification?",
        "Yes. Higher homeowner's insurance and flood-related costs can raise the full housing payment, which affects debt-to-income ratio even if the principal and interest payment improves.",
      ],
      [
        "Is cash-out refinance common in Florida?",
        "Yes, but homeowners should compare it against home equity alternatives if their existing first mortgage rate is materially better than today's market.",
      ],
      [
        "How can Florida borrowers reduce refinance friction?",
        "Gather current insurance declarations early, verify condo documentation if applicable, and ask the lender to explain which fees are negotiable versus fixed third-party charges.",
      ],
      [
        "What is the biggest quote mistake in Florida?",
        "Ignoring total cash to close. Insurance escrows and settlement details can change the true cost of the refinance more than a small difference in the note rate.",
      ],
    ],
  },
  {
    type: "state",
    file: "states/new-york-refinance-guide.html",
    cleanPath: "/states/new-york-refinance-guide",
    title: "New York Mortgage Refinance Guide 2026",
    description:
      "New York mortgage refinance guide for 2026 covering attorney-state closings, CEMA considerations, costs, and lender comparison strategy.",
    h1: "New York Mortgage Refinance Guide 2026",
    keyword: "New York mortgage refinance guide",
    category: "states",
    topic: "New York refinance planning",
    stateName: "New York",
    stats: [
      ["Typical closing costs", "$4,000-$10,000+"],
      ["Local pressure point", "Attorney-state closings and taxes"],
      ["Best comparison item", "CEMA savings versus lender friction"],
      ["Useful tool", "Closing cost calculator"],
    ],
    tableCaption: "New York refinance planning benchmarks",
    tableRows: [
      ["Standard refinance without CEMA", "$4,000-$10,000+", "Costs can run high"],
      ["CEMA refinance", "Potentially lower mortgage tax burden", "Not every lender offers it"],
      ["Typical closing pace", "30-45 days", "Attorney coordination adds time"],
      ["High-balance refinance", "Expect broader fee range", "Bigger loan sizes amplify costs"],
      ["Best rate-shopping move", "Ask about CEMA immediately", "Avoid late surprises"],
    ],
    faqs: [
      [
        "Why is New York refinance more specialized?",
        "New York is an attorney-closing environment and can involve mortgage tax considerations that do not appear in many other states, so process and lender experience matter more.",
      ],
      [
        "What is a CEMA refinance?",
        "A CEMA is a legal structure sometimes used in New York to reduce the mortgage recording tax burden on a refinance by assigning part of the existing mortgage rather than recording the full new amount.",
      ],
      [
        "Should every New York borrower chase CEMA?",
        "Not automatically. It can create meaningful savings, but attorney work, lender participation, and extra coordination may lengthen the process. The math still needs to work.",
      ],
      [
        "What document should New York borrowers request early?",
        "Ask whether the lender supports CEMA, request a detailed fee breakdown, and verify attorney expectations up front so you can compare speed versus savings.",
      ],
      [
        "What is the common mistake in New York shopping?",
        "Borrowers often compare rate without comparing structure. In New York, the quote with the slightly higher rate can still be better if the total tax and closing-cost picture is dramatically lighter.",
      ],
    ],
  },
  {
    type: "state",
    file: "states/illinois-refinance-guide.html",
    cleanPath: "/states/illinois-refinance-guide",
    title: "Illinois Mortgage Refinance Guide 2026",
    description:
      "Illinois mortgage refinance guide for 2026 covering rate shopping, attorney involvement, closing costs, taxes, and practical homeowner decision points.",
    h1: "Illinois Mortgage Refinance Guide 2026",
    keyword: "Illinois mortgage refinance guide",
    category: "states",
    topic: "Illinois refinance planning",
    stateName: "Illinois",
    stats: [
      ["Typical closing costs", "$3,000-$6,500"],
      ["Local pressure point", "Taxes, escrows, and attorney review"],
      ["Best comparison item", "Loan Estimate page 2"],
      ["Useful tool", "Break-even calculator"],
    ],
    tableCaption: "Illinois refinance planning benchmarks",
    tableRows: [
      ["Rate-term refinance", "$3,000-$5,200", "Typical owner-occupied range"],
      ["Cash-out refinance", "$3,900-$6,500", "Higher underwriting and fee load"],
      ["Typical closing pace", "24-36 days", "Varies by title and appraisal speed"],
      ["Best lender behavior", "Detailed disclosures early", "Improves quote comparison"],
      ["Best borrower behavior", "Verify taxes and insurance", "Protects DTI accuracy"],
    ],
    faqs: [
      [
        "Why should Illinois borrowers watch escrow estimates carefully?",
        "Property tax and insurance escrows can materially alter total cash to close and monthly payment, so they need to be reviewed alongside the note rate.",
      ],
      [
        "Do Illinois refinance costs vary a lot by county?",
        "Yes. Recording fees, title practices, and local tax behavior can move the final fee stack enough to change which lender quote is really best.",
      ],
      [
        "What is the smartest way to compare Illinois lenders?",
        "Ask for the same lock period on the same day, then compare lender fees, points, title assumptions, and escrows with a break-even framework.",
      ],
      [
        "Is a small rate improvement enough to justify refinancing?",
        "Only if closing costs stay under control and the payback period fits your expected time in the home. The rate difference by itself is not a complete answer.",
      ],
      [
        "What slows Illinois refinances most often?",
        "Appraisal timing, documentation cleanup, insurance verification, and local closing coordination are the most common friction points.",
      ],
    ],
  },
  {
    type: "state",
    file: "states/arizona-refinance-guide.html",
    cleanPath: "/states/arizona-refinance-guide",
    title: "Arizona Mortgage Refinance Guide 2026",
    description:
      "Arizona mortgage refinance guide for 2026 covering title and escrow costs, rate shopping, cash-out planning, and refinance timing for homeowners.",
    h1: "Arizona Mortgage Refinance Guide 2026",
    keyword: "Arizona mortgage refinance guide",
    category: "states",
    topic: "Arizona refinance planning",
    stateName: "Arizona",
    stats: [
      ["Typical closing costs", "$2,800-$5,800"],
      ["Local pressure point", "Title, escrow, and valuation swings"],
      ["Best comparison item", "Net monthly savings"],
      ["Useful tool", "Refinance savings calculator"],
    ],
    tableCaption: "Arizona refinance planning benchmarks",
    tableRows: [
      ["Standard refinance", "$2,800-$4,900", "Typical owner-occupied file"],
      ["Cash-out refinance", "$3,500-$5,800", "Higher-cost planning case"],
      ["Typical closing pace", "20-33 days", "Often faster than coastal states"],
      ["Best quote discipline", "3-5 same-day offers", "Improves pricing clarity"],
      ["Most useful decision test", "Break-even plus reserves", "Keeps equity decisions disciplined"],
    ],
    faqs: [
      [
        "What makes Arizona refinancing attractive?",
        "Many borrowers benefit from comparatively manageable closing costs and relatively efficient escrow and title workflow, although the real answer still depends on the home value and program type.",
      ],
      [
        "Why should Arizona homeowners still shop hard?",
        "Because lender-controlled fees and points can still vary dramatically even when the local third-party fee environment is more moderate.",
      ],
      [
        "Does appreciation change refinance strategy in Arizona?",
        "Yes. Strong appreciation can help with PMI removal, better pricing, or cash-out flexibility, but borrowers should not assume the appraised value until the lender confirms it.",
      ],
      [
        "What is the main cash-out caution?",
        "Do not treat recent appreciation as spendable by default. A conservative equity cushion helps protect against future repair needs or softer home-price conditions.",
      ],
      [
        "What should borrowers calculate before locking?",
        "They should estimate payment savings, break-even timing, total cash to close, and how much equity remains after the refinance is complete.",
      ],
    ],
  },
  {
    type: "guide",
    file: "guides/cash-out-refinance-requirements.html",
    cleanPath: "/guides/cash-out-refinance-requirements",
    title: "Cash-Out Refinance Requirements in 2026",
    description:
      "Cash-out refinance requirements for 2026 covering credit score, LTV, DTI, reserves, occupancy, appraisal expectations, and lender overlays.",
    h1: "Cash-Out Refinance Requirements in 2026",
    keyword: "cash-out refinance requirements",
    category: "guides",
    topic: "cash-out refinance requirements",
    stats: [
      ["Typical conventional minimum", "620+ FICO"],
      ["Best pricing zone", "700-760+"],
      ["Common DTI ceiling", "43%-50%"],
      ["Common primary-home cap", "80% LTV"],
    ],
    tableCaption: "Cash-out refinance requirement benchmarks",
    tableRows: [
      ["Conventional cash-out", "620+ typical", "Up to 80% LTV", "Stronger pricing above 700"],
      ["FHA cash-out", "580-620 common lender band", "Up to 80% LTV", "Mortgage insurance remains a factor"],
      ["VA cash-out", "No VA-set score floor, lenders often 580-620", "Varies by lender, often up to 90%", "Eligibility and funding fee matter"],
      ["Investment property", "Often higher overlays", "Usually lower than owner-occupied limits", "Pricing and reserves tighten"],
      ["Best borrower profile", "Lower DTI and more reserves", "Comfortably below cap", "Easiest approvals and better pricing"],
    ],
    faqs: [
      [
        "What credit score do you need for cash-out refinance?",
        "There is no single universal cutoff, but many conventional lenders start around 620 and reserve the best pricing for borrowers who are closer to the 700-to-760 range or above.",
      ],
      [
        "What LTV limit is most common?",
        "For owner-occupied conventional cash-out refinance, 80% LTV is the benchmark many borrowers run into first. FHA cash-out is also commonly limited to 80%, while VA can be more flexible through participating lenders.",
      ],
      [
        "Does DTI matter more than credit score?",
        "They work together. A borrower with middling credit but very low DTI and strong reserves may look safer than a higher-score borrower who is already stretched on monthly obligations.",
      ],
      [
        "Are reserves required?",
        "Sometimes. Larger loans, second homes, investment properties, and tighter-risk files often need more assets documented after closing.",
      ],
      [
        "What is the most common reason borrowers get denied?",
        "The biggest issues are usually not enough equity, unstable income documentation, high DTI after the new payment, or a property and occupancy profile that triggers stricter lender overlays.",
      ],
    ],
  },
  {
    type: "guide",
    file: "guides/refinance-with-bad-credit.html",
    cleanPath: "/guides/refinance-with-bad-credit",
    title: "How to Refinance With Bad Credit in 2026",
    description:
      "How to refinance with bad credit in 2026, including score thresholds, FHA and VA options, equity strategies, and ways to strengthen approval odds.",
    h1: "How to Refinance With Bad Credit in 2026",
    keyword: "refinance with bad credit",
    category: "guides",
    topic: "refinance with bad credit",
    stats: [
      ["Conventional manual floor", "620 fixed-rate"],
      ["FHA flexibility zone", "580-620 common"],
      ["Best compensating factor", "More equity"],
      ["Most important habit", "Clean payment history"],
    ],
    tableCaption: "Bad-credit refinance planning benchmarks",
    tableRows: [
      ["Conventional rate-term", "620+ typical", "Pricing improves above 680-700", "Equity and DTI matter"],
      ["FHA streamline", "Program-specific", "Existing FHA loan required", "Can be useful when credit is challenged"],
      ["VA IRRRL", "Lender overlays vary", "Existing eligible VA loan required", "Often one of the easiest refinance paths"],
      ["PMI removal refinance", "Case by case", "Strong appreciation can help", "Works best with better current value"],
      ["Best prep step", "Reduce revolving debt", "Improves DTI and score stability", "Supports stronger underwriting"],
    ],
    faqs: [
      [
        "Can you refinance with a 580 credit score?",
        "Sometimes. FHA-related options are often the first place borrowers look, although lender overlays, equity, payment history, and debt-to-income ratio still matter.",
      ],
      [
        "What if my score is below 620?",
        "You may still have paths through certain government-backed programs or by improving the rest of the file, but the refinance needs to be sized carefully because pricing and documentation demands usually increase.",
      ],
      [
        "Does more equity help offset bad credit?",
        "Yes. More equity reduces lender risk and can make a borderline file much more workable, especially when the borrower also has stable income and acceptable reserves.",
      ],
      [
        "Should I wait and improve my score first?",
        "Often yes if the market opportunity is modest. A few months of revolving-balance cleanup or on-time payments can materially improve refinance pricing.",
      ],
      [
        "What refinance path is most forgiving?",
        "Existing FHA borrowers often explore FHA streamline, while eligible veterans may find VA IRRRL especially efficient. The easiest path depends on the loan you already have.",
      ],
    ],
  },
  {
    type: "guide",
    file: "guides/fha-streamline-refinance.html",
    cleanPath: "/guides/fha-streamline-refinance",
    title: "FHA Streamline Refinance Guide 2026",
    description:
      "FHA streamline refinance guide for 2026 covering net tangible benefit, current-payment rules, closing costs, MIP, and when the program is worth using.",
    h1: "FHA Streamline Refinance Guide 2026",
    keyword: "fha streamline refinance",
    category: "guides",
    topic: "FHA streamline refinance",
    stats: [
      ["Existing FHA loan required", "Yes"],
      ["Current on mortgage", "Required"],
      ["Cash back allowed", "No more than $500"],
      ["Core test", "Net tangible benefit"],
    ],
    tableCaption: "FHA streamline refinance checkpoints",
    tableRows: [
      ["Current FHA-insured mortgage", "Required", "Program is only for existing FHA loans"],
      ["Payment history", "Current loan must be current", "Late-payment history can block approval"],
      ["Seasoning", "Loan age and payment history rules apply", "Verify lender implementation"],
      ["Cash back", "Limited to $500", "Not a cash-out tool"],
      ["Closing costs", "Still apply", "Higher rate or lender credits may offset some cash needed"],
    ],
    faqs: [
      [
        "What is FHA streamline refinance?",
        "It is a simplified refinance path for borrowers who already have an FHA-insured mortgage. HUD says the loan being refinanced must already be FHA-insured, current, and provide a net tangible benefit to the borrower.",
      ],
      [
        "Do I need an appraisal?",
        "Often no, which is one reason the program is attractive when home value has not increased much. Lender overlays can still affect how the file is documented.",
      ],
      [
        "Can I take cash out with FHA streamline?",
        "No. Cash back is limited to a small amount, generally no more than $500, so borrowers needing equity access need a different refinance structure.",
      ],
      [
        "Do FHA streamline loans still have closing costs?",
        "Yes. The process is streamlined, not free. Borrowers still need to review lender fees, title costs, and how upfront mortgage insurance affects the new loan.",
      ],
      [
        "When is FHA streamline especially useful?",
        "It tends to help existing FHA borrowers who want a lower payment or a more stable loan without the full burden of a traditional credit-qualifying refinance.",
      ],
    ],
  },
  {
    type: "guide",
    file: "guides/va-loan-refinance-guide.html",
    cleanPath: "/guides/va-loan-refinance-guide",
    title: "VA Loan Refinance Guide 2026",
    description:
      "VA refinance guide for 2026 covering IRRRL requirements, the 0.5% funding fee, lender overlays, closing costs, and rate-shopping tips for veterans.",
    h1: "VA Loan Refinance Guide 2026",
    keyword: "va irrrl refinance",
    category: "guides",
    topic: "VA loan refinance",
    stats: [
      ["IRRRL funding fee", "0.5%"],
      ["Prior occupancy rule", "Yes"],
      ["Appraisal often waived", "Common"],
      ["Best use", "Lower payment or better stability"],
    ],
    tableCaption: "VA refinance checkpoints",
    tableRows: [
      ["VA IRRRL", "Existing eligible VA loan", "0.5% funding fee", "Best for rate-and-term style improvement"],
      ["VA cash-out", "Broader underwriting", "Higher cost and leverage review", "Use when equity access is the goal"],
      ["Appraisal", "Often not needed on IRRRL", "Can simplify timeline", "Lender overlays still matter"],
      ["Credit", "VA does not set a universal score floor", "Lenders commonly overlay 580-620+", "Score still affects execution"],
      ["Shopping strategy", "Compare fees and credits", "Protects veterans from churn-style pricing", "Do not rely on headline rate alone"],
    ],
    faqs: [
      [
        "What is a VA IRRRL?",
        "It is the VA Interest Rate Reduction Refinance Loan, a streamlined refinance option for eligible borrowers who already have a VA loan and want better terms.",
      ],
      [
        "What is the VA IRRRL funding fee?",
        "The Department of Veterans Affairs lists a 0.5% funding fee for IRRRLs, although some veterans are exempt based on disability-related criteria or other eligibility factors.",
      ],
      [
        "Do I need to live in the home now?",
        "VA IRRRL generally uses a prior-occupancy rule rather than requiring you to currently occupy the home as your principal residence. Confirm details with the lender for your situation.",
      ],
      [
        "Is VA cash-out refinance the same as IRRRL?",
        "No. VA cash-out refinance is a different product with broader underwriting and a different risk profile because it can increase the balance and release equity.",
      ],
      [
        "What is the biggest veteran refinance mistake?",
        "Focusing only on the note rate. Veterans should compare rate, APR, funding fee treatment, lender credits, total closing costs, and whether the refinance actually improves the household balance sheet.",
      ],
    ],
  },
  {
    type: "guide",
    file: "guides/when-to-refinance-mortgage.html",
    cleanPath: "/guides/when-to-refinance-mortgage",
    title: "When to Refinance Your Mortgage in 2026",
    description:
      "When to refinance a mortgage in 2026, including rate triggers, break-even rules, PMI removal, cash-out strategy, and signs a refinance is not worth it.",
    h1: "When to Refinance Your Mortgage in 2026",
    keyword: "when to refinance mortgage",
    category: "guides",
    topic: "when to refinance a mortgage",
    stats: [
      ["Useful first test", "Break-even timing"],
      ["Good reason", "Lower rate or lower risk"],
      ["Other good reason", "Remove PMI or change term"],
      ["Bad reason", "Only because ads say rates dropped"],
    ],
    tableCaption: "Common refinance decision triggers",
    tableRows: [
      ["Rate drops enough to create meaningful savings", "Often yes", "Run break-even before applying"],
      ["Current ARM is about to adjust", "Often yes", "Stability can justify the costs"],
      ["PMI can be removed through new value", "Often yes", "Compare against fee load"],
      ["Need short-term cash flow but plan to move soon", "Maybe not", "Long payback can ruin the math"],
      ["Want equity for repairs or debt consolidation", "Case by case", "Compare against HEL or HELOC alternatives"],
    ],
    faqs: [
      [
        "What is the best time to refinance?",
        "The best time is when the new loan creates a durable improvement after fees, not simply when mortgage headlines look better. Payment relief, risk reduction, and total-cost discipline all matter.",
      ],
      [
        "How much lower should the new rate be?",
        "There is no universal rule. Some borrowers benefit from a smaller drop when balances are large or PMI is removed, while others need a bigger move because costs are high.",
      ],
      [
        "Can refinancing make sense if the payment does not drop much?",
        "Yes. Borrowers sometimes refinance to shorten the term, switch out of an ARM, remove a co-borrower after divorce, or move from FHA mortgage insurance into a conventional loan.",
      ],
      [
        "When should I avoid refinancing?",
        "Avoid it when you may move before break-even, when fees are inflated, or when you are solving a short-term budgeting problem by turning it into long-term mortgage debt without a clear plan.",
      ],
      [
        "What should I calculate before talking to lenders?",
        "Estimate monthly savings, break-even timing, total cash to close, remaining equity, and whether a second-lien product would preserve a stronger first-mortgage rate.",
      ],
    ],
  },
];

function relLink(fromFile, targetPath) {
  const fromDir = path.posix.dirname(`/${fromFile}`);
  const normalized = targetPath.replace(/^\//, "");
  let relative = path.posix.relative(fromDir, `/${normalized}`);
  if (!relative) relative = ".";
  if (!relative.startsWith(".")) relative = `./${relative}`;
  if (targetPath.endsWith("/") && !relative.endsWith("/")) {
    relative += "/";
  }
  return relative;
}

function writeFilePath(file) {
  return path.join(root, file);
}

function metaTags(page) {
  const rel = "../";
  const canonical = `${domain}${page.cleanPath}`;
  const title = `${page.title} | ${brand}`;
  return `    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" href="${rel}favicon.ico">
    <link rel="stylesheet" href="${rel}styles.css">
    <meta name="robots" content="index, follow">
    <meta property="og:type" content="article">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(page.description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${socialImage}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(page.description)}">
    <meta name="twitter:image" content="${socialImage}">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3733223915347669" crossorigin="anonymous"></script>
    <script type="application/ld+json">${jsonLd(articleSchema(page, title, canonical))}</script>
    <script type="application/ld+json">${jsonLd(breadcrumbSchema(page, canonical))}</script>
    <script type="application/ld+json">${jsonLd(faqSchema(page))}</script>
    <script src="${rel}main.js" defer></script>`;
}

function articleSchema(page, title, canonical) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1,
    description: page.description,
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${domain}/assets/logo-mark.svg`,
      },
    },
    mainEntityOfPage: canonical,
    url: canonical,
    dateModified,
    image: socialImage,
  };
}

function breadcrumbSchema(page, canonical) {
  const group = pageGroups[page.category];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: domain,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: group.label,
        item: `${domain}${group.cleanHref.replace(/\/$/, "")}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.h1,
        item: canonical,
      },
    ],
  };
}

function faqSchema(page) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

function jsonLd(data) {
  return JSON.stringify(data);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function capitalize(value) {
  const text = String(value || "");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function headerHtml() {
  return `    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header">
      <div class="container header-shell">
        <div class="header-inner">
          <a class="brand" href="../">
            <img src="../assets/logo-mark.svg" alt="Mortgage Refinance Guides logo" width="50" height="50" loading="eager">
            <span>
              <strong>Mortgage Refinance Guides</strong>
              <small>U.S. refinance rates, calculators, and comparisons</small>
            </span>
          </a>
          <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-nav">
            <span></span><span></span><span></span>
          </button>
          <nav class="site-nav" id="primary-nav" aria-label="Primary">
            <div class="nav-links">
              <a class="nav-link" href="../rates/">Rates</a>
              <a class="nav-link" href="../cash-out/">Cash-Out</a>
              <a class="nav-link" href="../fha-refinance/">FHA</a>
              <a class="nav-link" href="../va-refinance/">VA</a>
              <a class="nav-link" href="../calculators/">Calculators</a>
              <a class="nav-link" href="../comparisons/">Comparisons</a>
              <a class="nav-link" href="../states/">States</a>
            </div>
            <div class="nav-actions">
              <a class="nav-ghost" href="../about/">About</a>
              <a class="nav-cta" href="../calculators/mortgage-refinance-calculator/">Start Calculating</a>
            </div>
          </nav>
        </div>
      </div>
    </header>`;
}

function footerHtml() {
  return `    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand brand-footer" href="../">
            <img src="../assets/logo-mark.svg" alt="" width="42" height="42" loading="lazy">
            <span>
              <strong>Mortgage Refinance Guides</strong>
              <small>Premium U.S. mortgage refinance guidance, calculators, lender comparisons, and state-by-state refinance planning.</small>
            </span>
          </a>
          <p>Mortgage Refinance Guides publishes editorial content for informational purposes only. We do not provide lending, legal, tax, or investment advice, and we do not originate mortgages.</p>
        </div>
        <div>
          <h2>Categories</h2>
          <ul>
            <li><a href="../rates/">Mortgage Refinance Rates</a></li>
            <li><a href="../cash-out/">Cash-Out Refinance</a></li>
            <li><a href="../fha-refinance/">FHA Refinance</a></li>
            <li><a href="../va-refinance/">VA Refinance</a></li>
            <li><a href="../jumbo-refinance/">Jumbo Refinance</a></li>
            <li><a href="../calculators/">Calculators</a></li>
            <li><a href="../closing-costs/">Closing Costs</a></li>
            <li><a href="../credit-score-and-approval/">Credit Score Approval</a></li>
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li><a href="../about/">About</a></li>
            <li><a href="../contact/">Contact</a></li>
            <li><a href="../privacy-policy/">Privacy Policy</a></li>
            <li><a href="../terms/">Terms</a></li>
            <li><a href="../disclaimer/">Disclaimer</a></li>
            <li><a href="../cookie-policy/">Cookie Policy</a></li>
            <li><a href="../editorial-policy/">Editorial Policy</a></li>
            <li><a href="../how-we-research/">How We Research</a></li>
            <li><a href="../sitemap/">HTML Sitemap</a></li>
          </ul>
        </div>
      </div>
      <div class="container footer-base">
        <p>© 2026 Mortgage Refinance Guides. All rights reserved.</p>
      </div>
    </footer>
    <div class="cookie-banner" data-cookie-banner hidden>
      <p>We use essential cookies for site functionality and optional cookies for analytics or advertising after deployment.</p>
      <div>
        <button type="button" class="button button-secondary" data-cookie-action="declined">Decline optional</button>
        <button type="button" class="button button-primary" data-cookie-action="accepted">Accept</button>
      </div>
    </div>`;
}

function breadcrumbsHtml(page) {
  const group = pageGroups[page.category];
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><ol><li><a href="../">Home</a></li><li><a href="../${group.cleanHref.replace(/^\//, "")}">${group.label}</a></li><li><a href="${relLink(page.file, page.cleanPath)}">${page.h1}</a></li></ol></nav>`;
}

function heroSide(page) {
  const metrics = page.stats
    .slice(0, 4)
    .map(
      ([label, value]) =>
        `<article><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></article>`,
    )
    .join("");
  return `<div class="hero-side panel">
      <p class="eyebrow">Updated April 18, 2026</p>
      <h2>Market snapshot</h2>
      <p>${escapeHtml(marketSnapshot)}</p>
      <div class="metric-grid">${metrics}</div>
    </div>`;
}

function metricGrid(page) {
  return `<div class="metric-grid">${page.stats
    .map(([label, value]) => `<article><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></article>`)
    .join("")}</div>`;
}

function tableHtml(page) {
  const headers =
    page.tableHeaders || ["Scenario", "Benchmark", "Why it matters"];
  return `<div class="table-wrap"><table>
    <caption>${escapeHtml(page.tableCaption)}</caption>
    <thead><tr>${headers.map((item) => `<th>${escapeHtml(item)}</th>`).join("")}</tr></thead>
    <tbody>${page.tableRows
      .map(
        (row) =>
          `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`,
      )
      .join("")}</tbody>
  </table></div>`;
}

function relatedLinks(page) {
  const shared = [
    ["Mortgage Refinance Calculator", "/calculators/mortgage-refinance-calculator/", "Primary calculator"],
    ["Break-Even Refinance Calculator", "/calculators/break-even-refinance-calculator/", "Decision tool"],
    ["Best Mortgage Refinance Rates", "/guides/best-mortgage-refinance-rates/", "Rate guide"],
    ["Mortgage Refinance Closing Costs Explained", "/guides/mortgage-refinance-closing-costs-explained/", "Fee guide"],
    ["Home Equity Loan vs Cash-Out Refinance", "/guides/home-equity-loan-vs-cash-out-refinance/", "Comparison"],
  ];

  let specific = [];
  if (page.type === "companion") {
    specific = [
      ["Open the matching calculator", page.calculatorCleanPath, "Interactive tool"],
      ["Mortgage Refinance Calculator Hub", "/guides/mortgage-refinance-calculator-hub/", "Pillar guide"],
      ["Monthly Payment Savings Calculator", "/calculators/monthly-payment-savings-calculator/", "Payment tool"],
    ];
  }
  if (page.type === "calculator") {
    specific = [
      ["How to Refinance Your Mortgage Step by Step", "/guides/how-to-refinance-your-mortgage-step-by-step/", "Process guide"],
      ["Refinance Break-Even Guide", "/calculators/refinance-break-even-guide", "Companion guide"],
      ["State Mortgage Refinance Guide", "/guides/state-mortgage-refinance-guide/", "Location guide"],
    ];
  }
  if (page.type === "state") {
    specific = [
      ["Texas Mortgage Refinance Guide", "/states/texas/", "Existing state guide"],
      ["California Mortgage Refinance Guide 2026", "/states/california-refinance-guide", "New state guide"],
      ["Florida Mortgage Refinance Guide 2026", "/states/florida-refinance-guide", "New state guide"],
      ["New York Mortgage Refinance Guide 2026", "/states/new-york-refinance-guide", "New state guide"],
      ["Illinois Mortgage Refinance Guide 2026", "/states/illinois-refinance-guide", "New state guide"],
    ];
  }
  if (page.type === "guide") {
    specific = [
      ["When to Refinance Your Mortgage in 2026", "/guides/when-to-refinance-mortgage", "Decision guide"],
      ["Refinance Savings Calculator", "/calculators/refinance-savings-calculator", "Savings tool"],
      ["Refinance Equity Calculator", "/calculators/refinance-equity-calculator", "Equity tool"],
    ];
  }

  const items = [...specific, ...shared].slice(0, 5);
  return `<section class="related-links">
    <h2>Related refinance resources</h2>
    <div class="card-grid three">
      ${items
        .map(
          ([label, href, meta]) =>
            `<a class="mini-card" href="${relLink(page.file, href)}"><strong>${escapeHtml(label)}</strong><span>${escapeHtml(meta)}</span></a>`,
        )
        .join("")}
    </div>
  </section>`;
}

function faqHtml(page) {
  return `<section class="content-section">
    <p class="eyebrow">FAQs</p>
    <h2>Frequently asked refinance questions</h2>
    <div class="faq-list">
      ${page.faqs
        .map(
          ([question, answer]) =>
            `<details class="faq-item"><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`,
        )
        .join("")}
    </div>
  </section>`;
}

function authorBox() {
  return `<div class="editorial-block">
  <strong>Editorial Team</strong>
  <p>Last reviewed: April 2026</p>
  <p>This guide compiles information from public sources, official data, and industry disclosures. Content is reviewed quarterly against updated references.</p>
</div>`;
}

function sidebar(page) {
  const links = [
    ["Best Mortgage Refinance Rates", "/guides/best-mortgage-refinance-rates/", "Pillar guide"],
    ["Mortgage Refinance Closing Costs Explained", "/guides/mortgage-refinance-closing-costs-explained/", "Fee analysis"],
    ["Break-Even Refinance Calculator", "/calculators/break-even-refinance-calculator/", "Interactive tool"],
    ["Refinance vs Home Equity Loan", "/comparisons/refinance-vs-home-equity-loan/", "Comparison"],
  ];
  return `<aside class="article-sidebar"><div class="sticky-panel">
    <section class="sidebar-card">
      <p class="eyebrow">Quick picks</p>
      <h3>Keep comparing before you lock</h3>
      <ul class="sidebar-links">
        ${links
          .map(
            ([label, href, meta]) =>
              `<li><a href="${relLink(page.file, href)}"><strong>${escapeHtml(label)}</strong><span>${escapeHtml(meta)}</span></a></li>`,
          )
          .join("")}
      </ul>
    </section>
  </div></aside>`;
}

function introSection(page) {
  const toolLine =
    page.type === "calculator"
      ? "This calculator follows the same interactive pattern used across the site's existing tools, so the math is fast, mobile-friendly, and easy to compare against live lender quotes."
      : "This page is built to sit next to the site's calculators and pillar guides, so the explanation is detailed enough for decision-making but still practical for homeowners who are actively quote shopping.";
  return `<section class="content-section">
      <p class="eyebrow">Why this page matters</p>
      <h2>${escapeHtml(page.h1)} in the current refinance market</h2>
      <p>${escapeHtml(marketSnapshot)}</p>
      <p>${escapeHtml(
        `${capitalize(page.keyword)} decisions work best when rate, fee, and equity math are reviewed together. ${toolLine}`,
      )}</p>
      <p>${escapeHtml(
        `Borrowers who slow the process down long enough to compare APR, cash to close, projected monthly savings, and the remaining equity cushion usually make better refinance choices than borrowers who only chase a headline rate.`,
      )}</p>
      ${tableHtml(page)}
    </section>`;
}

function calculatorShell(page) {
  return `<section class="content-section">
      <p class="eyebrow">Interactive Tool</p>
      <h2>${escapeHtml(page.h1)}</h2>
      <p>Use the calculator below to estimate the core math first, then compare the output against lender quotes and the related editorial guides linked throughout the page.</p>
      <div class="calculator-shell" data-calculator="${escapeHtml(page.calculatorType)}">
        <form class="calculator-form">
          ${page.calculatorFields
            .map(
              ([label, name, type, value]) =>
                `<label><span>${escapeHtml(label)}</span><input name="${escapeHtml(name)}" type="${escapeHtml(type)}" value="${escapeHtml(value)}" inputmode="decimal"></label>`,
            )
            .join("")}
          <button class="button button-primary" type="submit">Calculate</button>
        </form>
        <div class="calculator-result" aria-live="polite">
          <p><strong>Ready for scenario planning:</strong> enter your numbers and calculate.</p>
        </div>
      </div>
    </section>`;
}

function sectionBlock(eyebrow, title, paragraphs) {
  return `<section class="content-section"><p class="eyebrow">${escapeHtml(
    eyebrow,
  )}</p><h2>${escapeHtml(title)}</h2>${paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("")}</section>`;
}

function generalParagraphs(page, sectionKey) {
  const calculatorHref = page.calculatorCleanPath
    ? relLink(page.file, page.calculatorCleanPath)
    : relLink(page.file, "/calculators/mortgage-refinance-calculator/");
  const comparisonHref = relLink(page.file, "/guides/home-equity-loan-vs-cash-out-refinance/");
  const breakEvenHref = relLink(page.file, "/calculators/break-even-refinance-calculator/");

  const bank = {
    fundamentals: [
      `${capitalize(page.topic)} is easiest to evaluate when you separate the transaction into four moving parts: market rate conditions, lender-controlled pricing, third-party closing costs, and your own time horizon. Homeowners often focus on only the first part because rates are easy to headline, but the other three variables usually determine whether the refinance is genuinely useful. In practice, two borrowers can refinance on the same week at noticeably different economic outcomes simply because one chose a low-fee lender, kept more equity, or avoided a term reset that extended repayment far longer than necessary.`,
      `A practical refinance review starts with the current mortgage instead of the proposed one. You need the present balance, current note rate, remaining term, estimated housing payment, and a realistic idea of how long you expect to own or keep the home. Once that baseline is clear, the new quote can be tested for monthly savings, APR drift, break-even timing, and whether the remaining equity cushion is still healthy. That sequence matters because it keeps marketing language from replacing math.`,
      `This is also why internal tools help. A quick pass through the <a href="${calculatorHref}">${page.h1.toLowerCase().includes("calculator") ? "matching calculator" : "relevant calculator"}</a> or the <a href="${breakEvenHref}">break-even calculator</a> turns a vague refinance idea into an actual comparison framework. The homeowners who tend to navigate underwriting best are usually the ones who already know what outcome they need before the first loan estimate shows up.`,
    ],
    pricing: [
      `Mortgage pricing in 2025 and 2026 has rewarded disciplined shoppers more than passive ones. Lenders are still adjusting for credit score bands, occupancy, loan size, cash-out risk, and state-specific settlement friction, which means the gap between an average quote and a good quote can be large enough to shift the whole decision. That is why it is usually smart to compare at least three lenders on the same day with the same lock period rather than assembling quotes over a week and assuming they are directly comparable.`,
      `APR is especially valuable once fees diverge. A quote with the lower note rate can still be the weaker transaction if it depends on discount points or inflated origination charges to create that lower coupon. Homeowners who compare only the top-line rate may feel as if they won the shopping process while actually taking longer to recover the upfront cost. In a slower-refinance market, lenders often compete harder on structure than on the headline number, so this is not a theoretical problem.`,
      `The most useful pricing questions are simple: How much cash leaves the household at closing, how long until that cash is recovered, and how much equity remains afterward? When those answers are clear, borrowers can compare <a href="${comparisonHref}">cash-out refinance versus home equity alternatives</a> or a low-fee quote versus a lower-rate quote without guessing.`,
    ],
    approval: [
      `Approval quality depends on more than credit score. Lenders also review debt-to-income ratio, reserves, occupancy, property type, appraisal strength, seasoning, and whether the new loan improves the risk picture or makes it more fragile. A borrower with middling credit and strong equity can sometimes look safer than a higher-score borrower who is overleveraged or short on cash reserves. That is why refinance planning should not collapse everything into one number.`,
      `In the current market, the safest underwriting posture is usually to keep more equity than the maximum rules require. Program caps tell you the highest balance a lender might allow, not the most comfortable structure for pricing, appraisal resilience, or future flexibility. If rates fall later, homeowners with a better equity position can often refinance again more easily. If rates stay elevated, extra equity provides room against property-value volatility or unexpected budget strain.`,
      `Documentation readiness helps too. Mortgage statements, insurance declarations, recent income proof, tax information, and asset statements allow a borrower to move quickly once the math makes sense. Faster document delivery does not just shorten the process; it reduces the chance that a quote changes because the lender needed more time to underwrite and the market moved first.`,
    ],
    strategy: [
      `The strongest refinance decisions are strategic rather than reactive. Some homeowners refinance to lower the payment. Others want to shorten the term, remove mortgage insurance, convert an adjustable-rate mortgage into a fixed rate, or use equity for a targeted purpose such as repairs or high-interest debt payoff. The right structure depends on the goal. A loan that is ideal for cash-flow relief may be mediocre for long-run interest control, and a loan that is perfect for rapid debt reduction may be too aggressive for a household that values monthly flexibility.`,
      `This is why break-even is a tool, not the whole decision. If a refinance also removes PMI, stabilizes a volatile future payment, or helps a borrower cleanly remove a co-borrower after divorce, the value of the transaction can exceed the simple monthly savings formula. At the same time, borrowers should be careful not to overstate those softer benefits just to justify a quote with weak economics. A disciplined refinance usually works both emotionally and numerically.`,
      `A good closing habit is to recheck the final numbers just before signing. Compare the Closing Disclosure with the original Loan Estimate, verify whether credits and points moved, and make sure the payment, loan amount, and cash to close still align with the goal that made the refinance attractive in the first place.`,
    ],
  };

  return bank[sectionKey];
}

function companionSections(page) {
  return [
    sectionBlock("Core mechanics", `How ${page.topic} works`, generalParagraphs(page, "fundamentals")),
    sectionBlock("Pricing and fees", `How lenders price ${page.topic}`, generalParagraphs(page, "pricing")),
    sectionBlock("Approval and risk", `What lenders review before approval`, generalParagraphs(page, "approval")),
    sectionBlock(
      "Decision framework",
      `When ${page.topic} makes financial sense`,
      [
        `${capitalize(page.topic)} usually makes sense when the new loan structure solves a real problem that justifies the cost of changing the mortgage. For some households that means immediate monthly savings. For others it means more stable payment behavior, a better term, or a deliberate equity decision that is cheaper than second-lien alternatives. The key is that the benefit should be durable, not cosmetic.`,
        `One of the best ways to pressure-test the decision is to compare multiple scenarios side by side. Run the leanest-fee option, a lower-rate option with points, and the stay-put option. If the refinance still looks strong after those comparisons, it is probably worth pursuing. If it only looks attractive in a single optimistic scenario, the quote likely needs more work.`,
        `The companion tools on this site are designed for exactly that kind of comparison. Homeowners who pair this guide with a calculator, a closing-cost review, and at least one alternative product comparison tend to arrive at a much more confident answer before lender pressure enters the process.`,
      ],
    ),
    sectionBlock("Workflow", `How to shop ${page.topic} without wasting time`, generalParagraphs(page, "strategy")),
  ].join("");
}

function calculatorSections(page) {
  return [
    calculatorShell(page),
    sectionBlock("Inputs", `What each input means on the ${page.h1.toLowerCase()}`, [
      `Each field in this calculator is modeled on the same planning logic lenders use when they size a refinance scenario. Loan amount or current balance determines how sensitive the payment is to a rate move. Rate inputs show whether the market gap is large enough to matter. Term, points, or LTV fields help show whether you are improving the structure or simply rearranging the same debt at a higher total cost over time.`,
      `A useful rule is to enter conservative numbers first. If you expect title fees around the middle of the local range, use the higher side of that range on your first pass. If you are not sure about the home's value, avoid assuming a best-case appraisal. Conservative inputs keep the output decision-safe. If the refinance still looks worthwhile under disciplined assumptions, the real quote is much more likely to hold up.`,
      `Once the baseline run looks reasonable, change only one variable at a time. That method tells you whether the transaction is being driven mostly by rate, mostly by fees, or mostly by equity. Many borrowers discover that the real decision is not whether to refinance but which structure delivers the cleanest outcome.`,
    ]),
    sectionBlock("Interpretation", "How to read the result without over-trusting it", [
      `Calculator outputs are best treated as planning ranges, not approvals. The tool can tell you whether the cash-flow direction is promising or whether the breakeven period looks too long, but only a lender can confirm credit pricing, appraisal treatment, reserve requirements, and final third-party fees.`,
      `That said, the output becomes powerful when it eliminates weak options quickly. If the simple numbers already show a very long payback period, a razor-thin savings benefit, or an equity position that would become uncomfortably tight, you can often avoid wasting time on a full application.`,
      `The best workflow is to run this calculator, then compare the result with a break-even review and at least one guide that explains fees or approval rules in more depth. Doing so turns a single output into a decision framework instead of a random estimate.`,
    ]),
    sectionBlock("Benchmarks", "What current 2025-2026 benchmarks suggest", generalParagraphs(page, "pricing")),
    sectionBlock("Approval context", "Why underwriting still matters after the math", generalParagraphs(page, "approval")),
    sectionBlock("Best next steps", "How to move from calculator output to real quotes", generalParagraphs(page, "strategy")),
  ].join("");
}

function stateSections(page) {
  return [
    sectionBlock("Local market", `How ${page.stateName} affects refinance economics`, [
      `${page.stateName} homeowners feel refinance costs through a local lens. Title workflow, county recording lines, escrow conventions, insurance behavior, attorney involvement, and typical loan sizes all influence whether a national refinance advertisement is actually actionable in the state. That is why state guides matter: they turn generalized refinance advice into something more usable.`,
      `A disciplined borrower in ${page.stateName} should separate lender-controlled fees from local third-party costs as early as possible. Once that split is visible, it becomes easier to tell whether a quote is weak because the lender is overcharging or simply because the state has higher unavoidable settlement friction. That distinction often changes which quote looks best.`,
      `The current mortgage-rate backdrop also matters. ${marketSnapshot} In a market like this, small pricing differences matter more because not every refinance has a naturally short break-even window. State-level costs can be the deciding factor.`,
    ]),
    sectionBlock("Costs and timing", `Typical ${page.stateName} refinance costs and pace`, [
      `Most borrowers in ${page.stateName} should budget for a fee range rather than a single number. Loan amount, points, escrows, appraisal treatment, and whether the refinance is cash-out or rate-term all change the final total. Bigger balances often make percentage-based costs feel manageable while still creating a large dollar outlay that lengthens payback.`,
      `Timing matters too. A lender that can close slightly faster can be materially better if rates are moving or if the current lock period is tight. The strongest state-specific quotes are not just cheaper; they are more executable.`,
      `Borrowers who want clean decisions should usually calculate monthly savings, total cash to close, and simple break-even timing together. That approach prevents a slightly lower rate from distracting attention away from a much higher closing-cost structure.`,
    ]),
    sectionBlock("Shopping discipline", `How to compare lenders in ${page.stateName}`, [
      `Ask lenders for the same lock period on the same day, and request a full breakdown of lender fees versus third-party items. That keeps market noise from disguising the real cost spread between quotes.`,
      `If your property is a condo, a high-balance loan, a cash-out refinance, or a file with unusual title history, mention that early. State-specific friction tends to hit those scenarios first, and it is better to expose that complexity before committing to a quote.`,
      `Finally, compare the refinance against a do-nothing option and at least one alternative product. In some cases, preserving an existing low-rate first mortgage and using a smaller second-lien product creates a stronger overall result.`,
    ]),
    sectionBlock("Decision guide", `When ${page.stateName} refinance usually makes sense`, generalParagraphs(page, "strategy")),
    sectionBlock("Action plan", `A practical ${page.stateName} refinance checklist`, [
      `Gather your current mortgage statement, insurance declaration page, recent income and asset documentation, and any recent appraisal or title information before shopping. Preparation shortens the time between quote and lock.`,
      `Run the numbers with a calculator first, then compare at least three quotes, ask direct questions about local title and recording assumptions, and verify whether any state-specific closing or tax quirks could change the final math.`,
      `If the quote still looks strong after fees, timing, and local friction are accounted for, you will be moving into underwriting with a much more reliable decision than the average borrower.`,
    ]),
  ].join("");
}

function guideSections(page) {
  const special = [];
  if (page.cleanPath.includes("fha-streamline")) {
    special.push(
      sectionBlock("Program rules", "What HUD requires on FHA streamline", [
        `HUD states that streamline refinance is only available for an existing FHA-insured mortgage. The current loan must be current, the refinance must create a net tangible benefit, and cash back over $500 is not allowed. Those rules make the program efficient, but they also make it very different from a standard cash-out or fully documented conventional refinance.`,
        `The most common reason borrowers pursue FHA streamline is to improve the payment or move into a more stable structure without a full appraisal and heavily documented re-underwrite. That can be especially helpful when home appreciation is limited or credit has not improved enough for a strong conventional refinance.`,
        `Borrowers still need to evaluate closing costs, lender credits, and the role of mortgage insurance. Streamlined does not mean free, and it does not mean every lender will offer the same execution.`,
      ]),
    );
  }
  if (page.cleanPath.includes("va-loan-refinance-guide")) {
    special.push(
      sectionBlock("Veteran focus", "What veterans should watch most closely", [
        `The VA's own funding-fee page lists a 0.5% funding fee for IRRRLs and distinguishes it from the more expensive cash-out structure. That matters because a lender can present a quote as streamlined while still burying avoidable cost in credits, fees, or term reset decisions.`,
        `Veterans should pay attention to the total balance after the fee is financed, the real cash needed at closing, and whether the refinance meaningfully improves the household outcome. A tiny rate improvement is not enough by itself if the structure adds years of interest or creates an unnecessary reset.`,
        `The right comparison is usually IRRRL versus the existing VA loan, not just IRRRL versus a random market average. Once that baseline is clear, the veteran can decide whether the rate reduction is truly worth using up the refinance opportunity.`,
      ]),
    );
  }
  if (page.cleanPath.includes("bad-credit")) {
    special.push(
      sectionBlock("Score strategy", "What to do before applying with weaker credit", [
        `Fannie Mae's selling guide still points to a 620 minimum credit score for many manually underwritten fixed-rate loans, even though automated underwriting paths can behave differently. In practice, that means borrowers with weaker credit should expect lender overlays and pricing sensitivity even when a program technically exists.`,
        `The fastest way to improve refinance odds is usually to reduce revolving balances, avoid new inquiries, clean up late-payment history, and document income stability clearly. Small score changes around key pricing bands can be worth real money.`,
        `It is also helpful to compare whether waiting a few months changes the result. In a higher-rate environment, patience plus a cleaner credit profile can outperform rushing into a marginal refinance.`,
      ]),
    );
  }

  return [
    sectionBlock("Fundamentals", `How ${page.topic} works right now`, generalParagraphs(page, "fundamentals")),
    ...special,
    sectionBlock("Pricing", "How rates, APR, and fees shape the decision", generalParagraphs(page, "pricing")),
    sectionBlock("Approval", "What lenders are likely to review", generalParagraphs(page, "approval")),
    sectionBlock("When it works", `When ${page.topic} makes sense`, [
      `${capitalize(page.topic)} is usually strongest when it improves the household balance sheet in a visible way. That can mean lower monthly cash outflow, lower total interest over a realistic ownership horizon, removal of mortgage insurance, improved payment stability, or better use of available equity.`,
      `The safest test is whether the refinance would still look smart after a conservative appraisal, a slightly higher fee stack, and a realistic ownership horizon. If the answer only works under ideal assumptions, the quote is likely too fragile.`,
      `Homeowners should also compare alternatives before locking. Sometimes the best refinance is no refinance. Sometimes a smaller second-lien product or a delayed application creates a better overall outcome.`,
    ]),
    sectionBlock("Execution", "How to shop, compare, and close well", generalParagraphs(page, "strategy")),
  ].join("");
}

function renderBody(page) {
  const lead = `<p class="lead">${escapeHtml(page.description)}</p>`;
  const content =
    page.type === "companion"
      ? `${introSection(page)}${companionSections(page)}`
      : page.type === "calculator"
        ? `${introSection(page)}${calculatorSections(page)}`
        : page.type === "state"
          ? `${introSection(page)}${stateSections(page)}`
          : `${introSection(page)}${guideSections(page)}`;

  return `    <main id="main-content">
      <section class="hero hero-inner">
        <div class="container">
          ${breadcrumbsHtml(page)}
          <div class="page-hero">
            <div>
              <span class="badge">Updated 2026</span>
              <h1>${escapeHtml(page.h1)}</h1>
              <p class="hero-copy">${escapeHtml(page.description)}</p>
              <div class="hero-actions">
                <a class="button button-primary" href="${relLink(page.file, "/calculators/mortgage-refinance-calculator/")}">Run refinance math</a>
                <a class="button button-secondary" href="${relLink(page.file, "/rates/")}">Check rate guides</a>
              </div>
            </div>
            ${heroSide(page)}
          </div>
        </div>
      </section>
      <section class="section page-body">
        <div class="container layout-grid">
          <article class="article-body">
            ${lead}
            ${metricGrid(page)}
            ${content}
            ${faqHtml(page)}
            ${authorBox()}
          </article>
          ${sidebar(page)}
        </div>
      </section>
      ${relatedLinks(page)}
    </main>`;
}

function renderPage(page) {
  return `<!doctype html>
<html lang="en">
  <head>
${metaTags(page)}
  </head>
  <body data-page-type="${escapeHtml(page.type === "calculator" ? "calculator" : "article")}">
${headerHtml()}
${renderBody(page)}
${footerHtml()}
  </body>
</html>
`;
}

function renderGuidesIndex() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Refinance Guides Hub | MortgageRefinanceGuides</title>
    <meta name="description" content="Explore premium mortgage refinance guides covering cash-out, FHA, VA, bad credit, closing costs, and refinance timing for U.S. homeowners.">
    <link rel="canonical" href="${domain}/guides">
    <link rel="icon" href="../favicon.ico">
    <link rel="stylesheet" href="../styles.css">
    <meta name="robots" content="index, follow">
    <meta property="og:type" content="article">
    <meta property="og:title" content="Refinance Guides Hub | MortgageRefinanceGuides">
    <meta property="og:description" content="Explore premium mortgage refinance guides covering cash-out, FHA, VA, bad credit, closing costs, and refinance timing for U.S. homeowners.">
    <meta property="og:url" content="${domain}/guides">
    <meta property="og:image" content="${socialImage}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Refinance Guides Hub | MortgageRefinanceGuides">
    <meta name="twitter:description" content="Explore premium mortgage refinance guides covering cash-out, FHA, VA, bad credit, closing costs, and refinance timing for U.S. homeowners.">
    <meta name="twitter:image" content="${socialImage}">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3733223915347669" crossorigin="anonymous"></script>
    <script src="../main.js" defer></script>
  </head>
  <body data-page-type="page">
${headerHtml()}
    <main id="main-content">
      <section class="hero hero-inner">
        <div class="container">
          <nav class="breadcrumbs" aria-label="Breadcrumb"><ol><li><a href="../">Home</a></li><li><a href="./">Guides</a></li></ol></nav>
          <div class="page-hero">
            <div>
              <span class="badge">Updated 2026</span>
              <h1>Refinance Guides Hub</h1>
              <p class="hero-copy">Editorial refinance guides covering cash-out, FHA, VA, bad-credit scenarios, closing costs, and timing decisions for U.S. homeowners.</p>
            </div>
            <div class="hero-side panel">
              <p class="eyebrow">Start here</p>
              <h2>Build the shortlist before you lock</h2>
              <div class="metric-grid">
                <article><span>Best for</span><strong>Deep decision support</strong></article>
                <article><span>Format</span><strong>Long-form editorial guides</strong></article>
                <article><span>Updated</span><strong>2026</strong></article>
                <article><span>Next step</span><strong>Pair with calculators</strong></article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section page-body">
        <div class="container">
          <div class="metric-grid">
            <article><span>Primary topics</span><strong>Cash-out, FHA, VA, credit, timing</strong></article>
            <article><span>Use case</span><strong>Quote comparison and planning</strong></article>
            <article><span>Audience</span><strong>U.S. homeowners</strong></article>
            <article><span>Editorial cadence</span><strong>Quarterly review</strong></article>
          </div>
          <section class="related-links">
            <h2>Featured refinance guides</h2>
            <div class="card-grid three">
              <a class="mini-card" href="./cash-out-refinance-requirements"><strong>Cash-Out Refinance Requirements</strong><span>Credit, LTV, and DTI</span></a>
              <a class="mini-card" href="./refinance-with-bad-credit"><strong>How to Refinance With Bad Credit</strong><span>Score improvement strategy</span></a>
              <a class="mini-card" href="./fha-streamline-refinance"><strong>FHA Streamline Refinance Guide</strong><span>HUD-driven streamline path</span></a>
              <a class="mini-card" href="./va-loan-refinance-guide"><strong>VA Loan Refinance Guide</strong><span>IRRRL and veteran options</span></a>
              <a class="mini-card" href="./when-to-refinance-mortgage"><strong>When to Refinance Your Mortgage</strong><span>Timing and break-even</span></a>
              <a class="mini-card" href="../guides/best-mortgage-refinance-rates/"><strong>Best Mortgage Refinance Rates</strong><span>Existing pillar guide</span></a>
            </div>
          </section>
        </div>
      </section>
    </main>
${footerHtml()}
  </body>
</html>
`;
}

async function updateSitemap() {
  const sitemapPath = path.join(root, "sitemap.xml");
  let xml = await fs.readFile(sitemapPath, "utf8");
  for (const page of pages) {
    const escaped = page.cleanPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(
      `<url><loc>${domain.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}${escaped}\\/?<\\/loc><lastmod>[^<]+<\\/lastmod><changefreq>weekly<\\/changefreq><priority>0\\.8<\\/priority><\\/url>`,
      "g",
    );
    xml = xml.replace(pattern, "");
  }
  const entries = pages
    .map(
      (page) =>
        `<url><loc>${domain}${page.cleanPath}</loc><lastmod>${dateModified}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`,
    )
    .join("");
  xml = xml.replace(
    "</urlset>",
    `${entries}</urlset>`,
  );
  xml = xml.replace(
    /<url><loc>https:\/\/mortgagerefinanceguides\.com\/guides\/refinance-with-bad-credit\/<\/loc><lastmod>[^<]+<\/lastmod><changefreq>weekly<\/changefreq><priority>0\.8<\/priority><\/url>/,
    "",
  );
  await fs.writeFile(sitemapPath, xml);
}

async function main() {
  for (const page of pages) {
    const outputPath = writeFilePath(page.file);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, renderPage(page));
  }
  await fs.writeFile(path.join(root, "guides", "index.html"), renderGuidesIndex());
  await updateSitemap();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
