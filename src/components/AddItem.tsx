import { Guid } from 'guid-typescript'
import './scss/AddItem.scss'
import inputcircle from "../static/inputcircle.svg"
import inputconfirm from "../static/inputconfirm.svg"
import { useState } from 'react'
import dayjs from 'dayjs'
import { TaskService } from '../util/service'
import { LocalTask } from '../model/LocalTask'

interface AddItemProps {
    onAddItem: (task: LocalTask, form: number) => void
}

export default function AddItem(props: AddItemProps) {
    const { onAddItem } = props
    const [form, setForm] = useState(2)
    const [content, setContent] = useState("")
    const [dayAfter, setDayAfter] = useState(0)
    // handle the day change
    const onChangeDate = (event: any) => {
        setDayAfter(event.target.value);
    }

    const onChangeForm = (event: any) => {
        setForm(event.target.value)
    }

    const onClickAdd = () => {
        let id = Guid.create().toString()
        const task: LocalTask = {
            id:parseInt(id),
            content,
            time: dayjs().add(dayAfter, 'd'),
        }

        onAddItem(task, form)   //父组件MainPage的onAddItem函数传入
        setContent("")
    }

    return (
        <div className="div-additem">

            <img src={inputcircle}></img>
            <input
                placeholder="添加你的ToDo"
                value={content}
                onChange={(event) => {
                    setContent(event.target.value)
                }}
                onKeyPress={(event) => {
                    // TODO: try something latest
                    if (event.which === 13) onClickAdd()
                }}
            />
            <select onChange={onChangeDate}>
                <option value={0}>今天</option>
                <option value={1}>明天</option>
                <option value={7}>下周</option>
            </select>&nbsp;&nbsp;
            <select onChange={onChangeForm}>
                <option value={2}>DDL</option>
                <option value={1}>日程</option>
            </select>
            <img src={inputconfirm}></img>

        </div >
    )
}