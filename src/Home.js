import React from 'react';
import FeatureProduct from './components/FeatureProduct';
import HeroSection from "./components/HeroSection";
import Services from './components/Services';
import Trusted from './components/Trusted';
import Footer from './components/Footer';
const Home = () => {
  return (
    <>
      <HeroSection name='Home'></HeroSection>
      <FeatureProduct></FeatureProduct>
      <Services></Services>
      <Trusted></Trusted>
    </>
  )
}

export default Home
