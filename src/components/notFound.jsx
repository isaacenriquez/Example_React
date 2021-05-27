import React from "react"
import "./style/notFound.css"

const Notfound = props => {
    return(
        <React.Fragment>
            <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__title">{props.title || "404 not found"}</h1>
                </div>
                <img src="https://killedbygoogle.com/social/card.png" alt="" />
            </div>
        </React.Fragment>
    );
}

export default Notfound;