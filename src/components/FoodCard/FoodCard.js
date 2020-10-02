import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import './FoodCard.css';

const FoodCard = ({ foodPic, foodName, foodPrice, setCartFood, cartFood }) => {
  const [numberOfPortions, setNumberOfPortions] = useState(1);

  const handleDecrement = () => {
    if (numberOfPortions > 1) {
      setNumberOfPortions(numberOfPortions - 1);
    }
  };

  const handleAddToCard = () => {
    setCartFood([
      ...cartFood,
      {
        foodName: foodName,
        foodPrice: foodPrice,
        numberOfPortions: numberOfPortions,
      },
    ]);
  };

  return (
    <div className='food__card'>
      <div className='food__card__pic'>
        <img src={`${foodPic}`} alt='' />
      </div>
      <div className='food__card__content'>
        <p>{foodName}</p>
        <p>Price: {foodPrice}kn</p>
      </div>
      <div className='food__card__options'>
        <button
          className='food__card__options-subButton'
          onClick={handleDecrement}
        >
          -1
        </button>
        <h3>{numberOfPortions}</h3>
        <button
          className='food__card__options-addButton'
          onClick={() => setNumberOfPortions(numberOfPortions + 1)}
        >
          +1
        </button>
        <button
          className='food__card__options-buyButton'
          onClick={handleAddToCard}
        >
          Add to <MdShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
