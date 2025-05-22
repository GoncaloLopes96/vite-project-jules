import { useState, useEffect } from 'react';
import './App.css';
import RamCalculatorForm from './components/RamCalculatorForm';
import { calculateRamUsage, RamCalculationParams } from './lib/ramCalculator';

function App() {
  const [modelSizeInBillions, setModelSizeInBillions] = useState<number>(7);
  const [contextLength, setContextLength] = useState<number>(2048);
  const [quantizationType, setQuantizationType] = useState<'FP16' | 'INT8' | 'INT4'>('FP16');
  const [batchSize, setBatchSize] = useState<number>(1);
  const [estimatedRam, setEstimatedRam] = useState<number | null>(null);

  // Handler functions
  const handleModelSizeChange = (value: string) => {
    const numValue = parseFloat(value);
    setModelSizeInBillions(isNaN(numValue) ? 0 : numValue);
  };

  const handleContextLengthChange = (value: string) => {
    const numValue = parseInt(value, 10);
    setContextLength(isNaN(numValue) ? 0 : numValue);
  };

  const handleQuantizationChange = (value: string) => {
    setQuantizationType(value as 'FP16' | 'INT8' | 'INT4');
  };

  const handleBatchSizeChange = (value: string) => {
    const numValue = parseInt(value, 10);
    setBatchSize(isNaN(numValue) ? 0 : numValue);
  };

  useEffect(() => {
    if (modelSizeInBillions > 0 && contextLength > 0 && batchSize > 0) {
      const params: RamCalculationParams = {
        modelSizeInBillions,
        contextLength,
        quantizationType,
        batchSize,
      };
      const ram = calculateRamUsage(params);
      setEstimatedRam(ram);
    } else {
      setEstimatedRam(null);
    }
  }, [modelSizeInBillions, contextLength, quantizationType, batchSize]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>LLM RAM Usage Calculator</h1>
      </header>
      <main>
        <RamCalculatorForm
          modelSize={modelSizeInBillions}
          setModelSize={(val) => handleModelSizeChange(String(val))}
          contextLength={contextLength}
          setContextLength={(val) => handleContextLengthChange(String(val))}
          quantizationType={quantizationType}
          setQuantizationType={(val) => handleQuantizationChange(val)}
          batchSize={batchSize}
          setBatchSize={(val) => handleBatchSizeChange(String(val))}
          estimatedRam={estimatedRam}
        />
      </main>
    </div>
  );
}

export default App;
