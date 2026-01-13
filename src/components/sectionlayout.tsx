"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { nav } from "@/lib/data";
import { Asterisco } from "@/lib/icons";
import GoUp from "@/components/goup";

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
  description: string;
  description_en: string;
  submenu: Submenu[];
}

const sectionLayout = ({
  children,
  section,
  subsection,
}: {
  section: string;
  subsection: string;
  children: React.ReactNode;
}) => {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState({
    name: "",
    name_en: "",
    href: "",
    color: "",
    description: "",
    description_en: "",
    submenu: [
      {
        name: "",
        name_en: "",
        href: "",
      },
    ],
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (section) {
      const result = nav.find(
        (item) => item.name.toLowerCase() === section.toLowerCase()
      ) as Section;
      setData(result);
    }
  }, [section]);

  return (
    <section
      style={
        {
          "--color": data.color,
        } as React.CSSProperties
      }
      className="text-[var(--color)] px-4 lg:px-8 max-w-[1480px] mx-auto pb-8"
    >
      <header className="sticky top-0 w-full lg:h-30 pb-6 lg:pb-0 border-b border-[var(--color)] bg-secondary lg:bg-secondary/70 backdrop-blur-lg pt-9 lg:pt-12 z-40">
        <div className="font-display text-3xl mb-6 text-foreground lg:hidden">
          Oriana Favaro
        </div>
        <div
          className={`text-xl lg:text-4xl font-display flex items-center gap-x-2 text-foreground/60 transition-all duration-300 ease-in-out  ${
            mounted ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Link
            href="/"
            className="hover:text-[var(--color)] translate-[0.1rem]"
          >
            <Asterisco />
          </Link>
          /
          <Link className="hover:text-[var(--color)]" href={`${data.href}`}>
            {data.name}
          </Link>
          /<span className="italic text-[var(--color)]">{subsection}</span>
        </div>
      </header>

      {children}

      <GoUp />
    </section>
  );
};

export default sectionLayout;
