import CsvConverter from '@/components/CsvConverter';
import EpochConverter from '@/components/EpochConverter';
import ListToCsv from '@/components/ListToCsv';
import styles from './index.module.css';
import NanoidGenerator from '@/components/NanoidGenerator';
import Link from 'next/link';
const UtilitiesPage = () => {
  return (
    <main className={styles.main}>
      <Link href="/">Home</Link>

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
      <Link href="/">Home</Link>
    </main>
  );
};

export default UtilitiesPage;
