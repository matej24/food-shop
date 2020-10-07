import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import './CartFood.css';

const CartFood = ({
  foodName,
  foodPrice,
  numberOfPortions,
  setCartFood,
  foodId,
}) => {
  const handleRemoveFood = () => {
    setCartFood((cartFood) => cartFood.filter((el) => el.foodId !== foodId));
  };

  return (
    <div className='cartFood-container'>
      <p>{foodName}</p>
      <p>x{numberOfPortions}</p>
      <p>{foodPrice}kn</p>
      <p>
        <MdDeleteForever
          className='cartFood__icon'
          onClick={handleRemoveFood}
        />
      </p>
    </div>
  );
};

export default CartFood;
