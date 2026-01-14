"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";
import Card from "@/components/card-cronologia";

interface data {
  id: number;
  title: string;
  text: string;
  category: number;
}

const items = () => {
  const lan = "es";
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/cronologia/" + lan;

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
          Formación musical
        </h2>
        <div className="flex flex-col gap-y-4">
          {data
            .filter((item) => item.category === 4)
            .map((item, index) => (
              <Card key={index} title={item.title} description={item.text} />
            ))}
        </div>
      </div>
      <div>
        <h2 className="font-bold text-xl lg:text-3xl mb-2">
          Docencia universitaria
        </h2>
        <div className="flex flex-col gap-y-4">
          {data
            .filter((item) => item.category === 5)
            .map((item, index) => (
              <Card key={index} title={item.title} description={item.text} />
            ))}
        </div>
      </div>
      <div>
        <h2 className="font-bold text-xl lg:text-3xl mb-2">Reconocimientos</h2>
        <div className="flex flex-col gap-y-4">
          {data
            .filter((item) => item.category === 6)
            .map((item, index) => (
              <Card key={index} title={item.title} description={item.text} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default items;
