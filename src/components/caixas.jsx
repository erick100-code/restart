function Cx({ dt, func }) {
    return (
        <div>
            <ul>
                {dt.map(indice => {
                    return (
                        <li key={indice.name}>
                            <h3>{indice.name}</h3>
                            <p>{indice.description}</p>
                            <button onClick={() => func("remove", indice.name)}>remove</button>
                            <button onClick={() => func("validation", indice.name, indice.type)} style={{background: indice.isActive ? '#00ff00' : 'red'}}>active?</button>
                        </li>
                    )
                   
                })}
            </ul>
        </div>
    )
}

export default Cx