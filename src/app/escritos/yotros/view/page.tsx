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
  video: string;
  image_title: string;
}

const page = () => {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState<data | null>(null);
  const [loading, setLoading] = useState(true);
  // const apiURL =
  //   process.env.NEXT_PUBLIC_API_URL + "/escritos/" + id + "/" + lang;

  useEffect(() => {
    console.log("========== ESCRITO VIEW ==========");
    console.log("ID recibido:", id);
    console.log("Idioma:", lang);

    if (!id) {
      console.log("❌ No hay ID, se cancela el fetch");
      return;
    }

    async function getData() {
      try {
        setLoading(true);

        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/escritos/${id}/${lang}`;

        console.log("🌐 URL de API:", apiUrl);

        const res = await fetch(apiUrl);

        console.log("📡 Status API:", res.status);
        console.log("📡 OK:", res.ok);

        if (!res.ok) {
          throw new Error(`Error HTTP ${res.status}`);
        }

        const json = await res.json();

        console.log("✅ Datos recibidos:", json);

        setData(json);
      } catch (error) {
        console.error("❌ ERROR:", error);
        setData(null);
      } finally {
        setLoading(false);
        console.log("🏁 Fetch terminado");
      }
    }

    getData();
  }, [id, lang]);

  if (!id) return null;
  if (!data) return null;

  return (
    <Layout
      section="escritos"
      subsection={lang === "es" ? "Y Otros" : "And Others"}
    >
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
            video={data.video}
            image_title={data.image_title}
          />
          <Back url="/escritos/yotros" />
        </>
      )}
    </Layout>
  );
};

export default page;
