import React from 'react';
import './Home.css';
import HomeHero from '../../components/HomeHero/HomeHero';
import HomeAbout from '../../components/HomeAbout/HomeAbout';
import HomeServices from '../../components/HomeServices/HomeServices';
import HomePortfolio from '../../components/HomePortfolio/HomePortfolio';
import HomeTestimonials from '../../components/HomeTestimonials/HomeTestimonials';
import HomeCTA from '../../components/HomeCTA/HomeCTA';
import HomeNewsletter from '../../components/HomeNewsletter/HomeNewsletter';

const Home = () => {
  return (
    <div className='home'>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomePortfolio />
      <HomeTestimonials />
      <HomeCTA />
      <HomeNewsletter />
    </div>
  )
}

export default Home