import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './components/homepage/Home';
import Feature from './components/Feature/Feature';
import HowItsWork from './components/howItsWork/HowItsWork';
import Group118 from './components/group118/Group118';
import BecomeAPartner from './components/becomeAPartner/BecomeAPartner';
import Section_blog from './components/blog/Section_blog';
import NewsLetter from './components/newsLetter/NewsLetter';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <div className='main'>
      <Navbar></Navbar>
    <Home></Home>
    <Feature></Feature>
    <HowItsWork></HowItsWork>
    <Group118></Group118>
    <BecomeAPartner></BecomeAPartner>
    <Section_blog></Section_blog>
    <NewsLetter></NewsLetter>
    <Footer></Footer>
    </div>
    </>
  );
}

export default App;
