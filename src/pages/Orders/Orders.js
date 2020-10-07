import React from 'react';
import { useEffect, useState } from 'react';
import OrderCard from '../../components/OrderCard/OrderCard';
import Spinner from '../../components/Spinner/Spinner';
import axios from '../../axios';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/order').then((response) => {
      setOrders(response.data.slice(1).slice(-5).reverse());
    });
  }, []);

  const listOfOrders = orders.map((order) => {
    return (
      <OrderCard
        key={order._id}
        totalPrice={order.totalPrice}
        orderedFood={order.orderedFood}
        time={order.time}
      />
    );
  });

  return (
    <div className='orders__page'>
      {listOfOrders.length ? listOfOrders : <Spinner />}
    </div>
  );
};

export default Orders;
