interface Card {
  title: string;
  image: string;
  images: any;
  setDataModal: any;
}

const CardMusica = ({ title, image, images, setDataModal }: Card) => {
  return (
    <article className="flex flex-col gap-y-2">
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
      <div className="italic font-display text-foreground">{title}</div>
    </article>
  );
};

export default CardMusica;
