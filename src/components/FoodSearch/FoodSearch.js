import React from 'react';
import './FoodSearch.css';

const FoodSearch = ({ setSearchFoodValue, searchFoodValue }) => {
  return (
    <div className='food__search'>
      <input
        type='text'
        placeholder='Search food...'
        value={searchFoodValue}
        onChange={(e) => setSearchFoodValue(e.target.value)}
      />
    </div>
  );
};

export default FoodSearch;
