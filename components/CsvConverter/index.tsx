import { useState } from 'react';
import styles from './index.module.css';
import CopyButton from '../common/CopyButton';

enum OutputFormat {
  CSV_COMMA = 'CSV_COMMA',
  CSV_SEMICOLON = 'CSV_SEMICOLON',
  CSV_TAB = 'CSV_TAB',
  NEWLINE = 'NEWLINE',
}

const OutputFormatChoices: string[] = [...Object.values(OutputFormat)];

const CsvConverter = () => {
  const [input, setInput] = useState<string>('');
  const [separator, setSeparator] = useState<string>(',');
  const [outputFormat, setOutputFormat] = useState<OutputFormat>(
    OutputFormat.CSV_COMMA
  );
  const [removeQuotes, setRemoveQuotes] = useState<boolean>(false);
  const [output, setOutput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSeparatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeparator(e.target.value);
  };

  const handleOutputFormatChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = e.target;
    if (OutputFormatChoices.includes(value)) {
      setOutputFormat(e.target.value as OutputFormat);
    }
  };

  const handleRemoveQuotesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRemoveQuotes(e.target.checked);
  };

  const convertList = () => {
    const items = input
      .split('\n')
      .map((item) => item.split(separator).map((subItem) => subItem.trim()));
    let convertedItems;
    if (removeQuotes) {
      items.forEach((item, index) => {
        items[index] = item.map((subItem) =>
          subItem.replace(/^["']|["']$/g, '')
        );
      });
    }
    switch (outputFormat) {
      case OutputFormat.CSV_SEMICOLON:
        convertedItems = items.map((item) => item.join(';')).join();
        break;
      case OutputFormat.CSV_TAB:
        convertedItems = items.map((item) => item.join('\t')).join();
        break;
      case OutputFormat.NEWLINE:
        convertedItems = items.map((item) => item.join('\n')).join();
        break;
      default:
        convertedItems = items.map((item) => item.join(',')).join();
    }
    setOutput(convertedItems);
  };

  return (
    <div className={styles.container}>
      <h1>CSV Converter</h1>
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Enter CSV data"
        rows={10}
        cols={50}
        className={styles.textarea}
      />
      <div className={styles.options}>
        <label className={styles.label}>
          Separator:
          <input
            type="text"
            value={separator}
            onChange={handleSeparatorChange}
          />
        </label>
        <label className={styles.label}>
          Output Format:
          <select value={outputFormat} onChange={handleOutputFormatChange}>
            <option value={OutputFormat.CSV_COMMA}>CSV (Comma)</option>
            <option value={OutputFormat.CSV_SEMICOLON}>CSV (Semicolon)</option>
            <option value={OutputFormat.CSV_TAB}>CSV (Tab)</option>
            <option value={OutputFormat.NEWLINE}>Newline Separated</option>
          </select>
        </label>
        <label className={styles.label}>
          Remove Quotes:
          <input
            type="checkbox"
            checked={removeQuotes}
            onChange={handleRemoveQuotesChange}
          />
        </label>
      </div>
      <button onClick={convertList} className={styles.button}>
        Convert
      </button>
      {output && (
        <div className={styles.output}>
          <h2>Converted List</h2>
          <textarea value={output} rows={10} cols={50} readOnly={true} />
          <CopyButton text={output} />
        </div>
      )}
    </div>
  );
};

export default CsvConverter;
