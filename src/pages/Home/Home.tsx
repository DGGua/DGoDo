import { useState } from 'react'
import { DDLPage } from '../DDLPage/DDLPage'
import InfoPage from '../InfoPage/InfoPage'
import { ItemPage } from '../ItemPage/ItemPage'
import { MainPage } from '../MainPage//MainPage'
import { Panel } from '../Panel/Panel'
import './Home.scss'
export function Home() {

    const [checkout, setCheckout] = useState(0)
    // 0:不显示 1:版本历史 2:已规划
    const [showInfo, setShowInfo] = useState(0)

    return (
        <div className="div-home">
            <Panel
                checkout={checkout}
                setCheckout={setCheckout}
                setShow={setShowInfo}
            />
            <div className="div-home-other">
                {(() => {
                    switch (checkout) {
                        case 0:
                            return <MainPage />
                        case 1:
                            return <DDLPage />
                        case 2:
                            return <ItemPage />
                    }
                })()}
            </div>
            <InfoPage show={showInfo} setShow={setShowInfo} />
        </div>

    )
}