import React from 'react';
import './App.css';
import SignIn from './login/SignIn';
import Logo from './logo/Logo';

function App() {
  return (
    <div className='signIn'>
      <Logo/>
      <SignIn/>
    </div>
  )
}

export default App;
