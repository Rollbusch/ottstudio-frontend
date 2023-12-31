import Link from "next/link";

import styles from "./index.module.css";
import Container from "@/components/Container";

import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const [sandwichMenu, setSandwichMenu] = useState(false);
  const router = useRouter();

  const pages = [
    {
      name: "sobre",
      href: "/",
    },
    {
      name: "projetos",
      href: "/projetos",
    },
    {
      name: "metodologia",
      href: "/metodologia",
    },
    {
      name: "contato",
      href: "/contato",
    },
    {
      name: "materiais",
      href: "/materiais",
    },
  ];

  const isCurrentPage = (page) => {
    if (router.pathname == page) {
      return styles.ativo;
    }
    return "";
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <div className={styles.group}>
            <Link href="/">
              <div />
            </Link>
            <span
              onClick={() => setSandwichMenu(!sandwichMenu)}
              className={`${styles.sandwichMenu} ${
                sandwichMenu ? styles.crossMenu : styles.uncrossMenu
              }`}
            ></span>
          </div>
          <input type="checkbox" id="sandwich-menu" checked={sandwichMenu} />
          <nav className={styles.navigation}>
            <div className={styles.links}>
              {pages.map((page) => (
                <Link
                  href={page.href}
                  key={page.name}
                  className={isCurrentPage(page.href)}
                >
                  {page.name}
                </Link>
              ))}
            </div>
            <div className={styles.icons}>
              <a href="" target="_blank">
                <div />
              </a>
              <a href="" target="_blank">
                <div />
              </a>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
