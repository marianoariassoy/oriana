"use client";
import { useState } from "react";
import Layout from "@/components/sectionlayout";
import CardBlog from "@/components/card-blog";
import Bullets from "@/components/bullets";

const page = () => {
  const [image, setImage] = useState(1);

  const data = [
    {
      title: "Está llegando la primavera...",
      date: "Noviembre 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
      image:
        "https://images.pexels.com/photos/35467806/pexels-photo-35467806.jpeg",
      video: "",
    },
    {
      title: "Está llegando la primavera...",
      date: "Noviembre 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
      image: "",
      video: "https://www.youtube.com/watch?v=UA0V0vN2-Kg",
    },
  ];

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
        <div className="flex flex-col gap-y-10">
          {data.map((item, index) => (
            <CardBlog
              key={index}
              title={item.title}
              date={item.date}
              description={item.description}
              image={item.image}
              video={item.video}
              index={index}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default page;
