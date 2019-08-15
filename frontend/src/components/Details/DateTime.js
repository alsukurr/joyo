// import React from 'react'

// const DateTime = ({ datetime }) => {
//   return (    
//     <div>
//       {datetime}
//       date
//     </div>
//   )
// }

// export default DateTime

import React from 'react';

const DateTime = ({ datetime }) => {
  // console.log(datetime)

  const formatTime = date => {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes
    return hours + ':' + minutes + ' ' + ampm
  }

  const monthNames = [
    'JAN', 'FEB', 'MAR',
    'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP',
    'OCT', 'NOV', 'DEC']

  return (
    <div className="days__datetime">
      <div>{formatTime(datetime)}</div>
      <span>{datetime.getDate()}</span>
      <span> {monthNames[datetime.getMonth()]}</span>
      
    </div>
  )
}

export default DateTime