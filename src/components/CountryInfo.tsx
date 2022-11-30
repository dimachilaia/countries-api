import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";


const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  type Item ={
    name:{
      common:string,
      nativeName:{
        nld:string,
        common:string;
      },
    }
    flag:string;
  }
  

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        setCountry(response.data);
      });
  }, []);
  console.log(country);

  return (
    <div>
      {country.map((item:Item) => {
        return <div>
          <p>{item.name.common}</p>
          <p>{item.name.nativeName.common}</p>
          <p>{item.flag}</p>
        </div>
      })}
    </div>
  );
};

export default CountryInfo;
