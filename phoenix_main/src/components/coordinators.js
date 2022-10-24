import React from "react";
import Details from "./Details";
import Appcss from "../App.module.css";
import coordinator1 from "../images/coordinator1.png";
import coordinator2 from "../images/coordinator2.png";
import {FaLinkedinIn} from 'react-icons/fa';




function Coordinator(props)
{
    console.log(props.img);
    return (
        <div>
        <h1 className={Appcss.coordinatorsHeading}>Coordinators</h1>
            <div className={Appcss.coordinators}>
                <div className={Appcss.imageDiv}>
                    <div className={Appcss.images}>
                <img  src={props.img} />
                </div>
                
                <Details
            //  name={coordinators.coordinator[0].name
            name={props.name1}
            />
                </div>

                <div className={Appcss.imageDiv}>
                    <div className={Appcss.images}>
                <img  src={coordinator2} />
                </div>
                
                <Details
                name={props.name2}
            //  name={coordinators.coordinator[1].name}
            />
            
                </div>
        </div>
        </div>

    )
}

export default Coordinator;