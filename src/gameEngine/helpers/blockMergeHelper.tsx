import fill from "lodash/fill";
import { Board, IBlock } from "../engine";

const arrayReorder = (
  row: Array<IBlock>,
  startFrom: "left" | "right",
): Array<IBlock> => {
  const length = row.length;
  const newRow = row.filter(block => Boolean(block.value));
  const padArray = fill(Array(length - newRow.length), { value: 0 });
  return startFrom === "left"
    ? newRow.concat(padArray)
    : padArray.concat(newRow);
};

export const moveToLeft = (row: Array<IBlock>): Array<IBlock> => {
  const sortedRow = arrayReorder(row, "left");
  return merge(sortedRow);
};

export const moveToRight = (row: Array<IBlock>): Array<IBlock> => {
  const sortedRow = arrayReorder(row, "right");
  return merge(sortedRow.reverse()).reverse();
};

const merge = (arr: Array<IBlock>) => {
  const newArr = [...arr];
  for (let i = 0; i < newArr.length; i += 2) {
    const l = newArr[i];
    const r = newArr[i + 1];
    if (l && r && l.value === r.value && l.value !== 0) {
      l.value += r.value;
      r.value = 0;
    }
  }

  return arrayReorder(newArr, "left");
};
