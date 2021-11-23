import './AddItem.scss'
import inputcircle from "../static/inputcircle.svg"
import inputconfirm from "../static/inputconfirm.svg"
import { useState } from 'react'
import { DDL } from '../model/DDL'
import dayjs from 'dayjs'
export default function AddItem(props: any) {

    const [content, setContent] = useState("")
    const [dayAfter, setDayAfter] = useState(0)
    // handle the day change
    const onChangeDate = (event: any) => {
        setDayAfter(event.target.value);
    }

    const onClickAdd = () => {
        props.onClickAdd(new DDL(content, dayjs().add(dayAfter, 'd')))
        setContent("")
    }

    return (
        <div className="div-additem">

            <img src={inputcircle}></img>
            <input
                placeholder="添加你的日程"
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
            </select>
            <img src={inputconfirm}></img>

        </div >
    )
}