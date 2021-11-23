import './AddItem.scss'
import inputcircle from "../static/inputcircle.svg"
import inputconfirm from "../static/inputconfirm.svg"
import { useState } from 'react'
import { DDL } from '../model/DDL'
export default function AddItem(props: any) {

    const [content, setContent] = useState("")

    const onClickAdd = () => {
        props.onClickAdd(new DDL(content))
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
                    if (event.which === 13) onClickAdd()
                }}
            />
            <img src={inputconfirm}></img>

        </div>
    )
}