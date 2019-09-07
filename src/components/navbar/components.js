import * as React from "react";
import * as Scroll from "react-scroll";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid white;
  width: 50px;
  padding-bottom: 25px;
`;

export const MenuLink = ({ section }) => {
  return (
    <li>
      <Scroll.Link
        to={`${section.toLowerCase()}-section`}
        smooth
        duration={1100}
      >
        <span />
        {section}
        <span />
      </Scroll.Link>
    </li>
  );
};