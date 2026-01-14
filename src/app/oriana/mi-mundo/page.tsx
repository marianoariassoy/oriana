"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/sectionlayout";
import CardBlog from "@/components/card-blog";
import Bullets from "@/components/bullets";
import Loader from "@/components/loading";

interface data {
  id: number;
  title: string;
  date: string;
  text: string;
  image: string;
  video: string;
}

const page = () => {
  const lan = "es";
  const [image, setImage] = useState(1);
  const [data, setData] = useState<data[]>([]);
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

  const goTo = (id: number) => {
    setImage(id);
    const image = document.querySelector(`#video-${id}`);
    if (!image) return;
    image.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout section="oriana" subsection="Mi Mundo">
      <Bullets data={data} goTo={goTo} image={image} />

      <div className="py-16 w-full mx-auto max-w-3xl fade-in">
        <h2 className="font-display text-xl lg:text-3xl mb-20">
          Algunas reflexiones. Ideas lanzadas al mundo. <br /> Formas de ver...
        </h2>
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-col gap-y-10">
            {data.map((item, index) => (
              <CardBlog
                key={index}
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
    </Layout>
  );
};

export default page;
