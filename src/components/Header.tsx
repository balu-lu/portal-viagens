import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                Voyage
            </Link>
            <nav className={styles.nav}>
                <Link href="/" className={styles.navLink}>
                    Início
                </Link>
                <Link href="/destinos" className={styles.navLink}>
                    Destinos
                </Link>
            </nav>
        </header>
    );
}
