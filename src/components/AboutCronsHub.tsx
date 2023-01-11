import Image from 'next/image';
import styles from './AboutCronsHub.module.css';

import arrowLeft from '../../public/img/arrow-left-bg.svg';

import image5 from '../../public/img/image-5.png';
import image6 from '../../public/img/image-6.png';
import image7 from '../../public/img/image-7.png';
import image8 from '../../public/img/image-8.png';
import Link from 'next/link';

export default function AboutCronsHub() {
    return (
        <div className={styles.section}>
            <div className={['container', styles.container].join(" ")}>
                <div className={styles.list}>
                    <div>
                        <Image src={image5} alt="" /> 
                        <h2>Marketplace</h2>
                        <p>Set to operate a next-gen decentralized exchange, swapping digital assets from across the Interchain, with very low fees and instant transaction confirmation.</p>
                    </div>
                    <div>
                        <Image src={image6} alt="" />
                        <h2>Security provider</h2>
                        <p>With the upcoming Interchain Security feature, HEDRON will soon be securing many chains, in exchange for additional staking rewards.</p>
                    </div>
                    <div>
                        <Image src={image7} alt="" />
                        <h2>Security provider</h2>
                        <p>With the upcoming Interchain Security feature, HEDRON will soon be securing many chains, in exchange for additional staking rewards.</p>
                    </div>

                    <div>
                        <Image src={image8} alt="" />
                        <h2>Security provider</h2>
                        <p>With the upcoming Interchain Security feature, HEDRON will soon be securing many chains, in exchange for additional staking rewards.</p>
                    </div>
                </div>
                <div className={styles.callToAction}>
                    <Link  href="#">Cosmos Hub <Image src={arrowLeft} alt="" width={24} height={24} /></Link>  
                </div>
            </div>

        </div>
    );
}