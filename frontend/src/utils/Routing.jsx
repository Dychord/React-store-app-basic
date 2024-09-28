import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import CreatePage from '../Pages/CreatePage'


function Routing() {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/create' element={<CreatePage/>} />
        </Routes>
    </>
  )
}

export default Routing