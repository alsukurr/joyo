import React, { useState } from 'react';
import DatePicker from './AddDay/DatePicker';


const AddDay = ({ storeDay, setScreen }) => {
  const [title,  setTitle] = useState('');
  const [description,  setDescription] = useState('');
  const [datetime, setDatetime] = useState(new Date())

  const saveDay = () => {
    storeDay({ title, description, datetime });
    setScreen('days');
  }

  return (
    <div className="addDay"> 

      <DatePicker datetime={datetime} setDatetime={setDatetime} />


      <h1 className="addDay__title">add a day {title}</h1>
      <input type="text" onChange={e => setTitle(e.target.value)}/>
      <h2 className="addDay__subtitle">description {description}</h2>
      <textarea name="" onChange={e => setDescription(e.target.value)}></textarea>
      <button className="addDay__btn" onClick={saveDay}>Save</button>
    </div>
  );
};

export default AddDay;