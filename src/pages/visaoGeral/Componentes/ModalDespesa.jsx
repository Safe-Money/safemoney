import Modal from "../../../components/Modal";
import styled from "styled-components";
import { useState } from "react";

const BancoSelect = styled.select`
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
color:#08632D;
position: relative;
border: none;
cursor: pointer;
margin: 3% 0;
width:50%;
box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);

.label {
  position: absolute;
  top: -10px; 
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

function ModalDespesa(props) {
  // const contas = props.contas;
  const [selectedBanco, setContaSelecionada] = useState(null);
  const [saldo, setSaldo] = useState("");
  const [selectedCategoria, setCategoria] = useState(null);

  const handleValorChange = (e) => {
    const valorDigitado = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
    formatarValorNoInput(valorDigitado);
  };

  const formatarValorNoInput = (saldo) => {
    const valorFormatado = formatarMoeda(saldo);
    // // Atualize o valor no estado
    setSaldo(valorFormatado);
  };

  const formatarMoeda = (saldo) => {
    const valorNumerico = parseFloat(saldo) / 100; // Converte centavos para reais
    const valorFormatado = valorNumerico.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    
    return valorFormatado;
  };

  return (
    <Modal title="Adicionar Despesa" cancelar={props.onClose} salvar={props.salvar}>
      <LabelInput>
        <div className="label">Selecione a conta</div>
        <BancoSelect
          id="select_conta"
          value={selectedBanco}
          onChange={(e) => {
            setContaSelecionada(e.target.value);
          }}
        >
          
        </BancoSelect>
      </LabelInput>

      <LabelInput>
        <div className="label">Valor (R$)</div>
        <input
          id="select_saldo"
          type="text"
          className="input-field"
          name="saldo"
          value={saldo}
          onChange={(e) => {
           handleValorChange(e);
          }}

        />
      </LabelInput>

      <LabelInput>
        <div className="label">Qual a categoria?</div>
        <BancoSelect
          id="select_categoria"
          value={selectedCategoria}
          onChange={(e) => {
            setCategoria(e.target.value);
          }}
        >
          <option value="bradesco">Lazer</option>
          <option value="itau">Comida</option>
          <option value="santander">Saúde</option>
          <option value="santander">Viagem</option>
        </BancoSelect>
      </LabelInput>
    </Modal>
  )
}

export default ModalDespesa;