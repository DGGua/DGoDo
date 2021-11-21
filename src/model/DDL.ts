import { Dayjs } from "dayjs";
import { getDDLs } from "../util/service";

export class DDL {
    id: number;
    content: string;
    time: Dayjs;
    active: boolean;

    // 创建一个DDL，id由localStorage已经存储的内容决定
    constructor(content?: string, time?: Dayjs, active?: boolean) {
        let DDLs = getDDLs();
        this.id = DDLs.length > 0 ? DDLs.pop().id + 1 : 0
        this.content = content || "";
        this.time = time || new Dayjs();
        this.active = active || true;
    }
}