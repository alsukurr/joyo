import React, { useState} from 'react'

import Details from './Details/Details.js'
import Nav from './Days/Nav.js'
import List from './Days/List.js'
import EmptyScreen from './Days/EmptyScreen';

import { Router } from '@reach/router'


const Days = ({ setScreen, days, deleteDay, reloadDays, loggedIn }) => {

  const [showDays, setShowDays] = useState(false)
  const [currentDay, setCurrentDay] = useState(null)
  // const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="days">

      <List
        showDays={showDays}
        setShowDays={setShowDays}
        days={days}
        // ShowDetails={showDetails}
        // setShowDetails={setShowDetails}
        setCurrentDay={setCurrentDay}
        setScreen={setScreen}
        loggedIn={loggedIn} />

      <Nav
        showDays={showDays}
        // setShowDetails={setShowDetails}
        setShowDays={setShowDays} />

      <Router>
        <Details
          showDays={showDays}
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
          deleteDay={deleteDay}
          reloadDays={reloadDays}
          days={days} 
          path="/:entryId"  />

        <EmptyScreen path="/" />
      </Router>

    </div>
  )
}

export default Days
