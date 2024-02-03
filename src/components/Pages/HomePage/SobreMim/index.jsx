import styles from "./index.module.css";

import Placeholder from "./assets/Placeholder.png";
import Image from "next/image";
import { getImageUrl } from "@/utils/strapi";

export default function SobreMim({ showBio, sobreMim }) {
  
  return (
    <div className={`${styles.sobreMim} ${showBio ? styles.show : styles.hide}`}>
      <div className={styles.imageGroup}>
        <div className={styles.image}>
          <Image src={getImageUrl(sobreMim.data.attributes.banner.data.attributes.url)} alt="picture" priority fill />
        </div>
        <h3>Prazer, { sobreMim.data.attributes.nome }.</h3>
      </div>
      <p dangerouslySetInnerHTML={{ __html: sobreMim.data.attributes.biografia }}></p>
    </div>
  );
}
