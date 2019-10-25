import * as React from "react";
import { CanvasBoard } from "./styled";
import randomRGB from "../helpers/randomRGB";
import Board2048Engine, {
  Direction,
  Board as GameBoard,
  BoardChangeHandler,
  IBlock,
} from "../engine";

// const CANVAS_PADDING = 10;
const BLOCK_MARGIN = 8;
const BLOCK_SIZE = 80;
const BLOCK_POS = BLOCK_MARGIN + BLOCK_SIZE;

interface IProps {
  width: number;
  height: number;
  boardSize: number;
}

export default class Board2048 extends React.PureComponent<IProps> {
  private readonly engine = new Board2048Engine();
  private readonly refCanvasBoard = React.createRef<HTMLCanvasElement>();
  private canvasContext: CanvasRenderingContext2D | null = null;

  public componentDidMount() {
    this.initializeGameEngine();
    this.initializeCanvas();
  }

  public render() {
    const { width, height } = this.props;
    return (
      <CanvasBoard width={width} height={height} ref={this.refCanvasBoard} />
    );
  }

  private readonly drawRect = (params: {
    posX: number;
    posY: number;
    value: IBlock;
  }) => {
    const ctx = this.canvasContext;
    if (ctx) {
      const { posX, posY } = params;
      const { r, g, b } = randomRGB();
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.8)`;
      ctx.fillRect(posX * BLOCK_POS, posY * BLOCK_POS, BLOCK_SIZE, BLOCK_SIZE);
    }
  };

  private readonly renderBoard = (board: GameBoard) => {
    const { boardSize } = this.props;
    for (let x = 0; x < boardSize; x++) {
      for (let y = 0; y < boardSize; y++) {
        const block = board[x][y];
        if (block.value) {
          this.drawRect({
            posX: x,
            posY: y,
            value: block,
          });
        }
      }
    }
  };

  private readonly initializeGameEngine = () => {
    const { boardSize } = this.props;
    this.engine.initializeBoard(boardSize, this.handleBoardChange);
    this.setState({
      board: this.engine.getBoard(),
    });
    console.info("[✔️] Success to initialize Game engine");
  };

  private readonly initializeCanvas = () => {
    if (this.refCanvasBoard.current) {
      this.canvasContext = this.refCanvasBoard.current.getContext("2d");
      if (this.canvasContext) {
        console.info("[✔️] Success to initialize canvas");
        this.renderBoard(this.engine.getBoard());

        this.registerKeyboardInput();
      }
    } else {
      console.error("[❌] Failed to initialize canvas");
    }
  };

  private readonly registerKeyboardInput = () => {
    if (window) {
      window.addEventListener("keydown", this.handleArrowKey);
      console.info("[✔️] Success to register keyboard input");
    } else {
      console.error("[❌] Failed to register keyboard input");
    }
  };

  private readonly handleBoardChange: BoardChangeHandler = board => {
    console.log("!!!! handleBoardChange", board);
    this.renderBoard(board);
  };

  private readonly handleArrowKey: React.EventHandler<any> = e => {
    let direction: Direction | null = null;
    switch (e.keyCode) {
      // left
      case 37: {
        console.log("KeyInput: left arrow");
        direction = "left";
        break;
      }

      // up
      case 38: {
        console.log("KeyInput: up arrow");
        direction = "up";
        break;
      }

      // right
      case 39: {
        console.log("KeyInput: right arrow");
        direction = "right";
        break;
      }

      // down
      case 40: {
        console.log("KeyInput: down arrow");
        direction = "down";
        break;
      }
    }
    if (direction) {
      this.engine.move(direction);
    }
  };
}