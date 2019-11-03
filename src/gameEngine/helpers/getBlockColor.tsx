import randomRGB from "./randomRGB";

export type BlockStage = "2" | "4" | "8" | "16" | "32" | "64" | "128" | "256" | "512" | "1024" | "2048";
const BlockColor: { [key: string]: { r: number; g: number; b: number } } = {
  "2": { r: 0, g: 0, b: 0 },
  "4": { r: 0, g: 0, b: 0 },
  "8": { r: 0, g: 0, b: 0 },
  "16": { r: 0, g: 0, b: 0 },
  "32": { r: 0, g: 0, b: 0 },
  "64": { r: 0, g: 0, b: 0 },
  "128": { r: 0, g: 0, b: 0 },
  "256": { r: 0, g: 0, b: 0 },
  "512": { r: 0, g: 0, b: 0 },
  "1024": { r: 0, g: 0, b: 0 },
  "2048": { r: 0, g: 0, b: 0 }
};

(() => {
  const keys = Object.keys(BlockColor);
  for (const key of keys) {
    BlockColor[key] = randomRGB();
  }
})();

export default BlockColor;
