import React, { useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className='App'>
      {!isSignIn ? (
        <SignIn setIsSignIn={setIsSignIn} />
      ) : (
        <>
          <Navbar setIsSignIn={setIsSignIn} />
          <Home />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
