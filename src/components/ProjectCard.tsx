interface ProjectProps {
  name: string;
  description: string;
  link: string;
}

export const ProjectCard = ({ name, description, link }: ProjectProps) => {
  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg hover:shadow-xl bg-zinc-900 h-48 flex flex-col transform transition-transform hover:translate-y-[-5px] duration-300 ease-in-out">
      <div className="px-6 py-4  flex-1">
        <div className="text-zinc-100 font-bold text-xl mb-2">{name}</div>
        <p className="text-zinc-300 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Saiba mais
        </a>
      </div>
    </div>
  );
};
