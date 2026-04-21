"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";
import Layout from "@/components/sectionlayout";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

interface data {
  id: number;
  title: string;
  text: string;
}

const page = () => {
  const { lang } = useLanguage();
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/escritos/ensayos/" + lang;

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
    <Layout
      section="escritos"
      subsection={lang === "es" ? "Ensayos" : "Essays"}
    >
      <div className="py-8">
        {loading ? (
          <Loader />
        ) : (
          <ul className="lg:space-y-2 text-foreground/60 font-display text-xl lg:text-2xl list-disc ml-6">
            {data.map((item, index) => {
              return (
                <li key={item.title} className=" ">
                  <Link
                    href={"./ensayos/view?id=" + item.id}
                    className={` hover:text-4`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default page;
