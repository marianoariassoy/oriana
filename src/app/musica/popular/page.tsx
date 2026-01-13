"use client";
import { useState } from "react";
import Layout from "@/components/sectionlayout";
import CardMusica from "@/components/card-musica";
import Modal from "@/components/modal";

const page = () => {
  const [dataModal, setDataModal] = useState(null);

  const data = [
    {
      title: "Altri Canti, 2021",
      category: 1,
      image:
        "https://images.pexels.com/photos/15884712/pexels-photo-15884712.jpeg",
    },
    {
      title: "Title 2",
      category: 1,
      image:
        "https://images.pexels.com/photos/35467806/pexels-photo-35467806.jpeg",
    },
    {
      title: "Title 3",
      category: 1,
      image:
        "https://images.pexels.com/photos/10353326/pexels-photo-10353326.jpeg",
    },
    {
      title: "Title 4",
      category: 2,
      image:
        "https://images.pexels.com/photos/35383164/pexels-photo-35383164.jpeg",
    },
    {
      title: "Title 5",
      category: 2,
      image:
        "https://images.pexels.com/photos/28575775/pexels-photo-28575775.jpeg",
    },
    {
      title: "Title 6",
      category: 3,
      image:
        "https://images.pexels.com/photos/35264894/pexels-photo-35264894.jpeg",
    },
  ];

  return (
    <>
      <Layout section="música" subsection="Popular">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-y-12 py-16">
          {data.map((item, index) => (
            <CardMusica
              key={index}
              title={item.title}
              image={item.image}
              setDataModal={setDataModal}
            />
          ))}
        </div>
      </Layout>

      {dataModal ? (
        <Modal dataModal={dataModal} setDataModal={setDataModal} />
      ) : null}
    </>
  );
};

export default page;
