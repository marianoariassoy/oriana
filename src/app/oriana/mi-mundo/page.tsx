"use client";
import { useState, useEffect, useMemo } from "react";
import Layout from "@/components/sectionlayout";
import CardBlog from "@/components/card-blog";
import Bullets from "@/components/bullets";
import Loader from "@/components/loading";
import Aside from "./aside";

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
  const lan = "es";
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [image, setImage] = useState(1);
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/mi-mundo/" + lan;

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
    <Layout section="oriana" subsection="Mi Mundo">
      <Bullets data={filteredItems} goTo={goTo} image={image} />

      <div className="py-16 w-full flex flex-col lg:flex-row gap-4 fade-in">
        <div className="lg:w-1/3">
          {!loading && (
            <Aside
              items={data}
              selectedYear={year}
              selectedMonth={month}
              onSelect={(y, m) => {
                setYear(y);
                setMonth(m);
              }}
            />
          )}
        </div>
        <div className="lg:w-2/3">
          <h2 className="font-display text-xl lg:text-3xl mb-20">
            Reflexiones, ideas, pensamientos, teorías, confesiones, proyectos,
            dibujos, historias... <br />
            La expresión de mi existencia puesta en palabras.
          </h2>
          {loading ? (
            <Loader />
          ) : (
            <div className="flex flex-col gap-y-10">
              {filteredItems.map((item, index) => (
                <CardBlog
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  description={item.text}
                  image={item.image}
                  video={item.video}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
        <div className="lg:w-1/3"></div>
      </div>
    </Layout>
  );
};

export default Page;
