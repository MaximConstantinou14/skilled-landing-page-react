import React from "react";
import ButtonOne from "../Buttons/ButtonOne/ButtonOne";
import svg from "../../assets/logo-dark.svg"
import "./navbar.css"

class Navbar extends React.Component{
    render() {
        return(
            <nav>
                <a href="/">
                    <img src={svg} alt="Skilled Dark Logo" />
                </a>
                <ButtonOne></ButtonOne>
            </nav>
        )
    }
}

export default Navbar;
