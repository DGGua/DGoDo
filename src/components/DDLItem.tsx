import './scss/DDLItem.scss'
import circle from '../static/circle.svg'
import dots from '../static/dots.svg'
import { LocalTask } from '../model/LocalTask'
import dayjs from 'dayjs'

interface DDLItemProps {
    item: LocalTask,
    onClickComplete: () => void
}

export default function DDLItem(props: DDLItemProps) {
    const { item, onClickComplete } = props
    return (
        <div className="div-ddlitem">
            <img src={circle} onClick={onClickComplete} alt=""></img>
            <p className="description">{item.content}</p>
            <p className="date" style={{ color: dayjs(item.time).isBefore(dayjs(), 'day') ? "red" : "white" }}>{dayjs(item.time).format('MM-DD HH:mm')}</p>
            <img src={dots} alt=""></img>
        </div>
    )
}

