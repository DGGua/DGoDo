import dayjs from 'dayjs'
import AddItem from '../../components/AddItem'
import './DDLPage.scss'

const ddls = [
    { description: "123", time: dayjs() },
    { description: "123", time: dayjs() },
    { description: "123", time: dayjs() },
    { description: "123", time: dayjs() },
]
function DDLItem(props: any) {
    return (
        <div className="div-ddlitem">
            {/* <img></img> */}
            <p>{props.item.description}</p>
            <p>{props.item.time.format('MM-DD')}</p>
            {/* <img></img> */}
        </div>
    )
}



export function DDLPage() {
    return (
        <div className="div-DDL">
            <div className="header">
                <p>DDL</p>
                <p>截止时间</p>
            </div>
            <div className="ddls">
                {ddls.map((ddl) => {
                    return <DDLItem item={ddl} />
                })}
            </div>
            <AddItem />
        </div>
    )
}