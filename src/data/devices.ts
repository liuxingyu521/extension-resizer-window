import { Device, DeviceGroup } from '../types/device';

export const devicePresets: DeviceGroup[] = [
  {
    category: 'Mobile',
    devices: [
      { name: 'iPhone SE', width: 375, height: 667, category: 'mobile' },
      { name: 'iPhone 12/13', width: 390, height: 844, category: 'mobile' },
      { name: 'iPhone 12/13 Pro Max', width: 428, height: 926, category: 'mobile' },
      { name: 'Pixel 5', width: 393, height: 851, category: 'mobile' },
      { name: 'Samsung Galaxy S21', width: 360, height: 800, category: 'mobile' },
    ],
  },
  {
    category: 'Tablet',
    devices: [
      { name: 'iPad Mini', width: 768, height: 1024, category: 'tablet' },
      { name: 'iPad Air', width: 820, height: 1180, category: 'tablet' },
      { name: 'iPad Pro 11"', width: 834, height: 1194, category: 'tablet' },
      { name: 'iPad Pro 12.9"', width: 1024, height: 1366, category: 'tablet' },
    ],
  },
  {
    category: 'Laptop Models',
    devices: [
      // MacBook Models
      { name: 'MacBook Air M1/M2 13"', width: 1440, height: 900, category: 'laptop', manufacturer: 'Apple', model: 'MacBook Air' },
      { name: 'MacBook Air 15"', width: 1680, height: 1050, category: 'laptop', manufacturer: 'Apple', model: 'MacBook Air' },
      { name: 'MacBook Pro 14"', width: 1512, height: 982, category: 'laptop', manufacturer: 'Apple', model: 'MacBook Pro' },
      { name: 'MacBook Pro 16"', width: 1728, height: 1117, category: 'laptop', manufacturer: 'Apple', model: 'MacBook Pro' },
      
      // Lenovo Models
      { name: 'ThinkPad X1 Carbon', width: 1920, height: 1200, category: 'laptop', manufacturer: 'Lenovo', model: 'ThinkPad' },
      { name: 'ThinkPad T14s', width: 1920, height: 1080, category: 'laptop', manufacturer: 'Lenovo', model: 'ThinkPad' },
      { name: 'Yoga 9i', width: 3840, height: 2400, category: 'laptop', manufacturer: 'Lenovo', model: 'Yoga' },
      
      // Huawei Models
      { name: 'MateBook X Pro', width: 3000, height: 2000, category: 'laptop', manufacturer: 'Huawei', model: 'MateBook' },
      { name: 'MateBook 14', width: 2160, height: 1440, category: 'laptop', manufacturer: 'Huawei', model: 'MateBook' },
      { name: 'MateBook D16', width: 1920, height: 1200, category: 'laptop', manufacturer: 'Huawei', model: 'MateBook' },
    ],
  },
  {
    category: 'Desktop',
    devices: [
      { name: '720p', width: 1280, height: 720, category: 'desktop' },
      { name: '1080p', width: 1920, height: 1080, category: 'desktop' },
      { name: '1440p', width: 2560, height: 1440, category: 'desktop' },
      { name: '4K', width: 3840, height: 2160, category: 'desktop' },
    ],
  },
];