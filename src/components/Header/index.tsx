import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";
import { SignInButton } from "../SignInButton";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img
          className="rounded"
          src="/images/logo.png"
          alt="portal dev"
          style={{
            maxWidth: "145px",
            width: "100%",
          }}
        />
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
