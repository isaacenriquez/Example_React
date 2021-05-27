import React from "react"
import {Link} from "react-router-dom"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <Link to="/">
                        <img src="https://www.crearlogogratisonline.com/images/crearlogogratis_1024x1024_01.png" alt="" />
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;