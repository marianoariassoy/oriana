"use client";
import { useState, useEffect } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Loader from "@/components/loading";

interface data {
  id: number;
  image: string;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/home";

  useEffect(() => {
    async function getData() {
      try {
        console.log(apiURL);
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

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="h-screen w-screen relative bg-black">
      <div
        className={`absolute flex flex-col right-4 lg:right-30 top-1/2 -translate-y-1/2 z-10 font-display text-5xl lg:text-8xl transition-opacity duration-600 text-secondary ${
          mounted ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <span className="font-light lg:leading-17  -translate-x-8 lg:-translate-x-20">
          Oriana
        </span>
        <span className="font-light">Favaro</span>
        <span className="text-white text-2xl lg:text-3xl tracking-widest font-light">
          artista
        </span>
      </div>
      <div
        className={`slide-container left-0 transition-opacity duration-1000 ${
          mounted ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <Fade
            autoplay={true}
            duration={4000}
            infinite={true}
            pauseOnHover={false}
            arrows={false}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="h-screen w-screen bg-center bg-cover"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
            ))}
          </Fade>
        )}
      </div>
    </section>
  );
}
