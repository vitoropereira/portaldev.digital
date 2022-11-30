import { FormEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Navbar from "../../../components/Navbar";
import { PoolCard, PoolCardPros } from "../../../components/PoolCard";

import { api } from "../../../lib/api";
import { toastNotification } from "../../../utils/toast";
import { PoolDetailsCard } from "../../../components/PoolDetailsCard";
import { Button } from "../../../components/Button";

export default function AllPool() {
  const [isLoading, setIsLoading] = useState(false);
  const [pools, setPools] = useState<PoolCardPros[]>([]);
  const [poolDetail, setPoolDetail] = useState<PoolCardPros>(undefined);
  const [code, setCode] = useState("");

  const router = useRouter();
  const notification = toastNotification();
  const { data: session } = useSession();

  async function fetchPools() {
    try {
      setIsLoading(true);
      const response = await api.get("/pools/allPools");

      setPools(response.data.pools);
    } catch (error) {
      notification.notifyError("Não foi possível carregar os bolões.");
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (!session) {
      router.push("/bolao");
    }
    fetchPools();
  }, []);

  async function findPool(event: FormEvent) {
    event.preventDefault();
    if (!code.trim()) {
      return notification.notifyError("Informe o código.");
    }

    try {
      setIsLoading(true);
      const response = await api.post("/pools/find", {
        code,
      });
      setPoolDetail(response.data.pool);
      setCode("");
    } catch (error) {
      notification.notifyError("Bolão não encontrado.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleShowPoolDetails(code: string) {
    if (!code.trim()) {
      return notification.notifyError("Informe o código.");
    }

    try {
      setIsLoading(true);
      const response = await api.post("/pools/find", {
        code,
      });
      setPoolDetail(response.data.pool);
      setCode("");
    } catch (error) {
      notification.notifyError("Bolão não encontrado.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className="max-w-[1124px] h-screen md:mx-auto mx-3">
        <main>
          <h1 className="mb-3 mt-3 text-white text-lg font-bold leading-tight">
            Buscar bolão por código.
          </h1>
          <form
            onSubmit={findPool}
            className="flex justify-between items-center w-full"
          >
            <div className="flex justify-between items-center w-full gap-2">
              <input
                className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100 w-100"
                type="text"
                required
                placeholder="Qual código do bolão?"
                onChange={(event) => setCode(event.target.value)}
                value={code}
              />
              <Button text="Buscar Bolão" />
            </div>
          </form>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Veja abaixo alguns dos bolões já cadastrados. 🚀
          </p>
        </main>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-28">
          <div>
            <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100"></div>

            {pools.map((pool) => {
              return (
                <button
                  key={pool.id}
                  className="w-full  mb-3"
                  onClick={() => handleShowPoolDetails(pool.code)}
                >
                  <PoolCard data={pool} />
                </button>
              );
            })}
          </div>
          <div className="flex justify-start items-start">
            {poolDetail ? <PoolDetailsCard data={poolDetail} /> : ""}
          </div>
        </div>
      </div>
    </>
  );
}
