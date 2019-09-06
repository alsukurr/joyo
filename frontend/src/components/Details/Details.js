import React, { Fragment } from 'react';
import DateTime from './DateTime';
import xss from 'xss';
import { navigate } from '@reach/router'
import EmptyScreen from '../Days/EmptyScreen';

const Details = ({ showDays, currentDay, setCurrentDay, reloadDays, setScreen, deleteDay, entryId, days }) => {
  if (!currentDay) {
    const day = days.filter(item => {
      if (item.key === parseInt(entryId)) return true
      return false
    })[0]
    setCurrentDay(day)
    return <EmptyScreen />
  }

  const removeDayBtn = () => {
    if(!window.confirm('sure you wanna delete this?')) {
      return
    }
    
    deleteDay(currentDay.key);
    reloadDays();
    navigate('/entries');
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
