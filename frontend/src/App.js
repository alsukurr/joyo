import React, { useState, useEffect } from 'react';
import './css/style.css';
import { openDB } from 'idb';
import { Router } from '@reach/router';


import HomePage from './components/HomePage';
import AddDay from './components/AddDay/AddDay';
import Days from './components/Days';
import Login from './components/Login';


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

const initKeys = async () => {
  const db = await initDatabase();
  const tx = await db.transaction('days', 'readonly');
  const keys = tx.objectStore('days').getAllKeys();
  await tx.done

  return keys
}

const getDays = async () => {
  let days = await initDays();
  let keys = await initKeys();
   
  days.forEach((day, index) => {
    day.key = keys[index];
  })

  // sort the dys by the dates
  // console.log(days);
  days = days.sort((a,b) => {
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
  const [loggedIn, setLoggedIn] = useState(false); 

  const reloadDays = async () => {
    const days = await getDays();
    setDays(days);
  }

  const deleteDay = async key => {
    const db = await initDatabase();
    const tx = await db.transaction('days', 'readwrite')
    const store = await tx.objectStore('days');
    console.log(key);
    await store.delete(key)
    await tx.done
  
    reloadDays();
    setScreen('days');
  }

  useEffect(() => {
    (async () => {
      reloadDays();
    })();
  }); 


  return (
    <div className="app">
      <Router>
        
        <HomePage 
          path="/" /> 

        <AddDay 
          storeDay={storeDay}
          path="new-entry"
          reloadDays={reloadDays} />

        <AddDay 
          comingFromHome 
          storeDay= {storeDay}
          path="first-entry"
          reloadDays={reloadDays} />

        <Days 
          days={days}
          path="entries/*"
          reloadDays={reloadDays} 
          deleteDay={deleteDay}
          loggedIn={loggedIn} />

        <Login 
          path="login" />

      </Router>

    </div>
  );
}

export default App;
