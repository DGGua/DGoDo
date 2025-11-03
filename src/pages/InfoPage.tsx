import "./scss/InfoPage.scss"
import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"

import { service } from "../service/service"
import { useParams } from "react-router"

export default function InfoPage(props: any) {
    const [file, setFile] = useState("")
    const name = useParams().name!
    useEffect(() => {
        const fetcher = name === 'known' ? service.docs.getTodoFile : service.docs.getHistoryFile
        fetcher()
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
