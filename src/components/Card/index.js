import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

const Card = (props) => {
    const card = props.card;
    return (
        <Link className='card' to={`/products/${card._id}`}>
            <div className='card-image'>
                <img src={`/static/images/${card._id}`} alt={card.title} />
            </div>
            <div className='card-block'>
                <h4 className='card-title'>{card.title}</h4>
                <p className='card-text'>{card.text}</p>
                <h4 className='card-price'>{card.price}</h4>
            </div>
        </Link>
    );
}

export default Card;