import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from "../funcoes/icons";


const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  width:850px;
  height:550px;
  display:flex;
  flex-direction:column;
  align-items:center;
  z-index:10;
`;

const LogoNome = styled.div`
display:flex;
flex-direction:column;
align-items:center;
color:#09B451;

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
margin-top:9%;

button{
  padding:10px;
  width:170px;
  border-radius:5px;
  letter-spacing: 0.8px;
}

.cancelar{
  color:white;
  background-Color:rgba(255, 0, 0, 1);
  cursor:pointer;
}
.adicionar-btn{
  color:white;
  background-Color:rgba(9, 180, 81, 1);
  cursor:pointer;
}
`;

const CategoriaSelect = styled.select`
width: 100%;
padding: 10px;
border: 1px solid rgba(0, 0, 0, 1);
box-sizing: border-box;
box-shadow: 1 1 1 1;
border-radius: 5px;
letter-spacing: 0.8px;
background-color: #FFF;
color: #000;
`;
const OrigemSelect = styled.select`
width: 100%;
padding: 10px;
border: 1px solid rgba(0, 0, 0, 1);
box-sizing: border-box;
box-shadow: 1 1 1 1;
border-radius: 5px;
letter-spacing: 0.8px;
background-color: #FFF;
color: #000;
`;

const LabelInput = styled.div`
display:flex;
flex-direction:column;
margin-bottom:30px;
align-items:center;
color:#09B451;
position: relative;
margin: 3% 0;
width:50%;
box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);

.label {
  position: absolute;
  top: -10px; 
  left: 20%;
  transform: translateX(-50%);
  background-color: white; 
  padding: 0 10px;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 1); 
  box-sizing: border-box;
  box-shadow: 1 1 1 1;
  border-radius:5px;
  letter-spacing: 0.8px;
}
`;

const ModalCartao =  ({ isOpen, onClose, onSave, formData, onChange }) => {
  const [categoria, setCategoria] = useState('');
  const [origem, setOrigem] = useState('');
  const [valor, setValor] = useState('');
  const [selectedCategoria, setSelectedCategoria] = useState('');
  const [selectedOrigem, setSelectedOrigem] = useState('');
  



  const handleSalvar = () => {
    const novaConta = {
      categoria: selectedCategoria,
      origem:selectedOrigem,
      valor: parseFloat(valor)
    };
    onSave(novaConta);
    setValor('');
    setSelectedOrigem('');
    setSelectedCategoria('');
    onClose();
  };


  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>

        <LogoNome>
          <span><img src={Icon('logo')} />
          </span>
          <div>Nova Conta</div>
        </LogoNome>


        <LabelInput>
          <div class="label">Valor</div>
          <input type="text" class="input-field" />
        </LabelInput>
        <LabelInput>
          <div class="label">Categoria</div>
          <CategoriaSelect
          value={selectedCategoria}
          onChange={(e) => setSelectedCategoria(e.target.value)} 
          >
          <option value="">Selecione um banco</option>
          <option value="bradesco">Bradesco</option>
          <option value="itau">Itaú</option>
          <option value="santander">Santander</option>
          </CategoriaSelect>
        </LabelInput>
        <LabelInput>
          <div class="label">Origem</div>
          <OrigemSelect
          value={selectedOrigem}
          onChange={(e) => setSelectedOrigem(e.target.value)} 
          >
          <option value="">Selecione um banco</option>
          <option value="bradesco">Bradesco</option>
          <option value="itau">Itaú</option>
          <option value="santander">Santander</option>
          </OrigemSelect>
        </LabelInput>


        <Button>
          <button onClick={onClose} className='cancelar'>Cancelar</button>
          <button className='adicionar-btn' onClick={handleSalvar}>Adicionar</button>
        </Button>

      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalCartao;
