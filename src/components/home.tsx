"use client";
import { useState, useEffect } from "react";
import { nav } from "@/lib/data";
import Link from "next/link";
import Loader from "@/components/loading";
import { useLanguage } from "@/context/LanguageContext";

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
  const [showFade, setShowFade] = useState(true);
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

  useEffect(() => {
    const el = document.getElementById("text");
    if (!el) return;

    const handleScroll = () => {
      const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
      setShowFade(!isAtBottom);
    };

    handleScroll();
    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, [loading, description]);

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
        className={`w-full max-w-180 flex flex-col gap-y-8 mt-30 lg:mt-0 
          transition-all duration-300 ease-in-out ${
            mounted ? "lg:translate-x-0" : "lg:translate-x-full"
          }`}
      >
        <h1 className="font-display text-4xl lg:text-8xl w-full italic lg:leading-20 pr-4 lg:text-center px-4">
          {lang === "es" ? data.name : data.name_en}
        </h1>
        <div
          className={`flex flex-col gap-2 lg:flex-row items-center justify-center gap-x-4 ${data.submenu.length > 0 ? "" : "hidden"}`}
        >
          {data.submenu.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="border border-[var(--hover-color)] h-12 w-full lg:w-50 flex items-center justify-center hover:text-white hover:bg-[var(--hover-color)] font-medium rounded-tl-2xl rounded-br-2xl lg:text-xl shadow-md"
            >
              <span>{lang === "es" ? item.name : item.name_en}</span>
            </Link>
          ))}
        </div>
        {section === "contacto" && (
          <>
            <div className="flex justify-center">
              <a
                href="mailto:#"
                className="border border-white h-12 w-full lg:w-50 flex items-center justify-center hover:text-secondary hover:bg-white font-medium rounded-tl-2xl rounded-br-2xl lg:text-xl shadow-md "
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
        <div className="relative">
          <div className="h-55 overflow-y-auto scrollbar-hide pr-2">
            {loading ? (
              <Loader />
            ) : (
              <p className="text-foreground whitespace-break-spaces lg:text-center leading-tight font-display">
                {description[0]?.text}
              </p>
            )}
          </div>

          {/* {showFade && (
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-secondary to-transparent" />
          )} */}
        </div>
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
