// useStore.js

import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const API_URL_EVENTS = "https://santosnr6.github.io/Data/events.json";

const useStore = create(
  persist(
    (set, get) => ({
      events: [],
      cartItems: [],
      ticketItems: [],

      fetchEvents: async () => {
        try {
          const response = await axios.get(API_URL_EVENTS);
          set({ events: response.data.events });
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      },

      updateQuantity: (uniqueId, newQuantity) => {
        const event = get().cartItems.find((e) => e.uniqueId === uniqueId);
        if (!event) {
          console.error(`Event with unique ID ${uniqueId} not found in cart.`);
          return;
        }

        set((state) => {
          const newCartItems = state.cartItems.map((item) => {
            if (item.uniqueId === uniqueId) {
              return {
                ...item,
                quantity: newQuantity,
              };
            } else {
              return item;
            }
          });
          return {
            cartItems: newCartItems,
            totalPrice: state.totalPrice + event.price * (newQuantity - event.quantity),
          };
        });
      },

      addToCart: (eventId, quantity) => {
        const event = get().events.find((e) => e.id === eventId);
        if (!event) {
          console.error(`Event with ID ${eventId} not found.`);
          return;
        }

        set((state) => {
          const existingItem = state.cartItems.find(
            (item) => item.id === eventId
          );
          if (existingItem) {
            const newCartItems = state.cartItems.map((item) => {
              if (item.id === eventId) {
                return {
                  ...item,
                  quantity: item.quantity + quantity,
                };
              } else {
                return item;
              }
            });
            return {
              cartItems: newCartItems,
              totalPrice: state.totalPrice + event.price * quantity,
            };
          } else {
            const newItem = {
              ...event,
              uniqueId: `${eventId}-${Date.now()}`,
              quantity,
            };
            return {
              cartItems: [...state.cartItems, newItem],
              totalPrice: state.totalPrice + event.price * quantity,
            };
          }
        });
      },

      removeFromCart: (uniqueId) => {
        const event = get().cartItems.find((e) => e.uniqueId === uniqueId);
        if (!event) {
          console.error(`Event with unique ID ${uniqueId} not found in cart.`);
          return;
        }

        set((state) => ({
          cartItems: state.cartItems.filter((e) => e.uniqueId !== uniqueId),
          totalPrice: state.totalPrice - event.price * event.quantity,
        }));
      },

      orderTickets: () => {
        const cartItems = get().cartItems;

        const tickets = cartItems.flatMap((item) =>
          Array.from({ length: item.quantity }, (_, i) => ({
            ...item,
            uniqueId: `${item.id}-${Date.now()}-${i}`,
            ticketNumber:
              "#" + item.name.slice(0, 2).toUpperCase() + (1001 + i).toString(),
          }))
        );

        set((state) => ({
          ticketItems: [...state.ticketItems, ...tickets],
          cartItems: [],
          totalPrice: 0,
        }));
      },

      get totalPrice() {
        return get().cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "whereItsStorage",
      storage: localStorage,
    }
  )
);

export default useStore;
