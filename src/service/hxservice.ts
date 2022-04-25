import axios from "axios";

const baseUrl = "http://127.0.0.1:4523/mock/468343"

export const hxservice = {
    task:{
        taskGet:() => {
            return axios({
                baseURL: baseUrl,
                url: "/task/list",
                method: "POST",
            })
        },
        
        taskCreate:(content:string, expect_time:string,  root_id:string="", text:string="",root_form:number=0, form: number=2) => {
            return axios({
                baseURL:baseUrl,
                url:"/task/create",
                method:"POST",
                data:{
                    content:content,
                    expect_time:expect_time,
                    text:text,
                    root_id:root_id,
                    root_form:root_form,
                    form:form
                }
            })
        }
    }

}