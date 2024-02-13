import Link from "next/link";

import styles from "./index.module.css";
import Container from "@/components/Container";

import { useRouter } from "next/router";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

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
      name: "orçamento",
      href: "/orcamento",
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
    if (page != '/' && router.pathname.includes(page)) {
      return styles.ativo;
    } 
    if (router.pathname == '/projeto/[slug]' && page == '/projetos') {
      return styles.ativo;
    }
    return "";
  };

  const isMobile = useMediaQuery("(max-width: 577px)");

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <div className={styles.group}>
            <Link href="/" aria-label="Ir para home">
              <div />
            </Link>
            <span
              onClick={() => setSandwichMenu(!sandwichMenu)}
              className={`${styles.sandwichMenu} ${
                sandwichMenu ? styles.crossMenu : styles.uncrossMenu
              }`}
            ></span>
          </div>
          <input
            type="checkbox"
            id="sandwich-menu"
            checked={sandwichMenu}
            onChange={() => {}}
          />
          <nav className={styles.navigation}>
            {isMobile && (
              <>
                <div className={styles.group}>
                  <Link href="/" aria-label="Ir para home">
                    <div />
                  </Link>
                  <span
                    onClick={() => setSandwichMenu(!sandwichMenu)}
                    className={`${styles.sandwichMenu} ${
                      sandwichMenu ? styles.crossMenu : styles.uncrossMenu
                    }`}
                  ></span>
                </div>
                <input
                  type="checkbox"
                  id="sandwich-menu"
                  checked={sandwichMenu}
                  onChange={() => {}}
                />
              </>
            )}
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
              <a
                href="https://www.behance.net/ottstudio"
                target="_blank"
                aria-label="Ir para behance"
              >
                <div />
              </a>
              <a
                href="https://www.instagram.com/aprendasobrelogo/"
                target="_blank"
                aria-label="Ir para Instagram"
              >
                <div />
              </a>
            </div>
            <a href="mailto:contato@ottbrands.com">contato@ottbrands.com</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
