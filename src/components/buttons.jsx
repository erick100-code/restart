import { useRef } from "react"
import Bot from "./bot"

function Buttons({ funcao }) {
    const botAll = useRef()
    const botActive = useRef()
    const botInactive = useRef()

    function ativados(button) {
        botAll.current.classList.remove('activeB')
        botActive.current.classList.remove('activeB')
        botInactive.current.classList.remove('activeB')
        
        switch(button) {
            case "all":
                botAll.current.classList.add('activeB')
                break
            case "active":
                botActive.current.classList.add('activeB')
                break
            case  "inactive":
                botInactive.current.classList.add('activeB')
                break
        }
    }

    return (
        <div className="flex flex-col gap-[30px_0px] text-center">
            <h1  className="text-[#091540] text-[40px] font-bold capitalize">extensions list</h1>
            
            <div className="text-center flex gap-[0px_30px] justify-center">
                <Bot onClick={() => funcao("all")}>
                    <div ref={botAll} onClick={() => ativados("all")} className="p-[5px_15px]">all</div>
                </Bot>

                <Bot onClick={() => funcao("active")}>
                    <div ref={botActive} onClick={() => ativados("active")} className="p-[5px_15px]">active</div>
                </Bot>
                
                <Bot onClick={() => funcao("inactive")}>
                    <div ref={botInactive} onClick={() => ativados("inactive")} className="p-[5px_15px]">inactive</div>
                </Bot>
            </div>
        </div>
    )
}

export default Buttons