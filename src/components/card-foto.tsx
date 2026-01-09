interface Card {
  title: string;
  image: string;
  index: number;
}

const CardFoto = ({ title, image, index }: Card) => {
  return (
    <article className="flex flex-col gap-y-2" id={`image-${index + 1}`}>
      <div>
        <img src={image} alt={title} className="w-full" />
      </div>
      {title && <div>{title}</div>}
    </article>
  );
};

export default CardFoto;
