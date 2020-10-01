import React from 'react';
import FoodCard from '../FoodCard/FoodCard';
import './FoodList.css';

const FoodList = ({ allFood }) => {
  const foodList = allFood.map((food) => {
    return (
      <FoodCard
        key={food._id}
        foodName={food.title}
        foodPrice={food.price}
        foodPic={food.image}
      />
    );
  });

  return <div className='foodList'>{foodList}</div>;
};

export default FoodList;
