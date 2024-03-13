
import React from 'react';
import "./index.css";
import { useState } from "react";
import MainPage from "./page/mainPage";
function App() {

  // let myArr = 
  // {
  //   username: "Snehal",
  //   password: "Snehal123"
  // }

  const [color,setColor] = useState("rgb(46, 46, 46)")

  return (
    <>
     <MainPage/>
    </>
  );
}

export default App;
