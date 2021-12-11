import axios from "axios"
import exp from "constants"
import dayjs from "dayjs"
import internal from "stream"

// const baseUrl = "http://big.dggua.top:4001"
const baseUrl = "/api"
// const baseUrl = "http://127.0.0.1:4523/mock/468343"

export const service = {
    // ddl: {
    //     getAll: () => {
    //         return axios({
    //             baseURL: baseUrl,
    //             url: "ddl/all",
    //             method: "GET"
    //         })
    //     },
    //     update: (id: number, status: number) => {
    //         return axios({
    //             baseURL: baseUrl,
    //             url: "/ddl/updateStatus",
    //             method: "POST",
    //             params: {
    //                 id: id,
    //                 status: status
    //             }
    //         })
    //     },
    //     create: (content: string, expect_time: dayjs.Dayjs) => {
    //         console.log([content, expect_time])
    //         return axios({
    //             baseURL: baseUrl,
    //             url: "/ddl/create",
    //             method: "POST",
    //             params: {
    //                 content: content,
    //                 expect_time: expect_time.toISOString()
    //             }
    //         })
    //     },
    // },
    docs: {
        getTodoFile: () => {
            return axios({
                baseURL: baseUrl,
                url: "/docs/getTodo",
                method: "GET"
            })
        },
        getHistoryFile: () => {
            return axios({
                baseURL: baseUrl,
                url: "/docs/getHistory",
                method: "GET"
            })
        }
    }

}

// export const DDLService = {
//     getDDLs: getDDLs,
//     addDDL: addDDL,
//     compeleteDDL: compeleteDDL
// }

// function getDDLs(): DDL[] {

//     let DDLs = JSON.parse(localStorage.getItem("DDLs") ?? "[]")
//     console.log(DDLs)
//     return DDLs;
// }

// function setDDLs(DDLs: DDL[]) {
//     localStorage.setItem("DDLs", JSON.stringify(DDLs))
// }

// function addDDL(aDDL: DDL) {
//     let DDLs = getDDLs()
//     DDLs.push(aDDL)
//     setDDLs(DDLs)
// }

// function compeleteDDL(id: number) {
//     let DDLs = getDDLs()
//     DDLs.forEach(DDL => {
//         if (DDL.id === id) {
//             DDL.status = 0
//         }
//     })
//     setDDLs(DDLs);
// }