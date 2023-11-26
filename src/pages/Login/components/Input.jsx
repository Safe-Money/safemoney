function Input(props) {
    return (
        <div className="inputContainer">
            <input type={props.type ? props.type : "text"} name={props.name} id={props.id} 
             value={props.valor ? props.valor : null} onChange={props.change}/>
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    )
}

export default Input;