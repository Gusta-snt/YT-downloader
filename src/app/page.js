import styles from "./page.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "500", "900"]
})

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={`${poppins.className} ${styles.title}`}><span className={`${poppins.className} ${styles.title_span}`}>YT</span> downloader</h1>
      <input className={`${poppins.className} ${styles.url}`} type="text"/>
      <button className={`${poppins.className} ${styles.buscar}`}>Buscar</button>
    </div>
  );
}
