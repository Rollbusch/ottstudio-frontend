import { getImageUrl } from "@/utils/strapi";
import styles from "./index.module.css";
import Image from "next/image";

export default function MaterialComponent({ material }) {

  let formatPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'BRL',
  });

  return (
    <div className={styles.material}>
      <div className={styles.image}>
        <Image src={getImageUrl(material.attributes.banner.data.attributes.url)} alt='banner' fill />
      </div>
      <span>
        {material.attributes.categoria.data.attributes.categoria} —{" "}
        {material.attributes.preco == 0 ? "gratuito" : `${formatPrice.format(material.attributes.preco)}`}
      </span>
      <p>{material.attributes.titulo}</p>
    </div>
  );
}
