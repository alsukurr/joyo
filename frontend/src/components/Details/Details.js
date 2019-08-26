import React, { Fragment } from 'react';
import DateTime from './DateTime';
import EmptyScreen from './EmptyScreen';
import xss from 'xss';

const Details = ({ showDays, currentDay, setCurrentDay, reloadDays, setScreen, deleteDay }) => {
  if (!currentDay) {
    return <EmptyScreen />
  }

  const removeDayBtn = () => {
    if(!window.confirm('sure you wanna delete this?')) {
      return
    }
    
    deleteDay(currentDay.key);
    reloadDays();
    setScreen('days');
    setCurrentDay(null);
  }


  return (
    <div className="days__details">
      <div className="days__content">
        <h2>{currentDay.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: xss(currentDay.description) }}></div>
      </div>
      <div className="days__attr">
        <DateTime 
          datetime={currentDay.datetime}
        />
        <button className="days__btn btn" onClick={removeDayBtn}>Delete</button>
      </div>
    </div>
  )
};

export default Details;
