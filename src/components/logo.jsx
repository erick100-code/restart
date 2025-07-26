function Logo() {
    return (
        <div>
            <div className="bg-white rounded-[5px] flex items-center justify-between p-3.5">
                <div className="flex items-center gap-[0px_15px]">
                    <img src="images/ico.png" alt="logo do site" />
                    <h1 className="text-[#091540] text-[28px] font-bold capitalize">extensions</h1>
                </div>

                <div className="bg-[#EEEEEE] rounded-[10px] p-3.5 cursor-pointer">
                    <img src="images/icon-moon.svg" alt="logo da lua"/>
                </div>
            </div>
        </div>
    )
}

export default Logo