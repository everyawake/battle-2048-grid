import rangeRand from "../rangeRand";

describe("rangeRand()", () => {
  it("should random every time", () => {
    const first = rangeRand(0, 1000);
    const second = rangeRand(0, 1000);

    expect(first).not.toBe(second);
  });
});
