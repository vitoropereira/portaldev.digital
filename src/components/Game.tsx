import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Check, X } from "phosphor-react";

import { getName } from "country-list";

import { Team } from "./Team";

interface GuessProps {
  id: string;
  gameId: string;
  createdAt: string;
  participantId: string;
  firstTeamPoints: number;
  secondTeamPoints: number;
}

export interface GameProps {
  id: string;
  date: string;
  firstTeamCountryCode: string;
  secondTeamCountryCode: string;
  guess: null | GuessProps;
}

interface Props {
  data: GameProps;
  onGuessConfirm: () => void;
  setFirstTeamPoints: (value: string) => void;
  setSecondTeamPoints: (value: string) => void;
}

export function Game({
  data,
  setFirstTeamPoints,
  setSecondTeamPoints,
  onGuessConfirm,
}: Props) {
  const when = format(
    Date.parse(data.date),
    "d 'de' MMMM 'de' yyyy 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  return (
    <div className="mx-auto sm:w-2/3 w-full items-center bg-gray-800 rounded-sm  border-b-4 border-b-yellow-500 mb-3 p-4">
      <div className="flex flex-col justify-center items-center">
        <span className="text-gray-100 text-base font-bold">
          {getName(data.firstTeamCountryCode)} vs.{" "}
          {getName(data.secondTeamCountryCode)}
        </span>

        <span className="text-gray-200 text-sm">{when}</span>
      </div>

      <div className="mt-4 w-full h-full flex justify-between items-center">
        <Team
          code={data.firstTeamCountryCode}
          position="right"
          onChangeText={setFirstTeamPoints}
        />

        <X className="text-gray-300 text-base" />

        <Team
          code={data.secondTeamCountryCode}
          position="left"
          onChangeText={setSecondTeamPoints}
        />
      </div>

      {!data.guess && (
        <button className="w-full bg-green-500 mt-4" onClick={onGuessConfirm}>
          <div className="items-center">
            <span className="text-white text-xs mr-3">CONFIRMAR PALPITE</span>

            <Check className="text-white text-base" />
          </div>
        </button>
      )}
    </div>
  );
}
