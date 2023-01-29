import React, { useState } from 'react';
import './AddForm.scss';

export const AddForm: React.FC = () => {
  const [title, setTitle] = useState<string | undefined>('');
  const [description, setDescription] = useState<string | undefined>('');
  const [date, setDate] = useState<string | undefined>('');
  const [time, setTime] = useState<string | undefined>('');

  const inputDescriptionHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'date':
        setDate(e.target.value);
        break;
      case 'time':
        setTime(e.target.value);
        break;
      default:
        return;
    }
  }

  console.log(title, description, date, time);

  return (
    <div className="form">
      <h4>Add new idea item</h4>
      <form>
          <span>Title*</span><br />
          <input
            className="form__input"
            type="text"
            name="title"
            value={title}
            required
            placeholder="Title goes here"
            onChange={inputHandler}
          />
          <span>Description</span><br />
          <textarea
            className="form__input"
            placeholder="Description"
            value={description}
            rows={3}
            onChange={inputDescriptionHandler}
          /><br />
          <span>Date*</span><br />
          <input
            type="date"
            name="date"
            required
            value={date}
            placeholder="date of event"
            onChange={inputHandler}
          /><br />
          <span>Time</span><br />
          <input
            type="time"
            name="time"
            value={time}
            placeholder="stert of event"
            onChange={inputHandler}
          />
          <button className="form__submit" type="submit">Save</button>
      </form>
    </div>
  );
}
