
import Counter from "./Counter";
import Card from "./Card";
import BgChanger from "./BgChanger";
import "./index.css";
import { useState } from "react";
function App() {

  // let myArr = 
  // {
  //   username: "Snehal",
  //   password: "Snehal123"
  // }

  const [color,setColor] = useState("rgb(46, 46, 46)")

  return (
    <>
     <BgChanger/>
     {/* <Counter/> */}
     {/* <br /> */}
     {/* <Card username='Snehal' btnValue="Click Me"/> */}
    </>
  );
}

export default App;
