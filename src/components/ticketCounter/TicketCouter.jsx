// TicketCounter.jsx

import React, { useState } from 'react';
import { FiMinus, FiPlus } from "react-icons/fi";
import './ticketCounter.css';

const TicketCounter = ({ initialCount, onCountChange, eventName, eventDate, totalPrice, minCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const handleDecrease = () => {
    if (count > minCount) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(newCount);
    }
  };

  const formatPrice = (price) => {
    return `${price} sek`;
  };  

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <div className="ticket-counter">
      <div className="ticket-counter__top">
        <p className='ticket-counter__event-name'>{eventName}</p>
        <p className='ticket-counter__event-date'>{eventDate}</p>
        {totalPrice && <p className='ticket-counter__price'>{formatPrice(totalPrice)}</p>}
      </div>
      <div className="ticket-counter__bottom">
        <button className="btn__second" onClick={handleDecrease}>
          <FiMinus className="at__icons" size={26} />
        </button>
        <p className='ticket-counter__quantity'>{count}</p>
        <button className="btn__second" onClick={handleIncrease}>
          <FiPlus className="at__icons" size={26} />
        </button>
      </div>
    </div>
  )
};

export default TicketCounter;
