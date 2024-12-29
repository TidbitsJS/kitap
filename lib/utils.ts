export function getLuminance(hex: string): string {
  // Validate hex color
  if (!/^#([A-Fa-f0-9]{6})$/.test(hex)) {
    throw new Error("Invalid hex color format. Use #RRGGBB.");
  }

  // Convert hex to RGB
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  // Convert RGB to linear RGB
  const linearize = (value: number): number =>
    value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);

  const rLinear = linearize(r);
  const gLinear = linearize(g);
  const bLinear = linearize(b);

  // Calculate luminance
  const luminance = 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;

  // Return white or black based on luminance
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}
