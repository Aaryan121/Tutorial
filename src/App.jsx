import { createContext, useState } from "react";
import "./App.css";
import Card from "./components/card";

const InitialState = {
  count: 0,
  sum: 0,
};

export const AppContext = createContext(InitialState);

function App() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  return (
    <AppContext.Provider value={{ count, sum, setCount, setSum }}>
      <Card />
    </AppContext.Provider>
  );
}

export default App;
