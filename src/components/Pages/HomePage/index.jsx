import { useState } from "react";
import styles from "./index.module.css";

import SobreMim from "./SobreMim";

export default function HomePage() {
  const [showBio, setShowBio] = useState(true);
  return (
    <div className={styles.homePage}>
      <h2>
        Conecte pessoas, <br /> comunique valores.
      </h2>
      <div
        className={`${styles.crossCta} ${
          showBio ? styles.uncross : styles.cross
        }`}
        onClick={() => setShowBio(!showBio)}
      ></div>
      <SobreMim {...{ showBio }} />
    </div>
  );
}
