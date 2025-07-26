function Cxdata({ indice, func }) {
    return (
        <div className="bg-white rounded-2xl p-5 flex flex-col gap-[30px_0px]">
            <div className="flex gap-[0px_20px]">
                <div>
                    <img src={indice.logo} alt="logo da imagem" className="w-[55px] pt-2 h-auto" />
                </div>
                <div>
                    <h2 className="text-[#091540] text-2xl font-semibold capitalize">{indice.name}</h2>
                    <p className="max-w-[240px]">{indice.description}</p>
                </div>
            </div>
            <div className="flex justify-between">
                <button onClick={() => func("remove", indice.name)} className="border-[.5px] border-black rounded-3xl text-[18px] p-[5px_15px]">remove</button>
               
                <button
                    onClick={() => func("validation", indice.name, indice.type)} 
                    className={`bg-[#f25654] w-[50px] h-[25px] rounded-3xl relative ${indice.isActive == true ? 'bg-[#f25654]' : 'bg-gray-300'}`}
                >
                    <div 
                        className={`bg-white rounded-[50%] w-[23px] h-[22px] absolute top-[1.3px] left-[1px] ${indice.isActive ? 'active' : ''} transition-all duration-300 ease-in-out`}
                    >
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Cxdata