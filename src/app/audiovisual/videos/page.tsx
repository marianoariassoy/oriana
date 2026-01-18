"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/sectionlayout";
import CardVideo from "@/components/card-video";
import Bullets from "@/components/bullets";
import Loader from "@/components/loading";
import { useLanguage } from "@/context/LanguageContext";

interface data {
  id: number;
  title: string;
  video: string;
}

const page = () => {
  const { lang } = useLanguage();
  const [image, setImage] = useState(1);
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/videos/" + lang;

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
    <Layout section="audiovisual" subsection="Videos">
      <Bullets data={data} goTo={goTo} image={image} />

      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col py-16 gap-y-12 w-full mx-auto max-w-3xl fade-in">
          {data.map((item, index) => (
            <CardVideo
              key={index}
              title={item.title}
              video={item.video}
              index={index}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default page;
