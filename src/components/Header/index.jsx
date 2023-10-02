import Link from "next/link";

import styles from "./index.module.css";
import Container from "@/components/Container";

import Behance from "./assets/behance.svg";
import Instagram from "./assets/instagram.svg";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [sandwichMenu, setSandwichMenu] = useState(false);
  const [currentActive, setCurrentActive] = useState(1);
  const [position, setPosition] = useState(0);
  const router = useRouter();
  const barRef = useRef();

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
              <Image src={Logo} alt="logo-ottstudio" />
            </Link>
            <span
              onClick={() => setSandwichMenu(!sandwichMenu)}
              className={`${styles.sandwichMenu} ${
                sandwichMenu ? styles.crossMenu : styles.uncrossMenu
              }`}
            ></span>
          </div>
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
                <Image src={Behance} alt="behance" />
              </a>
              <a href="" target="_blank">
                <Image src={Instagram} alt="instagram" />
              </a>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
