import React from 'react';
import CartFood from '../../components/CartFood/CartFood';
import './Cart.css';

const Cart = ({ cartFood }) => {
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
                  key={Math.random()}
                  foodName={food.foodName}
                  foodPrice={food.foodPrice}
                  numberOfPortions={food.numberOfPortions}
                />
              );
            })}
          </div>
        </div>
        <div className='cart__card__price'>
          <p className='cart__card__price__total'>Total:</p>
          <p>320kn</p>
        </div>
        <div className='cart__card__bottom'>
          <button>ORDER NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
