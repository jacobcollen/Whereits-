// EventItem.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./eventItem.css";
import { sv } from 'date-fns/locale';
import { format } from 'date-fns'


const EventItem = ({ event }) => {
  const date = new Date(event.when.date);
  const day = format(date, "dd", { locale: sv });
  const month = format(date, "MMM", { locale: sv }).toUpperCase().replace('.', '');

  return (
    <Link to={`/event/${event.id}`} className="event-item-link">
      <div className="event-item">
      <div className="event-item__date">
          <p>{day}</p>
          <p>{month}</p>
        </div>
        <div className="event-item__details">
          <h2 className="event-item__name">{event.name}</h2>
          <h4 className="event-item__location">{event.where}</h4>
          <div className="event-item__time-price">
            <p className="event-item__time">
              {event.when.from} - {event.when.to}
            </p>
            <p className="event-item__price">{event.price}</p>
          </div>
          <hr />
        </div>
      </div>
    </Link>
  );
};

export default EventItem;
