import React from "react";
import "../../variables.css";
import "./GridCards.css";

// importing images for cards

import animationImg from "../../assets/icon-animation.svg";
import designImg from "../../assets/icon-design.svg";
import photographyImg from "../../assets/icon-photography.svg";
import cryptoImg from "../../assets/icon-crypto.svg";
import businessImg from "../../assets/icon-business.svg";


class GridCards extends React.Component{
    
    render() {
        return(
            <div className="grid_container">
                <div className="gradient_card">
                    <h4 className="gradient_card_title">
                        Check out our most popular courses!
                    </h4>
                </div>
                <div className="animation_card main_card">
                    <img src={animationImg} className="card_img" alt="Animation Image" />
                    <h5 className="card_title">Animation</h5>
                    <p className="card_description">
                        Learn the latest animation 
                        techniques to create stunning 
                        motion design and captivate your 
                        audience.
                    </p>
                    <a href="#" className="card_link">Get Started</a>
                </div>
                <div className="design_card main_card">
                    <img src={designImg} className="card_img" alt="Design Image" />
                    <h5 className="card_title">Design</h5>
                    <p className="card_description">
                        Create beautiful, usable 
                        interfaces to help shape 
                        the future of how the web 
                        looks.
                    </p>
                    <a href="#" className="card_link">Get Started</a>
                </div>
                <div className="photography_card main_card">
                    <img src={photographyImg} className="card_img" alt="Photography Image" />
                    <h5 className="card_title">Photography</h5>
                    <p className="card_description">
                        Explore critical fundamentals
                        like lighting, composition, 
                        and focus to capture exceptional 
                        photos.
                    </p>
                    <a href="#" className="card_link">Get Started</a>
                </div>
                <div className="crypto_card main_card">
                    <img src={cryptoImg} className="card_img" alt="Crypto Image" />
                    <h5 className="card_title">Crypto</h5>
                    <p className="card_description">
                        All you need to know to get started 
                        investing in crypto. Go from beginner 
                        to advanced with this 54 hour course.
                    </p>
                    <a href="#" className="card_link">Get Started</a>
                </div>
                <div className="business_card main_card">
                    <img src={businessImg} className="card_img" alt="Business Image" />
                    <h5 className="card_title">Business</h5>
                    <p className="card_description">
                        A step-by-step playbook to help you start, 
                        scale, and sustain your business without 
                        outside investment.
                    </p>
                    <a href="#" className="card_link">Get Started</a>
                </div>
            </div>
        )
    }
}

export default GridCards;