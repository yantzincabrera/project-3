import React from 'react';
import {Redirect} from 'react-router-dom';
import "./Cards.css"


export const Card = props => {
    return (
        <div>
        <div className="Card">
            <img src="..." class="Card-img-top" alt="..."></img>
        <div className="Card-body">
            <h5 className="Card-title">Card title</h5>
            <p className="Card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
    );
}