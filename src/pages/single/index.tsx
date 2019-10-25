import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Wrapper } from "./styled";
import Board2048 from "../../gameEngine/render/index";

interface IProps extends RouteComponentProps {}

export default class SingleMode extends React.PureComponent<IProps> {
  public render() {
    return (
      <Wrapper>
        <title>
          <h1>Single play mode</h1>
        </title>
        <div>
          <Board2048 width={500} height={500} boardSize={4} />
        </div>
      </Wrapper>
    );
  }
}
