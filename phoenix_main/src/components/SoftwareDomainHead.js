import React from "react";
import Details from "./Details";
import Appcss from "../App.module.css";
import SoftwareHead1 from "../images/SoftwareDivisonHead1.png";
import SoftwareHead2 from "../images/SoftwareDivisonHead2.png";
import SoftwareHead3 from "../images/SoftwareDivisonHead3.png";


function SoftwareDivisonHead(props)
{
    return(
        <div>
           <h1 className={Appcss.coordinatorsHeading}>Software Divison Head</h1>
            <div className={Appcss.coordinators}>
            <div className={Appcss.imageDiv}>
                    <div className={Appcss.images}>
                <img  src={SoftwareHead1} />
                </div>
                
                <Details
             name={props.name1}
            />
                </div>
                <div className={Appcss.imageDiv}>
                    <div className={Appcss.images}>
                <img  src={SoftwareHead3} />
                </div>
                
                <Details
             name={props.name2}
            />
                </div>
                <div className={Appcss.imageDiv}>
                    <div className={Appcss.images}>
                <img  src={SoftwareHead2} />
                </div>
                
                <Details
             name={props.name3}
            />
                </div>
            </div>
        </div>
       
    )
}

export default SoftwareDivisonHead;