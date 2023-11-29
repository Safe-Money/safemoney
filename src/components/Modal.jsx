import styled from "styled-components";
import { Icon } from "../pages/visaoGeral/funcoes/icons";

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:9999;
`;

const ModalContent = styled.div`
  background: white;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  width:60%;
  height:92%;
  display:flex;
  flex-direction:column;
  align-items:center;
  z-index:10;
`;

const LogoNome = styled.div`
display:flex;
flex-direction:column;
align-items:center;
color:#08632D;

span{
}

div{
  font-size:27px;
  font-weight: 600;
  margin-bottom:15%;

}

`;

const Button = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:50%;
margin: 3% 0;

button{
  padding:10px;
  width:170px;
  border-radius:5px;
  letter-spacing: 0.8px;
}

.cancelar{
  color:white;
  background-color:#D0112B;
  cursor:pointer;
  border:none;
}
.adicionar-btn{
  color:white;
  border: none;
  background-Color:#08632D;
  cursor:pointer;
}
`

function Modal(props) {
  return (
    <ModalWrap>
      <ModalContent>

        <LogoNome>
          <span>
            <img src={Icon('logo')} />
          </span>

          <div>{props.title}</div>
        </LogoNome>


        {props.children} 


        <Button>
          <button onClick={props.cancelar} className='cancelar'>Cancelar</button>
          <button className='adicionar-btn' onClick={props.salvar} >Salvar</button>
        </Button>

      </ModalContent>
    </ModalWrap>
  )
}

export default Modal;