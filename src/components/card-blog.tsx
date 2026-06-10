import ReactPlayer from "react-player";
import { formatDateFromTimestamp } from "@/utils/date";

interface Card {
  title: string;
  date: number;
  description: string;
  image?: string;
  video?: string;
  id: number;
  lang: string;
}

const CardBlog = ({
  title,
  date,
  description,
  image,
  video,
  id,
  lang,
}: Card) => {
  return (
    <article
      className="font-display pb-20 border-b border-1 flex flex-col pt-8 gap-8"
      id={`video-${id}`}
    >
      <header>
        <h3 className="font-bold text-foreground lg:text-xl">
          {formatDateFromTimestamp(date, lang)}
        </h3>
        <h2 className="font-bold text-xl lg:text-4xl">{title}</h2>
      </header>
      <div className="gap-8 flex flex-col">
        <div>
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
        </div>
        <div className="text-foreground leading-snug lg:text-lg">
          <div
            className="prose prose-neutral max-w-none"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </article>
  );
};

export default CardBlog;
