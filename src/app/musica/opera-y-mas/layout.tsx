"use client";
import Layout from "@/components/sectionlayout";
import Submenu from "./submenu";
import { useLanguage } from "@/context/LanguageContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useLanguage();

  return (
    <Layout
      section="música"
      subsection={lang === "es" ? "Opera y más" : "Opera and more"}
    >
      <Submenu lang={lang} />
      <div>{children}</div>
    </Layout>
  );
};

export default layout;
