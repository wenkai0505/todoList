import React, { useState } from 'react'
import TodoListService from '../service/todolist.service'


const Item = ({ item }) => {

    let { date, name, done, month, _id } = item

    let [isHover, setIsHover] = useState('')

    const handleHover = (flag) => {
        setIsHover(flag)
    }

    const handleDelete = (_id) => {
        TodoListService.delete(_id)
            .then(() => {
                return
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const handleCheck = (_id) => {
        return (e) => {
            let done = e.target.checked

            TodoListService.patch(_id, { done: done })
                .then(() => {
                    return
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }




    return (
        <li onMouseEnter={() => { handleHover(true) }} onMouseLeave={() => { handleHover(false) }} style={{ background: isHover ? "#eee" : "" }}>
            <div >
                <input onChange={handleCheck(_id)} type="checkbox" checked={done} />
                <span>{name}</span>
            </div>
            <div className="date">{month}/{date}</div>
            <button onClick={() => { handleDelete(_id) }} className="btn btn-danger" style={{ display: isHover ? "block" : 'none' }}>删除</button>
        </li>
    )
}

export default Item