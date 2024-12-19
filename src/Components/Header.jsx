import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import TodoList from './TodoList'

const Header = () => {
  
  
  const dateId = new Date()
  const forgedId = dateId.getMilliseconds()
  
  let id = forgedId
  
  const retrievedValue = localStorage.getItem('todo')
  console.log(retrievedValue)
  
  const [todo, setTodo] = useState([])


  const [title, setTitle] = useState('')

const [description, setDescription] = useState('')

const [date, setDate ] = useState('')

  const [isToggle, setIsToggle] = useState(false)

  useEffect(()=>{
   localStorage.setItem('todo', JSON.stringify(todo))
   
  

  console.log(todo);

  
  },[todo])  

  const handleClick = () => {
    setIsToggle(!isToggle)
  }
  const handleOnchangeTitle = (e) => {
    setTitle(e.target.value)
    }
    
    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }
    
    const handleChangeDate = (e) => {
        setDate(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
       setTodo([{
            id:id,
            title: title,
            description: description,
            date: date
        }, ...todo])
    
        setTitle('')
        setDescription('')
        setDate('')
        setIsToggle(!isToggle)
    
        // console.log(todo)
    }

    const handleClose = () => {

    }
    

  return (
    <section className='relative'>
      <div className='flex justify-between p-3'>
      <h2 className='text-white'>DaveActivityPlanner</h2>

<button onClick={handleClick} className='bg-white p-2 rounded-md text-sm'>Add Task + </button>
      </div> 
      <div className='border-b bg-slate-400' />
      
      {isToggle ? <Todo isToggle={isToggle} setIsToggle={setIsToggle} setTodo={setTodo} title={title} setTitle={setTitle} description={description} setDescription={setDescription} date={date} setDate={setDate} handleSubmit={handleSubmit} handleChangeDate={handleChangeDate} handleChangeDescription={handleChangeDescription} handleOnchangeTitle={handleOnchangeTitle} /> : <div className='grid grid-cols-1 md:grid-cols-3 gap-y-2 lg:grid-cols-5 my-4 p-3' >
{todo.map(item => (
  <div key={item.id} className=' text-white w-full h-24 m-4 flex justify-center '>
    
    <div className='shadow-lg w-[180px]  h-[120px] rounded-md bg-gray-600 p-2 relative' >
    <button onClick={handleClose} className='absolute top-1 right-3 font-semibold text-red-400'>x</button>
    
      <p className='font-bold mt-6 '>{item.title} </p>
      <p className='line-clamp-2 text-gray-400 text-sm'>{item.description} </p>
      <p className='text-gray-300'>{item.date}</p>
      </div>
   
  </div>
))}
      </div> }



    </section>
  )
}

export default Header
