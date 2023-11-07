import styles from "./index.module.css";

export default function MaterialComponent({ material }) {
  return (
    <div className={styles.material}>
      {/* <img /> */}
      <div className={styles.image}></div>
      <span>
        {material.tipo} —{" "}
        {material.valor == 0 ? "gratuito" : `R$ ${material.valor}`}
      </span>
      <p>{material.titulo}</p>
    </div>
  );
}
