import React from "react";
import styled from "styled-components";
import image from "../images/dark.png";
import { AiOutlineSearch } from "react-icons/ai";

const Header: React.FC = () => {
  return (
    <MainHeader>
      <Container>
        <h4>Where In The World?</h4>
        <div>
          <img src={image} alt="image1" />
          <span>Dark Mode</span>
        </div>
      </Container>
      <InputContainer>
        <span>
          <AiOutlineSearch />
        </span>
        <input placeholder="Search for a country" />
      </InputContainer>
    </MainHeader>
  );
};

export default Header;

const MainHeader = styled.div`
  h4 {
    color: black;
  }
  img {
    width: 20px;
    cursor: pointer;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;
const InputContainer = styled.div`
display:flex;
align-items:center;
margin:0 auto;
justify-content:center;
  input {
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    height:33px;
    width:250px;
    padding-left:30px;
    @media screen and (min-width: 768px) {
      width:500px;
      height:43px;
      padding-left:40px;
  }
  }

  span {
    position: relative;
    left:25px;
    top:1px;
  }
`;
