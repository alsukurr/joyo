import React, { Fragment } from 'react';
import DateTime from './DateTime';
import xss from 'xss';

const Details = ({ showDays, currentDay, reloadDays, setScreen, deleteDay }) => {
  if (!currentDay) {
    return <div></div>
  }

  const removeDayBtn = () => {
    deleteDay(currentDay.key);
    reloadDays();
    setScreen('days');
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
