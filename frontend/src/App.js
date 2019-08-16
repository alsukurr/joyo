import React, { useState, useEffect } from 'react';
import './css/style.css';
import { openDB } from 'idb';

import HomePage from './components/HomePage';
import AddDay from './components/AddDay/AddDay';
import Days from './components/Days';


const initDatabase  = async () => {
  const dbName = 'joyo'
  const version = 1 //versions start at 1

  const db = await openDB(dbName, version, {
    upgrade(db, oldVersion, newVersion, transaction) {
      const store = db.createObjectStore
      ('days', { autoIncrement: true })
    }
  })

  return db;
}

const initDays = async () => {
  const db = await initDatabase();
  const tx = await db.transaction('days', 'readonly');
  const days = tx.objectStore('days').getAll();
  await tx.done

  return days
}

const getDays = async () => {
  const days = await initDays();
  // sort the dys by the dates
  // console.log(days);
  days.sort((a,b) => {
    return new Date(b.datetime) - new Date(a.datetime)
  })
  return days 
}

const storeDay = async (day) => {  
  const db = await initDatabase();
  const tx = await db.transaction('days', 'readwrite')
  const store = await tx.objectStore('days');

  await store.put(day);
  await tx.done;
};

const App = () => {
  // set it back to home
  const [screen, setScreen] = useState('days'); 
  const [days, setDays] = useState([]); 

  useEffect(() => {
    (async () => {
      const days = await getDays();
      setDays(days);
    })();
  }); 


  return (
    <div className="app">
      { screen === 'home' && <HomePage setScreen = {setScreen} /> }
      { screen === 'addDay' && <AddDay storeDay={storeDay} setScreen={setScreen} />}
      { screen === 'addDayFromHome' && <AddDay comingFromHome storeDay={storeDay} setScreen={setScreen} />}
      { screen === 'days' && <Days days={days} setScreen={setScreen} />}
    </div>
  );
}

export default App;
