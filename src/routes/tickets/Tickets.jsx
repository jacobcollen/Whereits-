// Tickets.jsx

import React from 'react';
import TicketItem from '../../components/ticketItem/TicketItem'
import useStore from '../../useStore';
import './tickets.css'

const Tickets = () => {
  const { ticketItems } = useStore();

  return (
    <div className="tickets__page">
      <h1 className='primary__heading'>Your Tickets</h1>
      <div className="tickets__list">
        {ticketItems.map((ticket) => (
          <TicketItem key={ticket.uniqueId} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Tickets;
