import { destinos } from '../../data/destinos';
import CardDestino from '../../components/CardDestino';
import styles from './page.module.css';

export default function Destinos() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.titulo}>Destinos em Destaque</h1>
      </div>
      
      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </div>
  );
}