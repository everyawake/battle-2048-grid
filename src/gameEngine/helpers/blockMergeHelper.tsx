import fill from "lodash/fill";
import zip from "lodash/zip";
import { Direction, Board, IBlock } from "../engine";

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
  for (let i = 0; i < newArr.length; i++) {
    const l = newArr[i];
    const r = newArr[i + 1];
    if (l && r && l.value === r.value && l.value !== 0) {
      l.value += r.value;
      r.value = 0;
      i += 1;
    }
  }

  return arrayReorder(newArr, "left");
};

const boardRotate = (board: Board): Board =>
  zip(...board).map(row =>
    row.map(block => (Boolean(block) ? block : { value: 0 })),
  ) as Board;

export const boardMergeHandler = (
  board: Board,
  direction: Direction,
): Board => {
  const needRotate = direction === "up" || direction === "down";
  const rotatedBoard = needRotate ? boardRotate(board) : board;
  // Think about their is exists only left and right
  const newBoard = Array(board.length);
  for (let i = 0; i < rotatedBoard.length; i++) {
    switch (direction) {
      case "up":
      case "left": {
        newBoard[i] = moveToLeft(rotatedBoard[i]);
        break;
      }

      case "down":
      case "right": {
        newBoard[i] = moveToRight(rotatedBoard[i]);
        break;
      }
    }
  }

  return needRotate ? boardRotate(newBoard) : newBoard;
};
