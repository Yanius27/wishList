import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddToWish from "./components/AddToWish/AddToWish";
import WishList from "./components/WishList/WishList";

function App() {
  const [wishes, setWish] = useState(
    JSON.parse(localStorage.getItem("wishes")) || []
  );

   //используем хук useEffect чтобы сохранить массив с желаниями в localStorage
   useEffect(() => {
    localStorage.setItem("wishes", JSON.stringify(wishes));
  }, [wishes]);

  return (
    <div className="App">
      <Header />
      <AddToWish wishes={wishes} setWish={setWish} />
      <WishList wishes={wishes} setWish={setWish} />
    </div>
  );
}

export default App;
