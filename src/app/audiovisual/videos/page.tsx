import Layout from "@/components/sectionlayout";
import CardVideo from "@/components/card-video";

const page = () => {
  const data = [
    {
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      video: "https://www.youtube.com/watch?v=9v4ucnOP-XI",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      video: "https://www.youtube.com/watch?v=UA0V0vN2-Kg",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      video: "https://www.youtube.com/watch?v=SiL1FWnK3DM",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      video: "https://www.youtube.com/watch?v=9v4ucnOP-XI",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      video: "https://www.youtube.com/watch?v=UA0V0vN2-Kg",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      video: "https://www.youtube.com/watch?v=SiL1FWnK3DM",
    },
  ];

  return (
    <Layout section="audiovisual" subsection="Videos">
      <div className="flex flex-col py-16 gap-y-12 w-full mx-auto max-w-3xl fade-in">
        {data.map((item, index) => (
          <CardVideo key={index} title={item.title} video={item.video} />
        ))}
      </div>
    </Layout>
  );
};

export default page;
