import React, { useState } from "react";
import MainSection from "./components/MainSection";
import { Routes, Route } from "react-router";
import CountryInfo from "./components/CountryInfo";

const App: React.FC = () => {
  const [data, setData] = useState<[]>([]);
  const [input, setInput] = useState("");
  const [changeContinent, setChangeContinent] = useState<string>("");

  return (
    <Routes>
      <Route
        path="/countries-api"
        element={
          <MainSection
            setInput={setInput}
            setData={setData}
            changeContinent={changeContinent}
            setChangeContinent={setChangeContinent}
            input={input}
            data={data}
          />
        }
      />
      <Route path="/countries-api/detail/:name" element={<CountryInfo />}/>
    </Routes>
  );
};

export default App;
