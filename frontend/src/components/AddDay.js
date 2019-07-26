import React from 'react';

const AddDay = () => {
  const saveDay = () => {
    console.log('hello');
  }

  return (
    <div className="addDay">
      <h1 className="addDay__title">add a day</h1>
      <input type="text"/>
      <h2 className="addDay__subtitle">description</h2>
      <textarea name=""></textarea>
      <button className="addDay__btn" onClick={saveDay}>Save</button>
    </div>
  );
};

export default AddDay;