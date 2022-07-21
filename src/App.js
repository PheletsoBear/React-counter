import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState([])
const decrement = () => {
  setCount((prevCount) => prevCount - 1 );
};
const increment = () => {
  setCount((prevCount) => prevCount + 1);
};
  return (
    <div className="main">
      <button type="submit" onClick = {decrement}>-</button>
     <span >{count}</span>
      <button type="submit" onClick={increment}>
        {" "}
        +{" "}
      </button>
    </div>
  );
}

export default App;
