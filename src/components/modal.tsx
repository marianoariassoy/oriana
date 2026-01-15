"use client";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface data {
  id: number;
  title: string;
  image: string;
}

const modal = ({
  dataModal,
  setDataModal,
}: {
  dataModal: data[];
  setDataModal: any;
}) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-2/50 backdrop-blur-md z-50 cursor-pointer fade-in-fast">
      <div className="h-full w-full p-4 md:p-8 lg:p-12">
        <Fade
          autoplay={false}
          infinite={true}
          pauseOnHover={false}
          arrows={true}
          transitionDuration={300}
          prevArrow={
            <button className="group absolute left-4 top-1/2 -translate-y-1/2 z-50">
              <div className="p-3 rounded-full bg-black/40 backdrop-blur-md group-hover:bg-black/60 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-6 h-6 text-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
            </button>
          }
          nextArrow={
            <button className="group absolute right-4 top-1/2 -translate-y-1/2 z-50">
              <div className="p-3 rounded-full bg-black/40 backdrop-blur-md group-hover:bg-black/60 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-6 h-6 text-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          }
        >
          {dataModal.map((item, index) => (
            <div
              key={index}
              className="h-[calc(100vh-2rem)] md:h-[calc(100vh-4rem)] lg:h-[calc(100vh-6rem)] flex items-center justify-center"
            >
              <div
                className="w-full h-full bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${item.image})` }}
              />
            </div>
          ))}
        </Fade>
      </div>
      <button
        className="absolute top-12 right-2 lg:right-6 hover:text-foreground cursor-pointer text-2 z-50"
        onClick={() => setDataModal(null)}
      >
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
