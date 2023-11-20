import styled from 'styled-components';
import img from '../../../assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ButtonNav';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  font-size: 13px;
  padding: 10px;
  color: #5F5F5F;
  font-weight:bold;
  width: 85%;

  a {
    color: #5F5F5F;
    font-weight: bold;
    text-decoration: none;
    font-size:15px;
    

    &:hover {
      text-decoration: underline;
    }
  }
  img {
    max-width: 6.5%;
    height: auto;
  }
`;

const Opcoes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;

  li {
    list-style-type: none;
    cursor: pointer;
    margin: 0 10px;
  }
`;

const Bottoms = styled.div`
  display: flex;
  align-items: center;
  
  

  a {
    font-size: 12px;
    color: #08632D;
    font-weight: bold;
    text-decoration: none;
    margin-right: 20px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Navbar() {
  const options = ['Home', 'Produto', 'Contato'];
  const navigate = useNavigate();

  return (
    <Nav className="nav">
      <img src={img} alt="logo" />

      <Opcoes>
        {options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </Opcoes>

      <Bottoms>
        <a onClick={()=> navigate("/login")}>Login</a>

        <a onClick={()=> navigate("/cadastro")}>
        <Button bg="#08632D" color="white">

        Cadastro

        </Button>
        </a>
      </Bottoms>
    </Nav>
  );
}

export default Navbar;
