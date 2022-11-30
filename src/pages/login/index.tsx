import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { SingInGithub } from "../../components/SignInGithub";
import { SingInGoogle } from "../../components/SignInGoogle";

export default function SingInPage() {
  const [email, setEmail] = useState();

  return (
    <>
      <Head>
        <title>Login | portal dev</title>
      </Head>
      <div className="flex justify-center align-middle h-screen">
        <div className="bg-gray-300 rounded-4 p-6 m-auto">
          <div className="text-gray-900 mb-3">
            Escolha sua rede social para fazer o login
          </div>
          <div className="flex flex-col justify-center items-center">
            <SingInGoogle />
            <br />
            <SingInGithub />
          </div>
          <hr className="mt-3" />
          <form className="mt-2 flex flex-col" action="">
            <span className="text-gray-850 text-center">
              Utilizar e-mail e senha
            </span>
            <input
              className="flex-1 mt-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
              type="email"
              required
              placeholder="E-mail"
              onChange={() => {}}
            />
            <input
              className="flex-1 px-6 py-4 mt-1 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
              type="password"
              required
              placeholder="Senha"
              onChange={() => {}}
            />

            <button
              className="bg-yellow-500 mt-1 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700 "
              type="submit"
            >
              Fazer login
            </button>
          </form>
          <div className="mt-3 flex justify-between items-center">
            <Link
              className="text-gray-900 font-bold text-sm uppercase"
              href="cadastro"
            >
              Cadastre-se
            </Link>
            <span className="text-gray-900 font-bold text-sm uppercase">|</span>
            <Link
              className="text-gray-900 font-bold text-sm uppercase"
              href="recuperar-senha"
            >
              Recuperar Senha
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
