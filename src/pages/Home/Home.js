import React from 'react';
import FoodList from '../../components/FoodList/FoodList';
import FoodSearch from '../../components/FoodSearch/FoodSearch';
import './Home.css';

const Home = ({
  allFood,
  setSearchFoodValue,
  searchFoodValue,
  filteredFood,
  setCartFood,
  cartFood,
}) => {
  return (
    <div className='home__page'>
      <FoodSearch
        setSearchFoodValue={setSearchFoodValue}
        searchFoodValue={searchFoodValue}
      />
      <FoodList
        allFood={allFood}
        filteredFood={filteredFood}
        searchFoodValue={searchFoodValue}
        setCartFood={setCartFood}
        cartFood={cartFood}
      />
    </div>
  );
};

export default Home;
