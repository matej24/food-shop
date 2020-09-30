import React from 'react';
import FoodList from '../../components/FoodList/FoodList';
import FoodSearch from '../../components/FoodSearch/FoodSearch';
import './Home.css';

const Home = () => {
  return (
    <div className='home__page'>
      <FoodSearch />
      <FoodList />
    </div>
  );
};

export default Home;
