// import React from 'react'
import './home.css'
import Navbar from '../../components/Navbar/Navbar';
import hero_title from "../../assets/hero_title.png";
import hero_banner from "../../assets/hero_banner.jpg";
import paly_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCards/TitleCard';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In incidunt,
             nihil esse dolore id possimus aspernatur quo nulla dignissimos officiis 
             placeat hic!
             Qui corporis
             amet porro eius ea illum consectetur.</p>
        <div className="hero_btns">
          <button className='btn'><img src={paly_icon} alt="" />Play</button>
          <button className='btn dark'><img src={info_icon} alt="" />More Info</button>
        </div>
        </div>
      </div>
      <div className="more-cards">
      <TitleCard title={"Top Rated"} category={"top_rated"}/>
      <TitleCard title={"Popular"} category={"popular"}/>
      <TitleCard title={"Now Playing"} category={"now_playing"}/>
      <TitleCard title={"Upcoming"} category={"upcoming"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
