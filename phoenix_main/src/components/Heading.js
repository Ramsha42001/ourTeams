import React from "react";
import Appcss from "../App.module.css";
import Navbar from "./Navbar";


 function Heading(){
return (
    <div className={Appcss.headingdiv}>
      <h1 className={Appcss.heading}>
        Our Team
    </h1>
    <hr className={Appcss.hr}></hr>
    
    </div>
    
    
);
}

export default Heading;