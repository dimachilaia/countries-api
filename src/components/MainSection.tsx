import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { RiArrowUpSLine } from "react-icons/ri";
import Header from "./HeaderComp";

const MainSection: React.FC = () => {
  const [showContinets, setShowContinents] = useState<boolean>(false);
  const ContinentsArray = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const showContinentsHandler = ()=>{
    setShowContinents(prev=>!prev)
  }
  return (
    <MainSect>
      <Header />
      <InputContainer>
        <span>
          <AiOutlineSearch />
        </span>
        <input placeholder="Search for a country" />
      </InputContainer>
      <FilterRegion>
        <p>Filter By Region</p>
        {!showContinets ? <span onClick={showContinentsHandler}>
          <BsChevronDown />
        </span> : (
        <span onClick={showContinentsHandler} >
          <RiArrowUpSLine />
        </span>)}
      </FilterRegion>

      {showContinets && <Continets>
        {ContinentsArray.map((item) => {
          return (
           <MappedContinent key={item}>
            <span>{item}</span>
           </MappedContinent>
          );
        })}
      </Continets>}
    </MainSect>
  );
};

export default MainSection;

const MainSect = styled.div``;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  input {
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    height: 33px;
    width: 250px;
    padding-left: 30px;
    @media screen and (min-width: 768px) {
      width: 500px;
      height: 43px;
      padding-left: 40px;
    }
  }

  span {
    position: relative;
    left: 25px;
    top: 1px;
  }
`;

const FilterRegion = styled.div`
  background-color: white;
  width: 250px;
  height: 40px;
  display: flex;
  align-items: center;
  margin: 23px auto;
  justify-content: space-evenly;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 43px;
    padding-left: 40px;
    justify-content: space-around;
  }
  span {
    cursor: pointer;
  }
`;

const Continets = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  transform:translateY(-20px);
`;
const MappedContinent = styled.div`
  background-color: white;
  padding-top: 10px;
  width: 250px;
  border-radius:2px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 340px;
  }
  span:hover {
    color:red;
    cursor:pointer;
  }
`;
