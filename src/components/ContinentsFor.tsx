//გადმოტანილია MainSection დან, Map return სთვის.
import React from 'react'
import styled from "styled-components";

interface Props {
    item: string
};
const ContinentsFor:React.FC<Props> = ({item}) => {
  return (
    <MappedContinent>
        <span>{item}</span>
    </MappedContinent>
  )
}

export default ContinentsFor

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
