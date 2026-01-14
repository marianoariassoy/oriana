"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";
import Layout from "@/components/sectionlayout";
import Escritos from "@/components/escritos";

interface data {
  category: number;
  title: string;
  items: item[];
}

interface item {
  title: string;
  text: string;
  category: number;
}

const page = () => {
  const lan = "es";
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/escritos/ensayos/" + lan;

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
    <Layout section="escritos" subsection="Ensayos">
      {loading ? (
        <Loader />
      ) : data[0].items.length > 0 ? (
        <Escritos data={data} />
      ) : null}
    </Layout>
  );
};

export default page;
