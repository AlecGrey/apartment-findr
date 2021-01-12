import React from 'react';

//stretch goal: adding map

const TileDetails = ({images},{title},{price},{square_feet},{bed},{bath},{description},{handleLike},{handleDislike},{back}) => {
    return (
        <div>
            <button onClick={back}>X</button>
            <div>
                <button> next image </button>   
                <div>{images}</div>
                <button> prev image </button>
            </div>
            <div>
                <button onClick={handleLike}> Like </button>
                <button onClick={handleDislike}> Dislike </button>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                    <li>{price}</li>
                    <li>{square_feet}</li>
                    <li>{bed}</li>
                    <li>{bath}</li>
                </ul>
            </div>
        </div>
    );
}

export default TileDetails;
