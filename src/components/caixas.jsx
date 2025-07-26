import Cxdata from "./cxdata"

function Cx({ dt, func }) {
    return (
        <div>
            <ul className="flex flex-col gap-[15px_15px] min-[1000px]:grid grid-cols-3">
                {dt.map(indice => {
                    return (
                        <li key={indice.name}>
                            <Cxdata indice={indice} func={func}/>
                        </li>
                    )
                   
                })}
            </ul>
        
        </div>
    )
}

export default Cx