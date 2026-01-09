"use client";
import { useState } from "react";
import Layout from "@/components/sectionlayout";
import Card from "@/components/card-foto";
import Bullets from "@/components/bullets";

const page = () => {
  const [image, setImage] = useState(1);

  const data = [
    {
      title: "Titulo 1",
      image:
        "https://images.pexels.com/photos/35554037/pexels-photo-35554037.jpeg",
    },
    {
      title: "",
      image:
        "https://images.pexels.com/photos/35554037/pexels-photo-35554037.jpeg",
    },
    {
      title: "",
      image:
        "https://images.pexels.com/photos/35554037/pexels-photo-35554037.jpeg",
    },
    {
      title: "Titulo 1",
      image:
        "https://images.pexels.com/photos/35554037/pexels-photo-35554037.jpeg",
    },
    {
      title: "Titulo 1",
      image:
        "https://images.pexels.com/photos/35554037/pexels-photo-35554037.jpeg",
    },
  ];

  const goTo = (id: number) => {
    setImage(id);
    const image = document.querySelector(`#image-${id}`);
    if (!image) return;
    image.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout section="oriana" subsection="Fotos">
      <Bullets data={data} goTo={goTo} image={image} />

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
    </Layout>
  );
};

export default page;
