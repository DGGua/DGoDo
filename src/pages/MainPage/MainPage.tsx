import dayjs from "dayjs"
import { useState } from "react"
import AddItem from "../../components/AddItem"
import DDLItem from "../../components/DDLItem"
import { DDL } from "../../model/DDL"
import { DDLService } from "../../util/service"
import './MainPage.scss'



export function MainPage() {

    const [ddls, setDDLs] = useState<DDL[]>(DDLService.getDDLs())

    const refreshDDLs = () => {
        setDDLs(DDLService.getDDLs())
    }

    return (
        <div className="div-main">
            <div className="header">
                <p id="eng">TODO</p>
                <p id="chi">我的</p>
            </div>
            <div className="ddls">
                {ddls.map((ddl) => ddl.active !== false ?
                    <DDLItem
                        item={ddl}
                        onClickComplete={() => {
                            DDLService.compeleteDDL(ddl.id)
                            refreshDDLs();
                        }} /> :
                    null
                )}
            </div>
            <AddItem
                onClickAdd={(ddl: DDL) => {
                    DDLService.addDDL(ddl)
                    refreshDDLs();
                }}
            />
        </div>
    )
}

