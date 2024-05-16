import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
  return (
    <Link to="/events" className="home__link">
      <div className="home">
        <img className="logo" src="/logo.svg" alt="Where Its at logo" />
        <h1>Where It’s @</h1>
        <h2>Ticketing made easy</h2>
      </div>
    </Link>
  );
};

export default Home;
