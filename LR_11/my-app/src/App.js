import "./App.css"
import ToDo from "./components/ToDo";
import img1 from "./img/pizza.jpg"
import img2 from "./img/magaz.jpg"
import React from "react"
function App() {
  return (
    
    <>
       <ToDo img = {img1} title_offer = 'Хит Сезона' Product_name = 'Пеперони' Description = 'Ничего лишнего! Томатный соус, колбаски Пеперони и Моцарела' zakaz ={img2}/>
    </>
  );
}

export default App;
