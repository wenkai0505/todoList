import React, { useEffect } from 'react'
import TodoListService from '../service/todolist.service'


const Footer = ({ todolist, setTodolist }) => {

    let totle = todolist.length
    let totleCount = 0


    for (let i = 0; i < todolist.length; i++) {
        if (todolist[i].done === true) {
            totleCount++
        }
    }

    useEffect(() => {
        for (let i = 0; i < todolist.length; i++) {
            if (todolist[i].done === true) {
                totleCount++
            }
        }
    }, [])




    return (
        <div className="todo-footer">
            <label>
                {/* <input onChange={handleAllDone} type="checkbox" checked={totleCount === totle && totle !== 0 ? true : false} /> */}
            </label>
            <span> <span className='color'>{totleCount}</span>  of <span className='color'>{totle}</span> tasks done </span>
            {/* <button className="btn" >清除已完成任务</button> */}
        </div>
    )
}

export default Footer