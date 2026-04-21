"use client";

const page = ({
  title,
  text,
  url,
  image,
  audio,
}: {
  title: string;
  text: string;
  url: string;
  image: string;
  audio: string;
}) => {
  const audioHtml = audio?.replace(/\\"/g, '"');

  return (
    <div className="py-8 flex flex-col lg:flex-row gap-y-4 gap-x-20">
      <div className="flex flex-col gap-y-6 ">
        <h1 className="text-xl lg:text-3xl font-display font-bold">{title}</h1>
        <div className="lg:text-lg font-display text-foreground leading-relaxed mb-4">
          <div
            className="prose prose-neutral max-w-5xl"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>

        {audioHtml && <div dangerouslySetInnerHTML={{ __html: audioHtml }} />}

        {image && (
          <img
            src={image}
            alt={title}
            className="w-full max-w-3xl h-auto object-cover"
          />
        )}

        {url && (
          <a
            href={url}
            target="_blank"
            className="border border-4 h-12 w-full lg:w-50 flex items-center justify-center hover:text-white hover:bg-2 hover:border-2 font-medium rounded-tl-2xl rounded-br-2xl lg:text-lg"
          >
            Link
          </a>
        )}
      </div>
    </div>
  );
};

export default page;
