import React, { useEffect, useState } from 'react'

const AddForm = ({ todoList, setTodoList }) => {
  const date = new Date()
  const [todoText, setTodoText] = useState('')
  useEffect(() => {
    const todos = localStorage.getItem('todos')
    setTodoList(JSON.parse(todos))
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList))
  }, [todoList])
  
  const submitHandler = (e) => {

    e.preventDefault()
    todoText && setTodoList([...todoList, {
      id: todoList.length === 0 ? 0 : todoList.length,
      text: todoText,
      isActive: true,
      isEditable: false,
      date: `${date.getHours().toString().length > 1 ? date.getHours() : `0${date.getHours()}`}:${date.getMinutes().toString().length > 1 ? date.getMinutes() : `0${date.getMinutes()}`}:${date.getSeconds().toString().length > 1 ? date.getSeconds() : `0${date.getSeconds()}`} ${date.getDate()} ${date.toLocaleString('ru', { month: 'short' })}`,
      toolbarOpen: false
    }])
    setTodoText('')
  }
  return (
    <form className='add_todo_form' onSubmit={submitHandler}>
      <input className='add_todo_input' value={todoText} type="text" onChange={(e) => setTodoText(e.target.value)} placeholder='Введите задачу' />
      <button className='add_todo_btn' type='submit'>add</button>
    </form>
  )
}

export default AddForm