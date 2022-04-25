import './scss/AddItem.scss'
import inputcircle from "../static/inputcircle.svg"
import inputconfirm from "../static/inputconfirm.svg"
import { useState } from 'react'
import dayjs from 'dayjs'
import { DDLService } from '../util/service'
import { DDL } from '../model/DDL'

interface AddItemProps {
    onAddItem: (ddl: DDL) => void
}

export default function AddItem(props: AddItemProps) {
    const { onAddItem } = props
    const [content, setContent] = useState("")
    const [dayAfter, setDayAfter] = useState(0)
    // handle the day change
    const onChangeDate = (event: any) => {
        setDayAfter(event.target.value);
    }

    const onClickAdd = () => {
        let ddls = DDLService.getDDLs();
        console.log("press")
        const ddl: DDL = {
            id: (ddls.pop()?.id ?? 0) + 1,
            content,
            time: dayjs().add(dayAfter, 'd'),
        }

        onAddItem(ddl)   //父组件MainPage的onAddItem函数传入
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