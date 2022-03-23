import React from 'react'
import Footer from '../Components/Footer'
import CalltoActionSection from '../Components/home/CalltoActionSection';
import ContactInfo from '../Components/home/ContactInfo';
import ShopSection from '../Components/home/ShopSection';

const Home = () => {
  window.scrollTo(0,0);
  return (
    <>
      <ShopSection/>
      <CalltoActionSection/>
      <ContactInfo/>
      <Footer/>
    </>
  )
}

export default Home