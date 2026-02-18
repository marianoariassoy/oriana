import Link from "next/link";

interface Card {
  title: string;
  url: string;
  image: string;
}

const Card1 = (props: Card) => {
  return (
    <article className="flex flex-col gap-y-2">
      <Link href={props.url}>
        <div className="aspect-square lg:aspect-5/7">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-cover object-center hover:opacity-80 trnasition-opacity duration-300"
          />
        </div>
      </Link>
      <div className="text-foreground">{props.title}</div>
    </article>
  );
};

export default Card1;
