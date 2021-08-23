import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Card from "./components/cards/Card";
import "./App.css";

const App = () => {
  return(
      <div className="App">
        <Navbar />
        <Header />
        <Card />
      </div>
  )
}

export default App;