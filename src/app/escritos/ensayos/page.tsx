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

  const paddins = [
    "pl-2 lg:pl-10",
    "pl-16 lg:pl-45",
    "pl-2 lg:pl-10",
    "pl-30 lg:pl-80",
    "pl-16 lg:pl-45",
  ];

  return (
    <Layout
      section="escritos"
      subsection={lang === "es" ? "Ensayos" : "Essays"}
    >
      <div className="py-8">
        {loading ? (
          <Loader />
        ) : (
          <ul className="lg:space-y-2 font-display font-light text-xl lg:text-4xl text-center mt-8 max-w-2xl mx-auto">
            {data.map((item, index) => {
              return (
                <li
                  key={item.title}
                  className="border-transparent hover:border-4 border-b w-full"
                >
                  <Link
                    href={"./ensayos/view?id=" + item.id}
                    className={`${paddins[index]}`}
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
