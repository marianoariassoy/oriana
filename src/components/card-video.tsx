import ReactPlayer from "react-player";

interface Card {
  title: string;
  video: string;
}

const CardVideo = ({ title, video }: Card) => {
  return (
    <article className="flex flex-col gap-y-4">
      <div className="aspect-video overflow-hidden">
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
