import Metodologia from "./Metodologia";
import styles from "./index.module.css";

import Link from "next/link";

export default function MetodologiasComponent({ metodologia }) {

  return (
    <div className={styles.metodologiasComponent}>
      <div className={styles.text}>
        <h2>
          Desenvolvemos <br /> marcas através <br /> da co-criação.
        </h2>
        <div className={styles.contatoExtra}>
          <Link href="/orcamento">Solicitar orçamento</Link>
        </div>
      </div>
      <div className={styles.metodologias}>
        {metodologia.data.attributes.metodos.data.map((metodo, index) => (
          <Metodologia key={metodo.id} {...{ metodo, index }} />
        ))}
      </div>
    </div>
  );
}
