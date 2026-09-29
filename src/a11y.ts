export const A11Y_STORAGE_KEY = "a11y-prefs";

export type A11yPrefs = {
  highContrast: boolean;
  darkMode: boolean;
  fontScale: 0 | 1 | 2;
  highlightLinks: boolean;
  stopMotion: boolean;
  readableFont: boolean;
};

export const defaultA11yPrefs: A11yPrefs = {
  highContrast: false,
  darkMode: false,
  fontScale: 0,
  highlightLinks: false,
  stopMotion: false,
  readableFont: false,
};

const fontSizes = ["100%", "112.5%", "125%"];

export function loadA11yPrefs(): A11yPrefs {
  try {
    const raw = localStorage.getItem(A11Y_STORAGE_KEY);
    if (!raw) return defaultA11yPrefs;
    const parsed = JSON.parse(raw) as Partial<A11yPrefs>;
    const fontScale = parsed.fontScale === 1 || parsed.fontScale === 2 ? parsed.fontScale : 0;
    return {
      highContrast: Boolean(parsed.highContrast),
      darkMode: Boolean(parsed.darkMode),
      fontScale,
      highlightLinks: Boolean(parsed.highlightLinks),
      stopMotion: Boolean(parsed.stopMotion),
      readableFont: Boolean(parsed.readableFont),
    };
  } catch {
    return defaultA11yPrefs;
  }
}

export function saveA11yPrefs(prefs: A11yPrefs) {
  localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(prefs));
}

export function applyA11yPrefs(prefs: A11yPrefs) {
  const root = document.documentElement;
  root.dataset.contrast = prefs.highContrast ? "high" : "off";
  root.dataset.theme = prefs.darkMode ? "dark" : "light";
  root.dataset.links = prefs.highlightLinks ? "on" : "off";
  root.dataset.motion = prefs.stopMotion ? "off" : "on";
  root.dataset.font = prefs.readableFont ? "plain" : "brand";
  root.style.fontSize = fontSizes[prefs.fontScale];
}
