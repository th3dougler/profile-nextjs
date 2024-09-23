import CsvConverter from '@/components/CsvConverter';
import EpochConverter from '@/components/EpochConverter';
import ListToCsv from '@/components/ListToCsv';
import styles from './index.module.css';
import NanoidGenerator from '@/components/NanoidGenerator';
const UtilitiesPage = () => {
  return (
    <div>
      <h1>Utilities Page</h1>

      <section className={styles.section}>
        <NanoidGenerator />
      </section>
      <section className={styles.section}>
        <EpochConverter />
      </section>
      <section className={styles.section}>
        <ListToCsv />
      </section>
      <section className={styles.section}>
        <CsvConverter />
      </section>
    </div>
  );
};

export default UtilitiesPage;
