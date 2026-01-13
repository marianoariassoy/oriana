import Layout from "@/components/sectionlayout";
import Card from "@/components/card-cronologia";

const page = () => {
  const data = [
    {
      title: "1985 - 2000",
      description:
        "Formación en piano y música con profesores particulares, escuelas de música y brevemente en el Conservatorio Julián Aguirre.",
      category: 1,
    },
    {
      title: "2004 - en curso",
      description:
        "Canto lírico: Mónica Boino · Ricardo Or�ale · Luis Gaea · Alejandra Malvino · Jorge Ansorena.",
      category: 1,
    },
    {
      title: "2004 - en curso",
      description:
        "Canto lírico: Mónica Boino · Ricardo Or�ale · Luis Gaea · Alejandra Malvino · Jorge Ansorena.",
      category: 2,
    },
    {
      title: "2004 - en curso",
      description:
        "Canto lírico: Mónica Boino · Ricardo Or�ale · Luis Gaea · Alejandra Malvino · Jorge Ansorena.",
      category: 2,
    },
    {
      title: "2004 - en curso",
      description:
        "Canto lírico: Mónica Boino · Ricardo Or�ale · Luis Gaea · Alejandra Malvino · Jorge Ansorena.",
      category: 3,
    },
  ];
  return (
    <Layout section="oriana" subsection="Cronología">
      <div className="py-16 w-full mx-auto max-w-3xl fade-in flex flex-col gap-y-8">
        <div>
          <h2 className="font-bold text-xl lg:text-3xl mb-2">
            Formación académica
          </h2>
          <p className="font-display text-foreground leading-snug text-sm lg:text-base">
            Formación en educación inicial, primaria y secundaria en escuelas
            públicas de Monte Grande, Provincia de Buenos Aires.
            <br />
            <br />
            Universidad de Buenos Aires - Licenciatura en Artes Plásticas
            Facultad de Filosofía y Letras (2008).
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl lg:text-3xl mb-2">
            Formación en Artes Plásticas
          </h2>
          <p className="font-display text-foreground leading-snug text-sm lg:text-base">
            Talleres y formación con profesores particulares durante la
            infancia: cerámica, escultura, alfarería y dibujo.
            <br />
            <br />
            Escuela de Cerámica de Lomas de Zamora.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl lg:text-3xl mb-2">
            Formación musical
          </h2>
          <div className="flex flex-col gap-y-4">
            {data
              .filter((item) => item.category === 1)
              .map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl lg:text-3xl mb-2">
            Docencia universitaria
          </h2>
          <div className="flex flex-col gap-y-4">
            {data
              .filter((item) => item.category === 2)
              .map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl lg:text-3xl mb-2">
            Reconocimientos
          </h2>
          <div className="flex flex-col gap-y-4">
            {data
              .filter((item) => item.category === 3)
              .map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
