import React from 'react';
import { Link } from 'react-router-dom';
import CartFood from '../../components/CartFood/CartFood';
import './Cart.css';

const Cart = ({ cartFood, setCartFood }) => {
  let totalPrice = 0;

  cartFood.forEach((value) => {
    totalPrice += value.foodPrice * value.numberOfPortions;
  });

  return (
    <div className='cart-container'>
      <div className='cart__card'>
        <div className='cart__card__heading'>
          <h3>Bill</h3>
        </div>
        <div className='cart__card__content'>
          <div className='cart__card__content__foodList'>
            {cartFood.map((food, index) => {
              return (
                <CartFood
                  key={index}
                  id={index}
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
            <button>ORDER NOW</button>
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
