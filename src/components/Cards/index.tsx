import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cut_text } from "../../utils/texts";
import CardTags from "./CardTags";

interface CardsProps {
  title: string;
  tags: string;
  href: string;
  tabcoins: number;
  updatedAt: string;
}

const Cards = ({ title, tags, href, tabcoins, updatedAt }: CardsProps) => {
  return (
    <Link href={href} passHref>
      <div className="max-h-full bg-neutral-900 rounded shadow-lg cursorPointer pt-2 mt-3">
        <div className="max-w-5xl mx-auto pl-6">
          <div className="font-bold text-base mb-2">{title}</div>
          <small className="pr-2">
            Atualizado: <time>{updatedAt}</time>
          </small>
          <CardTags>{tags}</CardTags>
          <CardTags>
            {tabcoins} <small style={{ fontSize: 10 }}>Tabcoins</small>
          </CardTags>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
