import "./InfoPage.scss"
import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"
import knownpath from "../../docs/todo.md"
import historypath from "../../docs/versionhistory.md"
import { Route, Routes, useParams } from "react-router"

export default function InfoPage(props: any) {
    const [file, setFile] = useState("")
    const name = useParams().name!
    console.log(name)
    const filePathMap = new Map([
        ["known", knownpath],
        ["history", historypath]
    ])

    useEffect(() => {
        fetch(filePathMap.get(name))
            .then((resp) => resp.text())
            .then((txt) => { setFile(txt); });
    }, [name]);

    return (
        <div className="div-doc">
            <ReactMarkdown>
                {file}
            </ReactMarkdown>
        </div>
    )

}
