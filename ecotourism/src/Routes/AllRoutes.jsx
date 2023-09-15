import React from 'react';
<<<<<<< HEAD
import {Route, Routes} from 'react-router-dom'
=======
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
>>>>>>> b8e69a3a060bf2c9404910f7672b391a71f34c70
import Home from '../Pages/Home';

const AllRoutes = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path='/' element={<Home/>} />
=======
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />

>>>>>>> b8e69a3a060bf2c9404910f7672b391a71f34c70
    </Routes>
  )
}

export default AllRoutes