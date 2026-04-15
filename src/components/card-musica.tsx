import ReactPlayer from "react-player";

interface Card {
  title: string;
  image: string;
  video: string;
  images: any;
  setDataModal: any;
}

const CardMusica = ({ title, image, video, images, setDataModal }: Card) => {
  return (
    <article className="flex flex-col gap-y-2">
      {video ? (
        <div className="aspect-square lg:aspect-5/4 bg-black/10">
          <ReactPlayer
            src={video}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      ) : (
        <button
          className="w-full cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => setDataModal(images)}
        >
          <img
            src={image}
            alt={title}
            className="aspect-square lg:aspect-5/4 w-full h-full object-cover"
          />
        </button>
      )}

      <div className="font-display text-foreground font-medium">{title}</div>
    </article>
  );
};

export default CardMusica;
