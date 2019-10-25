import styled from "styled-components";
import { mainTheme } from "../../theme";

export const CanvasBoard = styled.canvas<{ width: number; height: number }>`
  width: ${props => `${(props.width / 10).toFixed(1)}rem`};
  height: ${props => `${(props.height / 10).toFixed(1)}rem`};
  background-color: ${mainTheme.backgroundWhiteColor};
`;
