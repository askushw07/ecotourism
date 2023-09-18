import React from 'react';

import { Route, Routes } from 'react-router-dom'
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';
import Destinations from '../Pages/DestinationsPage/Destinations';
import Pacakges from '../Pages/pacakges/Pacakges';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destinations />} />
      <Route path="/:name" element={<Pacakges />} />

    </Routes>
  )
}

export default AllRoutes