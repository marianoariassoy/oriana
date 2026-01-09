import Layout from "@/components/sectionlayout";
import Escritos from "@/components/escritos";

const page = () => {
  const data = [
    {
      category: 1,
      title: "Primeros años",
      items: [
        {
          title: "Volviendo",
          description: `Sacude sus cabellos mojando las mejillas de mi tranquilidad. Ella acosa suavemente mi sonrisa,
lacera el cuerpo que me fue dado y me drena, me desata de la penuria cotidiana. Como ese perfume fugitivo que conquista las calles del tiempo
y como un niño huérfano que persigue una nada que se huele,
más no se ve.
La promesa de una madre absoluta que se diluye en los vientos vibrantes de
la realidad.

Porque esa nada, que es una existencia en las palabras,
es el atisbo de un paraíso que esta vida promete,
sólo en la ausencia.
Por su ausencia la sabemos.
Por su aroma encandilante nos detenemos del ajetreo diario para llorar por`,
        },
        {
          title: "Melodia vital",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
        },
        {
          title: "Quiero ser",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
        },
      ],
    },
    {
      category: 2,
      title: "Juventud",
      items: [
        {
          title: "Title 1",
          description: `Sacude sus cabellos mojando las mejillas de mi tranquilidad. Ella acosa suavemente mi sonrisa,
lacera el cuerpo que me fue dado y me drena, me desata de la penuria cotidiana. Como ese perfume fugitivo que conquista las calles del tiempo
y como un niño huérfano que persigue una nada que se huele,
más no se ve.
La promesa de una madre absoluta que se diluye en los vientos vibrantes de
la realidad.

Porque esa nada, que es una existencia en las palabras,
es el atisbo de un paraíso que esta vida promete,
sólo en la ausencia.
Por su ausencia la sabemos.
Por su aroma encandilante nos detenemos del ajetreo diario para llorar por`,
        },
        {
          title: "Title 2",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
        },
        {
          title: "Title 3",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
        },
      ],
    },
    {
      category: 3,
      title: "Alegrias",
      items: [
        {
          title: "Volviendo",
          description: `Sacude sus cabellos mojando las mejillas de mi tranquilidad. Ella acosa suavemente mi sonrisa,
lacera el cuerpo que me fue dado y me drena, me desata de la penuria cotidiana. Como ese perfume fugitivo que conquista las calles del tiempo
y como un niño huérfano que persigue una nada que se huele,
más no se ve.
La promesa de una madre absoluta que se diluye en los vientos vibrantes de
la realidad.

Porque esa nada, que es una existencia en las palabras,
es el atisbo de un paraíso que esta vida promete,
sólo en la ausencia.
Por su ausencia la sabemos.
Por su aroma encandilante nos detenemos del ajetreo diario para llorar por`,
        },
        {
          title: "Melodia vital",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
        },
        {
          title: "Quiero ser",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
        },
      ],
    },
  ];

  return (
    <Layout section="escritos" subsection="Poesía">
      <Escritos data={data} />
    </Layout>
  );
};

export default page;
