import { LocalTask } from '../model/LocalTask'
import './scss/DDLPage.scss'

const ddls: LocalTask[] = []


export function DDLPage() {
    return (
        <div className="div-DDL">
            <div className="header">
                <p id="eng">DDL</p>
                <p id="chi">截止时间</p>
            </div>
            <div className="ddls">
                {ddls.map((ddl) => {
                    return <div>{ddl.content}</div>
                })}
            </div>
        </div>
    )
}