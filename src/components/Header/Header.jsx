import React from "react";
import ButtonTwo from "../Buttons/ButtonTwo/ButtonTwo"
import Navbar from "../Navbar/Navbar";
import "../../variables.css";
import "./header.css"

class Header extends React.Component{
    
    render() {
        return(
            <header>
                <Navbar></Navbar>
                <main>
                <div className="header_top">
                    <h1>Maximize skill,
                        minimize budget
                    </h1>
                    <p>Our modern courses 
                        across a range of in-demand 
                        skills will give you the knowledge
                         you need to live the life you want.
                    </p>
                    <ButtonTwo></ButtonTwo>
                </div>
                <div className="header_bottom">
                </div>
                </main>
            </header>
        )
    }
}

export default Header;