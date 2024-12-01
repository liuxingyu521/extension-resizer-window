import React, { useState } from 'react';
import { Device, DeviceGroup } from '../types/device';
import { MonitorSmartphone, Laptop, ChevronDown } from 'lucide-react';
import { getEnvironment } from '../utils/environment';
import { QuickAccess } from './QuickAccess';

interface DeviceListProps {
  deviceGroups: DeviceGroup[];
  onSelectDevice: (device: Device) => void;
}

export function DeviceList({ deviceGroups, onSelectDevice }: DeviceListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(deviceGroups[0].category);
  const env = getEnvironment();

  const getDeviceIcon = (category: string) => {
    return category === 'Laptop Models' ? (
      <Laptop className="w-4 h-4" />
    ) : (
      <MonitorSmartphone className="w-4 h-4" />
    );
  };

  return (
    <div className="w-full bg-white rounded-lg">
      {env === 'development' && (
        <div className="p-2 bg-yellow-50 border-b border-yellow-100">
          <p className="text-xs text-yellow-700">
            Development mode: Window resizing is simulated
          </p>
        </div>
      )}
      
      <div className="p-4 space-y-4">
        {/* Quick Access Section */}
        <QuickAccess onSelectDevice={onSelectDevice} />
        
        {/* Category Dropdown */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Device Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none"
          >
            {deviceGroups.map((group) => (
              <option key={group.category} value={group.category}>
                {group.category}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-2 pointer-events-none">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Device List for Selected Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Device Model
          </label>
          <div className="space-y-1">
            {deviceGroups
              .find((group) => group.category === selectedCategory)
              ?.devices.map((device) => (
                <button
                  key={device.name}
                  onClick={() => onSelectDevice(device)}
                  className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  {getDeviceIcon(selectedCategory)}
                  <div className="flex flex-col items-start ml-2">
                    <span>{device.name}</span>
                    {device.manufacturer && (
                      <span className="text-xs text-gray-500">
                        {device.manufacturer} {device.model}
                      </span>
                    )}
                  </div>
                  <span className="ml-auto text-xs text-gray-500">
                    {device.width}×{device.height}
                  </span>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}