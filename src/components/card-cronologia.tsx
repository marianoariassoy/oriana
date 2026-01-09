interface Card {
  title: string;
  description: string;
}

const CardCronologia = ({ title, description }: Card) => {
  return (
    <article className="font-display flex flex-col gap-y-2 pb-12 border-b border-1 pr-14">
      <h2 className="font-bold text-2xl lg:text-4xl">{title}</h2>
      <p className="text-foreground italic">{description}</p>
    </article>
  );
};

export default CardCronologia;
