export const formatDateFromTimestamp = (timestamp: number, lang: string) => {
  if (lang === "es") {
    return formatDateFromTimestampES(timestamp);
  }
  return formatDateFromTimestampEN(timestamp);
};

const formatDateFromTimestampEN = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  const day = date.getDate();
  const month = date
    .toLocaleString("en-US", { month: "long" })
    .replace(/^./, (c) => c.toUpperCase());
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

const formatDateFromTimestampES = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  const day = date.getDate();
  const month = date
    .toLocaleString("es-AR", { month: "long" })
    .replace(/^./, (c) => c.toUpperCase());
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
