import Image from "next/image";
import styles from "./index.module.css";

import Logo from "./assets/logo-white.svg";
import LogoBehance from "./assets/logo-behance-green.svg";

export default function Container({ children }) {
  return (
    <main className={styles.wip}>
      <Image className={styles.logo} src={Logo} alt="logo" />
      <div className={styles.content}>
        <h4>EM BREVE!</h4>
        <p>BRANDING</p>
        <p>IDENTIDADE VISUAL</p>
        <p>ESTRATÉGIA E GESTÃO</p>
      </div>
      <div className={styles.contato}>
        <a href="mailto:contato@ottbrands.com">contato@ottbrands.com</a>
        <a href="https://www.instagram.com/aprendasobrelogo/" target="_blank">@aprendasobrelogo</a>
        <a href="https://www.behance.net/ottstudio" target="_blank">
          <Image src={LogoBehance} alt="behance" />
        </a>
      </div>
    </main>
  );
}
