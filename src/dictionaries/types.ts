export type Stat = { value: string; label: string };

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    home: string;
    solution: string;
    solutions: { label: string; desc: string; slug: string }[];
    contact: string;
    login: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    titlePrefix: string;
    rotatingWords: string[];
    titleSuffix: string;
    subtitle: string;
    channels: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    badges: string[];
    stats: Stat[];
    panel: {
      status: string;
      liveLabel: string;
      events: { title: string; meta: string }[];
      miniStats: Stat[];
    };
    trustPoints: { title: string; desc: string }[];
  };
  trustbar: {
    line: string;
    logos: string[];
  };
  moneyLeak: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { stat: string; title: string; desc: string }[];
  };
  edge: {
    eyebrow: string;
    title: string;
    items: { number: string; stat: string; statLabel: string; title: string; desc: string }[];
  };
  engine: {
    eyebrow: string;
    title: string;
    subtitle: string;
    features: { title: string; desc: string }[];
    stats: Stat[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    badges: string[];
    items: { title: string; desc: string; highlight: string; cta: string }[];
  };
  sectors: {
    eyebrow: string;
    title: string;
    subtitle: string;
    list: string[];
    featured: {
      name: string;
      hook: string;
      stat: string;
      statDesc: string;
      before: { title: string; items: string[] };
      after: { title: string; items: string[] };
      results: Stat[];
      note: string;
      cta: string;
    };
  };
  comparison: {
    eyebrow: string;
    title: string;
    subtitle: string;
    speedRows: { label: string; metatok: string; rest: string }[];
    tableHeaders: { feature: string; traditional: string; metatok: string };
    rows: { feature: string; traditional: string; metatok: string }[];
    reassurance: { title: string; desc: string }[];
    cta: string;
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { number: string; title: string; desc: string; tag: string }[];
    cta: string;
  };
  omnichannel: {
    eyebrow: string;
    title: string;
    subtitle: string;
    channels: { name: string; desc: string }[];
    otherChannel: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    popularLabel: string;
    billing: { monthly: string; quarterly: string; yearly: string; saveQuarterly: string; saveYearly: string };
    plans: {
      name: string;
      desc: string;
      price: string;
      period: string;
      features: string[];
      cta: string;
      popular?: boolean;
    }[];
    footnote: string;
    custom: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { quote: string; name: string; role: string }[];
  };
  whiteLabel: {
    eyebrow: string;
    title: string;
    subtitle: string;
    features: { title: string; desc: string }[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  academy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pillars: { title: string; desc: string }[];
    cta: string;
  };
  auditCta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: string[];
    cta: string;
    note: string;
    results: Stat[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    email: string;
    coverage: string;
    gdpr: string;
    disclaimer: string;
    formName: string;
    formCompany: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
  };
  footer: {
    tagline: string;
    solutionTitle: string;
    solutionLinks: string[];
    exploreTitle: string;
    exploreLinks: string[];
    legalTitle: string;
    legalLinks: string[];
    rights: string;
  };
  legal: {
    aviso: { title: string; updated: string; sections: { h: string; p: string }[] };
    privacidad: { title: string; updated: string; sections: { h: string; p: string }[] };
    cookies: { title: string; updated: string; sections: { h: string; p: string }[] };
    terminos: { title: string; updated: string; sections: { h: string; p: string }[] };
  };
};
