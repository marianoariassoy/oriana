import Layout from "@/components/sectionlayout";
import Card from "@/components/card-foto";

const page = () => {
  const data = [
    {
      title: "Titulo 1",
      image:
        "https://images.pexels.com/photos/35554037/pexels-photo-35554037.jpeg",
    },
    {
      title: "",
      image:
        "https://images.pexels.com/photos/35554037/pexels-photo-35554037.jpeg",
    },
    {
      title: "",
      image:
        "https://images.pexels.com/photos/35554037/pexels-photo-35554037.jpeg",
    },
    {
      title: "Titulo 1",
      image:
        "https://images.pexels.com/photos/35554037/pexels-photo-35554037.jpeg",
    },
    {
      title: "Titulo 1",
      image:
        "https://images.pexels.com/photos/35554037/pexels-photo-35554037.jpeg",
    },
  ];

  return (
    <Layout section="oriana" subsection="Fotos">
      <div className="py-16 flex flex-col gap-y-4 w-full mx-auto max-w-3xl fade-in">
        {data.map((item, index) => (
          <Card key={index} title={item.title} image={item.image} />
        ))}
      </div>
    </Layout>
  );
};

export default page;
