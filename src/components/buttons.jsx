function Buttons({ funcao }) {
    return (
        <div>
            <button onClick={() => funcao("all")}>all</button>
            <button onClick={() => funcao("active")}>active</button>
            <button onClick={() => funcao("inactive")}>inactive</button>
        </div>
    )
}

export default Buttons