import styles from "./index.module.css";

import Image from "next/image";
import Link from "next/link";

import ArrowLeft from "./assets/ArrowLeft.svg";
import ArrowRight from "./assets/ArrowRight.svg";
import { getImageUrl } from "@/utils/strapi";

export default function ({ projeto }) {
  return (
    <div className={styles.projeto}>
      <div className={styles.mainContent}>
        <Image className={styles.banner} src={getImageUrl(projeto.data.attributes.banner.data.attributes.url)} alt="image" fill />
      </div>
      <div className={styles.buttons}>
        {
          projeto.meta.prev ? (
            <Link href={`/projeto/${projeto.meta.prev}`}>
              <Image src={ArrowLeft} alt="arrow-left" />
            </Link>
          ) : <Image src={ArrowLeft} alt="arrow-left" style={{ opacity: 0.2, cursor: 'default'}} />
        }
        {
          projeto.meta.next ? (
            <Link href={`/projeto/${projeto.meta.next}`}>
              <Image src={ArrowRight} alt="arrow-left" />
            </Link>
          ) : <Image src={ArrowRight} alt="arrow-left" style={{ opacity: 0.2, cursor: 'default'}} />
        }
      </div>
      <div className={styles.text}>
        <h2>{projeto.data.attributes.titulo}</h2>
        <p>
          {projeto.data.attributes.descricao}
        </p>
        <Link href="/orcamento">Solicitar orçamento</Link>
      </div>
    </div>
  );
}
