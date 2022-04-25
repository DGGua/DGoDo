import { Dayjs } from "dayjs";
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
      return axios.post<ResponseData<Task[]>>(baseUrl + "/task/list");
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

async function getDDLs() {
  // let DDLs = JSON.parse(localStorage.getItem("DDLs") ?? "[]")
  let DDLs;
  let response = await service.task.taskGet();
  let responseData = response.data;
  DDLs = responseData.Data && JSON.stringify(responseData.Data);

  return DDLs;
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
