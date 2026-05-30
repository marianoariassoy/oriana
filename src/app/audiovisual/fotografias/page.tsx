"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";
import Layout from "@/components/sectionlayout";
import { useLanguage } from "@/context/LanguageContext";
import Modal from "@/components/modal";
import Card from "@/components/card-audiovisual";

interface data {
  id: number;
  title: string;
  image: string;
}
const page = () => {
  const { lang } = useLanguage();
  const [data, setData] = useState<data[]>([]);
  const [dataModal, setDataModal] = useState(null);

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
    <>
      <Layout
        section="audiovisual"
        subsection={lang === "es" ? "Fotografías" : "Photos"}
      >
        {loading ? (
          <Loader />
        ) : (
          <div className="py-16 grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-y-12">
            {data.map((item, index) => (
              <Card
                key={index}
                url={"/audiovisual/fotografias/view?id=" + item.id}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>
        )}
      </Layout>
      {dataModal ? (
        <Modal dataModal={dataModal} setDataModal={setDataModal} />
      ) : null}
    </>
  );
};

export default page;
