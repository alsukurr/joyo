import React from 'react';

const List = ({ days, setCurrentDay, setScreen, loggedIn }) => {
  const monthNames = [
    'JAN', 'FEB', 'MAR',
    'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP',
    'OCT', 'NOV', 'DEC']

    // console.log(!loggedIn);
  return (
    <div className="days__container">
      <ul className="days__list">
        {days.map((day, index) => {
          return <li 
            key={index}
            className="days__item"
            onClick={() => {
              // setShowDetails(!showDetails);
              setCurrentDay(day);
              // setShowDetails(false);
            }}>
            <span>{day.title}</span>
            <div>
              <span>{day.datetime.getDate()} </span>
              <span>{monthNames[day.datetime.getMonth()]}</span>
            </div>
          </li>
        })}
      </ul>
      <button 
        className="days__add-btn"
        onClick={() => {
          (!loggedIn) ? setScreen('login') : setScreen('addDay');
        }}
      >
        +
      </button>
    </div>
  )
};

export default List;
