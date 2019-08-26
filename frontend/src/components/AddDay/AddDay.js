import React, { useState } from 'react';
import DatePicker from './DatePicker';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import xss from 'xss';


const AddDay = ({ comingFromHome, storeDay, setScreen, reloadDays }) => {
  const [title,  setTitle] = useState('');
  const [description,  setDescription] = useState('');
  const [datetime, setDatetime] = useState(new Date())

  const saveDayBtn = () => {
    const sanitizeTitle = xss(title);
    const sanitizeDescription = xss(description);
    storeDay({ 
      title: sanitizeTitle, 
      description: sanitizeDescription, 
      datetime 
    });
    reloadDays();
    setScreen('days');
  }

  const backBtn = () => {
    setScreen('days');
  }

  return (
    <div className="addDay"> 
      <div className="addDay__header">
        <DatePicker datetime={datetime} setDatetime={setDatetime} />
        <div className="addDay__btns">
          <button className="addDay__btn" onClick={saveDayBtn}>Save</button>
          {comingFromHome ? '' : <button className="addDay__btn" onClick={backBtn}>Back</button> }    
        </div>
      </div>


      {/* <h1 className="addDay__title">add a day</h1> */}
      <input type="text" onChange={e => setTitle(e.target.value)} placeholder="add a title if you want"/>
      {/* <h2 className="addDay__subtitle">description</h2> */}

      <ReactQuill 
        value={description}
        onChange={value => setDescription(value)}
        placeholder="add your entry here"
      />
    </div>
  );
};

export default AddDay;