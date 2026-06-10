"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/sectionlayout";
import CardBlog from "@/components/card-blog";
import Loader from "@/components/loading";
import Aside from "./aside-title";
import { useLanguage } from "@/context/LanguageContext";
import Presentacion from "./presentacion";

interface Item {
  id: number;
  title: string;
  date: number;
  year: number;
  month: number;
  text: string;
  image: string;
  video: string;
}

const Page = () => {
  const { lang } = useLanguage();
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/mi-mundo/" + lang;

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

  const goTo = (id: number) => {
    const image = document.querySelector(`#video-${id}`);
    console.log(id);
    if (!image) return;
    image.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout
      section="oriana"
      subsection={lang === "es" ? "Mi mundo" : "My world"}
    >
      <Presentacion lang={lang} />

      <div className="pb-8 lg:pb-16 w-full flex flex-col lg:flex-row justify-between gap-8 fade-in">
        <div className="w-full max-w-3xl">
          {loading ? (
            <Loader />
          ) : (
            data.map((item) => (
              <CardBlog
                key={item.id}
                title={item.title}
                date={item.date}
                description={item.text}
                image={item.image}
                video={item.video}
                id={item.id}
                lang={lang}
              />
            ))
          )}
        </div>
        <div className="shrink-0">
          {!loading && <Aside items={data} goTo={goTo} lang={lang} />}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
