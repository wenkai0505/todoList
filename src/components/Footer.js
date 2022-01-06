import React from 'react'


const Footer = ({ todoList, changeAllHandle, itemDeleteHandle }) => {

    let doneCount = 0
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].done === true) {
            doneCount++
        }
    }

    let total = todoList.length


    return (
        <div className="todo-footer">
            <label>
                <input onChange={changeAllHandle} type="checkbox" checked={doneCount === total && total !== 0 ? true : false} />
            </label>
            <span> <span className='color'>{doneCount}</span>  of <span className='color'>{total}</span> tasks done </span>
            <button className="btn" onClick={itemDeleteHandle}>清除已完成任务</button>
        </div>
    )
}

export default Footer