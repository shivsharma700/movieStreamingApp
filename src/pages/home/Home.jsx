import React from 'react'

//css import
import './style.scss'

//components import
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './Trending/Trending';
import Popular from './Popular/Popular';
import TopRated from './topRated/TopRated';

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      < Popular/>
      <TopRated/>
    </div>
  )
}

export default Home