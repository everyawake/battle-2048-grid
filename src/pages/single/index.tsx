import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Header, Wrapper, Button } from "./styled";
import Board2048 from "../../gameEngine/render";

interface IProps extends RouteComponentProps {}

export default class SingleMode extends React.PureComponent<IProps> {
  private readonly refBoard = React.createRef<Board2048>();
  public render() {
    return (
      <Wrapper>
        <Header>
          <h1>
            Single play mode
            <Button onClick={this.handleRestart}>Restart</Button>
          </h1>
        </Header>
        <div>
          <Board2048
            ref={this.refBoard}
            width={500}
            height={500}
            boardSize={4}
          />
        </div>
      </Wrapper>
    );
  }

  private readonly handleRestart = () => {
    const board = this.refBoard.current;
    if (board) {
      board.restart();
    }
  };
}
