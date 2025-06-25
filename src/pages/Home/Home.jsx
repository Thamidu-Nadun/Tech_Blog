import React from 'react';
import Hero from './Components/Hero/Hero';
import Podcast from './Components/Podcast/Podcast';
import WebStories from './Components/WebStories/WebStories';
import FeaturedArticles from './Components/FeaturedArticles/FeaturedArticles';
import Footer from '../../Components/Footer/Footer';
import Newsletter from './Components/Newsletter/Newsletter';
import Categories from './Components/Categories/Categories';
import RecentArticles from './Components/RecentArticles/RecentArticles';

function Home () {
  return (
    <div>
      <Hero />
      <Podcast />
      <WebStories />
      <FeaturedArticles autoScroll={true} autoScrollDuration={3000} />
      <RecentArticles />
      <Categories />
      <Newsletter />
    </div>
  );
}

export default Home;
