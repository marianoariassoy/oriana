"use client";
import { useState, useEffect } from "react";
import Menu from "@/components/menu";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/data";

const header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("rgb(255, 255, 255)");

  useEffect(() => {
    const section = "/" + pathname.split("/")[1];
    const result = nav.find((item) => item.href === section) as {
      color: string;
    };
    if (result) setColor(result.color);
    else setColor("rgb(255, 255, 255)");
  }, [pathname]);

  return (
    <header
      style={
        {
          "--color": color,
        } as React.CSSProperties
      }
      className="fixed top-0 right-0 z-50 flex justify-end px-4 lg:px-8 pt-12 lg:pt-16 text-[var(--color)]"
    >
      <Menu open={open} setOpen={setOpen} />

      <button
        className={`hamburger transition-transform ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span className="bg-[var(--color)]"></span>
        <span className="bg-[var(--color)]"></span>
        <span className="bg-[var(--color)]"></span>
      </button>
    </header>
  );
};

export default header;
