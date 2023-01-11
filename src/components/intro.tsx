/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';

import styles from './Intro.module.css'

import img from '../../public/img/intro-image-1.png'
import img2 from '../../public/img/intro-image-2.png'

export default function Intro()
{
    return (
            <div className={styles.intro}>
                <div className={['container', styles.container].join(' ')}>
                    <div className={styles.content}>
                        <Image src={img} className={styles.image1}  alt=''/>
                        <strong>WELCOME TO CRONOS</strong>
                        <h1>The Internet of <br />Blockchains.</h1>
                        <p>Cronos is an ever expanding ecosystem of connected <br /> apps and services, built for a decentralized future.</p>
                    </div>
                </div>
                <img src={img2.src}  className={styles.image2}  alt=''/> 
            </div>
    );
}