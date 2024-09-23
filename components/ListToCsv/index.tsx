import { useState } from 'react';
import styles from './index.module.css';
enum QuotationStyle {
  NONE = 'NONE',
  SINGLE = 'SINGLE',
  DOUBLE = 'DOUBLE',
}
const QuotationStyleChoices: string[] = [...Object.values(QuotationStyle)];
const ListToCsv = () => {
  const [input, setInput] = useState<string>('');
  const [separator, setSeparator] = useState<string>(',');
  const [quotation, setQuotation] = useState<QuotationStyle>(
    QuotationStyle.SINGLE
  );
  const [output, setOutput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSeparatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeparator(e.target.value);
  };

  const handleQuotationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (QuotationStyleChoices.includes(value)) {
      setQuotation(e.target.value as QuotationStyle);
    }
  };

  const convertList = () => {
    const items = input
      .split('\n')
      .map((item) => item.trim())
      .filter((item) => item);
    let quotedItems;
    switch (quotation) {
      case QuotationStyle.SINGLE:
        quotedItems = items.map((item) => `'${item}'`);
        break;
      case QuotationStyle.DOUBLE:
        quotedItems = items.map((item) => `"${item}"`);
        break;
      default:
        quotedItems = items;
    }
    setOutput(quotedItems.join(separator));
  };

  return (
    <div className={styles.container}>
      <h1>List to CSV</h1>
      <textarea
        value={input}
        className={styles.textarea}
        onChange={handleInputChange}
        placeholder="Enter items separated by new lines"
        rows={10}
        cols={50}
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
          Quotation:
          <select value={quotation} onChange={handleQuotationChange}>
            <option value={QuotationStyle.NONE}>None</option>
            <option value={QuotationStyle.SINGLE}>Single Quotes</option>
            <option value={QuotationStyle.DOUBLE}>Double Quotes</option>
          </select>
        </label>
      </div>
      <button className={styles.button} onClick={convertList}>
        Convert
      </button>
      {output && (
        <div className={styles.output}>
          <h2>Converted List</h2>
          <textarea
            value={output}
            className={styles.codeOutput}
            rows={10}
            cols={50}
            readOnly={true}
          />
        </div>
      )}
    </div>
  );
};

export default ListToCsv;
