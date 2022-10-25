import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cut_text } from "../../utils/texts";
import CardTags from "./CardTags";

interface CardsProps {
  image?: StaticImageData;
  title: string;
  paragraph: string;
  tags: string[];
  href: string;
  updatedAt: string;
}

const Cards = ({
  image,
  title,
  paragraph,
  tags,
  href,
  updatedAt,
}: CardsProps) => {
  const [isUndefined, setIsUndefined] = useState(true);
  if (image.src === undefined) {
    setIsUndefined(false);
  }

  return (
    <Link href={href} passHref>
      <div className="max-h-full bg-neutral-900 rounded shadow-lg cursorPointer">
        <div className="w-100 flex justify-end content-end p-3">
          <small>
            Atualizado: <time>{updatedAt}</time>
          </small>
        </div>
        <div className="min-h-[50%] flex justify-center content-center p-3">
          {isUndefined && (
            <Image
              className="w-full h-auto"
              src={image.src}
              width={image.width}
              height={image.height}
              alt={title}
            />
          )}
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">{title}</div>
          <p className="text-base">{cut_text(paragraph)}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag, index) => {
            return <CardTags key={index}>{tag}</CardTags>;
          })}
        </div>
      </div>
    </Link>
  );
};

export default Cards;
