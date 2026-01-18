"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-12 left-4 lg:left-8 z-50 flex items-center gap-2 text-secondary">
      <button
        className={`cursor-pointer  hover:underline ${
          lang === "es" ? "text-secondary" : "text-secondary/50"
        }`}
        onClick={() => setLang("es")}
      >
        ESP
      </button>
      <span>|</span>
      <button
        className={`cursor-pointer  hover:underline ${
          lang === "en" ? "text-secondary" : "text-secondary/50"
        }`}
        onClick={() => setLang("en")}
      >
        ENG
      </button>
    </div>
  );
}
