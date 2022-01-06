import React, { useEffect } from 'react'
import Item from './Item'
import TodoListService from '../service/todolist.service'


const List = ({ todolist, setTodolist }) => {


    useEffect(() => {
        TodoListService.get()
            .then((data) => {
                setTodolist(data.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [todolist])




    return (
        <ul className="todo-main">
            {
                todolist && todolist.map((item) => {
                    return <Item key={item._id} item={item} />
                })
            }

        </ul>
    )
}
export default List