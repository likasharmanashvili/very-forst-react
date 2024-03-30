import React from "react";


    function Container(
       {
         img,title,titleHeading,text,button,comments
       }
    ){
    return (
     <div className="Card">
          {img}
          <div className="textcontent">
           <h1> {title}</h1>
           <h3> {titleHeading}</h3>
          <p className="ptag1"> {text}</p>
          </div>
         
          <div className="buttonContent">
            <button className="button1">{button}</button>
             <button className="zero"> {comments} <span className="zer">0</span></button>
          </div>
     </div>
     
    )
    
    }
    
export default Container
