import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { DDLPage } from '../DDLPage/DDLPage'
import InfoPage from '../InfoPage/InfoPage'
import { ItemPage } from '../ItemPage/ItemPage'
import { MainPage } from '../MainPage//MainPage'
import { Panel } from '../Panel/Panel'
import './Home.scss'
export function Home() {

    return (
        <div className="div-home">
            <Panel />
            <div className="div-home-other">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/ddl" element={<DDLPage />} />
                    <Route path="/item" element={<ItemPage />} />
                    <Route path="/docs/:name" element={<InfoPage />} />
                </Routes>
            </div>
        </div>

    )
}