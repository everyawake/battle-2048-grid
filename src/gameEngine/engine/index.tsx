import { fill } from "lodash";

import rangeRand from "../helpers/rangeRand";

export interface IBlock {
  value: number;
}
export type Board = Array<Array<IBlock>>;
export type Direction = "left" | "right" | "up" | "down";
export type BoardChangeHandler = (board: Board) => void;

export default class Board2048Engine {
  private currentBoardSize = 0;
  private generateBlockCountPerMove = 1;
  private board: Board = [];
  private isInitialized = false;
  private startValue = 2;
  private maxBoardSearchCount = 4;
  private onBoardChange: BoardChangeHandler = () => {};

  public initializeBoard(boardSize: number, onBoardChange: BoardChangeHandler) {
    this.currentBoardSize = boardSize;
    this.generateBlockCountPerMove = Math.round(boardSize / 2);
    this.onBoardChange = onBoardChange;
    this.maxBoardSearchCount = Math.pow(boardSize, boardSize);

    this.board = new Array(boardSize);
    for (let i = 0; i < boardSize; i++) {
      this.board[i] = fill(new Array(boardSize), { value: 0 });
    }
    this.isInitialized = true;
    this.newBlockAtRandomPosition();
  }

  public getBoard = () => this.board;

  public move(direction: Direction) {
    console.log("!!!!! Direction: ", direction);
    this.newBlockAtRandomPosition();
  }

  private readonly newBlockAtRandomPosition = () => {
    if (!this.isInitialized) {
      throw new Error("[❌] error: Must be initialize before use!");
    }
    for (let i = 0; i < this.generateBlockCountPerMove; i++) {
      this.getEmptyRandomPosition()
        .then(result => {
          const { x, y } = result;
          console.log(`!!!! {x,y}: {${x}, ${y}}`);
          this.board[x][y] = { value: this.startValue };
          this.onBoardChange(this.board);
        })
        .catch(() => {
          console.log("!!! no space");
        });
    }
  };

  private readonly getEmptyRandomPosition = (): Promise<{
    x: number;
    y: number;
  }> =>
    new Promise((resolve, reject) => {
      let x, y;
      let tryCount = 1;

      console.time("getEmptyRandomPosition");
      do {
        if (tryCount === this.maxBoardSearchCount) {
          x = null;
          y = null;
          break;
        }
        x = rangeRand(0, this.currentBoardSize);
        y = rangeRand(0, this.currentBoardSize);
        tryCount++;
      } while (!this.isEmpty(x, y));
      console.timeEnd("getEmptyRandomPosition");

      if (x !== null && y !== null) {
        resolve({
          x,
          y,
        });
      } else {
        reject();
      }
    });

  private readonly isEmpty = (x: number, y: number) => {
    return this.board[x][y].value === 0;
  };
}