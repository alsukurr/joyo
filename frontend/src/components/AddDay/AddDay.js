import React, { useState } from 'react';
import DatePicker from './DatePicker';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


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


      {/* <h1 className="addDay__title">add a day</h1> */}
      <input type="text" onChange={e => setTitle(e.target.value)} placeholder="add a title if you want"/>
      {/* <h2 className="addDay__subtitle">description</h2> */}

      <ReactQuill 
        value={description}
        onChange={value => setDescription(value)}
        placeholder="add your entry here"
      />

      <button className="addDay__btn" onClick={saveDay}>Save</button>
    </div>
  );
};

export default AddDay;