// src/app/destinos/[id]/page.tsx
import { destinos } from '../../../data/destinos';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

// A prop params injeta automaticamente o "id" da URL
export default function DestinoDetalhe({ params }: { params: { id: string } }) {
  const destino = destinos.find((d) => d.id === params.id);

  // Se a pessoa digitar uma URL inválida (ex: /destinos/marte), redireciona para a página 404 nativa do Next.js
  if (!destino) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Link href="/destinos" className={styles.voltar}>
        &larr; Voltar para destinos
      </Link>
      
      <img src={destino.imagem} alt={destino.nome} className={styles.imagem} />
      
      <h1 className={styles.titulo}>{destino.nome}</h1>
      <p className={styles.descricao}>{destino.descricao}</p>
      
      <div className={styles.precoTag}>
        A partir de {destino.precoMedio}
      </div>
    </div>
  );
}