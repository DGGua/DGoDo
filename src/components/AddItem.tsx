import './AddItem.scss'
import inputcircle from "../static/inputcircle.svg"
import inputconfirm from "../static/inputconfirm.svg"
export default function AddItem(props: any) {
    return (
        <div className="div-additem">
            <img src={inputcircle}></img>
            <input placeholder="添加你的日程" />
            <img src={inputconfirm}></img>
        </div>
    )
}