import dayjs from 'dayjs'
import AddItem from '../../components/AddItem'
import DDLItem from '../../components/DDLItem'
import { DDL } from '../../model/DDL'
import './DDLPage.scss'

const ddls: DDL[] = []


export function DDLPage() {
    return (
        <div className="div-DDL">
            <div className="header">
                <p id="eng">DDL</p>
                <p id="chi">截止时间</p>
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