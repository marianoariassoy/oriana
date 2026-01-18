import ReactPlayer from "react-player";
import { formatDateFromTimestamp } from "@/utils/date";

interface Card {
  title: string;
  date: number;
  description: string;
  image?: string;
  video?: string;
  index: number;
  lang: string;
}

const CardBlog = ({
  title,
  date,
  description,
  image,
  video,
  index,
  lang,
}: Card) => {
  return (
    <article
      className="flex flex-col gap-y-4 font-display pb-12 border-b border-1"
      id={`video-${index + 1}`}
    >
      <header>
        <h3 className="font-bold text-foreground lg:text-xl">
          {formatDateFromTimestamp(date, lang)}
        </h3>
        <h2 className="font-bold text-xl lg:text-4xl">{title}</h2>
      </header>
      {image && (
        <div className="aspect-video w-full">
          <img src={image} alt={title} className="w-full" />
        </div>
      )}
      {video && (
        <div className="aspect-video w-full">
          <ReactPlayer
            src={video}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )}
      <p className="text-foreground italic leading-snug lg:text-lg">
        {description}
      </p>
    </article>
  );
};

export default CardBlog;
