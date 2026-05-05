"use client";
import { useState, useEffect, useMemo } from "react";
import Layout from "@/components/sectionlayout";
import CardBlog from "@/components/card-blog";
import Bullets from "@/components/bullets";
import Loader from "@/components/loading";
import Aside from "./aside";
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

const getRange = (year: number, month: number) => {
  const start = new Date(year, month - 1, 1, 0, 0, 0).getTime() / 1000;
  const end = new Date(year, month, 0, 23, 59, 59).getTime() / 1000;
  return { start, end };
};

const Page = () => {
  const { lang } = useLanguage();
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [image, setImage] = useState(1);
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

  const filteredItems = useMemo(() => {
    if (!year || !month) return data;

    const { start, end } = getRange(year, month);

    return data.filter((item) => item.date >= start && item.date <= end);
  }, [data, year, month]);

  const goTo = (id: number) => {
    setImage(id);
    const image = document.querySelector(`#video-${id}`);
    if (!image) return;
    image.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout
      section="oriana"
      subsection={lang === "es" ? "Mi mundo" : "My world"}
    >
      <Bullets data={filteredItems} goTo={goTo} image={image} />
      <Presentacion lang={lang} />

      <div className="pb-8 lg:pb-16 w-full flex flex-col lg:flex-row justify-between gap-8 fade-in">
        <div className="w-full max-w-4xl">
          {loading ? (
            <Loader />
          ) : (
            filteredItems.map((item, index) => (
              <CardBlog
                key={item.id}
                title={item.title}
                date={item.date}
                description={item.text}
                image={item.image}
                video={item.video}
                index={index}
                lang={lang}
              />
            ))
          )}
        </div>
        <div>
          {!loading && (
            <Aside
              items={data}
              selectedYear={year}
              selectedMonth={month}
              lang={lang}
              onSelect={(y, m) => {
                setYear(y);
                setMonth(m);
              }}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
