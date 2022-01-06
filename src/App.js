import React, { useState } from 'react'
import './css/style.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'




const App = () => {

    let [todolist, setTodolist] = useState([])

    return (
        <>
            <div className="todo-container">
                <div className="topNav">TODO LIST</div>
                <div className="todo-wrap">
                    <Header />
                    <List todolist={todolist} setTodolist={setTodolist} />
                </div>

            </div>
            <div className="footerNav">
                <Footer todolist={todolist} setTodolist={setTodolist} />
            </div>
        </>
    )
}

export default App