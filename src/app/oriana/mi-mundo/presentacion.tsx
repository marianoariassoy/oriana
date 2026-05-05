"use client";
import { useState, useEffect } from "react";

interface data {
  id: number;
  section: string;
  text: string;
}

const presentacion = ({ lang }: { lang: string }) => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/textos/" + lang;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<data[]>([]);

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
    <div className="w-full pt-8 mb-12 flex justify-end">
      <h2 className="font-display text-lg lg:text-2xl mb-18 text-foreground text-right max-w-3xl ">
        {data[7]?.text}
      </h2>
    </div>
  );
};

export default presentacion;
