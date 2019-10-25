import styled from "styled-components";
import { Link } from "react-router-dom";
import { mainTheme } from "../../theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${mainTheme.backgroundGreyColor};
`;

export const MenuBox = styled(Link).attrs({ type: "button" })`
  width: 32rem;
  padding: 1.2rem;
  background-color: ${mainTheme.backgroundWhiteColor};
  border: 1px solid ${mainTheme.backgroundGreyColor};
  border-radius: 0.8rem;
  text-align: center;
  text-decoration: none;
  color: ${mainTheme.primaryTextColor};

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${mainTheme.primaryLightColor};
    box-shadow: 0.1rem 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.75);
  }
`;
