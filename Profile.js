import React from 'react'
export default function Profile() {
  return (
    <div className="wrapper">
    <div className="left">
      <img src="imag.jpg" alt="user" width={350} />
      <br/>
      <br/>
      <h2>DEVENDRA PRAJAPATI</h2>
      <br/> 
      <br/>
   
     <h3>MERN DEVELOPER</h3>
    </div>
    <div className="right">
      <div className="info">
        <h3>Information</h3>
        <div className="info_data">
          <div className="data">
            <h4>Email</h4>
            <p className='bold'>devendrarohit578@gmail.com</p>
          </div>
          <div className="data">
            <h4>Phone</h4>
            <p className='bold'>7309702576</p>
          </div>
        </div>
      </div>
      <div className="projects">
        <h3>Projects</h3>
        <div className="projects_data">
          <div className="data">
            <h4>Recent</h4>
            <p className='bold'>LOGIN AND SINUP PAGE</p>
          </div>
          <div className="data">
            <h4>Most Viewed</h4>
            <p className='bold'>CHAT APPLICATION</p>
          </div>
        </div>
      </div>
      <div className="social_media">
        <ul>
          <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
          <li><a href="#"><i className="fab fa-twitter" /></a></li>
          <li><a href="#"><i className="fab fa-instagram" /></a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}