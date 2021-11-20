import dayjs from "dayjs";
import generateCalendar from "../../util/generrateCalendar"

export function ItemPage() {

    const calendar = generateCalendar();

    return (
        <div className="div-itempage">
            <table>
                <thead>
                    <tr>
                        {
                            ["日", "一", "二", "三", "四", "五", "六"].map((day) => {
                                return <th scope="col">{day}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        calendar.map(week => {
                            return (
                                <tr>
                                    {
                                        week.map(day => {
                                            return (
                                                <td id={day.month() === dayjs().month() ? "" : "notsamemonth"}>
                                                    {day.date()}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}