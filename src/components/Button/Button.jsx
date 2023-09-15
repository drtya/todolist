import React from 'react'

const Button = ({ obj ,todoList,setTodoList}) => {
  const openToolbarHandler = (id) => {
    setTodoList(todoList.map((el) => el.id === id ? { ...el, toolbarOpen: !el.toolbarOpen } : el))
  }
  const completeHandeler = (id) => {
    setTodoList((prev) => prev.map((el) => el.id === id ? { ...el, isActive: !el.isActive } : el))
  }
  const deleteHandler = (id) => {
    setTodoList(todoList.filter((el) => el.id !== id))
  }
  const editHandeler = (id) => {
    setTodoList(todoList.map((el) => el.id === id ? { ...el, isEditable: !el.isEditable } : el))
  }
  return (
    <div className='buttons_box'>
      <button className='toolbar' onClick={() => openToolbarHandler(obj.id)}>Toolbar</button>
      <div className={`toolbar_btns ${obj.toolbarOpen ? 'active' : ''}`}>
        <button className='activity_btn' onClick={() => completeHandeler(obj.id)}>Done</button>
        <button className='activity_btn' onClick={() => editHandeler(obj.id)}>Edit</button>
        <button className='activity_btn' onClick={() => deleteHandler(obj.id)}>Delete</button>
      </div>
    </div>
  )
}

export default Button