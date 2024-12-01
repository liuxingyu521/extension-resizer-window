export interface Device {
  name: string;
  width: number;
  height: number;
  category: 'mobile' | 'tablet' | 'desktop' | 'laptop' | 'custom';
  manufacturer?: string;
  model?: string;
}

export interface DeviceGroup {
  category: string;
  devices: Device[];
}