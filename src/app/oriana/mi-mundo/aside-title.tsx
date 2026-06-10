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
  const groupedItems = items.reduce(
    (acc: Record<number, Record<number, Item[]>>, item) => {
      if (!acc[item.year]) {
        acc[item.year] = {};
      }

      if (!acc[item.year][item.month]) {
        acc[item.year][item.month] = [];
      }

      acc[item.year][item.month].push(item);

      return acc;
    },
    {},
  );

  const years = Object.keys(groupedItems)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <aside className="archive text-foreground text-lg flex flex-col items-start pt-8">
      {years.map((year) => {
        const months = Object.keys(groupedItems[year])
          .map(Number)
          .sort((a, b) => b - a);

        return (
          <div key={year} className="mb-8">
            <h2 className="text-2xl font-bold">{year}</h2>

            {months.map((month) => (
              <div key={month} className="mt-4">
                <h3 className="text-lg font-semibold text-foreground/70">
                  {new Date(year, month - 1)
                    .toLocaleString(lang === "es" ? "es-AR" : "en-US", {
                      month: "long",
                    })
                    .replace(/^./, (str) => str.toUpperCase())}
                </h3>

                <div className="mt-2 flex flex-col">
                  {groupedItems[year][month]
                    .sort((a, b) => b.date - a.date)
                    .map((item) => (
                      <button
                        key={item.id}
                        className="flex flex-col items-start cursor-pointer"
                        onClick={() => goTo(item.id)}
                      >
                        <span className="hover:underline">{item.title}</span>
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </aside>
  );
}

export default AsideArchive;
