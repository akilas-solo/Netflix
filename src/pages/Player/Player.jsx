// import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useEffect, useState} from 'react';
import {useParams,useNavigate } from 'react-router-dom'

const Player = () => {
 
   const navigate=useNavigate();
   const {id} = useParams()
   
  const [apiData,setApidata]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjdmZmFmNmFiZjc1ZmY5ZmI3ZWE5NzY5NDQxNzU5NSIsIm5iZiI6MTcyNDE1ODI4Mi41OTEyOTQsInN1YiI6IjY2YzQ4ZGNiMmM0Zjk3YWY5Y2M5YmVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.udYUDofizvi4Dvk2-asHlL-sMXTA3hSLiXhyNKCsN2A'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApidata(response.results[0]))
    .catch(err => console.error(err));
  });
  
  return (
    <div className='Player'>
     <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%'
       src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameborder="0" allowFullScreen></iframe>
        <div className="player-info">
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player
