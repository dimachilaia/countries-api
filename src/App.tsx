import React, { useState } from "react";
import Countries from "./components/Countries";
import MainSection from "./components/MainSection";

const App: React.FC = () => {
  const [data, setData] = useState<[]>([]);
  const [input, setInput] = useState("");
  const [changeContinent, setChangeContinent] = useState<string>('');

  return (
    <div>
      <MainSection
        setInput={setInput}
        setData={setData}
        changeContinent={changeContinent}
        setChangeContinent={setChangeContinent}
      />
      <Countries
        input={input}
        setInput={setInput}
        data={data}
        setData={setData}
        changeContinent={changeContinent}
        setChangeContinent={setChangeContinent}
      />
    </div>
  );
};

export default App;
