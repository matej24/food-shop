import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import './FoodCard.css';

const FoodCard = () => {
  return (
    <div className='food__card'>
      <div className='food__card__pic'>
        <img src='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872' />
      </div>
      <div className='food__card__content'>
        <p>Nesto {}</p>
        <p>Price: 30kn</p>
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
