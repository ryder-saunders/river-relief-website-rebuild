/**
 * Central content/config for the site.
 *
 * All copy, contact info, and links live here so the page components stay
 * purely presentational. When client content changes, update the values in
 * this file rather than editing JSX directly in components.
 *
 * River Relief LLC is a personal-loan / debt-consolidation lender (not an
 * environmental nonprofit, despite the river branding — the name is a
 * "river to lower payments" metaphor). Copy below is adapted from the
 * client's existing site (captured 2026-07-17) as a starting framework;
 * sections will be refined one at a time in follow-up passes.
 */

export const siteConfig = {
  orgName: "River Relief",
  tagline: "Personal loans with a calmer path forward",
  description:
    "River Relief helps borrowers compare personal-loan options designed to consolidate debt, lower monthly payments, and create a clearer path forward.",
  url: "https://example.com", // TODO: replace with production domain once known

  nav: [
    { label: "Why River Relief", href: "#about" },
    { label: "Fit", href: "#fit" },
    { label: "Process", href: "#how-it-works" },
    { label: "Options", href: "#get-started" },
  ],

  hero: {
    eyebrow: "Debt consolidation loan guidance",
    heading: "Trade scattered debt payments for one calmer monthly plan.",
    subheading:
      "River Relief helps borrowers compare personal-loan options that may lower monthly payments, simplify repayment, and create room to breathe without a high-pressure sales process.",
    primaryCta: { label: "Start My Free Review", href: "#get-started" }, // TODO: link to real application flow
    headerCta: { label: "Start Review", href: "#get-started" },
    secondaryCta: { label: "See the Process", href: "#how-it-works" },
    trustLine:
      "Free consultation. Human guidance. Clear next steps before you decide.",
    highlights: [
      "Consolidate credit card balances",
      "Compare options without pressure",
      "Get guidance from a lending manager",
    ],
    intent: {
      label: "Most borrowers come to us when they want to:",
      items: [
        "Lower the monthly pressure",
        "Replace multiple due dates",
        "Understand realistic loan options",
      ],
    },
    proof: [
      "Personal loan options through affiliates",
      "Support for a range of credit profiles",
      "Clear rate, term, and fee explanations",
    ],
    preview: {
      label: "Relief potential",
      stat: "Up to 40%",
      caption: "Lower monthly payments on average for eligible clients.",
      items: [
        { label: "Review cost", value: "$0" },
        { label: "Loan range", value: "$1K-$100K+" },
        { label: "Term options", value: "4-84 mo." },
      ],
    },
  },

  mission: {
    eyebrow: "Why River Relief",
    heading:
      "A premium, personal experience for borrowers who want breathing room.",
    body: "Debt can feel loud. River Relief keeps the process calm, direct, and human by helping you understand loan options that may replace scattered high-interest payments with a clearer monthly plan.",
    points: [
      "Guidance built around your actual monthly payment target.",
      "Plain-language explanations of APR, fees, term length, and total cost.",
      "A calmer process for borrowers who want options, not pressure.",
      "A focus on simpler repayment and long-term confidence.",
    ],
  },

  fit: {
    eyebrow: "Is this for you?",
    heading:
      "A strong fit when debt is manageable, but the payment structure is not.",
    body: "River Relief is built for people who want to compare a personal-loan path before choosing how to handle credit card balances or other unsecured debt.",
    cards: [
      {
        title: "You may be a fit if",
        items: [
          "Your monthly payments feel too high.",
          "You have multiple balances with different due dates.",
          "You want to understand loan options before committing.",
          "You value a guided, private review.",
        ],
      },
      {
        title: "We will help you clarify",
        items: [
          "Whether consolidation could lower your payment.",
          "How the rate, term, and fees affect the real cost.",
          "Which option fits your budget instead of stretching it.",
          "What the next step should be if a loan is not the right fit.",
        ],
      },
    ],
    cta: { label: "Check My Options", href: "#get-started" },
  },

  programs: {
    eyebrow: "How it works",
    heading: "A simple review designed to remove guesswork.",
    body: "The process is private, efficient, and guided by a lending manager who helps you compare the details that determine whether an option actually makes sense.",
    items: [
      {
        title: "Share your goals",
        description:
          "Tell us what you want to improve, whether that is lowering monthly payments, consolidating balances, or simplifying repayment.",
      },
      {
        title: "Review your options",
        description:
          "We help compare personal-loan options and explain the details that matter: payment, rate, term, fees, and fit.",
      },
      {
        title: "Move forward clearly",
        description:
          "If an option makes sense, you can use it to consolidate debt and replace scattered payments with one steadier path.",
      },
    ],
  },

  impact: {
    eyebrow: "Built for confidence",
    heading: "Proof points that make the decision easier.",
    body: "A better borrower experience starts with specifics. River Relief helps you evaluate payment relief, loan size, APR, fees, and term length before you move forward.",
    items: [
      { stat: "Up to 40%", label: "Lower monthly payments on average" },
      { stat: "$1K–$100K+", label: "Personal loan amounts available" },
      { stat: "4.9%-35.99%", label: "APR range through affiliates" },
      { stat: "4-84 mo.", label: "Available repayment terms" },
    ],
    note: "Eligibility, final rates, fees, and loan terms vary by borrower, affiliate, and state availability.",
  },

  getInvolved: {
    eyebrow: "Get started",
    heading: "Choose the next step that feels right.",
    body: "Whether you are ready to compare offers or still sorting through your options, River Relief can help you understand what a more manageable payment path could look like.",
    actions: [
      {
        title: "Start a free option review",
        description:
          "Begin with a simple intake so we can understand your debt, income, and payment goals.",
        cta: { label: "Begin Review", href: "#contact" }, // TODO: link to application flow
      },
      {
        title: "Talk it through",
        description:
          "Speak with a lending manager and get plain answers before you apply.",
        cta: { label: "Request a Call", href: "#contact" }, // TODO: add tel: link once phone number is confirmed
      },
      {
        title: "Ask a question",
        description:
          "Not sure where to start? Send us a note and we will point you to the best next step.",
        cta: { label: "Contact Us", href: "#contact" },
      },
    ],
    checklistTitle: "What we will help you review",
    checklist: [
      "Current balances and payment pressure",
      "Monthly payment target",
      "Potential rate, term, fees, and total cost",
      "Whether consolidation is the right next move",
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Start with the facts. Decide with confidence.",
    body: "Send a note with what you are hoping to improve. A River Relief lending manager will follow up with a clear next step.",
    promptTitle: "Helpful details to include",
    prompts: [
      "Approximate debt amount",
      "Current monthly payment pressure",
      "Primary goal: lower payment, consolidate, or compare options",
    ],
    cta: { label: "Email River Relief", href: "mailto:info@example.com" }, // TODO: replace with real contact email
    email: "info@example.com", // TODO: replace with real contact email
    phone: "", // TODO: add real phone number
    address: "", // TODO: add mailing address if applicable
  },

  social: {
    // TODO: fill in real social links; omit/empty hides the link in the footer
    facebook: "",
    instagram: "",
    twitter: "",
  },

  legal: {
    // Adapted from the client's existing site footer disclosures. Confirm
    // current wording with the client before treating this as final —
    // lending disclosures are compliance-sensitive.
    disclosure:
      "We provide Personal Lending Services. Personal loan options offered by our affiliates range from $1,000 to $100,000+, have Annual Percentage Rates that range from 4.9% to 35.99%, origination fees ranging from 4.95% to 10% of the amount financed, and loan terms from 4 to 84 months. Only the most creditworthy borrowers receive the highest loan amounts at the lowest rates. Our services are not available in all states; fees may vary by state. We do not discriminate on the basis of race, color, religion, sex, marital status, national origin, or ancestry.",
  },
} as const;
