import './Panel.scss'
import triangle from "../../static/triangle.svg"
import { useLocation, useNavigate } from 'react-router'
const pathlist = ["/", "/ddl", "/item"]
export function Panel() {
    const nowpath = useLocation().pathname;
    const navigate = useNavigate()
    return (
        <div className="div-panel">
            <div className="hiuser">
                <img src={triangle}></img>
                <p id="hi">Hi,</p>
                <p id="username">Unier</p>
            </div>
            <ul className="choice">

                {["主页", "DDL", "日程"].map(
                    (value, index) => {
                        return <li
                            id={nowpath === pathlist[index] ? "checked" : ""}
                            onClick={() => { navigate(pathlist[index]) }}
                        >
                            {value}
                        </li>
                    }
                )}
            </ul>
            <div className="btns">
                <button className="version" onClick={() => { navigate("/docs/history") }}>版本历史</button>
                <button className="todo" onClick={() => { navigate("/docs/known") }}>已知问题</button>
            </div>
        </div >
    )
}