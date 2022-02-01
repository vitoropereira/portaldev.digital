import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";
import { SignInButton } from "../SignInButton";
import Image from "next/image";

import logo from "../../../public/images/logo.png";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <span className={styles.image_logo}>
          <Image src={logo} alt="portal dev" />
        </span>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          {/* <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Post</a>
          </ActiveLink> */}
        </nav>

        {/* <SignInButton /> */}
      </div>
    </header>
  );
}
