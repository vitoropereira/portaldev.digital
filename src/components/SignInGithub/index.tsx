import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

export function SingInGithub() {
  const { data: session } = useSession();
  console.log("session");
  console.log(session);

  // if (session) {
  //   Router.push("../");
  // }

  return session ? (
    <button
      type="button"
      className="h-12 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100 px-6 flex items-center justify-center font-bold"
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361" className="mr-4" />
      {session.user.name}
      <FiX color="#737380" className="ml-4" />
    </button>
  ) : (
    <button
      type="button"
      className="h-12 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100 px-6 flex items-center justify-center font-bold"
      onClick={() => signIn("github")}
    >
      <FaGithub className="mr-4 text-yellow-500 hover:text-yellow-700 transition" />
      Logar com GitHub
    </button>
  );
}
