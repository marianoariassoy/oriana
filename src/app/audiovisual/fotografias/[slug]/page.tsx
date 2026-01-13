import Layout from "@/components/sectionlayout";
import Back from "@/components/back";

const page = () => {
  return (
    <Layout section="audiovisual" subsection="Fotografías">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/3"></div>
        <div className="lg:w-2/3">
          <img
            src="https://images.pexels.com/photos/35554037/pexels-photo-35554037.jpeg"
            alt=""
            className="w-full"
          />
        </div>
        <div className="lg:w-1/3 lg:pt-16">
          <p className="italic font-display text-foreground/60 lg:pl-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            semulla consequat massa. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
        </div>
      </div>
      <Back url="/audiovisual/fotografias" />
    </Layout>
  );
};

export default page;
