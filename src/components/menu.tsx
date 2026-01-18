import { nav } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const menu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const { lang } = useLanguage();

  const paddins = [
    "pl-2 lg:pl-10",
    "pl-16 lg:pl-45",
    "pl-2 lg:pl-10",
    "pl-30 lg:pl-80",
    "pl-16 lg:pl-45",
  ];

  return (
    <div
      className={`fixed inset-0 w-screen h-screen top-0 left-0 bg-black/80 backdrop-blur-lg transition-opacity duration-300 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setOpen(false)}
    >
      <nav
        className={`fixed top-0 left-0 w-screen transition-transform duration-300 ease-in-out max-w-full h-full flex items-center justify-center font-display font-light px-4 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col text-white text-5xl lg:text-8xl lg:w-full lg:max-w-2xl">
          {nav.map((item, index) => (
            <li
              key={index}
              style={
                {
                  "--hover-color": item.color,
                } as React.CSSProperties
              }
              className={` border-b lg:leading-20 hover:text-[var(--hover-color)] hover:border-[var(--hover-color)] ${
                paddins[index]
              } hover:italic w-full
              ${
                "/" + pathname.split("/")[1] === item.href
                  ? "italic text-[var(--hover-color)] border-[var(--hover-color)]"
                  : "text-secondary border-transparent"
              }
              `}
            >
              <Link href={item.href}>
                {lang === "es" ? item.name : item.name_en}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default menu;
