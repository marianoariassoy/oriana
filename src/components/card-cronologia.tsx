interface Card {
  title: string;
  description: string;
}

const CardCronologia = ({ title, description }: Card) => {
  return (
    <article className="font-display flex flex-col text-foreground">
      <h2 className="font-bold">{title}</h2>
      <p className="leading-snug text-sm lg:text-base">{description}</p>
    </article>
  );
};

export default CardCronologia;
