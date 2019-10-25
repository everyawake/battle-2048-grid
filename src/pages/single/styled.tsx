import styled from "styled-components";
import { mainTheme } from "../../theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${mainTheme.backgroundGreyColor};
`;
