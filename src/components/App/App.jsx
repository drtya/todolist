import React, { useEffect, useState } from 'react'
import Header from '../Header'
import AddForm from '../AddForm/AddForm'
import TodoList from '../TodoList/TodoList'


const App = () => {
    const [searchTodo, setSearchTodo] = useState('')
    const [todoList, setTodoList] = useState([])


    return (
        <div className="todo_box">
            <div className="todo_decore"></div>
            <div className="todo_decore"></div>
            <div className="todo_bg">TODO</div>
            
            <div className='todo'>
                <Header searchTodo={searchTodo} setSearchTodo={setSearchTodo} todoList={todoList} />
                <section className="main">

                    <ul className='list_box'>
                        {
                            searchTodo ?
                                todoList.filter(el => el.text.includes(searchTodo)).map((obj) => (
                                    <TodoList key={obj.id} obj={obj} todoList={todoList} setTodoList={setTodoList} />
                                ))
                                :
                                todoList.map((obj) => (
                                    <TodoList key={obj.id} obj={obj} todoList={todoList} setTodoList={setTodoList} />
                                ))
                        }
                    </ul>
                </section>
                <AddForm todoList={todoList} setTodoList={setTodoList} />

            </div>
        </div>
    )
}

export default App