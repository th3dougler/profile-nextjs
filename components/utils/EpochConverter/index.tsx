import { useEffect, useState } from 'react';
import styles from './index.module.css';
import CopyButton from '../../common/CopyButton';

enum EpochTimeType {
  MS = 'Milliseconds',
  S = 'Seconds',
}
interface ConvertedEpochTimeRow {
  dateString: string;
  isoString: string;
  msEpochTime: number;
  sEpochTime: number;
  mostLikely: boolean;
  type: EpochTimeType;
}
const MAX_INPUT_VALUE = 8640000000000000; // greater or lesser values will cause the date parsing to fail
const MIN_INPUT_VALUE = -1 * MAX_INPUT_VALUE;
const validateNumericInput = (
  input: string | null,
  limit = true
): number | null => {
  if (input === null) return null;
  let parsed = parseInt(input);
  if (isNaN(parsed)) return null;
  if (limit) {
    parsed = Math.min(MAX_INPUT_VALUE, parsed);
    parsed = Math.max(MIN_INPUT_VALUE, parsed);
  }
  return parsed;
};
const convertEpochTime = (input: string | null): ConvertedEpochTimeRow[] => {
  const numericInput = validateNumericInput(input);
  if (numericInput === null) return [];

  const msDate = new Date(numericInput);

  const mostLikely =
    input?.length === 13 || (numericInput < 0 && input?.length === 14);
  const response = [
    {
      type: EpochTimeType.MS,
      msEpochTime: numericInput,
      sEpochTime: Number((numericInput / 1000).toFixed(0)),
      dateString: msDate.toString(),
      isoString: msDate.toISOString(),
      mostLikely,
    },
  ];

  const secondsString = `${numericInput * 1000}`;
  const secondInput = validateNumericInput(secondsString);

  if (
    !secondInput ||
    secondInput > MAX_INPUT_VALUE ||
    secondInput < MIN_INPUT_VALUE
  ) {
    return response;
  }

  const sDate = new Date(secondInput);
  const sMostLikely =
    input?.length === 10 || (secondInput < 0 && input?.length === 11);
  const sResponse = {
    type: EpochTimeType.S,
    msEpochTime: numericInput * 1000,
    sEpochTime: numericInput,
    dateString: sDate?.toString(),
    isoString: sDate?.toISOString(),
    mostLikely: sMostLikely,
  };
  response.push(sResponse);
  return response.sort((a, b) =>
    a.mostLikely === b.mostLikely ? 0 : a.mostLikely ? -1 : 1
  );
};
interface EpochTimeRowsProps {
  input: string | null;
}

const EpochTimeRows = ({ input }: EpochTimeRowsProps) => {
  const epochTimeRows = convertEpochTime(input);
  const headers = (
    <tr key={'header'}>
      <td>Format</td>
      <td>Date String</td>
      <td>ISO String</td>
      <td>MS Epoch Time</td>
      <td>Second Epoch Time</td>
    </tr>
  );
  const rows = epochTimeRows.map((row) => {
    const isMs = row.type === EpochTimeType.MS;
    const name = isMs ? 'Milliseconds' : 'Seconds';
    const rowClass = row.mostLikely ? styles.highlight : '';

    return (
      <tr key={row.type} className={rowClass}>
        <td>{name}</td>
        <td>
          {row.dateString}
          <CopyButton text={row.dateString} />
        </td>
        <td>
          {row.isoString}
          <CopyButton text={row.isoString} />
        </td>
        <td>
          {row.msEpochTime}
          <CopyButton text={row.msEpochTime.toString()} />
        </td>
        <td>
          {row.sEpochTime}
          <CopyButton text={row.sEpochTime.toString()} />
        </td>
      </tr>
    );
  });
  return (
    <table>
      <thead>{headers}</thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const EpochConverter = () => {
  const [input, setInput] = useState<string | null>(null);
  useEffect(() => {
    setInput(`${Date.now()}`);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(`${validateNumericInput(e.target.value)}`);
  };

  return (
    <div className={styles.content}>
      <h2>Epoch Converter</h2>

      <label className={styles.options}>
        Epoch Time:
        <input value={`${input}`} type={'number'} onChange={handleChange} />
      </label>

      <div className={styles.output}>
        <EpochTimeRows input={input} />
      </div>
    </div>
  );
};

export default EpochConverter;