import React from 'react';
import FoodList from '../../components/FoodList/FoodList';
import FoodSearch from '../../components/FoodSearch/FoodSearch';
import Spinner from '../../components/Spinner/Spinner';
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
    <>
      {allFood.length ? (
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
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Home;
