import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Wrapper, MenuBox } from "./styled";

interface IProps extends RouteComponentProps {}

export default class Landing extends React.PureComponent<IProps> {
  public render() {
    return (
      <Wrapper>
        <MenuBox to="/single">
          <span>Single Play</span>
        </MenuBox>
      </Wrapper>
    );
  }
}
