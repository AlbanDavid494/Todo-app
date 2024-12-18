import React, { useState } from 'react'



const Todo = ({ handleOnchangeTitle, handleChangeDescription, handleChangeDate, handleSubmit}) => {






  return (
    <section>
    <div className='flex justify-center absolute bg-slate-900 right-96 mt-16 rounded-sm'>
        <form onSubmit= {handleSubmit} className='max-w-5xl mx-auto px-10 py-5 text-white '>
      <h3 className='text-lg font-semibold uppercase leading-7'>Add New Task</h3>
      <div className='border-b border-b-white/10 pt-2' />
<div className='mt-2 grid grid-cols-1 gap-y-2 gap-x-6'>

<label className='text-xs text-gray-400 font-semibold' htmlFor="title">Title</label>
      <input type="text" required name='title' placeholder='Title of the task' onChange={handleOnchangeTitle} className='border-0 bg-white/5 outline-none  ring-1 sm:text-sm py-1.5 px-2 block rounded-sm tracking-wider text-md' id='title' />

      

      <label className='text-xs text-gray-400 font-semibold' htmlFor="description">Description</label>
      <textarea required onChange={handleChangeDescription }  name="description" placeholder='Describe your text...' cols='32' className=' h-24 border-0 bg-white/5 outline-none shadow-sm ring-1 sm:text-sm py-1.5 px-2 block rounded-sm tracking-wider text-md' id=""></textarea>

      <label className='text-xs text-gray-400 font-semibold' htmlFor="date">Date</label>
      <input type="date" required  onChange={handleChangeDate}  className='outline-none border-0 ring-1 rounded-sm text-sm tracking-wider text-gray-400 px-2 py-1.5 bg-white/5 py' name="date" id="date" />

<button className='w-300px p-2 bg-blue-800 rounded-md' type="submit">Submit</button>
</div>


        </form>
    </div>

    </section>
  )
}

export default Todo
