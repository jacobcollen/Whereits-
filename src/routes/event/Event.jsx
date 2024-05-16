// Event.jsx

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TicketCounter from "../../components/ticketCounter/TicketCouter";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import useStore from "../../useStore";
import "./event.css";

const Event = () => {
  const { eventId } = useParams();
  const event = useStore((state) => state.events.find((e) => e.id === eventId));

  const [ticketQuantity, setTicketQuantity] = useState(1);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event">
      <button className="back-btn">
        <Link to="/events">
          <FaArrowLeft className="at__icons" size={20} />
        </Link>
      </button>
      <h1 className="primary__heading">Event</h1>
      <h2 className="second__heading event__second-heading">
        You are about to score
        <br />
        some tickets to
      </h2>
      <h3 className="event__item__name">{event.name}</h3>
      <p className="event__item__date">
        {event.when.date} kl {event.when.from} - {event.when.to}
      </p>
      <p className="event__item__location">@ {event.where}</p>
      <div className="event__ticket-counter">
        <TicketCounter
          initialCount={ticketQuantity}
          onCountChange={(value) => setTicketQuantity(value)}
          totalPrice={event.price * ticketQuantity}
          showPrice={true}
          minCount={1}
        />
      </div>
      <button
        className="btn__primary"
        onClick={() => useStore.getState().addToCart(event.id, ticketQuantity)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Event;
