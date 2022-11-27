import React from "react";
import styled from "styled-components";
import image from '../images/dark.png'

const Header:React.FC = () => {
  return <MainHeader>
    <h4>Where In The World?</h4>
    <img src={image} alt="image1" style={{width:'25px'}}/>
  </MainHeader>;
};

export default Header;

const MainHeader = styled.div`
  color: black;
`;
