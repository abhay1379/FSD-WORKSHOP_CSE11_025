import React from 'react';
import nature from '../assets/nature.jpg';
import pic from '../assets/pic.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home">

      <h1>🌿 Welcome to Nature World 🌿</h1>

      <h2>Explore the Beauty of Nature</h2>

      <p className="intro">
        "Nature is the art of God. Enjoy the peace, beauty, and freshness of
        the natural world."
      </p>

      <div className="gallery">
        <div className="card">
          <img src={nature} className="base" alt="Nature" />
          <h3>Green Forest</h3>
          <p>Feel the freshness of beautiful green forests.</p>
        </div>

        <div className="card">
          <img src={pic} className="base" alt="Scenery" />
          <h3>Peaceful View</h3>
          <p>Enjoy the calm and peaceful beauty of nature.</p>
        </div>
      </div>

      <button className="btn">Explore More</button>

    </div>
  );
};

export default Home;