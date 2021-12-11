import "./InfoPage.scss"
import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"

import { service } from "../../service/service"
import { Route, Routes, useParams } from "react-router"

export default function InfoPage(props: any) {
    const [file, setFile] = useState("")
    const name = useParams().name!
    const filePathMap = new Map([
        ["known", service.docs.getTodoFile],
        ["history", service.docs.getHistoryFile]
    ])

    useEffect(() => {
        filePathMap.get(name)!()
            .then((resp) => setFile(resp.data))
    }, [name]);

    return (
        <div className="div-doc">
            <ReactMarkdown>
                {file}
            </ReactMarkdown>
        </div>
    )

}
