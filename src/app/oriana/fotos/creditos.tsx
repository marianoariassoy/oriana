"use client";
import { useState, useEffect } from "react";

interface data {
  id: number;
  section: string;
  text: string;
}

const creditos = ({ lang }: { lang: string }) => {
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
  return (
    <div className="text-foreground/60 font-display whitespace-break-spaces">
      {loading ? "" : data[7].text}
    </div>
  );
};

export default creditos;
