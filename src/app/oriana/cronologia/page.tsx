"use client";
import Layout from "@/components/sectionlayout";
import Intro from "./intro";
import Items from "./items";
import { useLanguage } from "@/context/LanguageContext";

const page = () => {
  const { lang } = useLanguage();

  return (
    <Layout
      section="oriana"
      subsection={lang === "es" ? "Cronología" : "Chronology"}
    >
      <div className="py-8 lg:py-16 w-full mx-auto max-w-3xl fade-in flex flex-col gap-y-8">
        <Intro lang={lang} />
        <Items lang={lang} />
      </div>
    </Layout>
  );
};

export default page;
