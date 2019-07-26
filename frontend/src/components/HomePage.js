import React from 'react';

import image from '../img/image.jpg';

const HomePage = ({ setScreen }) => {
  const addDay = () => {
    setScreen('addDay');
  }

  return (
    <header className="app__home home">
      <div className="home__logo">Oh little</div>

      <div className="home__container">
        <div className="home__item home__item--left">
          <img className="home__image" src={image} alt="beach"/>
        </div>
        <div className="home__item home__item--right">
          <p>log your activities in this fun to use app!</p>
          <button className="home__btn" onClick={addDay}>Start</button>
        </div>
      </div>
    </header>
  )
};

export default HomePage;
