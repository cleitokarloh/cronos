
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import arrowLeft from '../../public/img/arrow-left.svg';

import styles from './Header.module.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleOpenTootleMenu = useCallback(() => {
        setMenuOpen(state => !state)
    }, []);
    return (
            <header className={[menuOpen ? styles.on : '', styles.header].join(" ")}>
                <div className={['container', styles.container].join(' ')}>
                    <h1 className={styles.brand}>CRONOS</h1>
                    <nav>
                        <ul className={styles.nav}>
                            <li>
                                <Link href="#">Learn</Link>
                            </li>
                            <li>
                                <Link href="#">Build</Link>
                            </li>
                            <li>
                                <Link href="#">Explore</Link>
                            </li>
                        </ul>                    
                    </nav>
                    <div>
                        <Link  className={styles.getCronos} href="#">Get CRONOS <Image src={arrowLeft} alt="" /></Link>  
                    </div>
                    <div className={styles.menuToggle} onClick={handleOpenTootleMenu}>
                        <div className={styles.one}></div>
                        <div className={styles.two}></div>
                        <div className={styles.three}></div>
                    </div>
                </div>
            </header>
    );
}