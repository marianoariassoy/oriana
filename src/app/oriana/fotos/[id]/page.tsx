"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
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
  const id = parseInt(useParams().id as string);
  const [data, setData] = useState<data>({
    id: 0,
    title: "",
    text: "",
    image: "",
    next: "",
  });
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/fotos/" + id + "/" + lang;

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
    <Layout section="oriana" subsection={lang === "es" ? "Fotos" : "Photos"}>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col lg:flex-row gap-4 py-16 relative pr-10 lg:pr-0">
          <div className="lg:w-1/3"></div>
          <div className="lg:w-2/3">
            <img src={data.image} alt={data.title} className="w-full" />
          </div>
          <div className="lg:w-1/3 lg:pr-10">
            <p className="italic font-display leading-snug text-foreground/60 lg:pl-4 whitespace-break-spaces">
              {data.text}
            </p>
          </div>
          <Back url="/oriana/fotos" />
        </div>
      )}

      <Forward url={"/oriana/fotos/" + data.next} />
    </Layout>
  );
};

export default page;
