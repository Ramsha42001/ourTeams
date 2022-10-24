import React from "react";
import Details from "./Details";
import Appcss from "../App.module.css";
import QuarksHead1 from "../images/QuarksDivisonHead1.png";
import QuarksHead2 from "../images/QuarksDivisonHead2.png";
import QuarksHead3 from "../images/QuarksDivisonHead3.png";

function QuarksDivisonHead(props)
{
    return (
        <div>
             <h1 className={Appcss.coordinatorsHeading}>Quarks Divison Head</h1>
            <div className={Appcss.coordinators}>
            <div className={Appcss.imageDiv}>
                    <div className={Appcss.images}>
                <img  src={QuarksHead1} />
                </div>
                
                <Details
             name={props.name1}
            />
                </div>
                <div className={Appcss.imageDiv}>
                    <div className={Appcss.images}>
                <img  src={QuarksHead2} />
                </div>
                
                <Details
             name={props.name2}
            />
                </div>
                <div className={Appcss.imageDiv}>
                    <div className={Appcss.images}>
                <img  src={QuarksHead3} />
                </div>
                
                <Details
             name={props.name3}
            />
                </div>
        </div>
        </div>
    )
}

export default QuarksDivisonHead;