"use client"
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Calendar from "react-calendar";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
const EventCalendar = () => {
    const [value, onchange] = useState<Value>(new Date());
  return (
      <div>
          <Calendar onChange={onchange} value={value}/>
    </div>
  )
}

export default EventCalendar