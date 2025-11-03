import { Dayjs } from "dayjs";

export interface DDL {
    // DDL 唯一识别 id
    id: number;
    // 内容
    content: string;
    // 截止时间
    time: Dayjs;
    // 是否仍有效
    active?: boolean;
}