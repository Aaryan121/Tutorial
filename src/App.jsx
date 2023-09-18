import "./App.css";
import { Name } from "./components/name.component";

function App() {
  const names = [
    {
      name: "ram",
    },
    {
      name: "hari",
    },
    {
      name: "sita",
    },
    {
      name: "kai",
    },
  ];

  return (
    <div>
      {names.map((item, index) => (
        <Name key={index} name={item.name} />
      ))}
    </div>
  );
}

export default App;
