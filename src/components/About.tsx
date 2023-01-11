import Image from 'next/image';
import Link from 'next/link';
import arrowLeft from '../../public/img/arrow-left.svg';
import helix from '../../public/img/helix.png';

import styles from './About.module.css';

export default function About() {
    return(
        <div className={styles.section}>
            <Image src={helix} className={styles.img} alt="" />
            <div className={['container', styles.container].join(" ")}>
                <h4>COMMUNITY-OWNED AND OPERATED</h4>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperLeft}>
                        <h2>Enter a Universe of Connected Services.</h2>
                        <p>Cronos apps and services connect using IBC, the Inter-Blockchain Communication protocol. This innovation enables you to freely exchange assets and data across sovereign.</p>
                    </div>
                    <div className={styles.wrapperRight}>
                        <div>
                            <h5>265+</h5>
                            <p>Apps & services</p>
                        </div>
                        <div>
                            <h5>$63B+</h5>
                            <p>Digital assets</p>
                        </div>
                    </div>
                </div>
                <div className={styles.callToAction}>
                    <Link className={styles.LearMoreButton} href="#">Learn</Link>                
                    <Link className={styles.ExploreLink} href="#">Explore Tokens <Image src={arrowLeft} alt="" /></Link>
                </div>
            </div>
        </div>
    )
}