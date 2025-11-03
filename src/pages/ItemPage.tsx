import dayjs from "dayjs";
// AddItem intentionally not used here; keep import commented out or remove
import generateCalendar from "../util/generrateCalendar"
import left from "../static/leftarrow.svg"
import right from "../static/rightarrow.svg"
import './scss/ItemPage.scss'
export function ItemPage() {


    return (
        <div className="div-itempage">
            <Header />
            <Calendar />
            {/* <AddItem /> */}
        </div>
    )
}

function Header(props: any) {

    return (
        <div className="div-header">
            <img src={left} alt="left" />

            <p>{dayjs().format('MMMM') + "."}</p>

            <img src={right} alt="right" />
        </div >

    )
}

function Calendar(props: any) {
    const calendar = generateCalendar();

    return (
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
    )
}