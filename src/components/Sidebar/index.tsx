import Image from "next/image";
import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";

import developer from "../../../public/images/developer1.jpg";
import vitor from "../../../public/images/avatarVitor.png";
import { Avatar } from "../Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <span className={styles.cover}>
        <Image src={developer} objectFit="cover" alt="Imagem de capa" />
      </span>

      <div className={styles.profile}>
        <Avatar src="/images/avatarVitor.png" alt="Imagem de Perfil" />

        <strong>Vitor Pereira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
