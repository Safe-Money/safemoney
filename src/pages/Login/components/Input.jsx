function Input(props) {
    return (
        <div className="inputContainer">
            <input type={props.type ? props.type : "text"} name={props.name} id={props.id} required="required" />
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    )
}

export default Input;