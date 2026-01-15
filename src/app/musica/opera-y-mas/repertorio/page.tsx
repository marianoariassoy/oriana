"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";

interface data {
  id: number;
  text: string;
}

const page = () => {
  const lan = "es";
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/repertorio/" + lan;

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
    <>
      <div className="flex flex-col gap-y-8">
        {loading ? (
          <Loader />
        ) : (
          <div className="py-16 w-full mx-auto max-w-3xl fade-in text-foreground">
            {data.map((item, index) => (
              <div key={index}>{item.text}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default page;
