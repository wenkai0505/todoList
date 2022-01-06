import React from 'react'
import Item from './Item'


const List = ({ todoList, changeDoneHandle, deleteHandle }) => {
    return (
        <ul className="todo-main">
            {
                todoList && todoList.map((item) => {
                    return (
                        <Item item={item} key={item.id} changeDoneHandle={changeDoneHandle} deleteHandle={deleteHandle} />
                    )
                })
            }
        </ul>
    )
}
export default List