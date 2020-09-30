import React from 'react';
import FoodCard from '../FoodCard/FoodCard';
import './FoodList.css';

const FoodList = () => {
  return (
    <div className='foodList'>
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
    </div>
  );
};

export default FoodList;
