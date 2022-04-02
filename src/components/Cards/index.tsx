import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import CardTags from "./CardTags";

interface CardsProps {
  image?: StaticImageData;
  title: string;
  paragraph: string;
  tags: string[];
}

const Cards = ({ image, title, paragraph, tags }: CardsProps) => {
  const [isUndefined, setIsUndefined] = useState(true);
  if (image.src === undefined) {
    setIsUndefined(false);
  }
  console.log(title);
  return (
    <div className=" max-h-full bg-neutral-900 rounded shadow-lg">
      {isUndefined && (
        <Image
          className="w-full max-h-12"
          src={image.src}
          width={image.width}
          height={image.height}
          alt={title}
        />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{title}</div>
        <p className="text-base">{paragraph}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => {
          return <CardTags key={index}>{tag}</CardTags>;
        })}
      </div>
    </div>
  );
};

export default Cards;
