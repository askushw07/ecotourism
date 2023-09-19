import React from 'react';

import { Route, Routes } from 'react-router-dom'
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';
import Destinations from '../Pages/DestinationsPage/Destinations';
import Pacakges from '../Pages/pacakges/Pacakges';
import Checkout from '../Pages/Checkout/Checkout';
import Contact from '../Pages/Contact';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destinations />} />
      <Route path="/:name" element={<Pacakges />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/contact' element={<Contact/>} />

    </Routes>
  )
}

export default AllRoutes