import * as React from "react";
import { Wrapper } from "./styled";
import { RouteComponentProps } from "react-router";

interface IProps extends RouteComponentProps {}

export default class Landing extends React.PureComponent<IProps> {
  public render() {
    return <Wrapper>hello</Wrapper>;
  }
}
