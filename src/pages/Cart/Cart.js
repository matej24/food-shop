import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CartFood from '../../components/CartFood/CartFood';
import Spinner from '../../components/Spinner/Spinner';
import axios from '../../axios';
import './Cart.css';

const Cart = ({ cartFood, setCartFood }) => {
  let history = useHistory();
  let totalPrice = 0;
  let listOfOrderedFood = [];

  const [procOrder, setProcOrder] = useState(false);

  cartFood.forEach((value) => {
    totalPrice += value.foodPrice * value.numberOfPortions;
  });

  const handlePostOrder = () => {
    setProcOrder(true);
    cartFood.forEach((food) => {
      listOfOrderedFood.push(food.foodName);
    });
    const helperList = listOfOrderedFood.join();
    const data = {
      orderedFood: helperList,
      totalPrice: totalPrice,
      time: Date().substring(0, 24),
    };
    sendPostRequest(data);
    setTimeout(cleanUp, 3000);
  };

  const sendPostRequest = async (newPost) => {
    try {
      await axios.post('/order', newPost);
    } catch (err) {
      console.error(err);
    }
  };

  const cleanUp = () => {
    setCartFood([]);
    setProcOrder(false);
    history.push('/orders');
  };

  return (
    <div className='cart__page'>
      <div className='cart__card'>
        <div className='cart__card__heading'>
          <h3>Bill</h3>
        </div>
        <div className='cart__card__content'>
          <div className='cart__card__content__foodList'>
            {!procOrder ? (
              cartFood.map((food) => {
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
              })
            ) : (
              <Spinner />
            )}
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
