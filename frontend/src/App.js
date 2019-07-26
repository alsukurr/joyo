import React, { useState } from 'react';
import './css/style.css';

import HomePage from './components/HomePage';
import AddDay from './components/AddDay';


const App = () => {
  const [screen, setScreen] = useState('addDay');

  return (
    <div className="app">
      { screen === 'home' && <HomePage setScreen = {setScreen} /> }
      { screen === 'addDay' && <AddDay />}
    </div>
  );
}

export default App;
