import React, { useState } from 'react';
import { AddForm } from '../AddForm/AddForm';
import { monthes, days, years } from '../../variables';
import './Header.scss';

type Props = {
  month: string,
  setNewMonth: (month: string) => void,
  year: number,
  setNewYear: (year: number) => void,
}

export const Header: React.FC<Props> = ({
  month,
  setNewMonth,
  year,
  setNewYear
}) => {
  // let currentDate = new Date();
  const [openAddWindow, setOpenAddWindow] = useState<boolean>(false);
  const [openSearchWindow, setOpenSearchWindow] = useState<boolean>(false);
  // const [month, setNewMonth] = useState(monthes[currentDate.getMonth()]);
  // const [year, setNewYear] = useState(currentDate.getFullYear());

  const addHandler = () => {
    setOpenAddWindow(!openAddWindow);
  };

  const searchHandler = () => {
    setOpenSearchWindow(!openSearchWindow);
  };

  const handlerPrevButton = () => {
    const date = new Date(year, (monthes.indexOf(month)) - 1);
    setNewMonth(monthes[date.getMonth()]);
    setNewYear(date.getFullYear());
  };

  const handlerNextButton = () => {
    const date = new Date(year, (monthes.indexOf(month)) + 1);
    setNewMonth(monthes[date.getMonth()]);
    setNewYear(date.getFullYear());
  };

  const handlerYearSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const date = new Date(+event.target.value, monthes.indexOf(month));
    setNewYear(date.getFullYear());
  }

  const handlerMonthSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const date = new Date(year, monthes.indexOf(event.target.value));
    setNewMonth(monthes[date.getMonth()]);
  }

  console.log(month, monthes.indexOf(month));

  return (
    <div className="header">
      <button 
        className="header__addEvent"
        onClick={addHandler}
      >
        {openAddWindow && `-`}
        {!openAddWindow && `+`}
      </button>
      {openAddWindow && <AddForm />}
      <div className="header__search">
        <button className="header__search-left"
          onClick={handlerPrevButton}
        >
          &lt;
        </button>
        <p className="header__month">{`${month} ${year}`}</p>
        <button className="header__search-right"
          onClick={handlerNextButton}
        >
          &gt;
        </button>
        <button className="header__search-month"
          onClick={searchHandler}
        />
      </div>
      {openSearchWindow && 
        <div className="header__selects">
          <select className="header__select-year"
            onChange={handlerYearSelect}
          >
            {years.map(year => 
              <option
              key={year}
              value={year}
              >
                {year}
              </option>
            )}
          </select>
          <select className="header__select-month"
            onChange={handlerMonthSelect}
          >
            {monthes.map(month =>
              <option
                key={month}
                value={month}
              >
                {month}
              </option>
             )}
          </select>
        </div>
      }
    </div>
  );
}
