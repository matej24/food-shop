import React, { useEffect, useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import axios from './axios';
import './App.css';

function App() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [allFood, setAllFood] = useState([]);

  useEffect(() => {
    axios.get('/food').then((response) => {
      setAllFood(response.data);
    });
  }, []);

  console.log(allFood);

  return (
    <div className='App'>
      {!isSignIn ? (
        <SignIn setIsSignIn={setIsSignIn} />
      ) : (
        <>
          <Navbar setIsSignIn={setIsSignIn} />
          <Home allFood={allFood} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
