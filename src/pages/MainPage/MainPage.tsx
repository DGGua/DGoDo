import dayjs from "dayjs"
import AddItem from "../../components/AddItem"
import DDLItem from "../../components/DDLItem"
import './MainPage.scss'

const ddls = [
    { description: "123", time: dayjs() },
    { description: "123", time: dayjs() },
    { description: "123", time: dayjs() },
    { description: "123", time: dayjs() },
]


export function MainPage() {

    return (
        <div className="div-main">
            <div className="header">
                <p id="eng">TODO</p>
                <p id="chi">我的</p>
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

