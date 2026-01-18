"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/sectionlayout";
import Loader from "@/components/loading";
import { useLanguage } from "@/context/LanguageContext";

interface data {
  id: number;
  title: string;
  text: string;
}

const page = () => {
  const { lang } = useLanguage();
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/textos/" + lang;

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(apiURL);
        if (!res.ok) throw new Error("Error al obtener datos de productos");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <Layout
      section="oriana"
      subsection={lang === "es" ? "Presentación" : "Presentation"}
    >
      {loading ? (
        <Loader />
      ) : (
        <div className="py-16 w-full mx-auto max-w-3xl fade-in">
          <div>
            <p className="whitespace-break-spaces text-foreground font-display text-lg leading-snug">
              {data[0].text}
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default page;
