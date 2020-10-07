import React from 'react';
import './OrderCard.css';

const OrderCard = ({ totalPrice, orderedFood, time }) => {
  return (
    <div className='orderCard__card'>
      <div className='orderCard__card__heading'>
        <h1>ORDER STATUS: COMPLETED</h1>
        <h1>PRICE: {totalPrice}kn</h1>
      </div>
      <div className='orderCard__card__bottom'>
        <p>{orderedFood}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default OrderCard;
