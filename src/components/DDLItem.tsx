import './DDLItem.scss'
import circle from '../static/circle.svg'
import dots from '../static/dots.svg'
export default function DDLItem(props: any) {
    return (
        <div className="div-ddlitem">
            <img src={circle}></img>
            <p className="description">{props.item.description}</p>
            <p className="date">{props.item.time.format('MM-DD')}</p>
            <img src={dots}></img>
        </div>
    )
}

