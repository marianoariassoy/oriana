"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/sectionlayout";
import Card from "@/components/card-audiovisual";
import Bullets from "@/components/bullets";
import Loader from "@/components/loading";
import Creditos from "./creditos";
import { useLanguage } from "@/context/LanguageContext";

interface data {
  id: number;
  title: string;
  image: string;
}

const page = () => {
  const { lang } = useLanguage();
  const [image, setImage] = useState(1);
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/fotos/" + lang;

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
    setImage(id);
    const image = document.querySelector(`#image-${id}`);
    if (!image) return;
    image.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout section="oriana" subsection={lang === "es" ? "Fotos" : "Photos"}>
      <Bullets data={data} goTo={goTo} image={image} />

      {loading ? (
        <Loader />
      ) : (
        <section className="lg:px-12 py-16 fade-in flex flex-col gap-y-8">
          <Creditos lang={lang} />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-y-12 ">
            {data.map((item, index) => (
              <Card
                key={index}
                url={"/oriana/fotos/" + item.id}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default page;
