import styles from "./index.module.css";

import Image from "next/image";
import Link from "next/link";

import ArrowLeft from "./assets/ArrowLeft.svg";
import ArrowRight from "./assets/ArrowRight.svg";
import Placeholder from "./assets/placeholder.png";

export default function () {
  return (
    <div className={styles.projeto}>
      <div className={styles.mainContent}>
        <Image className={styles.banner} src={Placeholder} alt="placeholder" />
      </div>
      <div className={styles.buttons}>
        <Image src={ArrowLeft} alt="arrow-left" />
        <Image src={ArrowRight} alt="arrow-left" />
      </div>
      <div className={styles.text}>
        <h2>Seiva Rosa Cosméticos</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sed hendrerit varius eget et
          lectus orci viverra facilisi varius. Sed sed odio elementum quam
          libero dolor cras faucibus. Urna iaculis sit vulputate facilisi
          ultrices tortor penatibus. Consectetur viverra ultrices maecenas
          etiam.
        </p>
        <Link href="/contato">Solicitar orçamento</Link>
      </div>
    </div>
  );
}
