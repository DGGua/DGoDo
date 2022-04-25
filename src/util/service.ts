import dayjs, { Dayjs } from "dayjs";
import { DDL } from "../model/DDL";
import axios from "axios";
import { parse } from "path";

interface ResponseData<T> {
    Status: number;
    Msg: string;
    Data: T;
}

interface Task {
    id: number;
    name: string;
    content: string;
    create_time: string;
    expect_time: string;
    finish_time: string;
    status: number;
    root_id: string;
    root_form: number;
    form: number;
}

const baseUrl = "http://127.0.0.1:4523/mock/468343";

export const DDLService = {
    getDDLs: getDDLs,
    addDDL: addDDL,
    // compeleteDDL: compeleteDDL
};

const service = {
    task: {
        taskGet: () => {
            return axios.post<ResponseData<Task[]>>(baseUrl + "/task/list");   //Promise类型转型
        },

        taskCreate: (
            content: string,
            expect_time: string,
            root_id: string = "",
            text: string = "",
            root_form: number = 0,
            form: number = 2
        ) => {
            return axios({
                baseURL: baseUrl,
                url: "/task/create",
                method: "POST",
                data: {
                    content: content,
                    expect_time: expect_time,
                    text: text,
                    root_id: root_id,
                    root_form: root_form,
                    form: form,
                },
            });
        },
    },
};

async function getTasks() {
    let response = await service.task.taskGet();
    let responseData = response.data.Data;
    return responseData
}

async function getDDLs() {
    // let DDLs = JSON.parse(localStorage.getItem("DDLs") ?? "[]")
    let DDLs: DDL[] = [];
    const tasks = await getTasks()
    tasks.map(data => {
        let time
        const ddl: DDL = {
            id: data.id,
            content: data.content,
            time: dayjs(data.expect_time)
        }
        data.form === 2 ? DDLs.push(ddl) : null
    })
    console.log(DDLs)
    return DDLs;
}
async function getDate() {
    // let DDLs = JSON.parse(localStorage.getItem("DDLs") ?? "[]")
    let Dates: DDL[] = [];
    const tasks = await getTasks()
    tasks.map(data => {
        let time
        const date: DDL = {
            id: data.id,
            content: data.content,
            time: dayjs(data.expect_time)
        }
        data.form === 1 ? Dates.push(date) : null
    })
    console.log(Dates)
    return Dates;
}

// function setDDLs(DDLs: DDL[]) {
//     localStorage.setItem("DDLs", JSON.stringify(DDLs))
// }

function addDDL(aDDL: DDL) {
    // let DDLs = getDDLs()
    // DDLs.push(aDDL)
    // setDDLs(DDLs)
    const content = aDDL.content;
    const time: string = aDDL.time.toString();
    service.task.taskCreate(content, time);
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
