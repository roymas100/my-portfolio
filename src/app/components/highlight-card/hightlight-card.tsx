interface HighlightCardProps {
  name: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  url: string;
}

export default function HighlightCard({
  title,
  description,
  github,
  technologies,
  url,
  name,
}: HighlightCardProps) {
  const img_url = "/images/" + name + ".png";

  return (
    <div className="flex-col h-full">
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(23,20,33, 0.24) 0, rgba(23,20,33, 0.24)  100%), url(${img_url})`,
        }}
        className="rounded-t-lg h-full bg-cover"
      />
      <div className="rounded-b-lg flex-col p-6 gap-6 bg-border">
        <div className="flex-col gap-4">
          <h6 className="font-poppins text-xl font-bold">{title}</h6>
          <p>{description}</p>
          <p>{technologies.join(" | ")}</p>
        </div>

        <div className="flex justify-between">
          <a
            className="hover:shadow-button transition-shadow bg-background px-3 py-1 rounded-lg border border-light-text text-lighter-text hover:shadow-lighter-text"
            href={url}
            target="_blank"
          >
            Mais +
          </a>
          {/* <a
            className='hover:shadow-button transition-shadow bg-background px-3 py-1 rounded-lg border border-light-text text-lighter-text hover:shadow-lighter-text'
            href={github}
          >
            Github
          </a> */}
        </div>
      </div>
    </div>
  );
}
