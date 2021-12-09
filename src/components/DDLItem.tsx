import './DDLItem.scss'
import circle from '../static/circle.svg'
import dots from '../static/dots.svg'
import { DDL } from '../model/DDL'
import { DDLService } from '../util/service'
import dayjs from 'dayjs'
export default function DDLItem(props: any) {

    const item: DDL = props.item
    const onClickComplete = props.onClickComplete
    return (
        <div className="div-ddlitem">
            <img src={circle} onClick={onClickComplete}></img>
            <p className="description">{item.content}</p>
            <p className="date" style={{ color: dayjs(item.time).isBefore(dayjs(), 'day') ? "red" : "white" }}>{dayjs(item.time).format('MM-DD HH:mm')}</p>
            <img src={dots}></img>
        </div>
    )
}

