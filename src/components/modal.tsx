const modal = ({ dataModal, setDataModal }: any) => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-2/40 backdrop-blur-md p-4 lg:p-14 pb-8 z-50 cursor-pointer fade-in-fast"
      onClick={() => setDataModal(null)}
    >
      <div className="h-full w-full flex flex-col gap-y-2">
        <img
          src={dataModal.image}
          alt={dataModal.title}
          className="h-full w-full object-contain object-center"
        />
        <p className="font-display text-center italic">{dataModal.title}</p>
      </div>

      <button className="absolute top-12 right-2 lg:right-6 hover:text-foreground cursor-pointer text-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default modal;
