import Image from "next/image";
import CardTags from "./CardTags";

interface CardsProps {
  srcImage: StaticImageData;
  title: string;
  paragraph: string;
  tags: string[];
}

const Cards = ({ srcImage, title, paragraph, tags }: CardsProps) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <Image className="w-full" src={srcImage} alt="Mountain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className=" text-base">{paragraph}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag) => {
          return <CardTags>{tag}</CardTags>;
        })}
      </div>
    </div>
  );
};

export default Cards;
