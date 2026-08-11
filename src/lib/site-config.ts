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
  brandPromise: {
    tagline: "Promise over profit.",
    stewardship: "Financial Stewardship for the next faithful step.",
  },
  scriptureLines: {
    hero: {
      text: "What does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.",
      ref: "Micah 6:8",
    },
    mission: {
      text: "The plans of the diligent lead surely to abundance.",
      ref: "Proverbs 21:5",
    },
    programs: {
      text: "If any of you lacks wisdom, let him ask of God.",
      ref: "James 1:5",
    },
    impact: {
      text: "Which of you, intending to build, does not first count the cost?",
      ref: "Luke 14:28",
    },
    footer: {
      text: "What does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.",
      ref: "Micah 6:8",
    },
    completion: {
      text: "The Lord will guide you continually.",
      ref: "Isaiah 58:11",
    },
  },
  pageScriptures: {
    debtRelief: {
      text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
      ref: "Matthew 11:28",
    },
    creditCardDebt: {
      text: "Owe no man any thing, but to love one another.",
      ref: "Romans 13:8",
    },
    debtConsolidation: {
      text: "Let all things be done decently and in order.",
      ref: "1 Corinthians 14:40",
    },
    personalLoans: {
      text: "The borrower is servant to the lender.",
      ref: "Proverbs 22:7",
    },
    howItWorks: {
      text: "In all thy ways acknowledge him, and he shall direct thy paths.",
      ref: "Proverbs 3:6",
    },
    faithBasedGuidance: {
      text: "God hath not given us the spirit of fear, but of power, and of love, and of a sound mind.",
      ref: "2 Timothy 1:7",
    },
    resources: {
      text: "The heart of the prudent getteth knowledge.",
      ref: "Proverbs 18:15",
    },
    debtReview: {
      text: "Let us search and try our ways.",
      ref: "Lamentations 3:40",
    },
    faq: {
      text: "Counsel in the heart of man is like deep water; but a man of understanding will draw it out.",
      ref: "Proverbs 20:5",
    },
    about: {
      text: "He hath shewed thee what is good.",
      ref: "Micah 6:8",
    },
    contact: {
      text: "A word spoken in due season, how good is it.",
      ref: "Proverbs 15:23",
    },
  },
  trust: {
    badges: [
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
  description:
    "River Relief helps borrowers talk through credit card debt, compare personal-loan options, and take the next faithful step toward a more manageable monthly plan.",
  url: "https://river-relief-website-rebuild.vercel.app", // TODO: replace with client-owned production domain once known

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
        { label: "Faith And Values", href: "/faith-based-guidance" },
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
      "Private Financial Stewardship for lowering payment pressure and finding the next right step.",
    backgroundImage: {
      src: "/brand/generated/v004/church-lobby-standing-advisor-family-v004.png",
      position: "center",
    },
    primaryCta: { label: "Qualify For Debt Relief", href: "/qualify" },
    headerCta: { label: "Qualify Today", href: "/qualify" },
    secondaryCta: { label: "Talk With Us", href: "/contact" },
    trustLine: "Free review. No pressure. Promise over profit.",
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
    body: "If any of you lacks wisdom, let him ask of God. James 1:5",
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
    eyebrow: "Promise over profit",
    heading: "Take a step today for a better tomorrow.",
    body: "Takes about 3 minutes. Answer the same private fit questions used on River Relief landing pages, then choose where to send your options.",
    steps: ["Debt Type", "Amount", "Timing", "State", "Contact"],
    submitLabel: "Send My Options",
    submittingLabel: "Sending...",
    successTitle: "Your review was received.",
    successBody:
      "A River Relief advisor can use your answers to follow up with more context.",
    errorBody:
      "We could not send your review right now. Please try again or call River Relief.",
    consentLabel:
      "By providing your phone number and checking this box, I consent to receive calls and text messages, including marketing and promotional messages, from River Relief, including through the use of an automatic telephone dialing system or an artificial or prerecorded voice, at any telephone number I provide. Msg and data rates may apply. Consent is not a condition for purchase. For text messages, reply STOP to cancel. If you choose not to consent, you may call us at 800-520-1758 to continue your inquiry.",
    promiseNote:
      "Promise over profit. We start with stewardship, clarity, and no judgement.",
    questions: [
      {
        key: "debtType",
        label: "What type of debt is giving you the most stress right now?",
        options: [
          "Credit Card Debt",
          "Personal Loan Debt",
          "Another Kind Of Debt",
        ],
        affirmation:
          "Naming the pressure is a faithful first step toward Financial Stewardship.",
      },
      {
        key: "debtAmount",
        label: "How Much Debt Do You Currently Have?",
        options: ["$0 - $30,000", "$30,000 - $50,000", "$50,000+"],
        affirmation:
          "A range is enough. River Relief can help you compare options without shame.",
      },
      {
        key: "paymentStruggleDuration",
        label: "How Long Have You Been Struggling With Payments?",
        options: [
          "Very Recently",
          "6 Months - 1 Year",
          "1-3 years",
          "3+ Years",
        ],
        affirmation:
          "There is grace for every timeline. The next step can still be practical.",
      },
    ],
    stateStep: {
      title: "You Qualify For Debt Relief Options!",
      label: "State of Residence*",
      affirmation:
        "State availability matters. This helps River Relief point you toward the right review path.",
    },
    contactStep: {
      title: "Debt Relief Options Found!",
      deliveryQuestion: "Where Should We Send Your Options?",
      affirmation: "The integrity of the upright guides them. Proverbs 11:3",
    },
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
      proof: ["Faith-respectful", "Financial Stewardship", "Human follow-up"],
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
        "Review a values-honoring path for credit card balances, high payments, and too many due dates.",
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
      cardsTitle: "A calmer values-honoring review",
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
          answer:
            "No. It is for people who want financial guidance that leaves room for faith and values.",
        },
        {
          question: "Will the review feel preachy?",
          answer: "No. The tone is respectful, practical, and low pressure.",
        },
      ],
      finalCtaTitle: "Take a step today for a better tomorrow.",
      finalCtaBody:
        "Get help with debt relief in a process that honors your faith and values.",
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
          answer:
            "Yes. Our process is designed to honor your faith and values.",
        },
      ],
      finalCtaTitle: "Have a question about your situation?",
      finalCtaBody: "Call River Relief or start a private review.",
    },
    about: {
      title: "About River Relief",
      description:
        "River Relief helps people explore practical paths out of debt, with support that honors faith and values.",
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

  demoComponents: {
    title: "Debt Relief Experience Lab",
    description:
      "Explore eleven interactive River Relief concepts designed to make debt options feel clear, private, and human.",
    hero: {
      eyebrow: "River Relief Experience Lab",
      heading: "Debt relief should feel clear before it feels urgent.",
      body: "Explore eleven calm, interactive ways to understand the numbers, compare a path forward, and decide what feels right.",
      privacyNote:
        "Your selections stay on this page and are not submitted to River Relief.",
      primaryCta: { label: "Start With My Payment", href: "#payment-clarity" },
      secondaryCta: { label: "Qualify For Debt Relief", href: "/qualify" },
      proof: ["Illustrative estimates", "No hard credit pull", "No judgement"],
    },
    tableOfContents: {
      eyebrow: "Explore the experience lab",
      title: "Jump to any component.",
      body: "Start with the question that feels most useful today, or move through all eleven in order.",
      items: [
        { number: "01", label: "Payment clarity", href: "#payment-clarity" },
        { number: "02", label: "Debt load", href: "#debt-load" },
        { number: "03", label: "Relief finder", href: "#relief-finder" },
        { number: "04", label: "One payment", href: "#one-payment" },
        {
          number: "05",
          label: "Credit confidence",
          href: "#credit-confidence",
        },
        { number: "06", label: "Breathing room", href: "#breathing-room" },
        { number: "07", label: "Relief timeline", href: "#relief-timeline" },
        {
          number: "08",
          label: "Privacy controls",
          href: "#trust-architecture",
        },
        { number: "09", label: "Your scenario", href: "#scenarios" },
        { number: "10", label: "Advisor handoff", href: "#advisor" },
        { number: "11", label: "Specialist chat", href: "#specialist-chat" },
      ],
    },
    paymentClarity: {
      number: "01",
      eyebrow: "Payment clarity",
      title: "See what breathing room could look like.",
      body: "Adjust the numbers for a simple, side-by-side view of today and an illustrative alternative.",
      debtLabel: "Estimated card debt",
      paymentLabel: "Current monthly payments",
      currentLabel: "Today",
      possibleLabel: "Illustrative path",
      reliefLabel: "Potential monthly breathing room",
      defaults: { debt: 32000, payment: 1120 },
      ranges: {
        debt: { min: 5000, max: 80000, step: 1000 },
        payment: { min: 250, max: 3000, step: 5 },
      },
      disclaimer:
        "Illustration only. This is not an offer or approval. Actual rates, terms, fees, and payments vary.",
      cta: { label: "Review My Real Numbers", href: "/qualify" },
    },
    debtLoad: {
      number: "02",
      eyebrow: "Debt load visualizer",
      title: "Turn scattered balances into one clear picture.",
      body: "Select the accounts you want to understand together. The summary updates instantly.",
      accountsLabel: "Accounts in your view",
      summaryLabel: "Selected debt snapshot",
      balanceLabel: "Total balance",
      paymentLabel: "Monthly payments",
      datesLabel: "Due dates",
      averageAprLabel: "Average APR",
      aprLabel: "APR",
      selectAllLabel: "Select all accounts",
      accounts: [
        { name: "Everyday card", balance: 8400, payment: 310, apr: 24.9 },
        { name: "Rewards card", balance: 12600, payment: 420, apr: 27.4 },
        { name: "Store card", balance: 3900, payment: 165, apr: 29.9 },
        { name: "Personal card", balance: 7100, payment: 250, apr: 21.8 },
      ],
      insight:
        "Seeing the full structure is often the first step toward simplifying it.",
      cta: { label: "Organize My Debt Privately", href: "/qualify" },
    },
    reliefFinder: {
      number: "03",
      eyebrow: "Guided relief finder",
      title: "Find the right place to begin.",
      body: "Three private questions shape a practical next step. No contact details needed.",
      stepLabel: "Question",
      restartLabel: "Start over",
      questions: [
        {
          prompt: "What would help most right now?",
          options: [
            "Lower monthly pressure",
            "Fewer due dates",
            "Compare my options",
          ],
        },
        {
          prompt: "How does this month feel?",
          options: [
            "Manageable but tight",
            "Hard to keep up",
            "I need a plan soon",
          ],
        },
        {
          prompt: "How would you rather start?",
          options: [
            "Private online review",
            "Talk with a person",
            "Keep learning first",
          ],
        },
      ],
      result: {
        eyebrow: "Your suggested first step",
        title: "Begin with a private payment review.",
        body: "Your answers point toward organizing the numbers first, then choosing whether an online path or a conversation feels better.",
        points: [
          "About 3 minutes",
          "Contact information comes last",
          "A person reviews the context",
        ],
      },
      cta: { label: "Begin My Private Review", href: "/qualify" },
      callCta: { label: "Call River Relief", href: "tel:8005201758" },
    },
    onePayment: {
      number: "04",
      eyebrow: "One-payment transformation",
      title: "From a month of reminders to one clear rhythm.",
      body: "Switch views to feel the difference between managing many payments and planning around one.",
      beforeLabel: "Multiple payments",
      afterLabel: "One possible payment",
      toggleBefore: "Current view",
      toggleAfter: "Simplified view",
      monthLabel: "A month at a glance",
      currentTotal: 1240,
      possibleTotal: 790,
      targetLabel: "Adjust an illustrative payment target",
      targetRange: { min: 650, max: 1050, step: 25 },
      targetHelp:
        "Move the target to compare monthly breathing room. A lower payment can mean a longer term or higher total cost.",
      payments: [
        { day: 3, amount: 210, label: "Card 1" },
        { day: 8, amount: 325, label: "Card 2" },
        { day: 14, amount: 185, label: "Store" },
        { day: 19, amount: 290, label: "Card 3" },
        { day: 26, amount: 230, label: "Card 4" },
      ],
      simplifiedPayment: { day: 12, amount: 790, label: "One payment" },
      benefitPrefix: "One date. One amount to plan around.",
      differenceLabel: "Illustrative monthly difference",
      currentBenefit:
        "5 reminders competing for attention throughout the month.",
      paymentDateLabel: "payment date",
      paymentDatesLabel: "payment dates",
      disclaimer:
        "Example scenario only. Consolidation does not erase debt and may not fit every borrower.",
      cta: { label: "See If One Payment Fits", href: "/qualify" },
    },
    creditConfidence: {
      number: "05",
      eyebrow: "Credit confidence meter",
      title: "You do not need a perfect score to ask a good question.",
      body: "Choose the range that feels closest. We will show what matters next without turning a score into a verdict.",
      rangeLabel: "My estimated credit range",
      ranges: [
        { label: "Rebuilding", score: "Below 580", progress: 28 },
        { label: "Fair", score: "580-669", progress: 48 },
        { label: "Good", score: "670-739", progress: 68 },
        { label: "Very good", score: "740+", progress: 86 },
        { label: "Not sure", score: "That is okay", progress: 50 },
      ],
      responseTitle: "There may still be a useful next step.",
      responseBody:
        "Credit is one part of the picture. Debt amount, income, payment history, state, and affiliate availability may also matter.",
      contextLabel: "Add context beyond the score",
      contextBody:
        "Select the signals you could discuss in a private review. These do not determine approval; they help make the conversation more useful.",
      reviewSignals: [
        "Income has been steady",
        "Recent payments are on time",
        "I know my debt range",
        "I know the payment I need",
      ],
      contextStart: "Choose any signals that feel true for you.",
      contextReady:
        "You have enough context to begin a more focused debt review.",
      contextProgressLabel: "Review context",
      factors: [
        "Debt-to-income",
        "Payment history",
        "Loan amount",
        "State availability",
      ],
      cta: { label: "Check My Options", href: "/qualify" },
    },
    breathingRoom: {
      number: "06",
      eyebrow: "Monthly breathing-room calculator",
      title: "Give every dollar a little more context.",
      body: "Estimate what remains after essentials and debt payments, then compare an illustrative lower-payment path.",
      incomeLabel: "Monthly take-home income",
      essentialsLabel: "Essential monthly expenses",
      debtPaymentLabel: "Current debt payments",
      afterLabel: "Illustrative debt payment",
      currentLabel: "Remaining today",
      possibleLabel: "Possible remaining",
      defaults: {
        income: 6200,
        essentials: 3950,
        payment: 1120,
        possiblePayment: 790,
      },
      statusPositive: "More room for essentials, savings, and the unexpected.",
      statusTight:
        "A private review may help make the monthly pressure clearer.",
      disclaimer:
        "This planning tool is educational and does not provide financial advice or guarantee savings.",
      cta: { label: "Build My Real Review", href: "/qualify" },
    },
    timeline: {
      number: "07",
      eyebrow: "Relief timeline",
      title: "Know what happens before you share anything sensitive.",
      body: "Explore each stage of the River Relief path, including what you do and what River Relief does.",
      stepLabel: "Step",
      youShareLabel: "You share",
      riverReliefLabel: "River Relief does",
      yourControlLabel: "You keep control",
      previousLabel: "Previous step",
      nextLabel: "Next step",
      steps: [
        {
          title: "Name the pressure",
          time: "About 1 minute",
          body: "Choose a debt range, the payment pressure, and what you want to make easier.",
          note: "No exact account numbers are needed to start.",
          youShare: "A broad debt range and what feels hardest this month.",
          riverRelief:
            "Organizes the starting point without asking for account numbers.",
          yourControl: "Skip the online review and call first at any time.",
        },
        {
          title: "Build the picture",
          time: "About 2 minutes",
          body: "Add your credit range and preferred next step so the review has useful context.",
          note: "Contact details come after the fit questions.",
          youShare: "An estimated credit range, your goal, and preferred pace.",
          riverRelief:
            "Builds a short profile so a person can begin with context.",
          yourControl: "Choose whether and how River Relief should follow up.",
        },
        {
          title: "Review the options",
          time: "Human follow-up",
          body: "A River Relief advisor can look at the profile before beginning the conversation.",
          note: "Ask about payment, APR, fees, term, and total repayment.",
          youShare: "The questions and tradeoffs that matter most to you.",
          riverRelief: "Explains available paths, terms, fees, and next steps.",
          yourControl: "Compare the full cost before making any decision.",
        },
        {
          title: "Choose your pace",
          time: "You decide",
          body: "Continue, compare, call back later, or decide that the path is not right for you.",
          note: "Clarity comes before commitment.",
          youShare: "Whether you want to continue, pause, or keep comparing.",
          riverRelief:
            "Respects the pace you choose and answers follow-up questions.",
          yourControl: "A review never obligates you to accept an option.",
        },
      ],
      cta: { label: "Take Step One", href: "/qualify" },
    },
    trustArchitecture: {
      number: "08",
      eyebrow: "Trust architecture",
      title: "Privacy should be visible, not buried in fine print.",
      body: "Open each principle to see how a respectful debt review can be designed around your control.",
      principles: [
        {
          title: "Start with ranges",
          short: "Share direction before details.",
          body: "The first questions can use broad debt and credit ranges. Exact account information is not needed to understand the starting point.",
        },
        {
          title: "Contact comes last",
          short: "Understand the fit before follow-up.",
          body: "You can work through the core questions before deciding how River Relief should contact you.",
        },
        {
          title: "Choose the channel",
          short: "Phone, text, or email is your call.",
          body: "A clear preference helps River Relief respond in the way that feels most comfortable to you.",
        },
        {
          title: "Keep the decision",
          short: "A review is not a commitment.",
          body: "You can ask questions and compare terms before deciding whether any available option makes sense.",
        },
      ],
      trustLine:
        "Your information should support the conversation, not replace your choice.",
      preferencesLabel: "Build your comfort settings",
      preferences: [
        "Use broad ranges first",
        "Ask contact details last",
        "Let me choose the channel",
        "Keep the review non-binding",
      ],
      preferencesStart:
        "Select the controls that would make the process feel comfortable.",
      preferencesReady:
        "Your preferences create a clear boundary for the first conversation.",
      preferencesCountLabel: "comfort settings selected",
      cta: { label: "Start Privately", href: "/qualify" },
    },
    scenarios: {
      number: "09",
      eyebrow: "Interactive scenarios",
      title: "Start with the situation that sounds most like yours.",
      body: "Different kinds of pressure call for different first conversations.",
      chooseLabel: "Choose a scenario",
      outcomeLabel: "A useful first focus",
      priorityLabel: "What matters most in the comparison?",
      priorityResultLabel: "Your comparison lens",
      priorities: [
        {
          label: "Lower monthly pressure",
          guidance:
            "Lead with payment fit, then check whether the term and total repayment still make sense.",
        },
        {
          label: "Fewer due dates",
          guidance:
            "Lead with structure and simplicity, then confirm that consolidation truly improves the month.",
        },
        {
          label: "Understand total cost",
          guidance:
            "Lead with APR, fees, term length, and total repayment before comparing the monthly amount.",
        },
      ],
      scenarios: [
        {
          title: "Payments feel too high",
          short: "The month works, but barely.",
          focus: "Monthly payment fit",
          body: "Start by comparing the current total payment with an illustrative alternative, then review the full cost and term.",
          questions: [
            "What payment would create room?",
            "How long would repayment last?",
            "What fees affect the total?",
          ],
        },
        {
          title: "Too many due dates",
          short: "The juggling is the hardest part.",
          focus: "Payment structure",
          body: "Map every balance and due date, then see whether simplifying the structure could make planning easier.",
          questions: [
            "Which balances belong together?",
            "Could one date reduce friction?",
            "Does the new structure truly fit?",
          ],
        },
        {
          title: "I need a clear answer",
          short: "I have researched enough on my own.",
          focus: "Human guidance",
          body: "Build a short profile so an advisor can begin with context and answer the questions that matter most.",
          questions: [
            "What options may be available?",
            "What will this cost overall?",
            "What should I compare next?",
          ],
        },
      ],
      cta: { label: "Review This Scenario", href: "/qualify" },
    },
    advisor: {
      number: "10",
      eyebrow: "Advisor presence",
      title: "A real conversation, on your terms.",
      body: "Choose what you want to discuss and how you would rather begin. The next step updates around your comfort level.",
      status: "Available for questions",
      advisorName: "River Relief Advisor",
      advisorRole: "Debt relief support",
      topicLabel: "What would you like to discuss?",
      topics: [
        "Lowering payment pressure",
        "Consolidating due dates",
        "Understanding rates and fees",
      ],
      channelLabel: "How would you rather start?",
      channels: ["Phone call", "Private online review", "Keep reading"],
      nextStepLabel: "Your selected next step",
      callSummary:
        "Call now and begin with your selected question. You decide how much to share.",
      onlineSummary:
        "Start with private fit questions. Contact information comes at the end.",
      readingSummary:
        "Keep exploring the tools on this page, then return when you feel ready.",
      callCta: { label: "Call (800) 520-1758", href: "tel:8005201758" },
      onlineCta: { label: "Start Private Review", href: "/qualify" },
      readingCta: { label: "Explore From The Top", href: "#payment-clarity" },
      reassurance:
        "No judgement. No pressure to decide on the first conversation.",
    },
    specialistChat: {
      number: "11",
      eyebrow: "Debt specialist chat",
      title: "Talk through what feels hardest.",
      body: "Choose the issue on your mind and see how a River Relief debt specialist could help frame the next step.",
      previewBadge: "Guided chat preview",
      specialistName: "Maya",
      specialistRole: "River Relief Debt Specialist",
      specialistStatus: "Ready to help",
      welcome:
        "Hi, I’m Maya. Debt can feel like a lot of separate problems at once. What would be most helpful to talk through first?",
      issueLabel: "Choose what you are dealing with",
      issues: [
        {
          id: "payment-pressure",
          label: "My payments are too high",
          userMessage: "My card payments are taking up too much of the month.",
          response:
            "That pressure is worth looking at without judgement. A useful first step is to total the monthly payments, name the amount that would create real breathing room, and then compare any alternative by payment, term, fees, and total repayment. River Relief can organize those numbers with you before you decide whether a different structure makes sense.",
          takeawayTitle: "Bring these three numbers",
          takeaways: [
            "Your total card balances",
            "What you pay each month now",
            "A payment that would feel manageable",
          ],
        },
        {
          id: "due-dates",
          label: "I have too many due dates",
          userMessage:
            "I am tired of juggling so many cards and payment dates.",
          response:
            "The number of reminders can create pressure even when every payment is technically manageable. Start by mapping each balance, minimum payment, APR, and due date in one place. Then you can compare whether a one-payment path would simplify the month without overlooking the term, fees, or total cost.",
          takeawayTitle: "Map these details first",
          takeaways: [
            "Each balance and minimum payment",
            "Every APR and due date",
            "Which accounts you want to simplify",
          ],
        },
        {
          id: "rates-fees",
          label: "I do not understand rates and fees",
          userMessage:
            "I need help understanding what a debt relief option would really cost.",
          response:
            "You are asking exactly the right question. A lower monthly payment is only one part of the picture. Ask for the APR, origination fee, term length, monthly payment, and total repayment together. River Relief can help you compare those figures in plain language so the true cost is visible before any decision.",
          takeawayTitle: "Compare the whole offer",
          takeaways: [
            "APR and origination fee",
            "Term length and monthly payment",
            "Total amount repaid",
          ],
        },
        {
          id: "credit-concern",
          label: "I am worried about my credit",
          userMessage:
            "I am not sure my credit is good enough to ask for help.",
          response:
            "You do not need a perfect score to begin an honest conversation. Credit is one part of a broader review that may also include income, debt amount, payment history, state, and affiliate availability. An estimated range is enough to start, and a River Relief specialist can help clarify what information matters next.",
          takeawayTitle: "Start with estimates",
          takeaways: [
            "Your estimated credit range",
            "Your debt and income ranges",
            "Your main payment goal",
          ],
        },
      ],
      typingLabel: "Maya is responding",
      nextStepTitle: "Ready to make the conversation personal?",
      nextStepBody:
        "Complete the private qualification review so a River Relief specialist can begin with your actual goals and context.",
      qualifyCta: { label: "Qualify And Set An Appointment", href: "/qualify" },
      anotherTopicLabel: "Ask about another issue",
      disclosure:
        "This is an automated educational preview, not a live advisor or financial advice. Your selections are not submitted.",
    },
  },

  social: {
    // TODO: fill in real social links; omit/empty hides the link in the footer
    facebook: "",
    instagram: "",
    twitter: "",
  },

  legal: {
    // Client-provided footer disclosure, updated 2026-08-11.
    // Lending disclosures are compliance-sensitive; confirm before changing.
    disclosure:
      "River Relief facilitates access to personal lending and debt relief options offered through third-party affiliates. River Relief is not a lender and does not directly fund loans or negotiate, settle, or assume consumer debts. Personal loan options offered by our affiliates range from $1,000 to $100,000+, with Annual Percentage Rates (APRs) from 4.9% to 35.99%, origination fees from 4.95% to 10% of the amount financed, and loan terms from 4 to 84 months. Only the most creditworthy borrowers qualify for the highest loan amounts and lowest rates. Debt relief programs are offered and administered by third-party affiliates and are subject to eligibility requirements. Not all debts or consumers will qualify. Program availability, terms, fees, duration, and results vary based on individual circumstances and state of residence. No specific savings, program outcomes, or time to become debt-free are guaranteed. Personal lending and debt relief options are not available in all states. By using this site, you acknowledge that you have read and understood our Terms of Use and Privacy Policy. River Relief does not discriminate on the basis of race, color, religion, sex, marital status, national origin, or ancestry. © 2026 River Relief LLC. All rights reserved.",
  },
} as const;
