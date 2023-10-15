import logo from "../../../assets/logo2.png";

function Header(props) {
    return (
        <header className="header">
            <img className="loginImg" src={logo} alt="Logo" />
            <span>{props.text}</span>
        </header>
    )
}

export default Header;