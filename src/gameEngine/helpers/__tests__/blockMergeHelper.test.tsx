import { moveToLeft } from "../blockMergeHelper";

describe("BlockMergeHelper()", () => {
  describe("moveToLeft()", () => {
    describe("simple move", () => {
      describe("case 1", () => {
        it("should move properly", () => {
          const b = moveToLeft([[{ value: 0 }, { value: 0 }, { value: 2 }, { value: 0 }]]);
          expect(b[0][0].value).toBe(0);
          expect(b[0][1].value).toBe(2);
          expect(b[0][2].value).toBe(0);
          expect(b[0][3].value).toBe(0);
        });
      });

      describe("case 2", () => {
        it("should move properly", () => {
          const b = moveToLeft([[{ value: 2 }, { value: 0 }, { value: 0 }, { value: 2 }]]);
          expect(b[0][0].value).toBe(2);
          expect(b[0][1].value).toBe(0);
          expect(b[0][2].value).toBe(2);
          expect(b[0][3].value).toBe(0);
        });
      });

      describe("case 3", () => {
        it("should move properly", () => {
          const b = moveToLeft([[{ value: 2 }, { value: 0 }, { value: 2 }, { value: 0 }]]);
          expect(b[0][0].value).toBe(2);
          expect(b[0][1].value).toBe(2);
          expect(b[0][2].value).toBe(0);
          expect(b[0][3].value).toBe(0);
        });
      });

      describe("case 4", () => {
        it("should move properly", () => {
          const b = moveToLeft([[{ value: 0 }, { value: 2 }, { value: 2 }, { value: 0 }]]);
          expect(b[0][0].value).toBe(2);
          expect(b[0][1].value).toBe(2);
          expect(b[0][2].value).toBe(0);
          expect(b[0][3].value).toBe(0);
        });
      });
    });

    describe("merge", () => {
      describe("case 1", () => {
        it("merge properly", () => {
          const b = moveToLeft([[{ value: 2 }, { value: 2 }, { value: 0 }, { value: 0 }]]);
          expect(b[0][0].value).toBe(4);
          expect(b[0][1].value).toBe(0);
          expect(b[0][2].value).toBe(0);
          expect(b[0][3].value).toBe(0);
        });
      });

      describe("case 2", () => {
        it("merge properly", () => {
          const b = moveToLeft([[{ value: 2 }, { value: 2 }, { value: 2 }, { value: 0 }]]);
          expect(b[0][0].value).toBe(4);
          expect(b[0][1].value).toBe(2);
          expect(b[0][2].value).toBe(0);
          expect(b[0][3].value).toBe(0);
        });
      });

      describe("case 3", () => {
        it("merge properly", () => {
          const b = moveToLeft([[{ value: 2 }, { value: 2 }, { value: 2 }, { value: 2 }]]);
          expect(b[0][0].value).toBe(4);
          expect(b[0][1].value).toBe(2);
          expect(b[0][2].value).toBe(2);
          expect(b[0][3].value).toBe(0);
        });
      });
    });
  });
});
