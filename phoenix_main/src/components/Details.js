import React from "react";
import Navbar from "./Navbar";
import Appcss from "../App.module.css";
import {FaEnvelope, FaLinkedinIn} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaEnvelopeOpenText} from 'react-icons/fa';





function Details(props)
{
    return (
       <div className={Appcss.detailsdiv}>
        
        <h1 className={Appcss.teamname}>{props.name}</h1>
        <div className={Appcss.icons}>
            <FaLinkedinIn className={Appcss.iconStyle}/>
            <a href="https://www.linkedin.com/feed/"><FaInstagram className={Appcss.iconStyle}/></a>
            <a><FaFacebookF className={Appcss.iconStyle}/></a>
           <a><FaEnvelopeOpenText className={Appcss.iconStyle}/></a> 
        </div>
           
      
       </div>
    );
}

export default Details;