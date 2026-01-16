type ArchiveData = {
  [year: number]: number[];
};

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
  onSelect?: (year: number, month: number) => void;
  selectedYear?: number;
  selectedMonth?: number;
}

export function AsideArchive({
  items,
  selectedYear,
  selectedMonth,
  onSelect,
}: AsideArchiveProps) {
  const archive: ArchiveData = items.reduce((acc, item) => {
    acc[item.year] ??= [];
    if (!acc[item.year].includes(item.month)) {
      acc[item.year].push(item.month);
    }
    return acc;
  }, {} as ArchiveData);

  const years = Object.keys(archive)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <aside className="archive text-foreground text-lg">
      {years.map((year) => (
        <div key={year} className="archive-year">
          <h4 className="text-xl">{year}</h4>
          <ul>
            {archive[year]
              .sort((a, b) => a - b)
              .map((month) => {
                const isActive =
                  year === selectedYear && month === selectedMonth;

                return (
                  <li key={month} className="text-foreground/60">
                    <button
                      className={`font-diplay italic cursor-pointer ${isActive ? "text-1" : "hover:text-1"}`}
                      type="button"
                      onClick={() => onSelect?.(year, month)}
                    >
                      {new Date(year, month - 1).toLocaleString("es-AR", {
                        month: "long",
                      })}
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default AsideArchive;
