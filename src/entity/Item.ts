export class Item {
    key: number;
    title: string;
    add_time: Date;
    expect_time: Date;
    status: number;
    done_time: Date;

    constructor(id: number, title: string, add_time: Date, expect_time: Date, status: number, done_time: Date) {
        this.key = id;
        this.title = title;
        this.add_time = add_time;
        this.expect_time = expect_time;
        this.status = status;
        this.done_time = done_time;
    }


}