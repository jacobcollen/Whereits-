// CartItem.jsx

import React from 'react';
import TicketCounter from '../../components/ticketCounter/TicketCouter';
import useStore from '../../useStore';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useStore();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(item.uniqueId);
    } else {
      updateQuantity(item.uniqueId, newQuantity);
    }
  };  

  return (
    <div className="cart-item">
        <TicketCounter
          initialCount={item.quantity}
          onCountChange={handleQuantityChange}
          eventName={item.name}
          eventDate={`${item.when.date} kl ${item.when.from} - ${item.when.to}`}
          showPrice={false}
        />
      </div>
  );
};

export default CartItem;

