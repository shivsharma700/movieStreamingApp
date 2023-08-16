import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './style.scss'
import useFetch from '../../../hooks/useFetch';
import { useEffect } from 'react';

import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state)=>state.home)

  const {data, loading} = useFetch("/movie/upcoming");

  useEffect(() => {
    const length = data?.results?.length     // result array length
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * length)]?.backdrop_path;
    setBackground(bg);
  },[data])

  const searchQueryHandler = (event) =>{
    if(event.key === 'Enter' && query.length > 0){
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className="heroBanner">
      {!loading && <div className="backdrop_img">
        <Img src={background}/>
      </div>}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover.
            Explore now.
          </span>
          <div className="searchInput">
            <input
              type='text'
              placeholder='Search for a movie or TV show....'
              onChange={(e)=> setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner