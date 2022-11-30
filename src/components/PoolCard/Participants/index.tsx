import Image from "next/image";
import { Avatar } from "../../Avatar";

export interface ParticipantProps {
  id: string;
  user: {
    name: string;
    image: string;
  };
}

interface Props {
  participants: ParticipantProps[];
  count: number;
}

export function Participants({ participants, count }: Props) {
  return (
    <div className="flex justify-start items-center">
      {count == 1 ? (
        <Avatar
          hasBorder={false}
          className="inline-block w-12 h-12 rounded-full ring-2 ring-white"
          src={
            participants[0].user.image
              ? participants[0].user.image
              : "https://ui-avatars.com/api/?background=random"
          }
          alt="Avatars"
          width={48}
          height={48}
        />
      ) : (
        <div className="flex -space-x-2">
          {participants &&
            participants.map((participant) => (
              <Image
                key={participant.id}
                className="inline-block w-12 h-12 rounded-full ring-2 ring-white"
                src={
                  participant.user.image
                    ? participant.user.image
                    : "https://ui-avatars.com/api/?background=random"
                }
                alt="Avatars"
                width={48}
                height={48}
              />
            ))}
        </div>
      )}

      <div className="flex justify-center items-center w-8 h-8 bg-gray-700 rounded-full border-1 border-gray-800">
        <span className="text-gray-100 text-xs font-semibold">
          {count ? `+${count}` : 0}
        </span>
      </div>
    </div>
  );
}
