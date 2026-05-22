import { useEffect, useState } from "react";
import { formatDateFromTimestamp } from "@/utils/date";

interface Item {
  id: number;
  title: string;
  date: number;
  year: number;
  month: number;
  text: string;
  image: string;
  video: string;
}

interface AsideArchiveProps {
  items: Item[];
  goTo: (id: number) => void;
  lang: string;
}

export function AsideArchive({ items, goTo, lang }: AsideArchiveProps) {
  const [itemsOrdered, setItemsOrdered] = useState<Item[]>([]);

  useEffect(() => {
    setItemsOrdered(items.sort((a, b) => a.title.localeCompare(b.title)));
  }, [items]);

  return (
    <aside className="archive text-foreground text-lg flex flex-col items-start justify-start">
      {itemsOrdered.map((item) => (
        <div key={item.id} className="archive-year">
          <button
            className=" cursor-pointer flex flex-col  items-start"
            onClick={() => goTo(item.id)}
          >
            <span className="text-foreground/70">
              {formatDateFromTimestamp(item.date, lang)}
            </span>
            <span className="text-xl hover:underline">{item.title}</span>
          </button>
        </div>
      ))}
    </aside>
  );
}

export default AsideArchive;
