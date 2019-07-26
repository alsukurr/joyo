import React, { useState } from 'react';
import './css/style.css';

import HomePage from './components/HomePage';
import AddDay from './components/AddDay';

const storeDay = ({title, description}) => {
  console.log(title, description, 'ji');
};

const App = () => {
  // set it back to home
  const [screen, setScreen] = useState('addDay');

  return (
    <div className="app">
      { screen === 'home' && <HomePage setScreen = {setScreen} /> }
      { screen === 'addDay' && <AddDay storeDay={storeDay} />}
    </div>
  );
}

export default App;
