import styles from "./index.module.css";

export default function Contato() {
  return (
    <div className={styles.contato}>
      <div className={styles.text}>
        <h2>
          Transforme <br />
          sua empresa <br />
          em marca.
        </h2>
        <p>
          Após preencher entrarei em contato por email ou WhatsApp e alinharemos
          suas expectativas para esse projeto.
        </p>
        <div className={styles.contatoExtra}>
          <p>Para questões extras</p>
          <a href="mailto:contato@ottbrands.com">
            <strong>contato@ottbrands.com</strong>
          </a>
        </div>
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeqFHNnROuYjhkUeSChh7dKWm3o2jlFIaUTOJ3kfr47hrf5tQ/viewform?embedded=true"
        width="646"
        height="956"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Carregando…
      </iframe>
    </div>
  );
}
