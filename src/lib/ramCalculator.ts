export interface RamCalculationParams {
  modelSizeInBillions: number;
  contextLength: number;
  quantizationType: 'FP16' | 'INT8' | 'INT4';
  batchSize: number;
}

export const calculateRamUsage = (params: RamCalculationParams): number => {
  const { modelSizeInBillions, contextLength, quantizationType, batchSize } = params;

  let bytesPerParameter: number;
  switch (quantizationType) {
    case 'FP16':
      bytesPerParameter = 2;
      break;
    case 'INT8':
      bytesPerParameter = 1;
      break;
    case 'INT4':
      bytesPerParameter = 0.5;
      break;
    default:
      // Should not happen with TypeScript, but good for robustness
      throw new Error(`Invalid quantizationType: ${quantizationType}`);
  }

  // Model Weights Size (GB)
  const modelWeightsSizeGB = (modelSizeInBillions * 1_000_000_000 * bytesPerParameter) / (1024 ** 3);

  // KV Cache Size (GB)
  // Using the formula: (modelSizeInBillions * contextLength * batchSize * 0.0005) GB
  const kvCacheSizeGB = modelSizeInBillions * contextLength * batchSize * 0.0005;

  // Working Buffer/Overhead (GB)
  const overheadGB = 1; // Fixed 1GB overhead

  // Total Estimated RAM (GB)
  const totalEstimatedRamGB = modelWeightsSizeGB + kvCacheSizeGB + overheadGB;

  return totalEstimatedRamGB;
};
