import React from 'react';
import FoodCard from '../FoodCard/FoodCard';
import './FoodList.css';

const FoodList = ({
  allFood,
  filteredFood,
  searchFoodValue,
  setCartFood,
  cartFood,
}) => {
  const foodList = (typeOfList) =>
    typeOfList.map((food) => {
      return (
        <FoodCard
          key={food._id}
          foodName={food.title}
          foodPrice={food.price}
          foodPic={food.image}
          setCartFood={setCartFood}
          cartFood={cartFood}
        />
      );
    });

  const checkFoodList = searchFoodValue
    ? foodList(filteredFood)
    : foodList(allFood);

  return <div className='foodList'>{checkFoodList}</div>;
};

export default FoodList;
