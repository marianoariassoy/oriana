"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";

interface data {
  id: number;
  title: string;
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
          <div className="py-16 w-full mx-auto max-w-3xl fade-in ">
            {data.map((item, index) => (
              <div key={index}>
                <h4 className="mb-4 text-lg">{item.title}</h4>
                <p className="whitespace-break-spaces text-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default page;
