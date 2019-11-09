import * as React from "react";
import throttle from "lodash/throttle";
import mem from "mem";
import { CanvasBoard } from "./styled";

import Board2048Engine, {
  Direction,
  Board as GameBoard,
  BoardChangeHandler,
  IBlock,
} from "../engine";
import { mainTheme } from "../../theme";
import BlockColor from "../helpers/getBlockColor";

// const BLOCK_MARGIN = 8;

interface IProps {
  width: number;
  height: number;
  boardSize: number;
}

interface IState {
  canvasWidth: number;
  canvasHeight: number;
}

export default class Board2048 extends React.PureComponent<IProps, IState> {
  public state: IState = {
    canvasWidth: 0,
    canvasHeight: 0,
  };

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

  public restart = () => {
    this.initializeGameEngine();
  };

  private readonly getRelativeBlockSize = mem(
    (param: {
      canvasWidth: number;
      canvasHeight: number;
      boardSize: number;
    }) => {
      const { canvasWidth, canvasHeight, boardSize } = param;
      return {
        width: canvasWidth / boardSize,
        height: canvasHeight / boardSize,
      };
    },
  );

  private readonly drawRect = (params: {
    posX: number;
    posY: number;
    block: IBlock;
  }) => {
    const ctx = this.canvasContext;
    const { width, height } = this.getRelativeBlockSize({
      ...this.state,
      boardSize: this.props.boardSize,
    });
    if (ctx) {
      const { posX, posY, block } = params;
      const { r, g, b } = BlockColor[block.value];
      const calPosY = posX * width;
      const calPosX = posY * height;
      // box render
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.8)`;
      ctx.fillRect(calPosX, calPosY, width, height);
      // text render
      ctx.fillStyle = `${mainTheme.primaryTextColor}`;
      ctx.font = `2.0rem Noto Sans KR`;
      ctx.textAlign = "center";
      ctx.fillText(`${block.value}`, calPosX + width / 2, calPosY + height / 2);
    }
  };

  private readonly clearBoard = () => {
    const ctx = this.canvasContext;
    const { canvasWidth, canvasHeight } = this.state;
    if (ctx) {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    }
  };

  private readonly renderBoard = (board: GameBoard) => {
    const { boardSize } = this.props;
    this.clearBoard();
    for (let x = 0; x < boardSize; x++) {
      for (let y = 0; y < boardSize; y++) {
        const block = board[x][y];
        if (block.value) {
          this.drawRect({
            posX: x,
            posY: y,
            block: block,
          });
        }
      }
    }
  };

  private readonly initializeGameEngine = () => {
    const { boardSize } = this.props;
    this.engine.initializeBoard({
      boardSize,
      onBoardChange: this.handleBoardChange,
      onGameEnd: this.handleGameEnd,
    });
    console.info("[✔️] Success to initialize Game engine");
  };

  private readonly initializeCanvas = () => {
    const canvas = this.refCanvasBoard.current;
    if (canvas) {
      this.canvasContext = canvas.getContext("2d");
      if (this.canvasContext) {
        console.info("[✔️] Success to initialize canvas");

        this.setState({
          canvasWidth: canvas.width,
          canvasHeight: canvas.height,
        });
        this.renderBoard(this.engine.getBoard());

        this.registerKeyboardInput();
      }
    } else {
      console.error("[❌] Failed to initialize canvas");
    }
  };

  private readonly registerKeyboardInput = () => {
    if (window) {
      window.addEventListener("keydown", this.debounceKeyDown);
      console.info("[✔️] Success to register keyboard input");
    } else {
      console.error("[❌] Failed to register keyboard input");
    }
  };

  private readonly handleBoardChange: BoardChangeHandler = board => {
    this.renderBoard(board);
  };

  private readonly handleGameEnd = () => {
    alert(" - GAME END - ");
  };

  private readonly handleArrowKey: React.EventHandler<any> = e => {
    let direction: Direction | null = null;
    switch (e.keyCode) {
      // left
      case 37: {
        direction = "left";
        break;
      }

      // up
      case 38: {
        direction = "up";
        break;
      }

      // right
      case 39: {
        direction = "right";
        break;
      }

      // down
      case 40: {
        direction = "down";
        break;
      }
    }
    if (direction) {
      this.engine.move(direction);
    }
  };
  private readonly debounceKeyDown = throttle(this.handleArrowKey, 150);
}
