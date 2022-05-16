import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Axios from 'axios';
import events from './events';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './TodoList.css';

moment.locale('en-GB');
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3003/api/get/TodoList').then((response) => {
      const resultos = normalaise(response.data);
      setEventsData(resultos);
    });
  }, []);

  const normalaise = (data) => {
    const result = data.map((item) => {
      const tre = item;
      tre.start = new Date(item.start);
      tre.end = new Date(item.end);
      return tre;
    });
    return result;
  };

  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);
    const title = window.prompt('Введите событие');
    if (title)
      Axios.post('http://localhost:3003/api/TodoList/insert', {
        id: 2,
        title: title,
        start: start,
        end: end,
      });
    setEventsData([
      ...eventsData,
      {
        start,
        end,
        title,
      },
    ]);
  };
  return (
    <div className="patientlist-main-container">
      <Calendar
        views={['day', 'agenda', 'work_week', 'month']}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="agenda"
        events={eventsData}
        style={{ height: '100vh' }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
    </div>
  );
}
