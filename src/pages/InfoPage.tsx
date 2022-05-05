import "./scss/InfoPage.scss"
import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"

import { service } from "../service/service"
import { Route, Routes, useParams } from "react-router"

export default function InfoPage(props: any) {
    const [file, setFile] = useState("")
    const name = useParams().name!   //声明式路由userParmas钩子获取参数，！强制默认存在（undefined）    
    console.log(name)
    const filePathMap = new Map([   //Map 对象保存键值对，并且能够记住键的原始插入顺序。
        ["known", service.docs.getTodoFile],
        ["history", service.docs.getHistoryFile]
    ])

    useEffect(() => {
        filePathMap.get(name)!()  //Map.get(key)，返回键对应的值
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
