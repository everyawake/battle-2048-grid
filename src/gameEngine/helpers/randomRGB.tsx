import rangeRand from "./rangeRand";

const randomRGB = () => {
  return {
    r: rangeRand(0, 255),
    g: rangeRand(0, 255),
    b: rangeRand(0, 255),
  };
};

export default randomRGB;
