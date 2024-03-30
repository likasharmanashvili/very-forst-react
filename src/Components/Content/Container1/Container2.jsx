import React from "react";

function ContainerFoo ({nameValue,p_text,}) {

    return (
         <div  className="vtext">
          <h1 className="nameV">{nameValue}</h1>
          <p  className="pV">{p_text}</p>

         </div>
    )

}

export default ContainerFoo