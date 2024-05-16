// Cart.jsx

import React from "react";
import CartItem from "../../components/cartItem/CartItem";
import { TfiShoppingCartFull } from "react-icons/tfi";
import useStore from "../../useStore";
import './cart.css'

const Cart = () => {
  const { cartItems, totalPrice } = useStore();

  return (
    <div className="cart">
          <h1 className='primary__heading'>Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="cart__item">
            {cartItems.map((item) => (
              <CartItem key={`${item.id}-${item.quantity}`} item={item} />
            ))}
          </div>
          <div className="cart__total">
          <h4 className="cart__total__title">Totalt värde på order </h4>
          <h3 className="cart__total__price">{totalPrice} sek</h3>
          </div>
          <button className="btn__primary" onClick={() => useStore.getState().orderTickets()}>
            Order
          </button>
        </>
      ) : (
        <div className="cart__empty-msg">
          <TfiShoppingCartFull size={100}/>
          <p>Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
