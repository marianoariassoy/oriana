interface Card {
  title: string;
  image: string;
}

const CardMusica = ({ title, image }: Card) => {
  return (
    <article className="flex flex-col gap-y-2">
      <button className="w-full cursor-pointer hover:opacity-80 transition-opacity">
        <img
          src={image}
          alt={title}
          className="aspect-5/4 w-full h-full object-cover"
        />
      </button>
      <div className="italic font-display text-foreground">{title}</div>
    </article>
  );
};

export default CardMusica;
