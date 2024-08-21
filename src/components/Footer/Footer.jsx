// import React from 'react'
import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import  instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer_icons">
      <img src={youtube_icon} alt="" />
      <img src={twitter_icon} alt="" />
      <img src={instagram_icon} alt="" />
      <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Auto Description</li>
        <li>Help Center</li>
        <li>Auto Description</li>
        <li>Gift Card</li>
        <li>Medea Center</li>
        <li>Invester Relations</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>c 1997-2024 Netflix, Inc</p>
    </div>
  )
}

export default Footer
