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
  tagline: "Faith-guided debt relief conversations",
  description:
    "River Relief helps faith-based borrowers talk through credit card debt, compare personal-loan options, and take the next faithful step toward a more manageable monthly plan.",
  url: "https://example.com", // TODO: replace with production domain once known

  nav: [
    {
      label: "Debt Relief",
      href: "/debt-relief",
      items: [
        { label: "Credit Card Debt", href: "/credit-card-debt" },
        { label: "Debt Consolidation", href: "/debt-consolidation" },
        { label: "Personal Loans", href: "/personal-loans" },
      ],
    },
    {
      label: "How It Works",
      href: "/how-it-works",
      items: [
        { label: "Faith-Based Guidance", href: "/faith-based-guidance" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "Get Help With Debt Relief", href: "/debt-review" },
      ],
    },
    {
      label: "Resources",
      href: "/resources",
      items: [
        { label: "Debt Review", href: "/debt-review" },
        { label: "FAQs", href: "/faq" },
        { label: "About River Relief", href: "/about" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    eyebrow: "Faith based debt help",
    heading: "A path out of credit card debt.",
    subheading:
      "Private, faith-respectful guidance for lowering payment pressure and finding the next right step.",
    primaryCta: { label: "Qualify For Debt Relief", href: "/qualify" },
    headerCta: { label: "Qualify Today", href: "/qualify" },
    secondaryCta: { label: "Talk With Us", href: "/contact" },
    trustLine: "Free review. No pressure. Human follow-up.",
    testimonial: {
      quote:
        "They helped us slow down, understand the numbers, and take the next step without feeling judged.",
    },
    highlights: [
      "Credit card debt",
      "Guided review",
      "Phone support",
      "Private process",
      "Faith-friendly",
      "No pressure",
    ],
    proof: [
      "Personal-loan options through affiliates",
      "Clear rate, term, and fee details",
      "CRM-ready review structure",
    ],
  },

  mission: {
    eyebrow: "",
    heading: "Practical relief without leaving your values at the door.",
    body: "A confidential conversation about credit card debt, stewardship, and the next practical step.",
    points: [
      "A monthly payment that feels easier to plan around.",
      "One clear next step instead of more guesswork.",
      "Less pressure when bills and due dates stack up.",
      "A path you can talk through before deciding.",
    ],
    supportExample: {
      title: "River Relief Debt Relief Support",
      before: {
        label: "Before River Relief",
        person: "Stretched monthly",
        stats: [
          { label: "Cards", value: "4" },
          { label: "Monthly", value: "$1,240" },
          { label: "Due dates", value: "7" },
        ],
      },
      after: {
        label: "After River Relief",
        person: "Clearer plan",
        stats: [
          { label: "Payment", value: "$790" },
          { label: "Due date", value: "1" },
          { label: "Relief", value: "$450/mo" },
        ],
      },
    },
    cta: {
      label: "Qualify for Debt Relief",
      sublabel: "Faith-Based Approach",
      href: "/qualify",
    },
  },

  fit: {
    eyebrow: "",
    heading: "Ready to face your debt and simplify the structure?",
    body: "Compare a personal-loan path before choosing how to handle credit card balances.",
    cards: [
      {
        title: "You may be a fit if",
        items: [
          "Lower payments",
          "Fewer due dates",
          "Clear options",
          "Private help",
        ],
      },
      {
        title: "We will help you clarify",
        items: ["Payment relief", "True cost", "Budget fit", "Next step"],
      },
    ],
    cta: { label: "Check My Options", href: "/qualify" },
    secondaryCta: { label: "Call First", href: "/contact" },
  },

  programs: {
    eyebrow: "How it works",
    heading: "Here’s how it works.",
    body: "Answer a few questions, then talk through your options.",
    items: [
      {
        title: "Answer quick questions",
        description: "Debt range, goals, timing, and credit range.",
        note: "No hard pull just to start.",
      },
      {
        title: "Build the profile",
        description: "Your answers become a CRM-ready review object.",
        note: "Your answers guide the right follow-up.",
      },
      {
        title: "Talk through options",
        description: "A lending manager explains the path clearly.",
        note: "You can call first if you would rather talk.",
      },
    ],
    cta: { label: "Get Help With Debt Relief", href: "/qualify" },
  },

  impact: {
    eyebrow: "",
    heading: "Know the numbers before you decide.",
    body: "Review payment relief, loan size, APR, fees, and term length.",
    items: [
      { stat: "Up to 40%", label: "Lower monthly payments on average" },
      { stat: "$1K–$100K+", label: "Personal loan amounts available" },
      { stat: "4.9%-35.99%", label: "APR range through affiliates" },
      { stat: "4-84 mo.", label: "Available repayment terms" },
    ],
    note: "Eligibility, final rates, fees, and loan terms vary by borrower, affiliate, and state availability.",
    cta: { label: "Review My Numbers", href: "/qualify" },
  },

  getInvolved: {
    eyebrow: "",
    heading: "Choose your next step.",
    body: "Start online or talk first.",
    actions: [
      {
        title: "Get help online",
        description: "Build a quick borrower profile.",
        supportText:
          "A short guided review helps organize debt, timing, and payment goals before anyone follows up.",
        cta: { label: "Qualify Online", href: "/qualify" },
      },
      {
        title: "Call first",
        description: "Speak with a lending manager.",
        supportText:
          "Ask practical questions first, then decide if the online review feels like the right next step.",
        cta: { label: "Call Now", href: "tel:8005201758" },
      },
      {
        title: "Ask a question",
        description: "Get pointed to the best next step.",
        supportText:
          "Use this if you are still sorting through options and want a simple place to begin.",
        cta: { label: "Contact Us", href: "/contact" },
      },
    ],
  },

  intake: {
    eyebrow: "Private debt relief review",
    heading: "Take a step today for a better tomorrow.",
    body: "Takes about 3 minutes. Answer a few questions, then choose how River Relief should follow up.",
    steps: ["Debt", "Pressure", "Goal", "Contact"],
    submitLabel: "Prepare My Review",
    successTitle: "Your review profile is ready.",
    successBody: "This can be sent to the CRM in the next backend pass.",
  },

  contact: {
    eyebrow: "",
    heading: "Prefer a person first?",
    body: "Call River Relief or get help with debt relief online.",
    cta: { label: "Get Help With Debt Relief", href: "/qualify" },
    callCta: { label: "Call River Relief", href: "tel:8005201758" },
    email: "info@example.com", // TODO: replace with real contact email
    phone: "(800) 520-1758",
    address: "", // TODO: add mailing address if applicable
    supportPerson: {
      name: "Your River Relief Advisor",
      title: "Phone Support Specialist",
    },
    callBenefits: [
      {
        title: "Low pressure",
        body: "Ask questions before sharing anything sensitive.",
      },
      {
        title: "Fast clarity",
        body: "Know whether the online review is worth your time.",
      },
      {
        title: "Faith-respectful",
        body: "A practical conversation without shame.",
      },
    ],
  },

  stickyCta: {
    label: "Qualify For Debt Relief",
    href: "/qualify",
    secondaryLabel: "Call",
    secondaryHref: "tel:8005201758",
  },

  funnel: {
    path: "/qualify",
    completionPath: "/review-complete",
    hero: {
      eyebrow: "Private debt relief review",
      title: "Qualify For Debt Relief",
      body: "Answer a few private questions, then choose how River Relief should follow up.",
      trustLine:
        "Takes about 3 minutes. No judgement. Contact info comes last.",
      callCta: { label: "Call (800) 520-1758", href: "tel:8005201758" },
      proof: ["Faith-respectful", "Private start", "Human follow-up"],
      trustLogos: [
        {
          src: "/brand/trust-badges/bbb-accredited-business.png",
          alt: "BBB Accredited Business",
        },
        {
          src: "/brand/trust-badges/trustpilot.webp",
          alt: "Trustpilot reviews",
        },
        {
          src: "/brand/trust-badges/google-reviews.webp",
          alt: "Google reviews",
        },
      ],
    },
    nextStep: {
      title: "What happens after the review?",
      body: "Your answers create a simple borrower profile so a River Relief advisor can respond with context instead of starting cold.",
      items: [
        {
          title: "Profile built",
          body: "Debt range, goals, pressure, and preferred contact are organized for follow-up.",
        },
        {
          title: "Person reviews it",
          body: "A River Relief advisor can look at the profile before reaching out.",
        },
        {
          title: "You choose pace",
          body: "Continue online, ask a question, or call first if that feels better.",
        },
      ],
    },
    completion: {
      eyebrow: "Review submitted",
      title: "Your private review was received.",
      body: "A River Relief advisor can use your answers to understand the situation and follow up in the way you selected.",
      primaryCta: { label: "Return Home", href: "/" },
      callCta: { label: "Call (800) 520-1758", href: "tel:8005201758" },
      reassurance: [
        "No judgement here. Everyone is on their own path.",
        "Keep your phone nearby if you asked for a call.",
        "You can still call River Relief if you would rather talk first.",
      ],
    },
  },

  standardPages: {
    debtRelief: {
      title: "Debt Relief That Fits",
      description:
        "Compare a practical debt relief path without pressure, shame, or confusing next steps.",
      eyebrow: "Debt Relief",
      heroImage: "/brand/generated/v006/debt-relief-budget-couple-v006.png",
      heroAlt: "A family reviewing debt relief options after a calm call",
      primaryCta: { label: "Qualify For Debt Relief", href: "/qualify" },
      secondaryCta: { label: "Call River Relief", href: "tel:8005201758" },
      cardsTitle: "What debt relief should make clearer",
      cards: [
        {
          title: "Payment Relief",
          body: "See whether a new monthly payment could create breathing room.",
        },
        {
          title: "True Cost",
          body: "Review rate, term, fees, and total repayment before deciding.",
        },
        {
          title: "Next Step",
          body: "Know whether to keep comparing, call first, or move forward.",
        },
      ],
      proofTitle: "A better plan starts with honest numbers.",
      proofBody:
        "River Relief helps you slow down, organize the details, and review options through a stewardship-minded lens.",
      proofImage:
        "/brand/generated/v006/resources-guidance-compact-hero-v006.png",
      proofAlt: "Advisor reviewing debt relief options with a family",
      proofItems: ["Lower pressure", "Fewer due dates", "Clearer options"],
      stepsTitle: "How support begins",
      steps: [
        "Answer a few private questions.",
        "Build a simple borrower profile.",
        "Talk through options with a person.",
      ],
      faqTitle: "Common questions",
      faqs: [
        {
          question: "Is this a high-pressure process?",
          answer: "No. The goal is clarity before any decision.",
        },
        {
          question: "Can I call first?",
          answer: "Yes. Call (800) 520-1758 if you want a person first.",
        },
      ],
      finalCtaTitle: "Ready for a clearer debt relief path?",
      finalCtaBody: "Start online or call River Relief today.",
    },
    creditCardDebt: {
      title: "Credit Card Debt Help",
      description:
        "Review a faith-respectful path for credit card balances, high payments, and too many due dates.",
      eyebrow: "Credit Card Debt",
      heroImage:
        "/brand/generated/v006/credit-card-debt-relief-rectangle-v006.png",
      heroAlt: "Faith-forward River Relief debt help creative",
      primaryCta: { label: "Qualify For Debt Relief", href: "/qualify" },
      secondaryCta: { label: "Call River Relief", href: "tel:8005201758" },
      cardsTitle: "When credit cards feel too loud",
      cards: [
        {
          title: "High Payments",
          body: "Review whether a different structure may reduce pressure.",
        },
        {
          title: "Multiple Dates",
          body: "Explore a path toward fewer payment dates to manage.",
        },
        {
          title: "Private Review",
          body: "Name the debt range without judgement or a hard sell.",
        },
      ],
      proofTitle: "The first win is getting organized.",
      proofBody:
        "Credit card debt can feel scattered. River Relief helps turn the pieces into a simple review.",
      proofImage:
        "/brand/generated/v006/credit-card-debt-relief-rectangle-v006.png",
      proofAlt: "Advisor speaking with a family in a faith community setting",
      proofItems: ["Balances", "Payment goals", "Follow-up choice"],
      stepsTitle: "A calmer way to start",
      steps: [
        "Share the debt range.",
        "Choose your main payment goal.",
        "Decide how River Relief should follow up.",
      ],
      faqTitle: "Credit card debt questions",
      faqs: [
        {
          question: "Do I need exact balances?",
          answer: "No. A range is enough to start the review.",
        },
        {
          question: "Is this only for perfect credit?",
          answer: "No. The review starts with your situation and goals.",
        },
      ],
      finalCtaTitle: "Take one step toward less pressure.",
      finalCtaBody: "See whether debt relief may fit your credit card debt.",
    },
    debtConsolidation: {
      title: "Debt Consolidation Help",
      description:
        "Compare whether consolidating balances could simplify your monthly structure.",
      eyebrow: "Debt Consolidation",
      heroImage:
        "/brand/generated/v006/resources-guidance-compact-hero-v006.png",
      heroAlt: "River Relief advisor reviewing consolidation options",
      primaryCta: { label: "Qualify For Debt Relief", href: "/qualify" },
      secondaryCta: { label: "Call River Relief", href: "tel:8005201758" },
      cardsTitle: "What consolidation may help clarify",
      cards: [
        {
          title: "One Payment",
          body: "See if fewer payments could make the month easier to plan.",
        },
        {
          title: "Real Terms",
          body: "Understand payment, rate, term length, and fees together.",
        },
        {
          title: "Budget Fit",
          body: "Compare options against the payment you can live with.",
        },
      ],
      proofTitle: "Consolidation should simplify, not confuse.",
      proofBody:
        "River Relief keeps the conversation practical so you can compare options clearly.",
      proofImage: "/brand/generated/v006/debt-relief-budget-couple-v006.png",
      proofAlt: "Family discussing a clearer payment plan",
      proofItems: ["Payment target", "Loan range", "Total cost"],
      stepsTitle: "Review the structure",
      steps: [
        "List what feels hard to manage.",
        "Review possible payment relief.",
        "Choose whether to continue.",
      ],
      faqTitle: "Consolidation questions",
      faqs: [
        {
          question: "Does consolidation erase debt?",
          answer: "No. It may restructure repayment into a clearer path.",
        },
        {
          question: "Will I understand the full cost?",
          answer: "Yes. Rate, term, fees, and total repayment matter.",
        },
      ],
      finalCtaTitle: "See whether consolidation could fit.",
      finalCtaBody: "Start with a short private review.",
    },
    personalLoans: {
      title: "Personal Loan Options",
      description:
        "Review personal-loan options that may help simplify debt repayment.",
      eyebrow: "Personal Loans",
      heroImage:
        "/brand/generated/v006/resources-guidance-compact-hero-v006.png",
      heroAlt: "A River Relief advisor speaking with a family",
      primaryCta: { label: "Qualify For Debt Relief", href: "/qualify" },
      secondaryCta: { label: "Call River Relief", href: "tel:8005201758" },
      cardsTitle: "What to compare before deciding",
      cards: [
        {
          title: "Loan Amount",
          body: "Personal loan options may range from $1,000 to $100,000+.",
        },
        {
          title: "APR Range",
          body: "Affiliate APRs may range from 4.9% to 35.99%.",
        },
        {
          title: "Term Length",
          body: "Review whether 4 to 84 months fits your budget.",
        },
      ],
      proofTitle: "A loan only helps if the payment fits.",
      proofBody:
        "River Relief helps you compare the numbers before making a decision.",
      proofImage: "/brand/generated/v006/debt-relief-budget-couple-v006.png",
      proofAlt: "Borrower reviewing personal loan options",
      proofItems: ["APR", "Fees", "Monthly payment"],
      stepsTitle: "What happens first",
      steps: [
        "Answer a few fit questions.",
        "Review possible loan details.",
        "Talk through the next step.",
      ],
      faqTitle: "Personal loan questions",
      faqs: [
        {
          question: "Are final rates guaranteed here?",
          answer: "No. Final rates depend on borrower, affiliate, and state.",
        },
        {
          question: "Can I ask questions before applying?",
          answer: "Yes. Calling first is always an option.",
        },
      ],
      finalCtaTitle: "Review personal-loan fit privately.",
      finalCtaBody: "Start online or call River Relief.",
    },
    howItWorks: {
      title: "How River Relief Works",
      description:
        "Answer a few questions, build a private profile, and talk through options with a person.",
      eyebrow: "How It Works",
      heroImage:
        "/brand/generated/v006/resources-guidance-compact-hero-v006.png",
      heroAlt: "River Relief advisor guiding a calm debt review",
      primaryCta: { label: "Start My Review", href: "/qualify" },
      secondaryCta: { label: "Call River Relief", href: "tel:8005201758" },
      cardsTitle: "Simple by design",
      cards: [
        {
          title: "Short Questions",
          body: "Single-select answers keep the first step quick.",
        },
        {
          title: "Contact Last",
          body: "Share sensitive details only after the fit questions.",
        },
        {
          title: "Human Follow-Up",
          body: "Choose how River Relief should follow up.",
        },
      ],
      proofTitle: "Built for privacy and momentum.",
      proofBody:
        "The review creates a structured borrower profile that can support CRM follow-up later.",
      proofImage:
        "/brand/generated/v006/resources-guidance-compact-hero-v006.png",
      proofAlt: "Advisor conversation in a calm faith-forward setting",
      proofItems: ["Debt range", "Payment pressure", "Preferred contact"],
      stepsTitle: "Three simple steps",
      steps: [
        "Answer quick fit questions.",
        "Confirm contact details.",
        "Choose online help or a phone call.",
      ],
      faqTitle: "Process questions",
      faqs: [
        {
          question: "How long does it take?",
          answer: "The review is designed to take about 3 minutes.",
        },
        {
          question: "Is there judgement in the process?",
          answer: "No. Everyone is on their own path.",
        },
      ],
      finalCtaTitle: "Start with one calm step.",
      finalCtaBody: "Answer a few questions and see what may fit.",
    },
    faithBasedGuidance: {
      title: "Faith-Based Guidance",
      description:
        "Practical debt relief support for people who want financial help without leaving faith at the door.",
      eyebrow: "Faith-Based Guidance",
      heroImage: "/brand/generated/v006/debt-relief-budget-couple-v006.png",
      heroAlt: "Faith-forward River Relief debt relief background",
      primaryCta: { label: "Qualify For Debt Relief", href: "/qualify" },
      secondaryCta: { label: "Call River Relief", href: "tel:8005201758" },
      cardsTitle: "A calmer faith-respectful review",
      cards: [
        {
          title: "No Shame",
          body: "The conversation starts with grace and practical next steps.",
        },
        {
          title: "Stewardship",
          body: "Review options through budget, responsibility, and clarity.",
        },
        {
          title: "Human Support",
          body: "Talk to a person before making a decision.",
        },
      ],
      proofTitle: "Faith can be part of the financial conversation.",
      proofBody:
        "River Relief leans into privacy, stewardship, and a respectful tone from the first click.",
      proofImage:
        "/brand/generated/v006/resources-guidance-compact-hero-v006.png",
      proofAlt: "Family speaking with an advisor in a faith community setting",
      proofItems: ["Grace", "Clarity", "Next step"],
      stepsTitle: "Start without pressure",
      steps: [
        "Name what feels heavy.",
        "Review the practical numbers.",
        "Choose the next faithful step.",
      ],
      faqTitle: "Faith-based questions",
      faqs: [
        {
          question: "Is this only for church members?",
          answer: "No. It is for people who want faith-respectful guidance.",
        },
        {
          question: "Will the review feel preachy?",
          answer: "No. The tone is respectful, practical, and low pressure.",
        },
      ],
      finalCtaTitle: "Take a step today for a better tomorrow.",
      finalCtaBody: "Get help with debt relief in a faith-respectful process.",
    },
    resources: {
      title: "Debt Relief Resources",
      description:
        "Short, practical resources for comparing debt relief, consolidation, and loan options.",
      eyebrow: "Resources",
      heroImage:
        "/brand/generated/v006/resources-guidance-compact-hero-v006.png",
      heroAlt: "Family reviewing River Relief resources",
      primaryCta: { label: "Start Debt Review", href: "/qualify" },
      secondaryCta: { label: "Call River Relief", href: "tel:8005201758" },
      cardsTitle: "Helpful starting points",
      cards: [
        {
          title: "Debt Review",
          body: "Answer quick questions and create a simple borrower profile.",
        },
        {
          title: "FAQs",
          body: "Get plain answers before sharing contact information.",
        },
        {
          title: "Loan Details",
          body: "Understand APR, fees, term length, and payment fit.",
        },
      ],
      proofTitle: "Use resources that move you toward a decision.",
      proofBody:
        "River Relief pages are built to help you compare, call, or qualify without getting buried in jargon.",
      proofImage:
        "/brand/generated/v006/resources-guidance-compact-hero-v006.png",
      proofAlt: "Advisor helping a family understand debt relief resources",
      proofItems: ["Plain language", "Short pages", "Clear CTAs"],
      stepsTitle: "How to use this site",
      steps: [
        "Read the page that matches your question.",
        "Call if you want a person first.",
        "Start the review when you are ready.",
      ],
      faqTitle: "Resource questions",
      faqs: [
        {
          question: "Where should I start?",
          answer: "Start with Debt Review if you want personalized direction.",
        },
        {
          question: "Can I browse first?",
          answer: "Yes. Each page has a call option and an online review path.",
        },
      ],
      finalCtaTitle: "Ready to make the next step clearer?",
      finalCtaBody: "Start the review or call River Relief.",
    },
    debtReview: {
      title: "Private Debt Relief Review",
      description:
        "Answer a few quick questions and choose how River Relief should follow up.",
      eyebrow: "Debt Review",
      heroImage:
        "/brand/generated/v006/resources-guidance-compact-hero-v006.png",
      heroAlt: "River Relief advisor with a family during a private review",
      primaryCta: { label: "Begin My Review", href: "/qualify" },
      secondaryCta: { label: "Call River Relief", href: "tel:8005201758" },
      cardsTitle: "What the review helps organize",
      cards: [
        {
          title: "Debt Range",
          body: "Start with a range instead of exact account details.",
        },
        {
          title: "Payment Goal",
          body: "Name what would feel easier to plan around.",
        },
        {
          title: "Follow-Up",
          body: "Choose phone, text, or email after the fit questions.",
        },
      ],
      proofTitle: "No judgement here. Everyone is on their own path.",
      proofBody:
        "The review is designed to reduce friction and help a real person understand your situation.",
      proofImage: "/brand/generated/v006/debt-relief-budget-couple-v006.png",
      proofAlt: "Borrower feeling clear after completing a debt review",
      proofItems: ["Private", "Quick", "Human"],
      stepsTitle: "Review path",
      steps: [
        "Answer single-select questions.",
        "Share contact info last.",
        "Receive a practical follow-up.",
      ],
      faqTitle: "Debt review questions",
      faqs: [
        {
          question: "Do I have to finish right now?",
          answer: "No. You can also call River Relief first.",
        },
        {
          question: "Why contact info last?",
          answer:
            "The first questions help confirm direction before follow-up.",
        },
      ],
      finalCtaTitle: "Start your private review.",
      finalCtaBody: "It takes about 3 minutes.",
    },
    faq: {
      title: "River Relief FAQs",
      description:
        "Plain answers about debt relief, personal loans, timing, privacy, and next steps.",
      eyebrow: "FAQs",
      heroImage:
        "/brand/generated/v006/resources-guidance-compact-hero-v006.png",
      heroAlt: "Advisor answering debt relief questions",
      primaryCta: { label: "Qualify For Debt Relief", href: "/qualify" },
      secondaryCta: { label: "Call River Relief", href: "tel:8005201758" },
      cardsTitle: "Quick answers",
      cards: [
        {
          title: "Private Start",
          body: "The online review begins with simple fit questions.",
        },
        {
          title: "Phone Support",
          body: "Call (800) 520-1758 if you prefer a person first.",
        },
        {
          title: "Clear Terms",
          body: "Rates, fees, terms, and payment fit should be reviewed.",
        },
      ],
      proofTitle: "Ask before you decide.",
      proofBody:
        "Debt relief should not require confusion. River Relief keeps the first step direct and human.",
      proofImage: "/brand/generated/v006/debt-relief-budget-couple-v006.png",
      proofAlt: "Family reviewing answers before a debt relief decision",
      proofItems: ["No pressure", "Plain language", "Faith-respectful"],
      stepsTitle: "What most people ask",
      steps: [
        "What payment may fit?",
        "What details matter?",
        "Who follows up next?",
      ],
      faqTitle: "More questions",
      faqs: [
        {
          question: "Does River Relief provide personal lending services?",
          answer: "Yes. Personal loan options are offered by affiliates.",
        },
        {
          question: "Are services available in every state?",
          answer: "No. Availability and fees may vary by state.",
        },
        {
          question: "Can faith be part of the conversation?",
          answer: "Yes. The process is built to be faith-respectful.",
        },
      ],
      finalCtaTitle: "Have a question about your situation?",
      finalCtaBody: "Call River Relief or start a private review.",
    },
    about: {
      title: "About River Relief",
      description:
        "River Relief helps people compare practical personal-loan paths for debt relief with faith-respectful support.",
      eyebrow: "About",
      heroImage:
        "/brand/generated/v006/resources-guidance-compact-hero-v006.png",
      heroAlt: "River Relief advisor in a welcoming faith community setting",
      primaryCta: { label: "Qualify For Debt Relief", href: "/qualify" },
      secondaryCta: { label: "Call River Relief", href: "tel:8005201758" },
      cardsTitle: "What River Relief is built around",
      cards: [
        {
          title: "Practical Help",
          body: "Review debt relief options with clear next steps.",
        },
        {
          title: "Respectful Tone",
          body: "No shame-based sales pressure or confusing jargon.",
        },
        {
          title: "Faith Lens",
          body: "Support that respects stewardship and personal values.",
        },
      ],
      proofTitle: "Financial conversations should feel human.",
      proofBody:
        "River Relief focuses on clarity, privacy, and a calmer first step for borrowers carrying debt pressure.",
      proofImage:
        "/brand/generated/v006/resources-guidance-compact-hero-v006.png",
      proofAlt: "Advisor offering calm support to a family",
      proofItems: ["Privacy", "Clarity", "Follow-up"],
      stepsTitle: "How River Relief helps",
      steps: [
        "Listen to the debt pressure.",
        "Organize the practical numbers.",
        "Point toward the next step.",
      ],
      faqTitle: "About River Relief",
      faqs: [
        {
          question: "Is River Relief an environmental nonprofit?",
          answer: "No. River Relief is a financial services company.",
        },
        {
          question: "What does River Relief focus on?",
          answer: "Debt relief conversations and personal-loan option review.",
        },
      ],
      finalCtaTitle: "Ready to talk through your options?",
      finalCtaBody: "Start online or call River Relief today.",
    },
    contact: {
      title: "Contact River Relief",
      description:
        "Call River Relief or start a private debt relief review online.",
      eyebrow: "",
      heroImage: "/brand/generated/v003/advisor-phone-support-bubble-v003.png",
      heroAlt: "River Relief phone support advisor",
      primaryCta: { label: "Call (800) 520-1758", href: "tel:8005201758" },
      secondaryCta: { label: "Qualify For Debt Relief", href: "/qualify" },
      cardsTitle: "Why people call first",
      cards: [
        {
          title: "Low Pressure",
          body: "Ask practical questions before sharing sensitive details.",
        },
        {
          title: "Fast Clarity",
          body: "Know whether the online review is worth your time.",
        },
        {
          title: "Human Support",
          body: "Talk to a person about the next best step.",
        },
      ],
      proofTitle: "Prefer a person first?",
      proofBody: "Call (800) 520-1758 or start online when you are ready.",
      proofImage: "/brand/generated/v006/debt-relief-budget-couple-v006.png",
      proofAlt: "Borrower calling River Relief for support",
      proofItems: ["Call first", "Start online", "Ask a question"],
      stepsTitle: "Contact options",
      steps: [
        "Call River Relief.",
        "Start a private review.",
        "Choose follow-up by phone, text, or email.",
      ],
      faqTitle: "Contact questions",
      faqs: [
        {
          question: "What number should I call?",
          answer: "Call River Relief at (800) 520-1758.",
        },
        {
          question: "Can I start online instead?",
          answer:
            "Yes. Use the online qualification path if you prefer online first.",
        },
      ],
      finalCtaTitle: "Start the conversation your way.",
      finalCtaBody: "Call now or qualify for debt relief online.",
    },
  },

  legalPages: {
    privacyPolicy: {
      title: "Privacy Policy",
      description:
        "How River Relief may collect, use, and protect information submitted through this website.",
      effectiveDate: "July 30, 2026",
      sections: [
        {
          title: "Information We Collect",
          body: "River Relief may collect information you provide through forms, calls, or website interactions, including contact details, debt ranges, payment goals, and preferred follow-up method.",
        },
        {
          title: "How We Use Information",
          body: "Information may be used to respond to requests, prepare a debt relief review, route follow-up, improve the website, and support compliance or security needs.",
        },
        {
          title: "Sharing With Affiliates",
          body: "Personal loan options may be offered by affiliates. Information may be shared when needed to evaluate options, respond to your request, or comply with applicable requirements.",
        },
        {
          title: "Your Choices",
          body: "You may choose not to submit online information and call River Relief instead at (800) 520-1758.",
        },
        {
          title: "Policy Updates",
          body: "This policy may be updated as River Relief services, vendors, or legal requirements change.",
        },
      ],
      ctaTitle: "Prefer not to submit online?",
      ctaBody: "Call River Relief and talk with a person first.",
      cta: { label: "Call (800) 520-1758", href: "tel:8005201758" },
    },
    termsAndConditions: {
      title: "Terms and Conditions",
      description:
        "Terms for using the River Relief website and requesting debt relief or personal-loan option support.",
      effectiveDate: "July 30, 2026",
      sections: [
        {
          title: "Website Use",
          body: "This website provides general information about River Relief services and a way to request follow-up. It does not guarantee loan approval, rates, terms, or availability.",
        },
        {
          title: "No Financial Guarantee",
          body: "Examples, statistics, and page copy are for general informational purposes. Final options depend on borrower profile, affiliate availability, and state requirements.",
        },
        {
          title: "Personal Lending Services",
          body: "Personal loan options offered by affiliates may range from $1,000 to $100,000+, with APRs from 4.9% to 35.99%, origination fees from 4.95% to 10%, and terms from 4 to 84 months.",
        },
        {
          title: "Communications",
          body: "By submitting information or calling River Relief, you may receive follow-up about your review or request. Standard phone, text, or data rates may apply.",
        },
        {
          title: "Availability",
          body: "Services are not available in all states. Fees, options, and affiliate availability may vary.",
        },
      ],
      ctaTitle: "Questions before you continue?",
      ctaBody: "Call River Relief or start a private debt relief review.",
      cta: { label: "Call (800) 520-1758", href: "tel:8005201758" },
    },
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
