import MaterialComponent from "./Material";
import styles from "./index.module.css";

import ArrowLeft from './assets/ArrowLeft.svg'
import ArrowRight from './assets/ArrowRight.svg'
import Image from "next/image";

export default function MateriaisComponent({ materiais }) {
 
  return (
    <div className={styles.materiaisComponent}>
      <div className={styles.text}>
        <h2>
          Aprenda mais <br />
          sobre design e <br />
          desenvolvimento <br />
          de marcas.
        </h2>
        <div className={styles.contatoExtra}>
          <p>Para mentorias</p>
          <a href="mailto:contato@ottbrands.com">
            <strong>contato@ottbrands.com</strong>
          </a>
        </div>
      </div>
      <div className={styles.materiais}>
        {[].map((material, index) => (
          <MaterialComponent key={index} {...{ material }} />
        ))}
        <div className={styles.arrows}>
          <Image src={ArrowLeft} alt="arrow-left" />
          <Image src={ArrowRight} alt="arrow-right" />
        </div>
      </div>
      <div className={styles.arrows}>
          <Image src={ArrowLeft} alt="arrow-left" />
          <Image src={ArrowRight} alt="arrow-right" />
        </div>
    </div>
  );
}
