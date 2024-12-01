/**
 * Calculate the maximum dimensions that fit within the screen while maintaining aspect ratio
 */
export function calculateConstrainedDimensions(
  targetWidth: number,
  targetHeight: number,
  maxWidth: number,
  maxHeight: number
): { width: number; height: number } {
  const aspectRatio = targetWidth / targetHeight;
  
  // Initial dimensions
  let width = targetWidth;
  let height = targetHeight;
  
  // Adjust width if it exceeds max width
  if (width > maxWidth) {
    width = maxWidth;
    height = width / aspectRatio;
  }
  
  // Adjust height if it still exceeds max height
  if (height > maxHeight) {
    height = maxHeight;
    width = height * aspectRatio;
  }
  
  // Round dimensions to whole pixels
  return {
    width: Math.floor(width),
    height: Math.floor(height)
  };
}