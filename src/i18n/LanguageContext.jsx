import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, LANGUAGES } from "./translations";

const STORAGE_KEY = "xflow-lang";
const VALID_CODES = LANGUAGES.map((l) => l.code);

const LanguageContext = createContext(null);

function getInitialLang() {
  if (typeof window === "undefined") return "pt";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (VALID_CODES.includes(stored)) return stored;
  const nav = (window.navigator.language || "pt").slice(0, 2).toLowerCase();
  if (nav === "es") return "es";
  if (nav === "en") return "en";
  return "pt";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
