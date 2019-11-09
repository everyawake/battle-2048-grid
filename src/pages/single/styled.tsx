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

export const Header = styled.header`
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  padding: 0.4rem;
  font-size: 1.2rem;
  border-radius: 2rem;
  margin-left: 1rem;
`;
