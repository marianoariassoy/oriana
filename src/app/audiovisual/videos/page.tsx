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
  text: string;
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

  const sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Layout section="audiovisual" subsection="Videos">
      <Bullets data={data} goTo={goTo} image={image} />

      {loading ? (
        <Loader />
      ) : (
        <div className="pb-8 lg:pb-16 w-full flex flex-col lg:flex-row justify-between gap-8 fade-in">
          <div className="flex flex-col py-16 gap-y-12 w-full max-w-4xl ">
            {data.map((item, index) => (
              <CardVideo
                key={item.id}
                title={item.title}
                video={item.video}
                text={item.text}
                index={index}
              />
            ))}
          </div>
          <div>
            <ul className="flex flex-col gap-2 mt-12">
              {sortedData.map((item, index) => (
                <li key={item.id}>
                  <button
                    className="text-foreground hover:underline cursor-pointer"
                    onClick={() => {
                      const originalIndex = data.findIndex(
                        (d) => d.id === item.id,
                      );
                      goTo(originalIndex + 1);
                    }}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default page;
