import React from 'react'
import Button from '../Button/Button'

const TodoList = React.memo(({ obj ,todoList,setTodoList}) => {
  
  const todoEditHandler = (id, e) => {
    e.preventDefault()
    setTodoList(todoList.map(el => el.id === id ? { ...el, text: e.target.value } : el))
  }
  console.log('www');
  return (
    <li key={obj.id} className='todo_list'>
      <div>
      <p>{obj.date}</p>
      {
        obj.isEditable ?
          <input type="text" onChange={(e) => todoEditHandler(obj.id, e)} value={obj.text} />
          :
          <span className={`todo_text ${obj.isActive ? '' : 'done'}`}>{obj.text}</span>
      }
      </div>
      <Button obj={obj} todoList={todoList} setTodoList={setTodoList} />
    </li>
  )
})

export default TodoList