import React from "react";
import Heading from "../components/Heading";
import {Route} from "react-router-dom";
import { Switch } from "react-router-dom";
import Appcss from "../App.module.css";
import Navbar from "../components/Navbar";
import Coordinator from "../components/coordinators";
import HardwareDivisonHead from "../components/HardwareDivisonHead";
import SoftwareDivisonHead from "../components/SoftwareDomainHead";
import QuarksDivisonHead from "../components/QuarksDivisonHead";
import mainImage from "../images/y20.png";


  const y20Data={
    coordinators: [{name:"Prajwal Chittora",img:"../images/coordinator1.png"},{name:"Lakshya Setia"}],
    hardware:[{name:"Lakshya Choudary"},{name:"Prabhav Sharma"}],
    software:[{name:"Kingshuk Ghosh"},{name:"Swatantra Jain"},{name:"Vaibhav Jaiswal"}],
    quarks:[{name:"Yash Pachauri"},{name:"Bhavika Agarwal"},{name:"Rajat Bothra"}]
  }

  const y19Data={
    coordinators: [{name:".."},{name:".."}],
    hardware:[{name:".."},{name:".."}],
    software:[{name:".."},{name:".."},{name:".."}],
    quarks:[{name:".."},{name:".."},{name:".."}]
  }



// const y20Data={
//     image :path+"y20.png",
//     coordinators :[{name:"Prajwal Chittora",img: path+"y20-coordi1.png"},{name:"Prajwal Chittora",img: path+"y20-coordi1.png"}],
//     hardWareDivisonHead :[{name:"Kingshuk Ghosh", img: path+"y20-hardwareDivisonHead1.png"},{name:"Swatantra Jain", img: path+"y20-hardwareDivisonHead2.png"},{name:"Vaibhav Jaiswal", img: path+"y20-hardwareDivisonHead3.png"}],
//     quarksDivisonHead :[{name:"Yash Pachauri", img:path+"y20-quarksDivisonHead1.png"},{name:"Bhavika Agarwal", img:path+"y20-quarksDivisonHead2.png"},{name:"Rajat Bothra", img:path+"y20-quarksDivisonHead3.png"}]
// }

// console.group(y20Data.coordinators[0].name);

function Teams()
{
    return (<div className={Appcss.maindiv}>
        <Heading />
        <Navbar />
        <Switch>
        <Route path="/myteam/y20" exact>
        <div className={Appcss.mainImage}><img className={Appcss.mainImage} src={mainImage} /></div>
           
            <Coordinator 
            name1={y20Data.coordinators[0].name}
            name2={y20Data.coordinators[1].name}
            img={y20Data.coordinators[0].img}/>
            <HardwareDivisonHead 
            name1={y20Data.hardware[0].name}
            name2={y20Data.hardware[1].name}/>
            <SoftwareDivisonHead 
            name1={y20Data.software[0].name}
            name2={y20Data.software[1].name}
            name3={y20Data.software[2].name}
            />
            <QuarksDivisonHead 
            name1={y20Data.quarks[0].name}
            name2={y20Data.quarks[1].name}
            name3={y20Data.quarks[2].name}
            />

        
        </Route>
        <Route path="/myteam/y19" exact>
        <div className={Appcss.mainImage}>
                
                </div>
                <Coordinator 
            name1={y19Data.coordinators[0].name}
            name2={y19Data.coordinators[1].name}/>
            <HardwareDivisonHead 
            name1={y19Data.hardware[0].name}
            name2={y19Data.hardware[1].name}/>
            <SoftwareDivisonHead 
            name1={y19Data.software[0].name}
            name2={y19Data.software[1].name}
            name3={y19Data.software[2].name}
            />
            <QuarksDivisonHead 
            name1={y19Data.quarks[0].name}
            name2={y19Data.quarks[1].name}
            name3={y19Data.quarks[2].name}
            />

        
        </Route>
        </Switch>

    </div>
    );
}

export default Teams;

