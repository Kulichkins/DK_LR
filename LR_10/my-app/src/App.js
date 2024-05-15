import React from "react";
import ToDo from "./components/ToDo";
import img1 from "./img/f3.png"
import img2 from "./img/f4.png"
import img3 from "./img/f5.png"
import "./App.css"
function App() {
  return (
    <div class = "main-div">
      <h1 class = "main-title">То что вам необходимо</h1>
      <div class = "main-img">
        <ToDo title = 'Первый блок' img = {img1} text = {' text text text text text text'} />
        <ToDo title = 'Второй блок' img = {img2} text = {'text text text text text text'} />
        <ToDo title = 'Трети1й блок' img = {img3} text = {'text text text text text text'} />
      </div>
    </div>
  );
}

export default App;
