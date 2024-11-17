import React, { useState } from 'react';

const JsonToCsvConverter: React.FC = () => {
  const [jsonInput, setJsonInput] = useState<string>('');
  const [csvOutput, setCsvOutput] = useState<string>('');
  const [delimiter, setDelimiter] = useState<string>(',');
  const [quoteType, setQuoteType] = useState<string>('none');

  const convertJsonToCsv = (
    json: string,
    delimiter: string,
    quoteType: string
  ) => {
    try {
      const jsonArray = JSON.parse(json);
      if (!Array.isArray(jsonArray)) {
        throw new Error('Invalid JSON format. Expected an array of objects.');
      }

      const keys = Object.keys(jsonArray[0]);
      const quote =
        quoteType === 'single' ? "'" : quoteType === 'double' ? '"' : '';
      const csvRows = jsonArray.map((obj) =>
        keys.map((key) => `${quote}${obj[key]}${quote}`).join(delimiter)
      );

      const csv = [
        keys.map((key) => `${quote}${key}${quote}`).join(delimiter),
        ...csvRows,
      ].join('\n');
      setCsvOutput(csv);
    } catch (error) {
      let message = 'Error: Invalid JSON format. Expected an array of objects.';
      if (error instanceof SyntaxError) {
        message = 'Error: Invalid JSON format.';
      } else if (error instanceof TypeError) {
        message = 'Error: Invalid JSON format. Expected an array of objects.';
      } else if (error instanceof Error) {
        message = `Error: ${error.message}`;
      }
      setCsvOutput(message);
    }
  };

  const handleConvert = () => {
    convertJsonToCsv(jsonInput, delimiter, quoteType);
  };

  return (
    <div>
      <h2>JSON to CSV Converter</h2>
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder="Enter JSON data here"
        rows={10}
        cols={50}
      />
      <br />
      <label>
        Select Delimiter:
        <select
          value={delimiter}
          onChange={(e) => setDelimiter(e.target.value)}
        >
          <option value=",">Comma (,)</option>
          <option value=";">Semicolon (;)</option>
          <option value="\t">Tab (\t)</option>
          <option value="|">Pipe (|)</option>
        </select>
      </label>
      <br />
      <label>
        Wrap Values in Quotes:
        <select
          value={quoteType}
          onChange={(e) => setQuoteType(e.target.value)}
        >
          <option value="none">None</option>
          <option value="single">Single Quotes (&apos;)</option>
          <option value="double">Double Quotes (&quot;)</option>
        </select>
      </label>
      <br />
      <button onClick={handleConvert}>Convert to CSV</button>
      <h3>CSV Output</h3>
      <textarea value={csvOutput} readOnly rows={10} cols={50} />
    </div>
  );
};

export default JsonToCsvConverter;
