function Bot(props) {
    return (
        <button 
            {...props}
            className="bg-[#FCFDFF] rounded-3xl text-[#091540] text-2xl capitalize shadow-[1px_1px_5px_#0000004f]"
        >
            {props.children}
        </button>
    )
}
// p-[5px_15px]
export default Bot