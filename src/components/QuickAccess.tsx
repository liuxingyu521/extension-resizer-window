import React from 'react';
import { Device } from '../types/device';
import { Smartphone, Tablet, Laptop, Monitor, MonitorSmartphone } from 'lucide-react';

interface QuickAccessProps {
  onSelectDevice: (device: Device) => void;
}

const quickAccessDevices: Device[] = [
  { name: 'iPhone 13', width: 390, height: 844, category: 'mobile' },
  { name: 'iPad Pro 11"', width: 834, height: 1194, category: 'tablet' },
  { name: 'MacBook Air', width: 1440, height: 900, category: 'laptop' },
  { name: '1080p Display', width: 1920, height: 1080, category: 'desktop' },
];

const getDeviceIcon = (category: string) => {
  switch (category) {
    case 'mobile':
      return <Smartphone className="w-4 h-4" />;
    case 'tablet':
      return <Tablet className="w-4 h-4" />;
    case 'laptop':
      return <Laptop className="w-4 h-4" />;
    case 'desktop':
      return <Monitor className="w-4 h-4" />;
    default:
      return <MonitorSmartphone className="w-4 h-4" />;
  }
};

export function QuickAccess({ onSelectDevice }: QuickAccessProps) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Access</h3>
      <div className="grid grid-cols-4 gap-2">
        {quickAccessDevices.map((device) => (
          <button
            key={device.name}
            onClick={() => onSelectDevice(device)}
            className="flex flex-col items-center p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {getDeviceIcon(device.category)}
            <span className="text-xs text-gray-600 mt-1 text-center">{device.name}</span>
            <span className="text-xs text-gray-400 mt-0.5">
              {device.width}×{device.height}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}