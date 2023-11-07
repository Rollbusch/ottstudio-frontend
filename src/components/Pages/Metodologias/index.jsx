import Metodologia from "./Metodologia";
import styles from "./index.module.css";

import Link from "next/link";

export default function MetodologiasComponent() {
  const staticValues = [
    {
      titulo: "On-boarding",
      descricao: "lorem ipsum",
    },
    {
      titulo: "Contrato",
      descricao: "lorem ipsum",
    },
    {
      titulo: "Pesquisa",
      descricao: "lorem ipsum",
    },
    {
      titulo: "Desenvolvimento",
      descricao: "lorem ipsum",
    },
    {
      titulo: "Amadurecimento",
      descricao: "lorem ipsum",
    },
    {
      titulo: "Apresentação prévia",
      descricao: "lorem ipsum",
    },
    {
      titulo: "Aprimoramento",
      descricao: "lorem ipsum",
    },
    {
      titulo: "Apresentação final",
      descricao: "lorem ipsum",
    },
    {
      titulo: "Entrega",
      descricao: "lorem ipsum",
    },
  ];
  return (
    <div className={styles.metodologiasComponent}>
      <div className={styles.text}>
        <h2>
          Desenvolvemos <br /> marcas através <br /> da co-criação.
        </h2>
        <div className={styles.contatoExtra}>
          <Link href="/contato">Solicitar orçamento</Link>
        </div>
      </div>
      <div className={styles.metodologias}>
        {staticValues.map((metodologia, index) => (
          <Metodologia key={index} {...{ metodologia, index }} />
        ))}
      </div>
    </div>
  );
}
