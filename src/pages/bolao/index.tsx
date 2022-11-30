import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";

import { api } from "../../lib/api";

import appPreviewImg from "../../assets/cellPhones.png";
import logoImage from "../../assets/logo.svg";
import usersAvatarExampleImg from "../../assets/users-avatar-example.png";
import iconCheckImg from "../../assets/icon-check.svg";
import Navbar from "../../components/Navbar";
import { SignInButton } from "../../components/SignInButton";
import { useSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { Button } from "../../components/Button";
import { useRouter } from "next/router";

interface HomeProps {
  poolCount: number;
  guessCount: number;
  usersCount: number;
}

export default function Home({ poolCount, guessCount, usersCount }: HomeProps) {
  const [poolTitle, setPoolTitle] = useState("");
  const [poolDescription, setPoolDescription] = useState("");

  const { data: session } = useSession();
  const route = useRouter();

  async function createPool(event: FormEvent) {
    event.preventDefault();
    try {
      const response = await api.post("/pools", {
        title: poolTitle,
        description: poolDescription,
      });

      const { code } = response.data;

      await navigator.clipboard.writeText(code);

      alert(
        "Bolão criado com sucesso, o código foi copiado para área de transferência! "
      );

      setPoolTitle("");
      setPoolDescription("");
    } catch (err) {
      alert("Falha ao criar o bolão, tente novamente!");
    }
  }

  function handleGoPageBoloes() {
    route.push("/bolao/pools");
  }

  return (
    <>
      <Navbar />
      <div className="max-w-[1124px] h-screen md:mx-auto mx-3 grid md:grid-cols-2 grid-cols-1 gap-28  items-center">
        <main>
          <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
            Crie seu próprio bolão da copa e compartilhe entre amigos!
          </h1>
          <div className="mt-10 flex items-center gap-2 ">
            <Image src={usersAvatarExampleImg} alt="" />
            <strong className="text-gray-100 text-xl">
              <span className="text-ignite-500">+{usersCount}</span> pessoas já
              estão usando
            </strong>
          </div>
          {session ? (
            <form onSubmit={createPool} className="mt-10 gap-2">
              <input
                className="w-full px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
                type="text"
                required
                placeholder="Qual nome do seu bolão?"
                onChange={(event) => setPoolTitle(event.target.value)}
                value={poolTitle}
              />
              <textarea
                className="w-full px-6 py-4 mt-3 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
                required
                placeholder="Escreva uma descrição para seu bolão."
                onChange={(event) => setPoolDescription(event.target.value)}
                value={poolDescription}
              />
              <div className="flex justify-around items-center">
                <Button text="Criar meu bolão" type="submit" />
                <Button
                  text="Ver todos bolões"
                  buttonType="success"
                  onClick={handleGoPageBoloes}
                />
              </div>
            </form>
          ) : (
            <SignInButton />
          )}

          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Após criar seu bolão, você receberá um código único que poderá usar
            para convidar outras pessoas 🚀
          </p>

          <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
            <div className="flex items-center gap-6">
              <Image src={iconCheckImg} alt="" />
              <div className="flex flex-col">
                <span className="font-bold text-2xl">+{poolCount}</span>
                <span>Bolões criados </span>
              </div>
            </div>
            <div className="w-px h-14 bg-gray-600" />
            <div className="flex items-center gap-6">
              <Image src={iconCheckImg} alt="" />
              <div className="flex flex-col">
                <span className="font-bold text-2xl">+{guessCount}</span>
                <span>Palpites enviados </span>
              </div>
            </div>
          </div>
        </main>
        <Image
          src={appPreviewImg}
          alt="Dois celulares exibindo uma previa aplicação móvel Bolão Copa."
        />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  console.log("entre");
  const [poolCountResponse, guessCountResponse, usersCountResponse] =
    await Promise.all([
      api.get("pools/count"),
      api.get("guesses/count"),
      api.get("users/count"),
    ]);

  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      usersCount: usersCountResponse.data.count,
    },
    revalidate: 10 * 60, //10 minutos
  };
};
