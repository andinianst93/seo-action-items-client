import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register, Home, Dashboard, Edit, Error, PrivateRoute } from './pages'
import TagManager from 'react-gtm-module'

const App = () => {
  const tagManagerArgs = {
    gtmId: 'GTM-5SMRF56',
  }

  TagManager.initialize(tagManagerArgs)
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
        <Route path='/account' element={<Register />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
