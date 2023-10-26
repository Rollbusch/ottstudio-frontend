import MetodoComponent from "./Metodo";
import styles from "./index.module.css";

import ArrowLeft from './assets/ArrowLeft.svg'
import ArrowRight from './assets/ArrowRight.svg'
import Image from "next/image";

export default function MetodologiaComponent() {
  const staticValues = [
    {
      tipo: "e-book",
      valor: 0,
      titulo: "7 dicas para designers iniciantes",
    },
    {
      tipo: "e-book",
      valor: 0,
      titulo: "Breve história do design de marcas",
    },
    {
      tipo: "e-book",
      valor: 3,
      titulo: "Desenvolvimento de marcas gráficas",
    },
    {
      tipo: "e-book",
      valor: 2,
      titulo: "3 métodologias em design para projetos",
    },
    {
      tipo: "e-book",
      valor: 1,
      titulo: "Em breve",
    },
  ];
  return (
    <div className={styles.metodologia}>
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
      <div className={styles.metodos}>
        {staticValues.map((metodo, index) => (
          <MetodoComponent key={index} {...{ metodo }} />
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
