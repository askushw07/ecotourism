import React from 'react';

import { Route, Routes } from 'react-router-dom'
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />

    </Routes>
  )
}

export default AllRoutes