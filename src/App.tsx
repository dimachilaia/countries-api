import React, { useState } from "react";
import Countries from "./components/Countries";
import MainSection from "./components/MainSection";

const App: React.FC = () => {
  const [data, setData] = useState<[]>([]);
  const [input, setInput] = useState('')
  
  return (
    <div>
      <MainSection input={input} setInput={setInput} data={data} setData={setData} />
      <Countries input={input} setInput={setInput} data={data} setData={setData} />
    </div>
  );
};

export default App;
