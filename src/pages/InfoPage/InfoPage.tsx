import "./InfoPage.scss"
import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"
import todopath from "../../docs/todo.md"
import historypath from "../../docs/versionhistory.md"

export default function InfoPage(props: any) {
    const [history, setHistory] = useState("")
    const [todo, setTodo] = useState("")

    useEffect(() => {
        fetch(historypath)
            .then((resp) => resp.text())
            .then((txt) => { setHistory(txt); console.log(txt) });
    }, [history]);

    useEffect(() => {
        fetch(todopath)
            .then((resp) => resp.text())
            .then((txt) => setTodo(txt));
    }, [todo]);


    return (
        <div className="div-info" style={{ display: props.show > 0 ? "flex" : "none" }}>
            <div className="content">
                <button className="close" onClick={() => { props.setShow(0) }}>关闭</button>
                <ReactMarkdown>
                    {(() => {
                        switch (props.show) {
                            case 1:
                                return history;
                            case 2:
                                return todo;
                            default:
                                return "# unknown error"
                        }
                    })()}
                </ReactMarkdown>
            </div>
        </div>
    )
}