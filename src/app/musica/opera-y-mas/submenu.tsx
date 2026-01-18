"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = ({ lang }: { lang: string }) => {
  const pathname = usePathname();

  const data = [
    {
      id: 1,
      name: "Repertorio",
      name_en: "Repertoire",
      href: "/musica/opera-y-mas/repertorio",
    },
    {
      id: 2,
      name: "Material audiovisual",
      name_en: "Audiovisual material",
      href: "/musica/opera-y-mas/material-audiovisual",
    },
    {
      id: 3,
      name: "Prensa",
      name_en: "Press",
      href: "/musica/opera-y-mas/prensa",
    },
  ];

  console.log(pathname);

  return (
    <header className="flex items-center gap-x-2 flex-wrap">
      {data.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={`border border-t-0 h-12 w-full lg:w-50 flex items-center justify-center cursor-pointer hover:text-white font-medium  
                ${
                  pathname === item.href
                    ? "bg-2 border-2 text-white"
                    : "hover:bg-2 hover:border-2"
                }`}
        >
          {lang === "es" ? item.name : item.name_en}
        </Link>
      ))}
    </header>
  );
};

export default categories;
