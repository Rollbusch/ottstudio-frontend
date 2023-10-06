import { useState } from "react";
import styles from "./index.module.css";

import SobreMim from "./SobreMim";
import { useRouter } from "next/router";

export default function HomePage() {
  const [showBio, setShowBio] = useState(false);
  const router = useRouter('')
  
  const handleClick = () => {
    if (!showBio) {
      router.push('/#sobre-mim')
    }
    setShowBio(!showBio)
  }

  return (
    <div className={styles.homePage}>
      <h2>
        Conecte pessoas, <br /> comunique valores.
      </h2>
      <div
        className={`${styles.crossCta} ${
          showBio ? styles.uncross : styles.cross
        }`}
        onClick={() => handleClick()}
      ></div>
      <SobreMim {...{ showBio }} />
    </div>
  );
}
