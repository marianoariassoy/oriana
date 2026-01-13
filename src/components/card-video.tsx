import ReactPlayer from "react-player";

interface Card {
  title: string;
  video: string;
  index: number;
}

const CardVideo = ({ title, video, index }: Card) => {
  return (
    <article className="flex flex-col gap-y-4" id={`image-${index + 1}`}>
      <div className="aspect-square lg:aspect-video overflow-hidden">
        <ReactPlayer
          src={video}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div>{title}</div>
    </article>
  );
};

export default CardVideo;
