import { FaUserAlt } from "react-icons/fa";
import { ActiveLink } from "../ActiveLink";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/client";

import styles from "./styles.module.scss";

export function SignInButton() {
  return (
    <div className={styles.sigInButton}>
      <FaUserAlt color="#04d361" />
      <ActiveLink activeClassName={styles.active} href="/singIn">
        <a>Fazer login</a>
      </ActiveLink>
    </div>
  );
}
