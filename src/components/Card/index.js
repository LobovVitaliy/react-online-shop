import React from 'react';
import './index.scss';

const Card = (props) => {
    const card = props.card;
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={card.img} alt={card.title} />
            </div>
            <div className='card-block'>
                <h4 className='card-title'>{card.title}</h4>
                <p className='card-text'>{card.text}</p>
                <h4 className='card-price'>{card.price}</h4>
            </div>
        </div>
    );
}

export default Card;