import CsvConverter from '@/components/utils/CsvConverter';
import EpochConverter from '@/components/utils/EpochConverter';
import ListToCsv from '@/components/utils/ListToCsv';
import styles from './index.module.css';
import NanoidGenerator from '@/components/utils/NanoidGenerator';
const UtilitiesPage = () => {
  return (
    <main className={styles.main}>
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
    </main>
  );
};

export default UtilitiesPage;
