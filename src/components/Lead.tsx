import styles from './Lead.module.css';

import arrowLeft from '../../public/img/arrow-left-bg.svg';
import arrowUpRight from '../../public/img/arrow-up-right.svg';
import Image from 'next/image';

export default function Lead()
{
    return (
        <div className={styles.section}>
            <div className={['container', styles.container].join(" ")}>
                <div>
                    <h3>Receive transmissions</h3>
                    <p>Unsubscribe at any time. Privacy policy <Image src={arrowUpRight} alt="" width={18} height={18} /></p>
                </div>
                <form action="">
                    <input type="text" placeholder="Your email" />
                    <button><Image src={arrowLeft} alt="" width={24} height={24} /></button>
                </form>
            </div>
        </div>
    );
}