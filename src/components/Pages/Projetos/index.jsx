import projetos from "@/utils/projetos";
import styles from "./index.module.css";

import Image from "next/image";
import Link from "next/link";

export default function Projetos() {

  const staticValues = projetos
  
  return (
    <div className={styles.projetos}>
      {staticValues.map((projeto, index) => (
        <Link key={index} href={`/projeto/${projeto.url}`}>
          <Image src={projeto.image} alt="" />
        </Link>
      ))}
    </div>
  );
}
