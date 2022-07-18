import React from "react";
import Card from '../components/card.js';


const CardList = ({ users }) => {

    return (
        <div className="flex flex-wrap justify-center overflow-y-scroll vh-75">
            {
                Object.keys(users).map((keyuser, i) => {
                    return <Card
                        user={users[keyuser]}
                        key={i}
                    />
                })
            }
        </div>
    );
}

export default CardList;