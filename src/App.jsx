import React from 'react'
import TodoFormLocalStorage from './Components/TodoFormLocalStorage'
import TodoFormSessionStorage from './Components/TodoFormSessionStorage'
import Header from './Components/Header'
import Filter from './Components/Filter'
import Todo from './Components/Todo'



const App = () => {
  return (
    <section className='h-full bg-gray-800'>
    <Header /> 
    {/* <hr /> */}
    <Filter />
    {/* <Todo /> */}
    {/* <TodoFormLocalStorage /> */}
    {/* <TodoFormSessionStorage /> */}
    </section>
  )
}

export default App
