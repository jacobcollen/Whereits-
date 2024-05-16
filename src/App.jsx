// App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home.jsx';
import Events from './routes/events/Events.jsx';
import Event from './routes/event/Event.jsx';
import Cart from './routes/cart/Cart.jsx';
import Tickets from './routes/tickets/Tickets.jsx';
import Navbar from './components/navBar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='wrapper'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:eventId" element={<Event />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
