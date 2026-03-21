"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Layout from "@/components/sectionlayout";
import Back from "@/components/back";
import Loader from "@/components/loading";
import { useLanguage } from "@/context/LanguageContext";
import Forward from "@/components/forward";

interface data {
  id: number;
  title: string;
  text: string;
  image: string;
  next: string;
}

const page = () => {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState<data>({
    id: 0,
    title: "",
    text: "",
    image: "",
    next: "",
  });
  const [loading, setLoading] = useState(true);
  // const apiURL = process.env.NEXT_PUBLIC_API_URL + "/fotos/" + id + "/" + lang;

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/fotos/" + id + "/" + lang,
        );

        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [id, lang]);

  return (
    <Layout section="oriana" subsection={lang === "es" ? "Fotos" : "Photos"}>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 relative max-w-7xl">
          <div className="pt-4 lg:pt-0">
            <img src={data.image} alt={data.title} className="w-full" />
          </div>
          <div className="pr-8">
            <p className="italic font-display leading-snug text-foreground/60 whitespace-break-spaces text-sm lg:text-base">
              {data.text}
            </p>
          </div>
          <Back url="/oriana/fotos" />
        </div>
      )}

      <Forward url={"/oriana/fotos/view?id=" + data.next} />
    </Layout>
  );
};

export default page;
