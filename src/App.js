import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import axios from './axios';
import './App.css';

function App() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [allFood, setAllFood] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]);
  const [searchFoodValue, setSearchFoodValue] = useState('');
  const [cartFood, setCartFood] = useState([]);

  useEffect(() => {
    axios.get('/food').then((response) => {
      setAllFood(response.data);
    });
  }, []);

  useEffect(() => {
    const result = allFood.filter((food) =>
      food.title.toLowerCase().includes(searchFoodValue)
    );
    setFilteredFood(result);
  }, [searchFoodValue, allFood]);

  console.log(allFood);

  return (
    <div className='App'>
      {!isSignIn ? (
        <SignIn setIsSignIn={setIsSignIn} />
      ) : (
        <>
          <Navbar setIsSignIn={setIsSignIn} />
          <Switch>
            <Route
              path='/'
              exact
              render={(props) => (
                <Home
                  {...props}
                  allFood={allFood}
                  filteredFood={filteredFood}
                  setSearchFoodValue={setSearchFoodValue}
                  searchFoodValue={searchFoodValue}
                  setCartFood={setCartFood}
                  cartFood={cartFood}
                />
              )}
            />
            <Route path='/about' exact component={About} />
          </Switch>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
