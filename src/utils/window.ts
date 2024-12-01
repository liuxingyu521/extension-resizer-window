import { getEnvironment } from './environment';
import { calculateConstrainedDimensions } from './screen';

export async function resizeWindow(width: number, height: number): Promise<void> {
  const env = getEnvironment();
  
  if (env === 'extension') {
    try {
      const currentWindow = await chrome.windows.getCurrent();
      
      if (!currentWindow.id) {
        throw new Error('No window ID found');
      }

      // Get available screen space (accounting for taskbar, etc.)
      const maxWidth = window.screen.availWidth;
      const maxHeight = window.screen.availHeight;

      // Calculate constrained dimensions
      const { width: constrainedWidth, height: constrainedHeight } = 
        calculateConstrainedDimensions(width, height, maxWidth, maxHeight);

      // Calculate centered position
      const left = Math.round((screen.availWidth - constrainedWidth) / 2);
      const top = Math.round((screen.availHeight - constrainedHeight) / 2);

      const updateInfo = {
        width: constrainedWidth,
        height: constrainedHeight,
        left,
        top,
      };

      await chrome.windows.update(currentWindow.id, updateInfo);
    } catch (error) {
      console.error('Failed to resize window:', error);
      throw error;
    }
  } else {
    // Development environment - show dimensions in console
    console.log(`Development mode: Window would resize to ${width}×${height}`);
  }
}