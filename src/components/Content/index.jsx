import Container from "../Container";
import styles from './index.module.css'

export default function Content({ children }) {
  return (
    <main className={styles.content}>
      <Container>{children}</Container>
    </main>
  );
}
