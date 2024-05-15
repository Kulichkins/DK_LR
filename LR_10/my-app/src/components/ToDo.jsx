import React from "react"

function ToDo(props){
    return(
        
        <div class="h3-info">
            <img src={props.img}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
       
    )
}

export default ToDo;