import styles from "./index.module.css";

export default function MetodoComponent({ metodo }) {
  return (
    <div className={styles.metodo}>
      {/* <img /> */}
      <div className={styles.image}></div>
      <span>
        {metodo.tipo} — {metodo.valor == 0 ? "gratuito" : `R$ ${metodo.valor}`}
      </span>
      <p>{metodo.titulo}</p>
    </div>
  );
}
