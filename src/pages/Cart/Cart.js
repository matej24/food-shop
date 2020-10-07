import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartFood from '../../components/CartFood/CartFood';
import axios from '../../axios';
import './Cart.css';

const Cart = ({ cartFood, setCartFood }) => {
  let totalPrice = 0;
  let listOfOrderedFood = [];

  const [orderedFoodList, setOrderedFoodList] = useState('');

  cartFood.forEach((value) => {
    totalPrice += value.foodPrice * value.numberOfPortions;
  });

  const handlePostOrder = () => {
    cartFood.forEach((food) => {
      listOfOrderedFood.push(food.foodName);
    });
    const helperList = listOfOrderedFood.join();
    setOrderedFoodList(helperList);
    console.log('ordered list 1.', orderedFoodList);
    const data = {
      orderedFood: orderedFoodList,
      totalPrice: totalPrice,
      time: Date(),
    };
    console.log('data', data);
    // sendPostRequest(data);
    setOrderedFoodList('');
    console.log(orderedFoodList);
  };

  const sendPostRequest = async (newPost) => {
    try {
      const resp = await axios.post('/order', newPost);
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='cart-container'>
      <div className='cart__card'>
        <div className='cart__card__heading'>
          <h3>Bill</h3>
        </div>
        <div className='cart__card__content'>
          <div className='cart__card__content__foodList'>
            {cartFood.map((food) => {
              return (
                <CartFood
                  key={food.foodId}
                  foodId={food.foodId}
                  foodName={food.foodName}
                  foodPrice={food.foodPrice}
                  numberOfPortions={food.numberOfPortions}
                  cartFood={cartFood}
                  setCartFood={setCartFood}
                />
              );
            })}
          </div>
        </div>
        <div className='cart__card__price'>
          <p className='cart__card__price__total'>Total:</p>
          <p>{totalPrice} kn</p>
        </div>
        <div className='cart__card__bottom'>
          {cartFood.length ? (
            <button onClick={handlePostOrder}>ORDER NOW</button>
          ) : (
            <Link to='/'>
              <p>Maybe put something in your Cart :)</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
