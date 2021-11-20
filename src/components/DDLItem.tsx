
export default function DDLItem(props: any) {
    return (
        <div className="div-ddlitem">
            {/* <img></img> */}
            <p>{props.item.description}</p>
            <p>{props.item.time.format('MM-DD')}</p>
            {/* <img></img> */}
        </div>
    )
}

