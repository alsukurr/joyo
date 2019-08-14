import React from 'react';
// import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import MomentUtils from '@date-io/moment';

// const DatePicker = ({ datetime, setDatetime }) => {
//   // const [selectedDate, handleDateChange] = useState(new Date());
//   const setNewDatetime = newDatetime => {
//     setDatetime(newDatetime.toDate());
//   }

//   return (
//     <MuiPickersUtilsProvider utils={MomentUtils}>
//       <DateTimePicker value={datetime} onChange={setNewDatetime} />
//     </MuiPickersUtilsProvider>
//   )
// }

// export default DatePicker

import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const DatePicker = ({ datetime, setDatetime }) => {
  const setNewDatetime = newDatetime => {
    // setDatetime(newDatetime.toDate())
    setDatetime(newDatetime.toDate())
    // console.log(newDatetime);
    // console.log(newDatetime.toDate())
    // console.log(setDatetime(newDatetime.toDate()));
  }

  return (
    <div >
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePicker value={datetime} onChange={setNewDatetime} />
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default DatePicker
