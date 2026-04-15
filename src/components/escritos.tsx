"use client";
import { useState } from "react";

interface item {
  id: number;
  title: string;
  text: string;
}

const page = ({ data }: { data: item[] }) => {
  const [activeItem, setActiveItem] = useState({
    id: data[0].id,
    title: data[0].title,
    text: data[0].text,
  });

  return (
    <div className="py-8 flex flex-col lg:flex-row gap-4">
      <div className="lg:w-1/3">
        <aside className="flex flex-col items-start">
          <ul className="lg:space-y-2 text-foreground/60 font-display  mb-2">
            {data.map((item, index) => {
              const isActive = activeItem.id === item.id;

              return (
                <li key={item.title}>
                  <button
                    onClick={() => {
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
        </aside>
      </div>
      <div className="lg:w-2/3">
        <h1 className="text-2xl lg:text-4xl font-display font-bold mb-4 lg:mb-6">
          {activeItem.title}
        </h1>
        <div className="lg:text-lg font-display text-foreground leading-relaxed">
          <div
            className="prose prose-neutral max-w-3xl"
            dangerouslySetInnerHTML={{ __html: activeItem.text }}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
