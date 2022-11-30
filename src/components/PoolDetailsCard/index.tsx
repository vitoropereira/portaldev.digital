import { useState } from "react";
import { api } from "../../lib/api";
import { toastNotification } from "../../utils/toast";
import { Button } from "../Button";
import { ParticipantProps, Participants } from "../PoolCard/Participants";
import { useRouter } from "next/router";

export interface PoolCardPros {
  id: string;
  code: string;
  title: string;
  description: string;
  ownerId: string;
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

export function PoolDetailsCard({ data }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const notification = toastNotification();

  const route = useRouter();
  if (!data) {
    return;
  }

  async function handleJoinPool(code: string) {
    if (!code.trim()) {
      return notification.notifyError("Informe o código.");
    }
    try {
      setIsLoading(true);
      await api.post("/pools/join", { code });

      notification.notifySuccess("Você entrou no bolão com sucesso!");
      route.push(`/pools/details/${code}`);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      if (error.response.data.message === "Pool not found.") {
        return notification.notifyError("Bolão não encontrado.");
      }
      if (error.response.data.message === "You already joined this pool.") {
        return notification.notifyError("Você já esta nesse bolão");
      }
      notification.notifyError("Não foi possível encontrar o bolão");
    }
  }

  return (
    <div className="w-full h-full bg-gray-800 border-b-2 border-b-yellow-500  rounded-sm mb-3 p-4">
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-white text-base">{data.title}</h5>

          {data.owner ? (
            <p className="text-gray-200 text-xs">
              Criado por {data.owner.name}
            </p>
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
      <h6 className="mt-3">Descrição:</h6>
      <p className="text-sm px-3 mb-3">
        {data.description ? data.description : "Sem descrição"}
      </p>

      <Button
        text="Entrar neste bolão"
        onClick={() => handleJoinPool(data.code)}
      />
    </div>
  );
}
