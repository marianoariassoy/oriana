"use client";
import { useState } from "react";
import { GoUp } from "@/lib/icons";

interface Data {
  category: number;
  title: string;
  items: {
    title: string;
    description: string;
  }[];
}

const page = ({ data }: { data: Data[] }) => {
  const [openCategory, setOpenCategory] = useState<number>(data[0].category);
  const [activeCategory, setActiveCategory] = useState(data[0]);
  const [activeItem, setActiveItem] = useState(data[0].items[0]);

  const toggleCategory = (category: (typeof data)[number]) => {
    if (openCategory === category.category) {
      setOpenCategory(0);
    } else {
      setOpenCategory(category.category);
      setActiveCategory(category);
    }
  };

  return (
    <div className="py-8 flex flex-col lg:flex-row gap-4">
      <div className="lg:w-1/3">
        <aside className="flex flex-col items-start">
          {data.map((category) => {
            const isOpen = openCategory === category.category;

            return (
              <div key={category.category}>
                <button
                  onClick={() => toggleCategory(category)}
                  className={`w-full flex cursor-pointer items-center ${
                    isOpen ? "font-bold" : ""
                  }`}
                >
                  <span>{category.title}</span>
                  <span
                    className={`text-xs ${
                      isOpen ? "translate-y-[0.15rem]" : "scale-y-[-1]"
                    }`}
                  >
                    <GoUp />
                  </span>
                </button>
                {isOpen && (
                  <ul className="lg:space-y-2 text-foreground/60 font-display italic mb-2">
                    {category.items.map((item) => {
                      const isActive =
                        activeItem.title === item.title &&
                        activeCategory.category === category.category;

                      return (
                        <li key={item.title}>
                          <button
                            onClick={() => {
                              setActiveCategory(category);
                              setActiveItem(item);
                            }}
                            className={`cursor-pointer ${
                              isActive ? "text-4" : " hover:text-4"
                            }`}
                          >
                            {item.title}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </aside>
      </div>
      <div className="lg:w-2/3">
        <h1 className="text-2xl lg:text-4xl font-display font-bold mb-4 lg:mb-6">
          {activeItem.title}
        </h1>
        <p className="whitespace-pre-line lg:text-lg font-display text-foreground leading-relaxed">
          {activeItem.description}
        </p>
      </div>
      <div className="w-1/3">{/* empty */}</div>
    </div>
  );
};

export default page;
