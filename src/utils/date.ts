// src/utils/date.ts
export const formatDateFromTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);

  const day = date.getDate();
  const month = date
    .toLocaleString("es-AR", { month: "long" })
    .replace(/^./, (c) => c.toUpperCase());
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
