import React, { useState } from 'react'


const Item = ({ item, changeDoneHandle, deleteHandle }) => {

    const { id, name, done, dateObj: { month, date } } = item

    let [isHover, setIsHover] = useState()

    const hoverHandle = (flag) => {
        return () => {
            setIsHover(flag)
        }
    }


    return (
        <li onMouseEnter={hoverHandle(true)} onMouseLeave={hoverHandle(false)} style={{ background: isHover ? '#eee' : '' }}>
            <div>
                <input onChange={changeDoneHandle(id)} type="checkbox" checked={done} />
                <span>{name}</span>
            </div>
            <div className="date">{month}/{date}</div>
            <button onClick={deleteHandle(id)} className="btn btn-danger" style={{ display: isHover ? 'block' : 'none' }}>删除</button>
        </li>
    )
}

export default Item