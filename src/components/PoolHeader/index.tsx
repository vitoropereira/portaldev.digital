import { PoolCardPros } from "../PoolCard";
import { Participants } from "../PoolCard/Participants";

interface Props {
  data: PoolCardPros;
}

export function PoolHeader({ data }: Props) {
  return (
    <div className="w-full h-20 bg-transparent border-b-2 border-b-gray-600 flex justify-between items-center mb-3 p-4">
      <div>
        <p className="text-gray-200 text-sm mr-1">Código:</p>
        <p className="text-gray-200 text-sm font-semibold">{data.code}</p>
      </div>
      <h2 className="text-white text-lg font-semibold">{data.title}</h2>

      <Participants
        count={data._count?.participants}
        participants={data.participants}
      />
    </div>
  );
}
