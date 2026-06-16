import { destinos } from '../../../data/destinos';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

export default async function DestinoDetalhe({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    // Aguardamos os parâmetros antes de ler o ID
    const { id } = await params;
    const destino = destinos.find((d) => d.id === id);

    if (!destino) {
        notFound();
    }

    return (
        <div className={styles.container}>
            <img
                src={destino.imagem}
                alt={destino.nome}
                className={styles.imagem}
            />

            <h1 className={styles.titulo}>{destino.nome}</h1>
            <p className={styles.descricao}>{destino.descricao}</p>

            <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                        Preço Médio Estimado
                    </span>
                    <span className={styles.infoValue}>
                        {destino.precoViagem}
                    </span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Duração Sugerida</span>
                    <span className={styles.infoValue}>
                        {destino.diasDisponiveis}
                    </span>
                </div>
            </div>

            <h2 className={styles.subtitulo}>O que fazer no destino</h2>
            <ul className={styles.listaAtividades}>
                {destino.oQueFazer.map((atividade, index) => (
                    <li key={index}>- {atividade}</li>
                ))}
            </ul>
        </div>
    );
}
