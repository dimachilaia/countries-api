import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

interface Props {
  data: {
    cca2: string;
    flag: string;
    key: string | number;
    name: { common: string };
    flags: { png: string };
  }[];
  input: string;
  setInput: (value: string) => void;
  setData: React.Dispatch<React.SetStateAction<[]>>;
  changeContinent: string;
  setChangeContinent: React.Dispatch<React.SetStateAction<string>>;
}
const Countries: React.FC<Props> = ({
  data,
  setData,
  input,
  changeContinent,
}) => {
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setData(response.data);
    });
  }, []);
  const output = [...data]
    .filter((mi:any) => mi.name.common.toLowerCase().includes(input))
    .filter((mi:any) => changeContinent ? mi.region === changeContinent :mi);

  return (
    <MainContainer>
      {output.map((item, index) => {
        return (
          <MainDiv key={item.name.common}>
            <img src={item.flags.png} alt={item.name.common} />
            <h5>{item.name.common}</h5>
          </MainDiv>
        );
      })}
    </MainContainer>
  );
};

export default Countries;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainDiv = styled.div`
  h5 {
    font-size: 18px;
    color: white;
    text-align: center;
  }
`;
