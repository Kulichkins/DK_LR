



import React, { useState } from 'react';

function ToDo(props) {
  const [quantity, setQuantity] = useState(1);

  const Decrease = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  const Increase = () => {
    setQuantity(quantity + 1);
  };

  const callback = () => {
    alert(`Количество заказанного товара: ${quantity}`);
  };

    return(
        
       // <div class="h3-info">
           // <img src//={props.img}/>
            //<h3>{props.title}</h3>
           // <p>{props.text}</p>
        //</div>

         <div class = "card">
            <div class = "peperoni_main">
                <h3 class = "offer">{props.title_offer}</h3>
                <img src={props.img} className="full_width_image" />
            </div>
            <div class = "under_info">
                <h1>{props.Product_name}</h1>
                <p>{props.Description}</p>
                <select class="pizza_size" required>
                    <option value="">Диаметр</option> 
                    <option value="20sm">20sm</option>
                    <option value="30sm">30sm</option>
                    <option value="40sm">40sm</option>
                </select>
                <div class = "cost">От 550 р</div>
                <div class="add_product">
                    <div class = "quanter">
                        <div><button class = "corner_left" onClick={Decrease}>-</button></div>
                        <div><span class = "middle">{quantity}</span></div>
                        <div><button class = "corner_right" onClick={Increase}>+</button></div>
                        
                        
                        
                    </div>
        
                    <button class = "btn_magaz"onClick={callback}><img src={props.zakaz} class = "magazine"/></button>
                </div>
            </div>
            </div>
       
    )
}

export default ToDo;