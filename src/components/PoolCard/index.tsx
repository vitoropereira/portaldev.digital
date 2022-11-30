import Link, { LinkProps } from "next/link";
import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import { ParticipantProps, Participants } from "./Participants";

export interface PoolCardPros {
  id: string;
  code: string;
  title: string;
  ownerId: string;
  description: string;
  createdAt: string;
  owner: {
    name: string;
  };
  participants: ParticipantProps[];
  _count: {
    participants: number;
  };
}

interface Props {
  data: PoolCardPros;
}

export function PoolCard({ data }: Props) {
  return (
    <div className="w-full h-20 bg-gray-800 border-b-2 border-b-yellow-500 flex justify-between items-center rounded-sm p-4">
      <div>
        <h5 className="text-white text-base">{data.title}</h5>
        {data.owner ? (
          <p className="text-gray-200 text-xs">Criado por {data.owner.name}</p>
        ) : (
          <p className="text-gray-200 text-xs">Sem criador</p>
        )}
      </div>
      {data.participants.length > 0 ? (
        <Participants
          count={data._count.participants}
          participants={data.participants}
        />
      ) : (
        <p>Sem participantes</p>
      )}
    </div>
  );
}
