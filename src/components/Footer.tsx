import Link from 'next/link';
import styles from './Footer.module.css';
interface FooterLink {
    title: string;
    items: string [] 
}
export function Footer() {
    const links :FooterLink [] = [{
        title: 'Learn',
        items: ['Introduction', 'Features', 'Staking', 'Get HEDRON', 'FAQ']
    },
    {
        title: 'Build',
        items: ['Developer Portal', 'Ignite CLI', 'Cronos SDK', 'IBC Protocol', 'FAQ']
    },
    {
        title: 'Explore',
        items: ['Tokens', 'Apps & Services', 'Wallets', 'Gravity DEX', 'Blog']
    },
    {
        title: 'Participate',
        items: ['Community', 'Contributors', 'Events', 'Newsletters']
    },
    {
        title: 'Resources',
        items: ['About', 'Press Kit', 'Design', 'Resources']
    }
    ];
    return (
        <div className={styles.section}>
            <div className={['container', styles.container].join(" ")}>
            {links.map(item => (
                <div key={item.title} className={styles.cloud}>
                    <h5>{item.title}</h5>
                    <ul>
                        {item.items.map(link => (
                        <li key={link}>
                            <Link href="" >{link}</Link>
                        </li>
                        ))}
                       
                    </ul>
                </div>
            ))}

            </div>
        </div>
    );
}