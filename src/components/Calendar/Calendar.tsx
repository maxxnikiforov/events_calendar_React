import React from 'react';
// import { getMonthData, monthes } from '../../variables';
import './Calendar.scss';

type Props = {
  month: string,
  year: number,
}

export const Calendar: React.FC<Props> = ({
  month,
  year
}) => {
  // const monthData = getMonthData(year, monthes.indexOf(month));

  // console.log(monthData);
  const monthData: (Date | undefined)[][] = [
    [undefined, undefined, new Date(), new Date(), new Date(), new Date(), new Date(),],
    [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(),],
    [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(),],
    [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(),],
    [new Date(), new Date(), new Date(), new Date(), undefined, undefined, undefined]
  ];

  return (
    <div className="calendar">
      <table className="calendar__table">
        <tbody>
          {monthData.map((week, index) => 
            <tr key={index} className="calendar__week">
              {week.map((day, index) =>
                day ?
                 <td className="calendar__day" key={index}>{day.getDate()}</td>
                 :
                 <td key={index} />
              )}
            </tr>
          )}
        </tbody>
      </table>
      Calendar template
    </div>
  );
}
