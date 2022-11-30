import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import styled from "styled-components";

const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  type Item = {
    name: {
      common: string;
      nativeName: {
        nld: string;
        common: string;
      };
    };
    flags:{
      png:string
    };
    region:string;
    population:string;
    capital:string;
    borders:string;
  };

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        setCountry(response.data);
      });
  }, []);
  console.log(country);

  return (
    <MainContainer>
      {country.map((item: Item) => {
        console.log(item)
        return (
          <div>
            <img src={item.flags.png} alt={item.name.common}/>
            <p>{item.name.common}</p>
            <p>{item.name.nativeName.common}</p>
            <p>{item.region}</p>
            <p>
                Population: <span>{item.population.toLocaleString()}</span>
              </p>
              <p>
                Capital: <span>{item.capital}</span>
              </p>
              <p>
                Borders: <span>{item.borders ? item.borders + " "+ " " : <span>No Border Country</span>}</span>
              </p>
          </div>
        );
      })}
    </MainContainer>
  );
};

export default CountryInfo;

const MainContainer = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
text-align:center;
`