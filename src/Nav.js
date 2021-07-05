import React from 'react'
import {Link} from "react-router-dom";

export default function Nav() {
    const navStyle ={
        color:'white',
        textDecoration: 'none',
        fontSize:'30px'
    };

    return (
        <nav>
            <Link style={navStyle} to="/">
                <h3>EZcook</h3>
            </Link>
            <ul className="nav-link">
                <Link  style={navStyle} to="/BuildPost" >
                    <li>BuildPost</li>
                </Link>
                <Link style={navStyle} to="/BuyList">
                    <li> BuyList</li>
                </Link>
                <Link style={navStyle} to="/Member">
                    <li>Member</li>
                </Link>
                <Link style={navStyle} to="/ViewPost">
                    <li>ViewPost</li>
                </Link>
            </ul>
        </nav>
    )
}
