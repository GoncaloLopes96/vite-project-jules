import React from 'react';

interface RamCalculatorFormProps {
  modelSize: number;
  setModelSize: (value: number) => void;
  contextLength: number;
  setContextLength: (value: number) => void;
  quantizationType: 'FP16' | 'INT8' | 'INT4';
  setQuantizationType: (value: 'FP16' | 'INT8' | 'INT4') => void;
  batchSize: number;
  setBatchSize: (value: number) => void;
  estimatedRam: number | null;
}

const RamCalculatorForm: React.FC<RamCalculatorFormProps> = ({
  modelSize,
  setModelSize,
  contextLength,
  setContextLength,
  quantizationType,
  setQuantizationType,
  batchSize,
  setBatchSize,
  estimatedRam,
}) => {
  return (
    <div className="ram-calculator-form">
      <form>
        <div className="form-group">
          <label htmlFor="modelSize">Model Size (Billions of Parameters):</label>
          <input
          type="number"
          id="modelSize"
          value={modelSize}
          onChange={(e) => setModelSize(Number(e.target.value))}
        />
        </div>
        <div className="form-group">
          <label htmlFor="contextLength">Context Length (Number of Tokens):</label>
          <input
          type="number"
          id="contextLength"
          value={contextLength}
          onChange={(e) => setContextLength(Number(e.target.value))}
        />
        </div>
        <div className="form-group">
          <label htmlFor="quantizationType">Quantization Type:</label>
          <select
          id="quantizationType"
          value={quantizationType}
          onChange={(e) => setQuantizationType(e.target.value as 'FP16' | 'INT8' | 'INT4')}
        >
          <option value="FP16">FP16</option>
          <option value="INT8">INT8</option>
          <option value="INT4">INT4</option>
        </select>
        </div>
        <div className="form-group">
          <label htmlFor="batchSize">Batch Size:</label>
          <input
          type="number"
          id="batchSize"
          value={batchSize}
          onChange={(e) => setBatchSize(Number(e.target.value))}
        />
        </div>
        <div className="form-group estimated-ram-display">
          <p>Estimated RAM: {estimatedRam !== null ? `${estimatedRam.toFixed(2)} GB` : '- GB'}</p>
        </div>
      </form>
    </div>
  );
};

export default RamCalculatorForm;
