import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './components/homepage/Home';
import Feature from './components/Feature/Feature';
import HowItsWork from './components/howItsWork/HowItsWork';

function App() {
  return (
    <>
    <div className='main'>
      <Navbar></Navbar>
    <Home></Home>
    {/* <Feature></Feature>
    <HowItsWork></HowItsWork> */}
    {/* <div style={{width:"100vw",height:"100vh",background:"red",}}>sda</div> */}
    </div>
    </>
  );
}

export default App;
