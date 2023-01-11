
import Image from 'next/image';
import thorus from '../../public/img/thorus.png';

import styles from './CronsHub.module.css';

export default function CronsHub() {
    return(
        <div className={styles.section}>
            <Image src={thorus} alt="" />
            <div className={[styles.container,'container'].join(" ")}>
                <h5>ENTER THE CRONOS HUB</h5>
                <h3>The Heart of the Interchain.</h3>
                <p>Serving as the economic center of Cronos, the Cronos Hub is a blockchain that provides vital services to the Interchain</p>
            </div>
        </div>
    );
}