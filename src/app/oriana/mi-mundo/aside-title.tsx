import { useEffect, useState } from "react";

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
}

export function AsideArchive({ items, goTo }: AsideArchiveProps) {
  const [itemsOrdered, setItemsOrdered] = useState<Item[]>([]);

  useEffect(() => {
    setItemsOrdered(items.sort((a, b) => a.title.localeCompare(b.title)));
  }, [items]);

  return (
    <aside className="archive text-foreground text-lg flex flex-col items-start justify-start">
      {itemsOrdered.map((item) => (
        <div key={item.id} className="archive-year">
          <button
            className="hover:underline cursor-pointer"
            onClick={() => goTo(item.id)}
          >
            <span className="text-xl">{item.title}</span>
          </button>
        </div>
      ))}
    </aside>
  );
}

export default AsideArchive;
