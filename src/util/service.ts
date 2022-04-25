import { Dayjs } from "dayjs";
import { DDL } from "../model/DDL";
import { hxservice } from '../service/hxservice'


export const DDLService = {
    getDDLs: getDDLs,
    addDDL: addDDL,
    // compeleteDDL: compeleteDDL
}

async function getDDLs() {

    // let DDLs = JSON.parse(localStorage.getItem("DDLs") ?? "[]")
    let DDLs
    let response = await hxservice.task.taskGet()

    console.log(response.data.Data)
    DDLs = response.data.Data && JSON.parse(response.data.Data)
    //从后端获取数据

    return DDLs
}

// function setDDLs(DDLs: DDL[]) {
//     localStorage.setItem("DDLs", JSON.stringify(DDLs))
// }

function addDDL(aDDL: DDL) {
    // let DDLs = getDDLs()
    // DDLs.push(aDDL)
    // setDDLs(DDLs)
    const content = aDDL.content
    const time: string = aDDL.time.toString()
    hxservice.task.taskCreate(content, time)

}

// function compeleteDDL(id: number) {
//     let DDLs = getDDLs()
//     DDLs.forEach(DDL => {
//         if (DDL.id === id) {
//             DDL.active = false
//         }
//     })
//     // setDDLs(DDLs);
// }