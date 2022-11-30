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
    population: string;
    region: string;
    capital: string;
  }[];
  input: string;
  setInput: (value: string) => void;
  setData: React.Dispatch<React.SetStateAction<[]>>;
  changeContinent: string;
  setChangeContinent: React.Dispatch<React.SetStateAction<string>>;
  isWhite: boolean;
  setIsWhite: React.Dispatch<React.SetStateAction<boolean>>;
}
const Countries: React.FC<Props> = ({
  data,
  setData,
  input,
  changeContinent,
  isWhite,
  setIsWhite,
}) => {
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setData(response.data);
    });
  }, []);
  const output = [...data]
    .filter((mi: any) => mi.name.common.toLowerCase().includes(input))
    .filter((mi: any) =>
      changeContinent ? mi.region === changeContinent : mi
    );

  return (
    <MainContainer>
      {output.map((item, index) => {
        return (
          <MainDiv key={item.name.common}>
            <img src={item.flags.png} alt={item.name.common} />
            <Info>
              <h2>{item.name.common}</h2>
              <p>
                Population: <span>{item.population}</span>
              </p>
              <p>
                Region: <span> {item.region}</span>
              </p>
              <p>
                Capital: <span>{item.capital}</span>
              </p>
            </Info>
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
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
const MainDiv = styled.div`
  h5 {
    font-size: 18px;
    color: white;
    text-align: center;
  }
  img {
    cursor: pointer;
    &:hover {
      opacity: 0.77;
    }
  }
`;

const Info = styled.div`
  background-color: white;
  border-radius: 5px;
  transform: translateY(-4.2vh);
  p {
    text-align: center;
  }
  h2 {
    color: black;
    text-align: center;
  }
  span {
    opacity: 0.72;
  }
`;
