import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <img className="park" src={props.picture}/>
            <h2>{props.name}</h2>
            <h3>{props.address}</h3>
            <a href={props.link}>
                <button>Directions</button>
            </a>
        </div>
    );
};

export default Card;