import Layout from "@/components/sectionlayout";
import Intro from "./intro";
import Items from "./items";

const page = () => {
  return (
    <Layout section="oriana" subsection="Cronología">
      <div className="py-16 w-full mx-auto max-w-3xl fade-in flex flex-col gap-y-8">
        <Intro />
        <Items />
      </div>
    </Layout>
  );
};

export default page;
