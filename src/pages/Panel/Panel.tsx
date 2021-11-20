import './Panel.scss'
const list = ["主页", "DDL", "日程"]
export function Panel(props: any) {

    return (
        <div className="div-panel">

            {[0, 1, 2].map(
                (index) => {
                    return <li
                        id={props.checkout == index ? "checked" : ""}
                        onClick={() => { props.setCheckout(index) }}
                    >
                        {list[index]}
                    </li>
                }
            )}


        </div >
    )
}