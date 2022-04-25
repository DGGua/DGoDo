import { Dayjs } from "dayjs";
import { DDL } from "../model/DDL";
import { hxservice } from '../service/hxservice'


export const DDLService = {
    getDDLs: getDDLs,
    addDDL: addDDL,
    // compeleteDDL: compeleteDDL
}


let data:string
hxservice.task.taskGet().then(response => {
    data = response.data
})   //从后端获取数据

function getDDLs(){

    // let DDLs = JSON.parse(localStorage.getItem("DDLs") ?? "[]")
    console.log(data)
    let DDLs = data && JSON.parse(data)
    return DDLs;
}

// function setDDLs(DDLs: DDL[]) {
//     localStorage.setItem("DDLs", JSON.stringify(DDLs))
// }

function addDDL(aDDL: DDL) {
    // let DDLs = getDDLs()
    // DDLs.push(aDDL)
    // setDDLs(DDLs)
    const content = aDDL.content
    const time:string = aDDL.time.toString() 
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