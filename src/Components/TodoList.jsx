import React from 'react'

const TodoList = ({ todo }) => {
  return (
    <div className='bg-gray-600 rounded-md h-14 m-2 text-white'>
        
     {todo.map((item) => {
        <p>{item.description}</p>
})}
    </div>
  )
}

export default TodoList
