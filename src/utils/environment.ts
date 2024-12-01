/**
 * Check if we're running in a Chrome extension context
 */
export const isExtensionEnvironment = (): boolean => {
  return typeof chrome !== 'undefined' && chrome.windows !== undefined;
};

/**
 * Get the current environment name
 */
export const getEnvironment = (): 'extension' | 'development' => {
  return isExtensionEnvironment() ? 'extension' : 'development';
};