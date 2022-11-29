import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import Header from "./HeaderComp";
import axios from "axios";

interface Props {
  setInput: (value: string) => void;
  changeContinent: string;
  setChangeContinent: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<[]>>;
}

const MainSection: React.FC<Props> = ({
  changeContinent,
  setInput,
  setChangeContinent,
  setData,
}) => {
  const ContinentsArray: string[] = [
    "Africa",
    "Asia",
    "Americas",
    "Europe",
    "Oceania",
  ];

  return (
    <MainSect>
      <Header />
      <InputContainer>
        <span>
          <AiOutlineSearch />
        </span>
        <input
          placeholder="Search for a country"
          onChange={(e) => setInput(e.target.value)}
        />
      </InputContainer>
      <Select onChange={(e) => setChangeContinent(e.target.value)}>
        <option value="">All</option>
        {ContinentsArray.map((item) => {
          return <>
            <option value={item}>{item}</option>
          </>;
        })}
      </Select>
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
    width: 300px;
    font-size: 17px;
    font-weight: bold;
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

const Select = styled.select`
  margin: 35px auto;
  display: flex;
  width: 240px;
  height: 40px;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: bold;
  font-size: 22px;
`;
