import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { api } from "../../lib/api";
import { toastNotification } from "../../utils/toast";
import { Button } from "../Button";
import { Loading } from "../Loading";
import { ParticipantProps, Participants } from "../PoolCard/Participants";

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
  const { data: session } = useSession();

  const route = useRouter();
  if (!data) {
    return <Loading />;
  }
  console.log(data);
  console.log(session);

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

  function handleSeeDetails(code: string) {
    route.push(`/bolao/pools/details/${code}`);
  }

  return (
    <div className="w-full bg-gray-800 border-b-2 border-b-yellow-500  rounded-sm mb-3 p-4">
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
      <div className="flex justify-between items-center">
        <Button
          text="Entrar neste bolão"
          onClick={() => handleJoinPool(data.code)}
        />

        <Button
          buttonType="success"
          text="Ver detalhes"
          onClick={() => handleSeeDetails(data.code)}
        />
      </div>
    </div>
  );
}
