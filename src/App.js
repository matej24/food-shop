import React, { useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import SignIn from './pages/SignIn/SignIn';
import './App.css';

function App() {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div className='App'>
      {!isSignIn ? (
        <SignIn setIsSignIn={setIsSignIn} />
      ) : (
        <>
          <Navbar setIsSignIn={setIsSignIn} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
