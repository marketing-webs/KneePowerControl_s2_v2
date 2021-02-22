import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

export const StyledContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 20px;
  display: flex;
  position: relative;
  flex-direction: column;
  

  ${mediaQueries("sm")`
    padding: 0px 25px;
    max-width: 720px;
    `};

  ${mediaQueries("md")`
  max-width: 940px;
  `};

  ${mediaQueries("lg")`
    max-width: 1088px;
  `};
`;
