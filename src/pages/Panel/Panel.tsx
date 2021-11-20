import './Panel.scss'
const list = ["主页", "DDL", "日程"]
export function Panel(props: any) {

    return (
        <div className="div-panel">
            <div className="hiuser">
                {/* <img src={nihao } alt></img> */}
                <p>Hi，</p>
                <p>Unier</p>
            </div>

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
        </div >
    )
}