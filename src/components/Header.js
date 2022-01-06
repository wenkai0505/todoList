import React from 'react'




const Header = ({ addTaskHandle }) => {


    return (
        <div className="todo-header">
            <input onKeyDown={addTaskHandle} type="text" placeholder="+ Add Task" />
        </div>
    )
}
export default Header