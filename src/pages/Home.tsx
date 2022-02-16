import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { DDLPage } from './DDLPage'
import InfoPage from './InfoPage'
import { ItemPage } from './ItemPage'
import { MainPage } from './MainPage'
import { Panel } from './Panel'
import './scss/Home.scss'
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