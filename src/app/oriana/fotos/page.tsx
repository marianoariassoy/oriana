"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/sectionlayout";
import Card from "@/components/card-foto";
import Bullets from "@/components/bullets";
import Loader from "@/components/loading";

interface data {
  id: number;
  title: string;
  image: string;
}

const page = () => {
  const lan = "es";
  const [image, setImage] = useState(1);
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/fotos/" + lan;

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
    <Layout section="oriana" subsection="Fotos">
      <Bullets data={data} goTo={goTo} image={image} />

      {loading ? (
        <Loader />
      ) : (
        <div className="py-16 flex flex-col gap-y-4 w-full mx-auto max-w-3xl fade-in">
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              image={item.image}
              index={index}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default page;
