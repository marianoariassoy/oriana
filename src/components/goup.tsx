"use client";
import { GoUp } from "@/lib/icons";

const GoUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="fixed bottom-4 right-0 lg:right-4 z-20 hover:text-foreground cursor-pointer text-2xl"
      onClick={scrollToTop}
      aria-label="Volver arriba"
    >
      <GoUp />
    </button>
  );
};

export default GoUpButton;
