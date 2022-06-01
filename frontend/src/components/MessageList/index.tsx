import styles from "./styles.module.scss";
import logoImg from "../../assets/logo.svg";

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="Do While 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora para começar esse evento!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/moisesnetouou.png" alt="Moisés Neto" />
            </div>
            <span>Moisés Neto</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora para começar esse evento!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/moisesnetouou.png" alt="Moisés Neto" />
            </div>
            <span>Moisés Neto</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora para começar esse evento!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/moisesnetouou.png" alt="Moisés Neto" />
            </div>
            <span>Moisés Neto</span>
          </div>
        </li>
     
      </ul>
    </div>
  );
}