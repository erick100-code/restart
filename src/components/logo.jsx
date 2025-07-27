import { useRef } from "react"

function Logo({ modoD }) {
    const botMODE = useRef()

    const alterarMODE = () => {
        const mode = botMODE.current.getAttribute('data-mode')
        
        if (mode == 'light') {
            botMODE.current.setAttribute('src', '/restart/images/icon-sun.svg')
            botMODE.current.setAttribute('data-mode', 'dark')
            modoD('dark')
        } else if (mode == 'dark') {
            botMODE.current.setAttribute('data-mode', 'light')
            botMODE.current.setAttribute('src', '/restart/images/icon-moon.svg')
            modoD('light')
        }
    }

    return (
        <div>
            <div className="bg-white rounded-[5px] flex items-center justify-between p-3.5 dark:bg-[#1F2535]">
                <div className="flex items-center gap-[0px_15px]">
                    <img src="/restart/images/ico.png" alt="logo do site" />
                    <h1 className="text-[#091540] text-[28px] font-bold capitalize dark:text-white">extensions</h1>
                </div>

                <button className="bg-[#EEEEEE] rounded-[10px] p-3.5 cursor-pointer dark:bg-[#2F354B] focus:outline-2 focus:outline-red-600" onClick={() => alterarMODE()}>
                    <img ref={botMODE} src="/restart/images/icon-moon.svg" alt="logo da lua" data-mode={"light"}/>
                </button>
            </div>
        </div>
    )
}

export default Logo