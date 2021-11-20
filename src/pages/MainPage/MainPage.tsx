import dayjs from "dayjs"
import AddItem from "../../components/AddItem"
import DDLItem from "../../components/DDLItem"

const ddls = [
    { description: "123", time: dayjs() },
    { description: "123", time: dayjs() },
    { description: "123", time: dayjs() },
    { description: "123", time: dayjs() },
]


export function MainPage() {



    return (
        <div className="div-DDL">
            <div className="header">
                <p>TODO</p>
                <p>我的</p>
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