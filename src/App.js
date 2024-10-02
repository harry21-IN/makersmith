import React from 'react';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Services from './components/Services';
import UserForm from './components/UserForm';
import Scrolling_an1 from './components/Scrolling_an1';
import './App.css';

function App(){
  return (
    <div className='App'>
      <Navbar />
      <Title />
      {/* <Scrolling_an1 /> */}
      <Services />
      <UserForm />
    </div>
  )
};

export default App;