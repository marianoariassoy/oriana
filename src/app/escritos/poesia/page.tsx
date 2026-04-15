"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";
import Layout from "@/components/sectionlayout";
import Escritos from "@/components/escritos";
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
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/escritos/verso/" + lang;

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

  console.log(data);

  return (
    <Layout section="escritos" subsection={lang === "es" ? "Verso" : "Verse"}>
      {loading ? <Loader /> : data.length > 0 ? <Escritos data={data} /> : null}
    </Layout>
  );
};

export default page;
