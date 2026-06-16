import Link from 'next/link';
import Image from 'next/image';
import { Destino } from '../data/destinos';
import styles from './CardDestino.module.css';

interface CardDestinoProps {
    destino: Destino;
}

export default function CardDestino({ destino }: CardDestinoProps) {
    return (
        <Link href={`/destinos/${destino.id}`} className={styles.card}>
            <div className={styles.imagemContainer}>
                <Image
                    src={destino.imagem}
                    alt={destino.nome}
                    width={300}
                    height={200}
                    className={styles.imagem}
                />
            </div>
            <div className={styles.conteudo}>
                <h3 className={styles.titulo}>{destino.nome}</h3>
                <p className={styles.descricao}>{destino.descricao}</p>
                <div className={styles.footer}>Ver Detalhes →</div>
            </div>
        </Link>
    );
}
