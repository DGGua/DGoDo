import './DDLItem.scss'
import circle from '../static/circle.svg'
import dots from '../static/dots.svg'
import { DDL } from '../model/DDL'
import { DDLService } from '../util/service'
export default function DDLItem(props: any) {

    const item: DDL = props.item
    const onClickComplete = props.onClickComplete
    return (
        <div className="div-ddlitem">
            <img src={circle} onClick={onClickComplete}></img>
            <p className="description">{item.content}</p>
            <p className="date">{item.time}</p>
            <img src={dots}></img>
        </div>
    )
}

