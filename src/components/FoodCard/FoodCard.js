import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import './FoodCard.css';

const FoodCard = ({ foodPic, foodName, foodPrice }) => {
  return (
    <div className='food__card'>
      <div className='food__card__pic'>
        <img src={`${foodPic}`} />
      </div>
      <div className='food__card__content'>
        <p>{foodName}</p>
        <p>Price: {foodPrice}kn</p>
      </div>
      <div className='food__card__options'>
        <button className='food__card__options-subButton'>-1</button>
        <h3>1</h3>
        <button className='food__card__options-addButton'>+1</button>
        <button className='food__card__options-buyButton'>
          Add to <MdShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
