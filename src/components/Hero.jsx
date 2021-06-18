import React from "react"
import "./style/Hero.css"

const Hero = props =>{
    return(
        <React.Fragment>
            <div className="Hero">
                <div className="Hero__color_filter" style={{height:props.h}}></div>
                <div className="Hero__img" style={{height:props.h}}>
                    <img src={"http://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png"} alt="o no" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Hero