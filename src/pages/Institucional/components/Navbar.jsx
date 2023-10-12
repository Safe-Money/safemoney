import styled from 'styled-components';
import img from '../../../assets/Logo.png';
import { Button } from '../../../components/ButtonNav';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0px 0% 0px 0%;
  align-items: center;
  font-size: 13px;
  padding: 10px;
  color: #5F5F5F;
  font-weight:bold;

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
    color: #399B53;
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

  return (
    <Nav className="nav">
      <img src={img} alt="logo" />

      <Opcoes>
        {options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </Opcoes>

      <Bottoms>
        <a href="#">Login</a>

        <Button bg="#399B53" color="white">
          Cadastro
        </Button>
      </Bottoms>
    </Nav>
  );
}

export default Navbar;