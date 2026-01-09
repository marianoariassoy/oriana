interface Card {
  title: string;
  image: string;
}

const CardFoto = ({ title, image }: Card) => {
  return (
    <article className="flex flex-col gap-y-2">
      <div>
        <img src={image} alt={title} className="w-full" />
      </div>
      {title && <div>{title}</div>}
    </article>
  );
};

export default CardFoto;
