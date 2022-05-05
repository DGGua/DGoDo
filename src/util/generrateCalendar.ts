import dayjs from "dayjs";


// 返回当月的日历
export default function generateCalendar(): dayjs.Dayjs[][] {
    // // 今天Date
    // const now = dayjs()
    // // 目前是当前周的第一天
    // let theFirstDay = dayjs(now).subtract(now.day(), 'd')

    // while (!theFirstDay.isBefore(dayjs(new Date(now.year(), now.month(), 2)))) {   //保证日历第一行至少有一个当月1号
    //     theFirstDay = theFirstDay.subtract(7, 'd')
    // }

    // let ans: dayjs.Dayjs[][] = [[]];

    // for (let i = 0; i < 6; i++) {
    //     let week: dayjs.Dayjs[] = [];
    //     for (let j = 0; j < 7; j++) {
    //         week.push(theFirstDay);
    //         theFirstDay = theFirstDay.add(1, 'd')
    //     }
    //     ans.push(week)
    // }
    // return ans;

    //知道今天的日期
    const nowday = dayjs()
    //确定本月1号的日期
    const month_1 = dayjs(nowday).subtract(nowday.date(),"d")
    //确定本月1号所在周的周日
    let sunDay = dayjs(month_1).subtract(month_1.day(),"d")
    //创建当月日历
    let monthCalendar:dayjs.Dayjs[][] = [[]]
    for (let i=0; i<6; i++){
        let week = []
        for (let j=0; j<7; j++){
            week.push(sunDay)
            sunDay  = sunDay.add(1,"d")
        }
        monthCalendar.push(week)
    }
    return monthCalendar
}
