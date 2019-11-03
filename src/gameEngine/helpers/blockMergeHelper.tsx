import { Board } from "../engine";

export const moveToLeft = (board: Board): Board => {
  const newBoard = JSON.parse(JSON.stringify(board));
  for (let colIdx = 0; colIdx < newBoard.length; colIdx++) {
    const column = newBoard[colIdx];
    for (let itemOffset = 0; itemOffset < column.length - 1; itemOffset++) {
      const currentItem = column[itemOffset];
      let nextIdx = itemOffset + 1;
      let nextItem;
      do {
        nextItem = column[nextIdx++];
      } while (nextItem.value === 0 && nextIdx < column.length);

      if (nextItem.value === currentItem.value || currentItem.value === 0) {
        // merge
        currentItem.value = nextItem.value + currentItem.value;
        // clear nextItem holder
        nextItem.value = 0;
      }
    }
  }
  return newBoard;
};

export const moveToRight = (board: Board): Board => {
  for (let colIdx = 0; colIdx < board.length; colIdx++) {
    const column = board[colIdx];
    const lastIndex = column.length - 1;

    for (let itemOffset = 0; itemOffset < column.length - 1; itemOffset++) {
      const currentPos = lastIndex - itemOffset;
      const currentItem = column[lastIndex - itemOffset];

      let prevIdx = currentPos - 1;
      let prevItem;
      do {
        prevItem = column[prevIdx--];
      } while (prevItem.value === 0 && prevIdx > column.length);

      if (prevItem.value === currentItem.value || currentItem.value === 0) {
        // merge
        currentItem.value = prevItem.value + currentItem.value;
        // clear prevItem holder
        prevItem.value = 0;
      }
    }
  }
  return board;
};
