import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import './CartFood.css';

const CartFood = ({
  foodName,
  foodPrice,
  numberOfPortions,
  cartFood,
  setCartFood,
}) => {
  const handleRemoveFood = () => {
    setCartFood(cartFood.filter((el) => el.id !== cartFood.id));
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
