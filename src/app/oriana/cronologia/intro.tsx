"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";

interface data {
  id: number;
  section: string;
  text: string;
}

const intro = ({ lang }: { lang: string }) => {
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/textos/" + lang;

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

  if (loading) return <Loader />;

  return (
    <section className="flex flex-col gap-y-8">
      <div>
        <h2 className="font-bold text-xl lg:text-3xl mb-2">
          {lang === "es" ? "Formación académica" : "Academic training"}
        </h2>
        <p className="font-display text-foreground leading-snug text-sm lg:text-base whitespace-break-spaces">
          {data[5].text}
        </p>
      </div>
      <div>
        <h2 className="font-bold text-xl lg:text-3xl mb-2">
          {lang === "es"
            ? "Formación en Artes Plásticas"
            : "Training in Arts and Crafts"}
        </h2>
        <p className="font-display text-foreground leading-snug text-sm lg:text-base whitespace-break-spaces">
          {data[6].text}
        </p>
      </div>
    </section>
  );
};

export default intro;
