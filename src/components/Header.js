import React from 'react'
import TodoListService from '../service/todolist.service'



const Header = () => {



    const handleInputText = (e) => {

        if (e.keyCode === 13 && e.target.value !== "") {
            let name = e.target.value
            TodoListService.post(name)
                .then(() => {
                    return
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }


    return (
        <div className="todo-header">
            <input onKeyDown={handleInputText} type="text" placeholder="+ Add Task" />
        </div>
    )
}
export default Header