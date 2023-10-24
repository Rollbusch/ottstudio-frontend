import styles from "./index.module.css";

import Image1 from "./assets/image 3.png";
import Image2 from "./assets/image 4.png";
import Image from "next/image";
import Link from "next/link";

export default function Projetos() {
  const staticValues = [
    {
      image: Image1,
      url: "seiva-rosa",
    },
    {
      image: Image2,
      url: "catarina-oliveira",
    },
    {
      image: Image1,
      url: "seiva-rosa",
    },
    {
      image: Image2,
      url: "catarina-oliveira",
    },
  ];
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
