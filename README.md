# LLM RAM Usage Calculator

This project provides a straightforward tool for estimating the RAM requirements when running large language models (LLMs). It helps developers and researchers understand the memory footprint of various model configurations.

## Features

- Calculate RAM usage based on:
  - Model size (in billions of parameters)
  - Context length (number of tokens)
  - Quantization type (FP16, INT8, INT4)
  - Batch size
- Clean, intuitive user interface
- Real-time calculations

## Technology Stack

This application is built with:

- React 18
- TypeScript
- Vite for fast development and optimized builds
- CSS for styling

## Usage

Simply adjust the sliders and input fields to match your model configuration:

1. Enter the model size in billions of parameters
2. Set the context length (token count)
3. Select the quantization type
4. Specify the batch size

The estimated RAM requirements will be calculated and displayed instantly.

## Installation

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/yourusername/llm-ram-calculator.git

# Navigate to the project directory
cd llm-ram-calculator

# Install dependencies
npm install

# Start the development server
npm run dev
```
