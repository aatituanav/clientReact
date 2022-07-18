import React from "react";

const Card = ({ user }) => {
    return (
        <div className="w5 h-50 bg-light-green br3 pa3 ma2 grow bw2 shadow-5 tc flex flex-column">
            <div className="h-50">
                <img className="h-100 br3" alt='photo' src={user["avatar"]} />
            </div>
            <div className="h-50">
                <h2>{user["name"]}</h2>
                <p>{user["email"]}</p>
                <p>{user["position"]}</p>
            </div>
        </div> 
    );
}

export default Card;
