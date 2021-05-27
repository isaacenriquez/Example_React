import React from "react"
import Heroimg from "../images/Heroimg.jpg"
import "./style/Hero.css"

const Hero = props =>{
    return(
        <React.Fragment>
            <div className="Hero">
                <div className="Hero__color_filter" style={{height:props.h}}></div>
                <div className="Hero__img" style={{height:props.h}}>
                    <img src={Heroimg} alt="o no" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Hero;