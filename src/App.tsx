import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Calendar } from './components/Calendar/Calendar';
import { monthes } from './variables';
import './App.css';

function App() {
  let currentDate = new Date();
  const [month, setNewMonth] = useState<string>(monthes[currentDate.getMonth()]);
  const [year, setNewYear] = useState<number>(currentDate.getFullYear());
  
  console.log(month, year);
  return (
    <div className="App">
      <Header
        month={month}
        setNewMonth={setNewMonth}
        year={year}
        setNewYear={setNewYear}
       />
      <Calendar
        month={month}
        year={year}
      />
    </div>
  );
}

export default App;
