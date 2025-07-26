function Cxdata({ indice, func }) {
    return (
        <div className="bg-white rounded-2xl h-[250px] p-5 flex flex-col gap-[30px_0px] dark:bg-[#1F2535] dark:border dark:border-gray-500 justify-between">
            <div className="flex gap-[0px_20px]">
                <div>
                    <img src={indice.logo} alt="logo da imagem" className="w-[55px] pt-2 h-auto" />
                </div>
                <div>
                    <h2 className="text-[#091540] text-2xl font-semibold capitalize dark:text-white">{indice.name}</h2>
                    <p className="max-w-[240px] dark:text-gray-400">{indice.description}</p>
                </div>
            </div>

            <div className="flex justify-between">
                <button onClick={() => func("remove", indice.name)} className="border-[.1px]  border-[#00000057] rounded-3xl text-[18px] p-[5px_15px] cursor-pointer dark:border-gray-500 dark:text-white focus:outline-2 focus:outline-red-600 focus:border-0 focus:bg-gray-100 dark:focus:bg-gray-700 dark:focus:border-2 dark:focus:border-[#091540] dark:">remove</button>
               
                <button
                    onClick={() => func("validation", indice.name, indice.type)} 
                    className={`bg-[#f25654] w-[50px] h-[25px] rounded-3xl relative ${indice.isActive == true ? 'bg-[#f25654]' : 'bg-gray-300 dark:bg-gray-500'} cursor-pointer focus:outline-2 focus:outline-red-600  focus:border-2 focus:border-white focus:p-0.5 focus:h-[28px] dark:focus:border-[#091540]`}
                >
                    <div 
                        className={`bg-white rounded-[50%] w-[23px] h-[22px] absolute top-[1.3px] min-[1000px]:top-[1.4px] left-[1px] ${indice.isActive ? 'active' : ''} transition-all duration-300 ease-in-out`}
                    >
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Cxdata