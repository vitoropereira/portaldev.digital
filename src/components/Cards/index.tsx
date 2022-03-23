import Image from "next/image";
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

  return (
    <div className="bg-neutral-700 rounded overflow-hidden shadow-lg ">
      {isUndefined && (
        <Image
          className="w-full"
          src={image.src}
          width={image.width}
          height={image.height}
          alt="Mountain"
        />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className=" text-base">{paragraph}</p>
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
