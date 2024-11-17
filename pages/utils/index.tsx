import CsvConverter from '@/components/utils/CsvConverter';
import EpochConverter from '@/components/utils/EpochConverter';
import ListToCsv from '@/components/utils/ListToCsv';
import styles from './utils.module.css';
import NanoidGenerator from '@/components/utils/NanoidGenerator';
import { useState } from 'react';
import JsonToCsvConverter from '@/components/utils/JsonToCsvConverter';

const UtilitiesPage = () => {
  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({
    nanoid: false,
    epoch: false,
    listToCsv: false,
    csvConverter: false,
    jsonToCsvConverter: false,
  });

  const toggleSection = (section: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <main className={styles.main}>
      <h1>Utilities</h1>

      <section className={styles.section}>
        <button
          onClick={() => toggleSection('nanoid')}
          className={styles.toggleButton}
        >
          <span
            className={`${styles.caret} ${isOpen.nanoid ? styles.caretOpen : ''}`}
          >
            <span className={styles.caretHorizontal}></span>
            <span className={styles.caretVertical}></span>
          </span>
          {isOpen.nanoid ? 'Hide' : 'Show'} Nanoid Generator
        </button>
        <div
          className={`${styles.content} ${isOpen.nanoid ? styles.open : ''}`}
        >
          <NanoidGenerator />
        </div>
      </section>

      <section className={styles.section}>
        <button
          onClick={() => toggleSection('epoch')}
          className={styles.toggleButton}
        >
          <span
            className={`${styles.caret} ${isOpen.epoch ? styles.caretOpen : ''}`}
          >
            <span className={styles.caretHorizontal}></span>
            <span className={styles.caretVertical}></span>
          </span>
          {isOpen.epoch ? 'Hide' : 'Show'} Epoch Converter
        </button>
        <div className={`${styles.content} ${isOpen.epoch ? styles.open : ''}`}>
          <EpochConverter />
        </div>
      </section>

      <section className={styles.section}>
        <button
          onClick={() => toggleSection('listToCsv')}
          className={styles.toggleButton}
        >
          <span
            className={`${styles.caret} ${isOpen.listToCsv ? styles.caretOpen : ''}`}
          >
            <span className={styles.caretHorizontal}></span>
            <span className={styles.caretVertical}></span>
          </span>
          {isOpen.listToCsv ? 'Hide' : 'Show'} List to CSV
        </button>
        <div
          className={`${styles.content} ${isOpen.listToCsv ? styles.open : ''}`}
        >
          <ListToCsv />
        </div>
      </section>

      <section className={styles.section}>
        <button
          onClick={() => toggleSection('csvConverter')}
          className={styles.toggleButton}
        >
          <span
            className={`${styles.caret} ${isOpen.csvConverter ? styles.caretOpen : ''}`}
          >
            <span className={styles.caretHorizontal}></span>
            <span className={styles.caretVertical}></span>
          </span>
          {isOpen.csvConverter ? 'Hide' : 'Show'} CSV Converter
        </button>
        <div
          className={`${styles.content} ${isOpen.csvConverter ? styles.open : ''}`}
        >
          <CsvConverter />
        </div>
      </section>
      <section className={styles.section}>
        <button
          onClick={() => toggleSection('jsonToCsvConverter')}
          className={styles.toggleButton}
        >
          <span
            className={`${styles.caret} ${isOpen.jsonToCsvConverter ? styles.caretOpen : ''}`}
          >
            <span className={styles.caretHorizontal}></span>
            <span className={styles.caretVertical}></span>
          </span>
          {isOpen.csvConverter ? 'Hide' : 'Show'} JSON to CSV Converter
        </button>
        <div
          className={`${styles.content} ${isOpen.jsonToCsvConverter ? styles.open : ''}`}
        >
          <JsonToCsvConverter />
        </div>
      </section>
    </main>
  );
};

export default UtilitiesPage;