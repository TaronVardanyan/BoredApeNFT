import styles from '../styles/Home.module.css';
import {useAddress, useMetamask} from "@thirdweb-dev/react";

export default function Home() {
    const address = useAddress();
    const connectWithMetaMask = useMetamask();
  return (
    <div className={styles.container}>
         something
    </div>
  )
}
