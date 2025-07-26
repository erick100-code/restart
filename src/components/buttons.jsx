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
        <div className="flex flex-col gap-[30px_0px] text-center min-[1000px]:flex-row min-[1000px]:justify-between">
            <h1  className="text-[#091540] text-[40px] font-bold capitalize dark:text-white">extensions list</h1>
            
            <div className=" flex gap-[0px_30px]">
                <Bot onClick={() => funcao("all")}>
                    <div ref={botAll} onClick={() => ativados("all")} className="p-[5px_15px] flex justify-center items-center h-full w-full dark:border-[1px] dark:border-gray-600 rounded-4xl">all</div>
                </Bot>

                <Bot onClick={() => funcao("active")}>
                    <div ref={botActive} onClick={() => ativados("active")} className="p-[5px_10px] flex justify-center items-center h-full w-full dark:border-[1px] dark:border-gray-600 rounded-4xl">active</div>
                </Bot>
                
                <Bot onClick={() => funcao("inactive")}>
                    <div ref={botInactive} onClick={() => ativados("inactive")} className="p-[5px_15px] dark:border-[1px] dark:border-gray-600 h-full w-full flex justify-center items-center rounded-4xl">inactive</div>
                </Bot>
            </div>
        </div>
    )
}

export default Buttons