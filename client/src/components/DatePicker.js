import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import {useSelector} from 'react-redux' 
import moment from "moment";

function MyApp() {
  
  var disabledDates = [];
  const {order} = useSelector(state => state.getOrderByHostelIdReducer) ;
  
     order && order.forEach(item => {
       
         var temp = {
          year: parseInt(moment(item.booking).format("YYYY")),
          month: parseInt(moment(item.booking).format("MM")),
          day: parseInt(moment(item.booking).format("DD"))
         }
         disabledDates.push(temp);
     })
 

   
    
    
  const [selectedDay, setSelectedDay] = useState();

  const handleDisabledSelect = disabledDay => {
    console.log('Tried selecting a disabled day', disabledDay);
  };

  const handleChnageDate = (date)=> {
  
    var dateVal = `${date.year}-${date.month}-${date.day}`
      var item = new Date(dateVal.toString()).getTime() 
    
    localStorage.setItem('date',item)
    setSelectedDay(date);
  }
  
  return (
    <Calendar
      value={selectedDay}
      onChange={handleChnageDate}
      disabledDays={disabledDates} // here we pass them
      onDisabledDayError={handleDisabledSelect} // handle error
      shouldHighlightWeekends
    />
  );
}

export default MyApp ;