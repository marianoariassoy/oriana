"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/loading";
import Layout from "@/components/sectionlayout";
import Escritos from "@/components/escritos";
import { useLanguage } from "@/context/LanguageContext";
import { useSearchParams } from "next/navigation";
import Back from "@/components/back";

interface Data {
  id: number;
  title: string;
  text: string;
  url: string;
  image: string;
  audio: string;
  video: string;
  image_title: string;
}

const Page = () => {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setLoading(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/escritos/${id}/${lang}`,
        );

        if (!res.ok) {
          throw new Error("Error al obtener datos");
        }

        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [id, lang]);

  return (
    <Layout
      section="escritos"
      subsection={lang === "es" ? "Cuentos" : "Stories"}
    >
      {loading ? (
        <Loader />
      ) : data ? (
        <>
          <Escritos
            title={data.title}
            text={data.text}
            url={data.url}
            audio={data.audio}
            image={data.image}
            video={data.video}
            image_title={data.image_title}
          />
          <Back url="/escritos/cuentos" />
        </>
      ) : (
        <p>No se encontraron datos.</p>
      )}
    </Layout>
  );
};

export default Page;
