import { Dayjs } from "dayjs";
import { DDL } from "../model/DDL";

export const DDLService = {
    getDDLs: getDDLs,
    addDDL: addDDL,
    compeleteDDL: compeleteDDL
}

function getDDLs(): DDL[] {

    let DDLs = JSON.parse(localStorage.getItem("DDLs") ?? "[]")
    return DDLs;
}

function setDDLs(DDLs: DDL[]) {
    localStorage.setItem("DDLs", JSON.stringify(DDLs))
}

function addDDL(aDDL: DDL) {
    let DDLs = getDDLs()
    DDLs.push(aDDL)
    setDDLs(DDLs)
}

function compeleteDDL(id: number) {
    let DDLs = getDDLs()
    DDLs.forEach(DDL => {
        if (DDL.id === id) {
            DDL.active = false
        }
    })
    setDDLs(DDLs);
}