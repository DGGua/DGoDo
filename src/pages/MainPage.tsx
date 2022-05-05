import dayjs from "dayjs"
import { useEffect, useState } from "react"
import AddItem from "../components/AddItem"
import DDLItem from "../components/DDLItem"
import { LocalTask } from "../model/LocalTask"
import { TaskService } from "../util/service"
import './scss/MainPage.scss'



export function MainPage() {
    const [ddls, setDDLs] = useState<LocalTask[]>()

    useEffect(() => {
        refreshDDLs()
    }, [])
    
    function refreshDDLs(): any {
        TaskService.getDDLs().then(setDDLs)
    }
    
    const onAddItem = (task: LocalTask, form:number) => {
        TaskService.addTask(task, form)
        refreshDDLs();
    }

    return (
        <div className="div-main">
            <div className="header">
                <p id="eng">TODO</p>
                <p id="chi">我的</p>
            </div>
            <div className="ddls">
                {ddls && ddls.map((ddl) => ddl.active !== false ?
                    <DDLItem
                        item={ddl}
                        onClickComplete={() => {
                            TaskService.completeTask(ddl.id)
                            refreshDDLs();
                        }} /> :
                    null
                )}
            </div>
            <AddItem
                onAddItem={onAddItem}
            />
        </div>
    )
}

