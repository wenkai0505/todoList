import React, { useState } from 'react'
import './css/style.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import { nanoid } from 'nanoid'



const App = () => {


    let [todoList, setTodoList] = useState([
        {
            id: '001',
            name: '吃飯',
            done: false,
            dateObj: {
                month: 7,
                date: 27
            }
        },
        {
            id: '002',
            name: '睡覺',
            done: true,
            dateObj: {
                month: 8,
                date: 15
            }
        },
        {
            id: '003',
            name: '洗澡',
            done: true,
            dateObj: {
                month: 3,
                date: '02'
            }
        },
        {
            id: '004',
            name: '打東東',
            done: false,
            dateObj: {
                month: 10,
                date: 18
            }
        }
    ])

    //新增一個item
    const addTaskHandle = (e) => {
        if (e.keyCode === 13 && e.target.value !== '') {
            const newObj = {
                id: nanoid(),
                name: e.target.value,
                done: false,
                dateObj: {
                    month: new Date().getMonth(),
                    date: new Date().getDate()
                }
            }
            setTodoList([newObj, ...todoList])
            e.target.value = ''
        }

    }

    //更換done狀態
    const changeDoneHandle = (id) => {
        return (e) => {
            let done = e.target.checked
            const newObj = todoList.map((item) => {
                if (item.id === id) {
                    return { ...item, done }
                }
                else {
                    return item
                }
            })
            setTodoList(newObj)

        }

    }

    //刪除item
    const deleteHandle = (id) => {
        return () => {
            if (window.confirm('你確定要刪除嗎')) {
                const newObj = todoList.filter((item) => {
                    return (
                        item.id !== id
                    )
                })
                setTodoList(newObj)
            } else {
                return false
            }
        }
    }


    //全選按鈕
    const changeAllHandle = (e) => {
        let done = e.target.checked
        const newObj = todoList.map((item) => {
            return { ...item, done: done }
        })
        setTodoList(newObj)

    }

    //刪除完成按鈕
    const itemDeleteHandle = () => {
        const newObj = todoList.filter((item) => {
            return !item.done
        })
        setTodoList(newObj)
    }


    return (
        <>
            <div className="todo-container">
                <div className="topNav">TODO LIST</div>
                <div className="todo-wrap">
                    <Header addTaskHandle={addTaskHandle} />
                    <List todoList={todoList} changeDoneHandle={changeDoneHandle} deleteHandle={deleteHandle} />
                </div>

            </div>
            <div className="footerNav">
                <Footer todoList={todoList} changeAllHandle={changeAllHandle} itemDeleteHandle={itemDeleteHandle} />
            </div>
        </>
    )
}

export default App