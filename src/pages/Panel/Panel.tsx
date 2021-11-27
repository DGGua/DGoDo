import './Panel.scss'
import triangle from "../../static/triangle.svg"
const list = ["主页", "DDL", "日程"]
export function Panel(props: any) {

    return (
        <div className="div-panel">
            <div className="hiuser">
                <img src={triangle}></img>
                <p id="hi">Hi,</p>
                <p id="username">Unier</p>
            </div>
            <ul className="choice">

                {[0, 1, 2].map(
                    (index) => {
                        return <li
                            id={props.checkout === index ? "checked" : ""}
                            onClick={() => { props.setCheckout(index) }}
                        >
                            {list[index]}
                        </li>
                    }
                )}
            </ul>
            <div className="btns">
                <button className="version" onClick={() => { props.setShow(1) }}>版本历史</button>
                <button className="todo" onClick={() => { props.setShow(2) }}>已规划内容</button>
            </div>
        </div >
    )
}