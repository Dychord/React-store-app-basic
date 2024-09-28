import React from 'react'
import Navbar from './components/Navbar'
import Routing from './utils/Routing'

function App() {
  return (
    <>
        <div className='w-full h-screen bg-gray-950 text-white'>
          <Navbar />
          <Routing />
        </div>
    </>
  )
}

export default App