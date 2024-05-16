// Events.jsx

import React, { useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import useStore from '../../useStore';
import EventItem from '../../components/eventItem/EventItem'
import './events.css';

const Events = () => {
  const { events, fetchEvents } = useStore();

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="events">
      <h1 className='primary__heading'>Events</h1>
      <div className="events__search">
        <input className='search__input' type='text' placeholder='' aria-label='Search' />
        <button className='search__btn'><CiSearch className='search__icon' size={20}/></button>
      </div>
      <div className="events__list">
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;