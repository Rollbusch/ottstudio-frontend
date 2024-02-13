import styles from "./index.module.css";

export default function ({ metodo, index }) {
  return (
    <div className={styles.metodologia}>
      <p>{index + 1}.</p>
      <div className={styles.text}>
        <h3>{metodo.attributes.titulo}</h3>
        <p>{metodo.attributes.descricao}</p>
      </div>
    </div>
  );
}
