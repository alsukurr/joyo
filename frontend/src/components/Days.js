import React, { useState} from 'react'

import Details from './Details/Details.js'
import Nav from './Days/Nav.js'
import List from './Days/List.js'

const Days = ({ setScreen, days }) => {

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
        setScreen={setScreen} />

      <Nav
        showDays={showDays}
        // setShowDetails={setShowDetails}
        setShowDays={setShowDays} />

      <Details
        showDays={showDays}
        currentDay={currentDay} />

    </div>
  )
}

export default Days
