import React from "react";
import { NavLink } from "react-router-dom";
import Appcss from "../App.module.css";

export default function Navbar()
{
    return (
        <div >
           <nav >
            <ul className={Appcss.navlist}>
                <li className={Appcss.list}>
                   <NavLink to="/myteam/y19">y19</NavLink>
                </li>
                <li className={Appcss.list}>
                <NavLink to="/myteam/y20">y20</NavLink>
                </li>
            </ul>
           </nav>
        </div>
           
    );
}