const bullets = ({
  data,
  goTo,
  image,
}: {
  data: any;
  goTo: any;
  image: number;
}) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 gap-y-2 flex flex-col z-10 ">
      {data.map((item: any, index: number) => {
        return (
          <button
            key={index}
            onClick={() => goTo(index + 1)}
            className={`${
              image === index + 1 ? "opacity-100" : "opacity-50"
            } hover:opacity-100 cursor-pointer`}
          >
            <svg
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
            >
              <circle cx="5" cy="5" r="4" fill="currentColor" />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export default bullets;
