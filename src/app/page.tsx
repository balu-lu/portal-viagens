import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.hero}>
            <h1 className={styles.titulo}>
                O mundo é vasto. <br />
                Comece a explorar.
            </h1>
            <p className={styles.subtitulo}>
                Descubra destinos exclusivos, roteiros inesquecíveis e
                experiências que vão transformar a sua forma de ver o mundo.
            </p>
            <Link href="/destinos" className={styles.botao}>
                Ver Destinos
            </Link>
        </div>
    );
}
