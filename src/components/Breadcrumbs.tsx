"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Breadcrumbs.module.css';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/') return null;

  const segmentos = pathname.split('/').filter((segmento) => segmento !== '');

  return (
    <div className={styles.container}>
      <div className={styles.conteudo}>
        
        {/* Navegação Breadcrumb (Esquerda) */}
        <nav className={styles.trilha}>
          <Link href="/" className={styles.link}>Início</Link>
          
          {segmentos.map((segmento, index) => {
            const href = `/${segmentos.slice(0, index + 1).join('/')}`;
            const isLast = index === segmentos.length - 1;
            const titulo = segmento.replace(/-/g, ' ');

            return (
              <span key={href} style={{ display: 'flex', alignItems: 'center' }}>
                <span className={styles.separador}>/</span>
                {isLast ? (
                  <span className={styles.atual}>{titulo}</span>
                ) : (
                  <Link href={href} className={styles.link}>{titulo}</Link>
                )}
              </span>
            );
          })}
        </nav>

        {/* Botão de Voltar (Direita) */}
        <button onClick={() => router.back()} className={styles.btnVoltar}>
          &larr; Voltar
        </button>

      </div>
    </div>
  );
}