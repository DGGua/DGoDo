import dayjs from "dayjs";


// 返回当月的日历
export default function generateCalendar(): dayjs.Dayjs[][] {
    // 今天Date
    const now = dayjs()
    // 目前是当前周的第一天
    let theFirstDay = dayjs(now).subtract(now.day(), 'd')

    while (!theFirstDay.isBefore(dayjs(new Date(now.year(), now.month(), 2)))) {
        theFirstDay = theFirstDay.subtract(7, 'd')
    }

    let ans: dayjs.Dayjs[][] = [[]];

    for (let i = 0; i < 6; i++) {
        let week: dayjs.Dayjs[] = [];
        for (let j = 0; j < 7; j++) {
            week.push(theFirstDay);
            theFirstDay = theFirstDay.add(1, 'd')
        }
        ans.push(week)
    }
    return ans;
}