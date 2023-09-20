import "./App.css";
import Lifecycle from "./components/lifecycle.component";
import { ProductList } from "./components/productList.component";

const temp = [
  {
    name: "name 1",
    price: 400,
    image:
      "https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=2048x2048&w=is&k=20&c=8Y2YB8oWnPb17Gl2dIKjm7GanOtnC2OSWLPrIUmnGuQ=",
  },
  {
    name: "name 2",
    price: 500,
    image:
      "https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=2048x2048&w=is&k=20&c=8Y2YB8oWnPb17Gl2dIKjm7GanOtnC2OSWLPrIUmnGuQ=",
  },
  {
    name: "name 3",
    price: 600,
    image:
      "https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=2048x2048&w=is&k=20&c=8Y2YB8oWnPb17Gl2dIKjm7GanOtnC2OSWLPrIUmnGuQ=",
  },
];

function App() {
  return (
    <div className="test">
      <Lifecycle />
    </div>
  );
}

export default App;
