"use client";
import { useState, useEffect } from "react";
import CardMusica from "@/components/card-musica";
import Modal from "@/components/modal";
import Loader from "@/components/loading";
import { useLanguage } from "@/context/LanguageContext";

interface images {
  id: number;
  title: string;
  image: string;
}

interface data {
  id: number;
  title: string;
  image: string;
  images: images[];
}

const page = () => {
  const { lang } = useLanguage();
  const [dataModal, setDataModal] = useState(null);
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/opera-y-mas/" + lang;

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
    <>
      <div className="py-8">
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-y-12">
            {data.map((item, index) => (
              <CardMusica
                key={index}
                title={item.title}
                image={item.image}
                images={item.images}
                setDataModal={setDataModal}
              />
            ))}
          </div>
        )}
      </div>

      {dataModal ? (
        <Modal dataModal={dataModal} setDataModal={setDataModal} />
      ) : null}
    </>
  );
};

export default page;
