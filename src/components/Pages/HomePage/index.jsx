import { useState } from "react";
import styles from "./index.module.css";

import SobreMim from "./SobreMim";

export default function HomePage({ sobreMim }) {
  const [showBio, setShowBio] = useState(false);
  
  const handleClick = () => {
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
      {
        !Array.isArray(sobreMim.data) && (
          <SobreMim {...{ showBio, sobreMim }} />
        )
      }
    </div>
  );
}
