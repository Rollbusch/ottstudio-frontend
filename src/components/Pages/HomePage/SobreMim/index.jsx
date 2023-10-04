import styles from "./index.module.css";

import Placeholder from "./assets/placeholder.png";
import Image from "next/image";

export default function SobreMim({ showBio }) {
  return (
    <div className={`${styles.sobreMim} ${showBio ? styles.show : styles.hide}`}>
      <div className={styles.imageGroup}>
        <Image src={Placeholder} alt="picture" />
        <h4>Prazer, João.</h4>
      </div>
      <p>
        Sou formado em design e mestre em publicidade pelo IADE - Faculdade de
        Design, Tecnologia e Comunicação da Universidade Europeia. Iniciei meus
        estudos na área há 10 anos e já tive a oportunidade de trabalhar com
        marcas como Martini, WTC Lisboa, IADE, Makro, Global Game Jam, Control,
        Repsol e Lenscope. 
        <br />
        <br />
        Como profissional, desenvolvo projetos gráficos
        impressos e digitais, propondo soluções estratégicas e de gestão para
        marcas. 
        <br />
        <br />
        Motivado pela crença de que o design é uma ferramenta de
        transformação e mudança, criei a ott.studio para ajudar empresas que
        desejam se tornar marcas e assim se diferenciarem no mercado.
      </p>
    </div>
  );
}
