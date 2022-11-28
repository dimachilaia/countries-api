import React from "react";
import image from "../images/dark.png";
import styled from "styled-components";

const Header = () => {

  return (
    <MainHeader>
      <Container>
        <h4>Where In The World?</h4>
        <div>
          <img src={image} alt="image1" />
          <span>Dark Mode</span>
        </div>
      </Container>
      <hr />
    </MainHeader>
  );
};

export default Header;

const MainHeader = styled.div`
`;
const Container = styled.div`
  h4 {
    color: black;
  }
  img {
    width: 20px;
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;
