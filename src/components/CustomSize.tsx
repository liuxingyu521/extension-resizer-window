import React, { useState } from 'react';

interface CustomSizeProps {
  onApply: (width: number, height: number) => void;
}

export function CustomSize({ onApply }: CustomSizeProps) {
  const [width, setWidth] = useState('1024');
  const [height, setHeight] = useState('768');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApply(Number(width), Number(height));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Width (px)
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="100"
            max="9999"
          />
        </label>
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Height (px)
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="100"
            max="9999"
          />
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Apply Custom Size
      </button>
    </form>
  );
}