import React from 'react'

const Header = ({ setSearchTodo, searchTodo, todoList }) => {
  const filteredTodoList=(str)=>{
    if(str ==='done')
    {
      return todoList.filter(el => !el.isActive).length
    }else{
      return todoList.filter(el => el.isActive).length
    }
  }
  return (
    <>
    <section className='header'>
      <h1 className="header_logo">
        To-Do
      </h1>
      <form>
        <input className='search_input' type="text" placeholder='Search todo' value={searchTodo} onChange={(e) => setSearchTodo(e.target.value)} />

      </form>
      
    </section>
    <div className='list_info_box'>
    <p className='list_info'>{filteredTodoList('more')} more</p>
    <p className='list_info'>{filteredTodoList('done')} done</p>
  </div>
  </>
  )
}

export default Header