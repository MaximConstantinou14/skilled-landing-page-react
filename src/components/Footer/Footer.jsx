import React from "react";
import logo from "../../assets/logo-light.svg"
import ButtonThree from "../Buttons/ButtonThree/ButtonThree";
import "../../variables.css";
import "./footer.css"

class Footer extends React.Component{
    render() {
        return(
            <footer>
                <div className="footer_contents">
                    <img src={logo} alt="Light Logo" className="img_logo" />
                    <ButtonThree></ButtonThree>
                </div>
            </footer>
        )
    }
}

export default Footer;