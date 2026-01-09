"use client";
import { useState } from "react";
import Layout from "@/components/sectionlayout";
import CardMusica from "@/components/card-musica";

const page = () => {
  const [category, setCategory] = useState(1);

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

  const categorys = [
    {
      id: 1,
      name: "Repertorio",
      name_en: "Repertoire",
    },
    {
      id: 2,
      name: "Material audiovisual",
      name_en: "Audiovisual material",
    },
    {
      id: 3,
      name: "Prensa",
      name_en: "Press",
    },
  ];

  return (
    <Layout section="música" subsection="Ópera y más">
      <div className="flex flex-col gap-y-8">
        <header className="flex items-center gap-x-2">
          {categorys.map((item, index) => (
            <button
              key={index}
              className={`border border-t-0 h-12 w-full lg:w-50 flex items-center justify-center cursor-pointer hover:text-white font-medium  
                ${
                  category === item.id
                    ? "bg-2 border-2 text-white"
                    : "hover:bg-2 hover:border-2"
                }`}
              onClick={() => setCategory(item.id)}
            >
              {item.name}
            </button>
          ))}
        </header>
        <div className="grid grid-cols-3 gap-x-4 gap-y-12">
          {data
            .filter((item) => item.category === category)
            .map((item, index) => (
              <CardMusica key={index} title={item.title} image={item.image} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default page;
