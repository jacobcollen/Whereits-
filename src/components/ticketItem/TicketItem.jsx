  // TicketItem.jsx

  import React from "react";
  import Barcode from 'react-barcode';
  import { sv } from 'date-fns/locale';
  import { format } from 'date-fns'
  import "./ticketItem.css";

  const TicketItem = ({ ticket }) => {
      const date = format(new Date(ticket.when.date), 'd MMM ', { locale: sv });
      const formattedDate = date.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').replace('.', '');
    
    

    return (
      <div className="ticket">
        <div className="ticket__row">
          <h4>WHAT</h4>
          <h2>{ticket.name}</h2>
        </div>
        <hr className="ticket__row__devider"/>
        <div className="ticket__row">
          <h4>WHERE</h4>
          <h3>{ticket.where}</h3>
        </div>
        <hr className="ticket__row__devider"/>
        <div className="ticket__row ticket__row__time-grid">
          <div>
            <h4>WHEN</h4>
            <p>{formattedDate}</p> {/* Use the formatted date here */}
          </div>
          <div className="ticket__row__time-grid__devider">
            <h4>FROM</h4>
            <p>{ticket.when.from}</p>
          </div>
          <div>
            <h4>TO</h4>
            <p>{ticket.when.to}</p>
          </div>
        </div>
        <hr className="ticket__row__devider"/>
        <div className="ticket__row barcode__box">
          <Barcode className="barcode__item" value={ticket.ticketNumber} height={60} style="font: 20px Fira Sans" />
        </div>
      </div>
    );
  };

  export default TicketItem;
