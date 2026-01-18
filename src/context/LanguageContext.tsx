"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");
  const [hydrated, setHydrated] = useState(false);

  // Leer idioma guardado al montar (solo cliente)
  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored) setLangState(stored);
    setHydrated(true);
  }, []);

  const setLang = (lang: Language) => {
    localStorage.setItem("lang", lang);
    setLangState(lang);
  };

  // Evita mismatch de hidratación
  if (!hydrated) return null;

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
