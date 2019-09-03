import { Flex } from "@rebass/grid";
import styled from "styled-components";
import { breakpoint } from "../../breakpoints";

export const Container = styled(Flex)`
  flex-direction: column;
  color: white;
  padding: 60px;

  @media ${breakpoint.mobileM} {
    padding: 100px;
  }

  @media ${breakpoint.laptop} {
    flex-direction: row;
    padding: 150px;
  }
`;

export const Image = styled.div`
  border-radius: 50%;
  background: url("lenny.jpg");
  background-size: cover;
  max-width: 230px;
  width: 230px;
  height: 230px;
  border: 2px solid white;
  margin-bottom: 50px;

  @media ${breakpoint.laptop} {
    flex: 0 0 100%;
    margin: 0;
  }
`;