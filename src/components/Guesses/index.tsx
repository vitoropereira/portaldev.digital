import { useState, useEffect } from "react";
import { api } from "../../lib/api";
import { toastNotification } from "../../utils/toast";
import { Game, GameProps } from "../Game";
import { Loading } from "../Loading";

interface Props {
  poolId: string;
}

export function Guesses({ poolId }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState<GameProps[]>([]);
  const [firstTeamPoints, setFirstTeamPoints] = useState("");
  const [secondTeamPoints, setSecondTeamPoints] = useState("");

  const notification = toastNotification();

  async function fetchGames() {
    try {
      setIsLoading(true);
      const response = await api.get(`/pools/${poolId}/game`);
      setGames(response.data.games);
    } catch (error) {
      notification.notifyError("Não foi possível carregar os jogos.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handelGuessConfirm(gameId: string) {
    setIsLoading(true);
    if (!firstTeamPoints.trim() || !secondTeamPoints.trim()) {
      return notification.notifyInfo("Informe o placar do palpite.");
    }

    const data = {
      firstTeamPoints: Number(firstTeamPoints),
      secondTeamPoints: Number(secondTeamPoints),
    };

    try {
      await api.get(`/pools/${poolId}/game/${gameId}/guesses`, { data });

      notification.notifySuccess("Palpite realizado com sucesso!");

      fetchGames();
    } catch (error) {
      console.log(error);
      notification.notifyError("Não foi possível enviar o palpite");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchGames();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {games.map((item) => (
        <Game
          key={item.id}
          data={item}
          setFirstTeamPoints={setFirstTeamPoints}
          setSecondTeamPoints={setSecondTeamPoints}
          onGuessConfirm={() => handelGuessConfirm(item.id)}
        />
      ))}
    </>
  );
}
