"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";
import Layout from "@/components/sectionlayout";
import Escritos from "@/components/escritos";
import { useLanguage } from "@/context/LanguageContext";
import { useSearchParams } from "next/navigation";
import Back from "@/components/back";

interface data {
  id: number;
  title: string;
  text: string;
  url: string;
  image: string;
  audio: string;
}

const page = () => {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [data, setData] = useState<data>();
  const [loading, setLoading] = useState(true);
  const apiURL =
    process.env.NEXT_PUBLIC_API_URL + "/escritos/" + id + "/" + lang;

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

  if (!id) return null;
  if (!data) return null;

  return (
    <Layout section="escritos" subsection={lang === "es" ? "Verso" : "Verse"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Escritos
            title={data.title}
            text={data.text}
            url={data.url}
            audio={data.audio}
            image={data.image}
          />
          <Back url="/escritos/poesia" />
        </>
      )}
    </Layout>
  );
};

export default page;
