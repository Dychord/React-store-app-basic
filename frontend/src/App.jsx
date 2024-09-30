import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Routing from './utils/Routing'
import axiosInstance from './utils/axios'

function App() {

  // const [data, setData] = useState([])

  // async function fetchData(){
  //   try {
  //     const fetchedData = await axiosInstance.get('/test')
  //     setData(fetchedData.data)
  //   } catch (error) {
  //     console.log("Error fetching data", error.message);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []); // Only run once when the component mounts

  // useEffect(() => {
  //   console.log(data);  // Log the data whenever it changes
  // }, [data]);  // Runs when `data` updates

  return (
    <>
        <div className='w-full h-screen'>
          <Navbar />
          <hr />
          <Routing />
        </div>
    </>
  )
}

export default App