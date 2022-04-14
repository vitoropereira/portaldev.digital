import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { VideoProps } from "../../pages";
import CardTags from "./CardTags";

interface VideosCardsProps {
  video: VideoProps;
  title: string;
  paragraph: string;
  tags: string[];
  href: string;
}

const VideosCards = ({
  video,
  title,
  paragraph,
  tags,
  href,
}: VideosCardsProps) => {
  const [isUndefined, setIsUndefined] = useState(true);
  if (video.thumbnail_url === undefined) {
    setIsUndefined(false);
  }
  return (
    <Link href={href} passHref>
      <div className="w-full bg-neutral-900 rounded shadow-lg cursorPointer">
        <div className="flex justify-center">
          {isUndefined && (
            <Image
              src={video.thumbnail_url}
              width={video.thumbnail_width}
              height={video.thumbnail_height}
              alt={title}
            />
          )}
        </div>
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
    </Link>
  );
};

export default VideosCards;
