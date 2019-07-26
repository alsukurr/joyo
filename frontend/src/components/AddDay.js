import React, { useState } from 'react';

const AddDay = ({ storeDay }) => {
  const [title,  setTitle] = useState('');
  const [description,  setDescription] = useState('');

  const saveDay = () => {
    storeDay({title, description});
  }

  return (
    <div className="addDay">
      <h1 className="addDay__title">add a day {title}</h1>
      <input type="text" onChange={e => setTitle(e.target.value)}/>
      <h2 className="addDay__subtitle">description {description}</h2>
      <textarea name="" onChange={e => setDescription(e.target.value)}></textarea>
      <button className="addDay__btn" onClick={saveDay}>Save</button>
    </div>
  );
};

export default AddDay;