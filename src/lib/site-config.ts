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
    { label: "Process", href: "#how-it-works" },
    { label: "Options", href: "#get-started" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Personal loan guidance for debt consolidation",
    heading: "Lower your monthly payments with a clearer way forward.",
    subheading:
      "River Relief helps you review personal-loan options built around your budget, your credit profile, and your goal of turning high-interest debt into one more manageable payment.",
    primaryCta: { label: "Start My Free Review", href: "#get-started" }, // TODO: link to real application flow
    headerCta: { label: "Start Review", href: "#get-started" },
    secondaryCta: { label: "See the Process", href: "#how-it-works" },
    trustLine:
      "Free consultation. No pressure. Options explained in plain English.",
    highlights: [
      "Debt consolidation loans",
      "Options for a range of credit profiles",
      "One-on-one lending support",
    ],
    preview: {
      label: "Estimated relief potential",
      stat: "Up to 40%",
      caption: "Lower monthly payments on average for eligible clients",
      items: [
        { label: "Loan range", value: "$1K-$100K+" },
        { label: "Typical terms", value: "4-84 mo." },
        { label: "First step", value: "Free review" },
      ],
    },
  },

  mission: {
    eyebrow: "Why River Relief",
    heading:
      "A premium, personal experience for borrowers who want breathing room.",
    body: "Debt can feel loud. River Relief keeps the process calm, direct, and human by helping you understand loan options that may replace scattered high-interest payments with a clearer monthly plan.",
    points: [
      "Guidance built around your actual budget, not a generic offer.",
      "Plain-language answers before you make a decision.",
      "A focus on lower payments, simpler repayment, and long-term confidence.",
    ],
  },

  programs: {
    eyebrow: "How it works",
    heading: "Three steps from uncertainty to a plan.",
    body: "The process is designed to be simple, private, and efficient, with a lending manager helping you understand each option before you move forward.",
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
    heading: "The numbers borrowers ask about first.",
    body: "Every situation is different, but these are the practical details River Relief helps you evaluate before choosing a loan option.",
    items: [
      { stat: "Up to 40%", label: "Lower monthly payments on average" },
      { stat: "$1K–$100K+", label: "Personal loan amounts available" },
      { stat: "4.9%-35.99%", label: "APR range through affiliates" },
      { stat: "4-84 mo.", label: "Available repayment terms" },
    ],
  },

  getInvolved: {
    eyebrow: "Get started",
    heading: "Choose the next step that feels right.",
    body: "Whether you are ready to compare offers or still sorting through your options, River Relief can help you understand what a more manageable payment path could look like.",
    actions: [
      {
        title: "Start a free review",
        description:
          "Begin with a simple intake so we can understand your debt, income, and payment goals.",
        cta: { label: "Begin Review", href: "#" }, // TODO: link to application flow
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
  },

  contact: {
    eyebrow: "Contact",
    heading: "Ready for a calmer conversation about your options?",
    body: "Send us a message and a River Relief lending manager will follow up with next steps.",
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
