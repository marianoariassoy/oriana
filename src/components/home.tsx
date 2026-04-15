"use client";
import { useState, useEffect } from "react";
import { nav } from "@/lib/data";
import Link from "next/link";
import Loader from "@/components/loading";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram } from "@/lib/icons";

interface data {
  id: number;
  section: string;
  text: string;
}

interface Submenu {
  name: string;
  name_en: string;
  href: string;
}

interface Section {
  name: string;
  name_en: string;
  href: string;
  color: string;
  submenu: Submenu[];
}

const home = ({ section }: { section: string }) => {
  const { lang } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [description, setDescription] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    name: "",
    name_en: "",
    href: "",
    color: "",
    submenu: [
      {
        name: "",
        name_en: "",
        href: "",
      },
    ],
  });
  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/textos/" + lang;

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(apiURL);
        if (!res.ok) throw new Error("Error al obtener datos de productos");
        const data = await res.json();

        const result = data.filter(
          (item: data) => item.section.toLowerCase() === section.toLowerCase(),
        );
        setDescription(result);
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

  useEffect(() => {
    if (section) {
      const result = nav.find(
        (item) => item.name.toLowerCase() === section.toLowerCase(),
      ) as Section;

      setData(result);
    }
  }, [section]);

  return (
    <section
      style={
        {
          "--hover-color": data.color,
        } as React.CSSProperties
      }
      className={`min-h-screen p-4 flex lg:items-center justify-center text-[var(--hover-color)] bg-secondary ${
        mounted ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="absolute left-4 top-9 font-display text-3xl text-foreground lg:hidden">
        Oriana Favaro
      </div>
      <div
        className={`w-full flex flex-col gap-y-8 mt-30 lg:mt-0 
          transition-all duration-300 ease-in-out 
          ${mounted ? "lg:translate-x-0" : "lg:translate-x-full"} 
          ${data.name === "Oriana" ? "max-w-6xl" : "max-w-180"} 
          `}
      >
        <h1 className="font-display text-4xl lg:text-8xl w-full italic lg:leading-20  lg:text-center lg:px-4">
          {lang === "es" ? data.name : data.name_en}
        </h1>
        <div className="relative z-20">
          <div
            className={`overflow-y-auto scrollbar-hide pr-2 flex justify-center
            ${data.name === "Oriana" ? "h-80 items-start" : "h-55 items-center"} 
            `}
          >
            {loading ? (
              <Loader />
            ) : (
              <p
                className={`text-foreground whitespace-break-spaces leading-tight font-display lg:text-lg 
              ${data.name === "Oriana" ? "text-left" : "lg:text-center"} 

              `}
              >
                {description[0]?.text}
              </p>
            )}
          </div>
        </div>
        <div
          className={`flex flex-col mb-4 gap-2 lg:flex-row items-center justify-center gap-x-4 ${data.submenu.length > 0 ? "" : "hidden"}`}
        >
          {data.name === "Oriana" && (
            <div className="flex w-full lg:w-auto mb-4 lg:mb-0 justify-start lg:justify-center">
              <a
                href="https://www.instagram.com/orianafavaro"
                className="hover:text-foreground text-3xl lg:mr-8"
              >
                <Instagram />
              </a>
            </div>
          )}

          {data.submenu.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="border border-[var(--hover-color)] h-12 w-full lg:w-50 flex items-center justify-center hover:text-white hover:bg-[var(--hover-color)] font-medium rounded-tl-2xl rounded-br-2xl lg:text-lg"
            >
              <span>{lang === "es" ? item.name : item.name_en}</span>
            </Link>
          ))}
        </div>
        {section === "contacto" && (
          <>
            <div className="flex flex-col gap-4  lg:flex-row justify-center items-center">
              <div className="flex w-full lg:w-auto mb-4 lg:mb-0 justify-start lg:justify-center">
                <a
                  href="https://www.instagram.com/orianafavaro"
                  className="hover:text-foreground text-3xl lg:mr-8"
                >
                  <Instagram />
                </a>
              </div>

              <a
                href="mailto:#"
                className="border border-white h-12 w-full lg:w-50 flex items-center justify-center hover:text-secondary hover:bg-white font-medium rounded-tl-2xl rounded-br-2xl lg:text-lg"
              >
                {lang === "es" ? "Envíame tu consulta" : "Send me your query"}
              </a>
            </div>
            <a
              href="https://fabianmuggeri.com"
              className="lg:hidden text-foreground hover:underline"
            >
              {lang === "es"
                ? "Diseño fabianmuggeri.com"
                : "Design fabianmuggeri.com"}
            </a>
          </>
        )}
      </div>
      {section === "contacto" && (
        <div className="fixed right-0 translate-x-12 top-1/2 -translate-y-1/2  text-sm text-foreground rotate-90 hidden lg:block">
          <a href="https://fabianmuggeri.com" className="hover:underline">
            {lang === "es"
              ? "Diseño fabianmuggeri.com"
              : "Design fabianmuggeri.com"}
          </a>
        </div>
      )}
    </section>
  );
};

export default home;
