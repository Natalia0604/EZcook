import React from 'react'
import {Link} from "react-router-dom";

export default function Nav() {
    const navStyle ={
        color:'while'
    };

    return (
        <nav>
            <Link to="/">
                <h3>EZcook</h3>
            </Link>
            <ul className="nav-link">
                <Link style={navStyle} to="/BuildPost" >
                    <li >BuildPost</li>
                </Link>
                <Link style={navStyle} to="/BuyList">
                    <li>BuyList</li>
                </Link>
            </ul>
        </nav>
    )
}
