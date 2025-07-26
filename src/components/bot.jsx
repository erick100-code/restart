function Bot(props) {
    return (
        <button 
            {...props}
            className="bg-[#FCFDFF]  text-[#091540] text-2xl capitalize shadow-[1px_1px_5px_#0000004f] cursor-pointer dark:bg-[#2F354C] dark:text-white shrink-0 grow-0 h-auto w-auto rounded-4xl hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-2 focus:outline-red-600 p-0.5"
        >
            {props.children}
        </button>
    )
}
// p-[5px_15px]
export default Bot