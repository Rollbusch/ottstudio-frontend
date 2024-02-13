import MaterialComponent from "./Material";
import styles from "./index.module.css";

import ArrowLeft from './assets/ArrowLeft.svg'
import ArrowRight from './assets/ArrowRight.svg'
import Image from "next/image";
import Link from "next/link";

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
        {materiais && materiais.data.map((material, index) => (
          <MaterialComponent key={index} {...{ material }} />
        ))}
        <div className={styles.arrows}>
          {
            materiais && materiais.meta?.pagination?.page > 1 ? (
              <Link href={`/materiais/${materiais.meta.pagination.page - 1}`}>
                <Image src={ArrowLeft} alt="arrow-left" />
              </Link>
            ) : (
              <Image src={ArrowLeft} alt="arrow-left" style={{ opacity: 0.2 }} />
            )
          }
          {
            materiais && materiais.meta?.pagination?.page < materiais.meta?.pagination.pageCount ? (
              <Link href={`/materiais/${materiais.meta.pagination.page + 1}`}>
                <Image src={ArrowRight} alt="arrow-right" />
              </Link>
            ) : (
              <Image src={ArrowRight} alt="arrow-right" style={{ opacity: 0.2 }} />
            )
          }
        </div>
      </div>
      <div className={styles.arrows}>
        {
          materiais && materiais.meta?.pagination?.page > 1 ? (
            <Link href={`/materiais/${materiais.meta.pagination.page - 1}`}>
              <Image src={ArrowLeft} alt="arrow-left" />
            </Link>
          ) : (
            <Image src={ArrowLeft} alt="arrow-left" style={{ opacity: 0.2 }} />
          )
        }
        {
          materiais && materiais.meta?.pagination?.page < materiais.meta?.pagination.pageCount ? (
            <Link href={`/materiais/${materiais.meta.pagination.page + 1}`}>
              <Image src={ArrowRight} alt="arrow-right" />
            </Link>
          ) : (
            <Image src={ArrowRight} alt="arrow-right" style={{ opacity: 0.2 }} />
          )
        }
      </div>
    </div>
  );
}
