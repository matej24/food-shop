import React from 'react';
import FoodList from '../../components/FoodList/FoodList';
import FoodSearch from '../../components/FoodSearch/FoodSearch';
import './Home.css';

const Home = ({ allFood }) => {
  return (
    <div className='home__page'>
      <FoodSearch />
      <FoodList allFood={allFood} />
    </div>
  );
};

export default Home;
