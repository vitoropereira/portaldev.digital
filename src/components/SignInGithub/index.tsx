import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/client";

import styles from "./styles.module.scss";
import Router from "next/router";

export function SingInGithub() {
  const [session] = useSession();
  console.log("session");
  console.log(session);

  // if (session) {
  //   Router.push("../");
  // }

  return session ? (
    <button
      type="button"
      className={styles.sigInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.sigInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  );
}
