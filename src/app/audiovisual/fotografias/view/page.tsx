"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Layout from "@/components/sectionlayout";
import Back from "@/components/back";
import Loader from "@/components/loading";
import { useLanguage } from "@/context/LanguageContext";
import Forward from "@/components/forward";

interface images {
  id: number;
  title: string;
  image: string;
}

interface data {
  id: number;
  title: string;
  text: string;
  image: string;
  next: string;
  images: images[];
}

const page = () => {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [orientation, setOrientation] = useState<
    "horizontal" | "vertical" | "square"
  >("horizontal");

  const [data, setData] = useState<data>({
    id: 0,
    title: "",
    text: "",
    image: "",
    next: "",
    images: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL +
            "/fotos-audiovisual/" +
            id +
            "/" +
            lang,
        );

        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [id, lang]);

  return (
    <Layout
      section="audiovisual"
      subsection={lang === "es" ? "Fotografías" : "Photos"}
    >
      {loading ? (
        <Loader />
      ) : (
        <div
          className={`grid grid-cols-1  gap-8 py-16 relative max-w-7xl ${data.text ? "lg:grid-cols-2" : "justify-center items-center"}`}
        >
          <div className="pt-4 lg:pt-0 flex-col gap-4 flex items-center">
            <img
              src={data.image}
              alt={data.title}
              onLoad={(e) => {
                const img = e.currentTarget;
                if (img.naturalWidth > img.naturalHeight) {
                  setOrientation("horizontal");
                } else if (img.naturalHeight > img.naturalWidth) {
                  setOrientation("vertical");
                } else {
                  setOrientation("square");
                }
              }}
              className={`w-full ${orientation === "horizontal" ? "max-w-5xl" : "max-w-3xl"}`}
            />
            {data.images &&
              data.images.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.title}
                  onLoad={(e) => {
                    const img = e.currentTarget;
                    if (img.naturalWidth > img.naturalHeight) {
                      setOrientation("horizontal");
                    } else if (img.naturalHeight > img.naturalWidth) {
                      setOrientation("vertical");
                    } else {
                      setOrientation("square");
                    }
                  }}
                  className={`w-full ${orientation === "horizontal" ? "max-w-5xl" : "max-w-3xl"}`}
                />
              ))}
          </div>
          {data.text && (
            <div className="pr-8 ">
              <p className="italic font-display leading-snug text-foreground   whitespace-break-spaces text-sm lg:text-lg">
                {data.text}
              </p>
            </div>
          )}

          <Back url="/audiovisual/fotografias" />
        </div>
      )}

      <Forward url={"/audiovisual/fotografias/view?id=" + data.next} />
    </Layout>
  );
};

export default page;
