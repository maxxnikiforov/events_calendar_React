import React, { useState } from 'react';
import classNames from 'classnames';
import { getMonthData, monthes, days } from '../../variables';
import { EditForm } from '../EditForm/EditForm';
import './Calendar.scss';

type Props = {
  month: string,
  year: number,
}

type note = {
  date: string,
  title: string,
  description: string,
  time: string,
}

export const Calendar: React.FC<Props> = ({
  month,
  year
}) => {
  const monthData = getMonthData(year, monthes.indexOf(month));
  const notes: note[] = JSON.parse(localStorage.calendar);
  const monthNotes = notes.filter(note => (+note.date.slice(5, 7) - 1) === 
  monthes.indexOf(month));

  const [editFormOpen, setEditFormOpen] = useState(false);

  const editFormOpener = () => {
    setEditFormOpen(!editFormOpen)
  };

  console.log(notes,
    +(notes[0].date).slice(0, 4),
    +(notes[0].date).slice(5, 7),
    +(notes[0].date).slice(8),
    monthNotes
    );

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
                  {monthNotes.some(note => day.getDate() ===
                   +note.date.slice(8) &&
                    day.getFullYear() === +note.date.slice(0, 4)) &&
                    <button className="calendar__note"
                      onClick={editFormOpener}
                    >
                      ?
                    </button>}
                  {editFormOpen && <EditForm day={day} editFormOpener={editFormOpener} />}
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
