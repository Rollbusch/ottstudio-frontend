import { getImageUrl } from "@/utils/strapi";
import styles from "./index.module.css";

import Image from "next/image";
import Link from "next/link";

export default function Projetos({ projetos }) {

  const getImage = (projeto) => {
    if (!projeto) return ''
    const imageUrl = projeto.banner.data.attributes.url
    const url = getImageUrl(imageUrl)
    return url
  }

  return (
    <div className={styles.projetos}>
      {projetos.data.map((projeto) => (
        <Link key={projeto.id} href={`/projetos/${projeto.attributes.slug}`}>
          <div className={styles.image}>
            <Image src={getImage(projeto.attributes)} alt="projeto" fill />
          </div>
        </Link>
      ))}
    </div>
  );
}
