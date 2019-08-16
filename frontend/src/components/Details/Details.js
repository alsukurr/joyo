import React from 'react';
import DateTime from './DateTime';
import xss from 'xss';

const Details = ({ showDays, currentDay }) => {
  if (!currentDay) {
    return <div></div>
  }
  return (
    <div className="days__details">
			<div className="days__content">
        <h2>{currentDay.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: xss(currentDay.description) }}></div>
      </div>
      <DateTime 
        datetime={currentDay.datetime}
      />
    </div>
  )
};

export default Details;
