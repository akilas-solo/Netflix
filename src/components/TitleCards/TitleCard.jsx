import { useEffect, useRef, useState } from 'react';
import './TitleCard.css'
// import cards_data from '../../assets/cards/Cards_data';
import {Link} from 'react-router-dom'

const TitleCard = ({title,category}) => {
  const [apiData,setApiData]=useState([])
  const cartRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjdmZmFmNmFiZjc1ZmY5ZmI3ZWE5NzY5NDQxNzU5NSIsIm5iZiI6MTcyNDE1ODI4Mi41OTEyOTQsInN1YiI6IjY2YzQ4ZGNiMmM0Zjk3YWY5Y2M5YmVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.udYUDofizvi4Dvk2-asHlL-sMXTA3hSLiXhyNKCsN2A'
    }
  };
   
const handleWheel=(event)=>{
  event.preventDefault();
  cartRef.current.scrollLeft += event.deltaY;
}
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
    cartRef.current.addEventListener('wheel',handleWheel);
  },[]);

  return (
  <div className='title-card'>
  <h2>{title?title:"popular on Netflix"}</h2>
        <div className="card-list" ref={cartRef}>
          {apiData.map((card,index)=>{
            return <Link to={`/player/${card.id}`} className='card' key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.poster_path}width={'300'} height={'300'}  alt="" />
              <p>{card.original_title}</p>

            </Link>
          })}
        </div>
    </div>
  )
}

export default TitleCard
