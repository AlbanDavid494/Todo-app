import React, { useState } from 'react'

const TodoFormLocalStorage = () => {

const date = new Date()
const forgedId = date.getMilliseconds()
let id  = forgedId;

const [userValue, setUserValue] = useState('')
const [todos, setTodos] = useState([])

const handleChange = (e) => {
  setUserValue(e.target.value)
}

const handleClick = (e) => {
  alert('submitted successfully!')
  setTodos([ {
    userValue: userValue,
    id: id
  }, ...todos])
  setUserValue('')
  console.log(todos)
}


  return (
    <div className='p-4'>
      <input type="text" value={userValue} onChange={handleChange} className='p-3 border border-gray-400' />
      <button className='bg-green-400 p-3' onClick={handleClick} >add task</button>
      
      <ul>
        {todos.map(item => (
          <li key={item.id} >{item.userValue}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoFormLocalStorage
