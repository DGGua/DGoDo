import dayjs, { Dayjs } from "dayjs";
import { DDLService } from "../util/service";

export class DDL {
    id: number;
    content: string;
    time: Dayjs;
    active: boolean;

    // 创建一个DDL，id由localStorage已经存储的内容决定
    constructor(content: string = "", time: Dayjs = dayjs(), active: boolean = true) {
        let ddls = DDLService.getDDLs();
        this.id = (ddls.pop()?.id ?? 0) + 1
        this.content = content;
        this.time = time;
        this.active = active;
    }



}