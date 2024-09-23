import { useState } from 'react';
import { customAlphabet } from 'nanoid';
import styles from './index.module.css';
const DEFAULT_NANOID_CHARS =
  '-_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const DEFAULT_LENGTH = 21;
const DEFAULT_COUNT = 1;

const NanoidGenerator = () => {
  const [characters, setCharacters] = useState<string>(DEFAULT_NANOID_CHARS);
  const [length, setLength] = useState<number>(21);
  const [count, setCount] = useState<number>(1);
  const [keys, setKeys] = useState<string[]>([]);
  const validateNumericInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): number | null => {
    const { value } = e.target;
    const integerValue = parseInt(value);
    if (isNaN(integerValue)) {
      return null;
    }
    return Math.abs(integerValue);
  };
  const handleCharactersChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    const uniqueCharacters = Array.from(new Set(value)).join('');
    console.log(uniqueCharacters);
    if (uniqueCharacters.length < 1 || uniqueCharacters.length > 255) {
      return;
    }
    setCharacters(uniqueCharacters);
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const length = validateNumericInput(e);
    if (!length || length > 30) {
      return;
    }
    setLength(length);
  };

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = validateNumericInput(e);
    if (!count || count > 30) {
      return;
    }
    setCount(count);
  };

  const generateKeys = () => {
    const nanoid = customAlphabet(characters, length);
    const newKeys = Array.from({ length: count }, () => nanoid());
    setKeys(newKeys);
  };
  const resetInputs = () => {
    setCharacters(DEFAULT_NANOID_CHARS);
    setLength(DEFAULT_LENGTH);
    setCount(DEFAULT_COUNT);
  };

  return (
    <div className={styles.container}>
      <h1>Nanoid Generator</h1>
      <div className={styles.options}>
        <label className={styles.label}>
          Characters:
          <textarea
            value={characters}
            onChange={handleCharactersChange}
            className={styles.characterInput}
            cols={characters.length + 2}
          />
        </label>
        <div className={styles.actions}>
          <label className={styles.label}>
            Length:
            <input
              type="number"
              value={length}
              onChange={handleLengthChange}
              min="1"
            />
          </label>
          <label className={styles.label}>
            Count:
            <input
              type="number"
              value={count}
              onChange={handleCountChange}
              min="1"
            />
          </label>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={resetInputs} className={styles.button}>
          Reset
        </button>
        <button onClick={generateKeys} className={styles.button}>
          Generate
        </button>
      </div>
      {keys.length > 0 && (
        <div className={styles.output}>
          <h2>Generated Keys</h2>
          <textarea
            value={keys.join('\n')}
            readOnly={true}
            rows={count + 2}
            className={styles.codeOutput}
          />
        </div>
      )}
    </div>
  );
};

export default NanoidGenerator;
