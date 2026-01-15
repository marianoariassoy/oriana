import Layout from "@/components/sectionlayout";
import Submenu from "./submenu";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout section="música" subsection="Ópera y más">
      <Submenu />
      <div>{children}</div>
    </Layout>
  );
};

export default layout;
