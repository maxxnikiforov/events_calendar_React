import React from 'react';
import classNames from 'classnames';
import { getMonthData, monthes, days } from '../../variables';
import './Calendar.scss';

type Props = {
  month: string,
  year: number,
}

export const Calendar: React.FC<Props> = ({
  month,
  year
}) => {
  const monthData = getMonthData(year, monthes.indexOf(month));

  console.log(monthes.indexOf(month), monthData);

  return (
    <div className="calendar">
      <table className="calendar__table">
        <tbody>
          {monthData.map((week, index) => 
            <tr key={index} className="calendar__week">
              {week.map((day, index) =>
                day ?
                 <td 
                   className={classNames('calendar__day', {
                    'calendar__today': day.getDate() === new Date().getDate() &&
                    day.getMonth() === new Date().getMonth() &&
                    day.getFullYear() === new Date().getFullYear()
                   })}
                   key={index}
                 >
                  <p className="calendar__day-name">{days[day.getDay()]}</p>
                  {day.getDate()}
                  </td>
                 :
                 <td key={index} />
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
