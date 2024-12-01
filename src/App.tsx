import React, { useState } from 'react';
import { DeviceList } from './components/DeviceList';
import { CustomSize } from './components/CustomSize';
import { devicePresets } from './data/devices';
import { resizeWindow } from './utils/window';
import { Device } from './types/device';
import { Maximize2 } from 'lucide-react';

function App() {
  const [error, setError] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState<string | null>(null);

  const handleDeviceSelect = async (device: Device) => {
    try {
      const maxWidth = window.screen.availWidth;
      const maxHeight = window.screen.availHeight;
      
      setOriginalSize(`${device.width}×${device.height}`);
      
      if (device.width > maxWidth || device.height > maxHeight) {
        setError(`Original size (${device.width}×${device.height}) exceeds screen size. Window will be scaled down proportionally.`);
      } else {
        setError(null);
      }
      
      await resizeWindow(device.width, device.height);
    } catch (err) {
      setError('Failed to resize window. Please try again.');
    }
  };

  const handleCustomSize = async (width: number, height: number) => {
    try {
      const maxWidth = window.screen.availWidth;
      const maxHeight = window.screen.availHeight;
      
      setOriginalSize(`${width}×${height}`);
      
      if (width > maxWidth || height > maxHeight) {
        setError(`Original size (${width}×${height}) exceeds screen size. Window will be scaled down proportionally.`);
      } else {
        setError(null);
      }
      
      await resizeWindow(width, height);
    } catch (err) {
      setError('Failed to resize window. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 bg-blue-600">
            <div className="flex items-center space-x-2">
              <Maximize2 className="w-6 h-6 text-white" />
              <h1 className="text-xl font-bold text-white">Window Resizer</h1>
            </div>
          </div>
          
          {error && (
            <div className="p-3 bg-yellow-50 border-b border-yellow-100">
              <p className="text-sm text-yellow-600">{error}</p>
            </div>
          )}
          
          <div className="p-4 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Preset Sizes</h2>
              <DeviceList 
                deviceGroups={devicePresets} 
                onSelectDevice={handleDeviceSelect} 
              />
            </div>
            
            <div>
              <h2 className="text-lg font-semibold mb-4">Custom Size</h2>
              <CustomSize onApply={handleCustomSize} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;