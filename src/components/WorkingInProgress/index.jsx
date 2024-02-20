import Image from "next/image";
import styles from "./index.module.css";

import Logo from "./assets/logo-white.svg";
import LogoBehance from "./assets/logo-behance-green.svg";

export default function Container({ children }) {
  return (
    <main className={styles.wip}>
      <Image className={styles.logo} src={Logo} alt="logo" />
      <div className={styles.contato}>
        <a href="mailto:contato@ottbrands.com">contato@ottbrands.com</a>
        <a href="https://www.instagram.com/joaoribeiro.me/" target="_blank">@joaoribeiro.me</a>
        <a href="https://www.behance.net/ottstudio" target="_blank">
          <Image src={LogoBehance} alt="behance" />
        </a>
      </div>
    </main>
  );
}
