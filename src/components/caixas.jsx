import Cxdata from "./cxdata"

function Cx({ dt, func }) {
    return (
        <div>
            <ul className="flex flex-col gap-[20px_0px]">
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