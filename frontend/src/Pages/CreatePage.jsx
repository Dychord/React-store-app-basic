import React from 'react'
import { useForm } from 'react-hook-form';
import axiosInstance from '../utils/axios'

function CreatePage() {
  const {register, handleSubmit, reset} = useForm()

  const takeData = async (data)=>{

    try {
      const response = await axiosInstance.post('/api/products/create', data)
      console.log(response.data);
      reset()
    } catch (error) {
      console.log("Error sending data", error.message); 
    }
  }

  return (
    <>
      <div className='flex flex-col justify-evenly items-center h-[45%] '>
        <h1 className='text-3xl font-semibold'>Create New Product</h1>
        <div>
          <form className='flex flex-col gap-5 w-[17vw]' action="" onSubmit={handleSubmit(takeData)}>
            <input className='px-4 py-2 rounded-md outline-none' {...register('name')} type="text" placeholder='product name' />
            <input className='px-4 py-2 rounded-md outline-none' {...register('price')} type="text" placeholder='price' />
            <input className='px-4 py-2 rounded-md outline-none' {...register('image')} type="text" placeholder='image' />
            <button type="submit" className='px-4 py-2 rounded-md w-1/2 self-center outline-none bg-zinc-700 hover:bg-zinc-600 hover:scale-105'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreatePage


// The behavior you're observing with handleSubmit and takeData in your CreatePage component from react-hook-form is a common pattern in JavaScript, particularly when dealing with higher-order functions and callbacks.
// Explanation of How It Works

//     handleSubmit: This function is a higher-order function provided by react-hook-form. It takes your form submission handler (in this case, takeData) as an argument.

//     Invocation: When the form is submitted, handleSubmit is called. Internally, it performs some tasks, such as validating the form data. If the validation passes, it then calls    the takeData function, passing the form data as an argument.


// const handleSubmit = (callback) => {
//   // Perform validation and other checks...

//   // If validation is successful
//   const data = { name: 'Sample Product', price: '100', image: 'sample.jpg' };
//   callback(data);  // This is where `takeData` gets called with the form data
// }


