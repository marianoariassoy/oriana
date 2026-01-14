"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";

interface data {
  id: number;
  name: string;
  section: number;
}

const categories = ({
  category,
  setCategory,
}: {
  category: number;
  setCategory: any;
}) => {
  const lan = "es";
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/categories/" + lan;

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
    <header className="flex items-center gap-x-2 flex-wrap">
      {data
        .filter((item) => item.section === 1)
        .map((item, index) => (
          <button
            key={index}
            className={`border border-t-0 h-12 w-full lg:w-50 flex items-center justify-center cursor-pointer hover:text-white font-medium  
                ${
                  category === item.id
                    ? "bg-2 border-2 text-white"
                    : "hover:bg-2 hover:border-2"
                }`}
            onClick={() => setCategory(item.id)}
          >
            {item.name}
          </button>
        ))}
    </header>
  );
};

export default categories;
