import styles from "./index.module.css";

import Image from "next/image";

export default function ({ metodologia, index }) {
  return (
    <div className={styles.metodologia}>
      <p>{index + 1}.</p>
      <div className={styles.text}>
        <h3>{metodologia.titulo}</h3>
        <p>{metodologia.descricao}</p>
      </div>
    </div>
  );
}
