"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/sectionlayout";
import CardMusica from "@/components/card-musica";
import Modal from "@/components/modal";
import Loader from "@/components/loading";
import Categories from "./categories";

interface data {
  id: number;
  title: string;
  category: number;
  image: string;
}

const page = () => {
  const lan = "es";
  const [category, setCategory] = useState(1);
  const [dataModal, setDataModal] = useState(null);
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/opera-y-mas/" + lan;

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
      <Layout section="música" subsection="Ópera y más">
        <div className="flex flex-col gap-y-8">
          <Categories category={category} setCategory={setCategory} />

          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-y-12">
              {data
                .filter((item) => item.category === category)
                .map((item, index) => (
                  <CardMusica
                    key={index}
                    title={item.title}
                    image={item.image}
                    setDataModal={setDataModal}
                  />
                ))}
            </div>
          )}
        </div>
      </Layout>

      {dataModal ? (
        <Modal dataModal={dataModal} setDataModal={setDataModal} />
      ) : null}
    </>
  );
};

export default page;
