export type Locale = "ru" | "he";

export type ServiceItem = {
  title: string;
  text: string;
  points: string[];
};

export type ReasonItem = {
  title: string;
  text: string;
};

export type StepItem = {
  title: string;
  text: string;
};

export type CredentialItem = {
  id: "engineering" | "inspector" | "technion";
  caption: string;
  alt: string;
};

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalPage = {
  documentTitle: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  contactHeading?: string;
  contactName: string;
  emailLabel: string;
  phoneLabel: string;
  questionsPrefix?: string;
};

export type Translations = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  header: {
    skipLink: string;
    brand: string;
    navServices: string;
    navWhy: string;
    navSteps: string;
    navContact: string;
    navAria: string;
    openMenu: string;
    closeMenu: string;
    switchToRu: string;
    switchToHe: string;
    languageSwitcher: string;
  };
  hero: {
    badge: string;
    title: string;
    quote: string;
    experienceBadge: string;
    compitestBadge: string;
    personalNote: string;
    licenseAlt: string;
    stampPrimary: string;
    stampSecondary: string;
  };
  credentials: {
    eyebrow: string;
    title: string;
    text: string;
    portraitAlt: string;
    name: string;
    bio: string;
    zoom: string;
    items: CredentialItem[];
  };
  services: {
    eyebrow: string;
    title: string;
    text: string;
    items: ServiceItem[];
  };
  why: {
    eyebrow: string;
    title: string;
    text: string;
    items: ReasonItem[];
    asideName: string;
    asideTitle: string;
    asideSubtitle: string;
    asideQuote: string;
  };
  steps: {
    eyebrow: string;
    title: string;
    text: string;
    items: StepItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    phoneLabel: string;
    emailLabel: string;
    whatsappLabel: string;
    whatsappDirect: string;
    hoursLabel: string;
    hoursDays: string;
    hoursTime: string;
    locationNavLabel: string;
    locationLabel: string;
    locationDetail: string;
    formTitle: string;
    formIntro: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabelField: string;
    phonePlaceholder: string;
    carLabel: string;
    carPlaceholder: string;
    noteLabel: string;
    notePlaceholder: string;
    errorRequired: string;
    sentOpening: string;
    sentFallback: string;
    submit: string;
    privacyNote: string;
    privacyLink: string;
  };
  cta: {
    whatsapp: string;
    callAria: string;
    whatsappAria: string;
  };
  footer: {
    brand: string;
    tagline: string;
    contacts: string;
    contactsNavAria: string;
    whatsappLink: string;
    legalNavAria: string;
    documents: string;
    accessibility: string;
    privacy: string;
    terms: string;
    copyright: string;
    subtitle: string;
  };
  scrollTop: {
    label: string;
  };
  lightbox: {
    close: string;
  };
  a11y: {
    launcherLabel: string;
    dialogLabel: string;
    title: string;
    highContrast: string;
    darkMode: string;
    fontSize: string;
    decreaseFont: string;
    increaseFont: string;
    highlightLinks: string;
    stopMotion: string;
    readableFont: string;
    reset: string;
  };
  whatsapp: {
    prefill: string;
    name: string;
    phone: string;
    car: string;
    note: string;
  };
  legal: {
    accessibility: LegalPage;
    privacy: LegalPage;
    terms: LegalPage;
  };
};
