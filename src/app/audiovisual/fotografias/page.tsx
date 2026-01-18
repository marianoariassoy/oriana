"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";
import Layout from "@/components/sectionlayout";
import Card from "@/components/card-audiovisual";
import { useLanguage } from "@/context/LanguageContext";

interface data {
  id: number;
  title: string;
  text: string;
  image: string;
}
const page = () => {
  const { lang } = useLanguage();
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/fotos-audiovisual/" + lang;

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
      section="audiovisual"
      subsection={lang === "es" ? "Fotografías" : "Photos"}
    >
      {loading ? (
        <Loader />
      ) : (
        <div className="lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-y-12 fade-in">
          {data.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default page;
