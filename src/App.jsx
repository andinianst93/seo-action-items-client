import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register, Home, Dashboard, Edit, Error, PrivateRoute } from './pages'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
