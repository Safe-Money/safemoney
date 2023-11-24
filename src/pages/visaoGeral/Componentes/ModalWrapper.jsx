import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from "../funcoes/icons";


const ModalWrap = styled.div`
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
  width:40em;
  height:500px;
  display:flex;
  flex-direction:column;
  align-items:center;
  z-index:10;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
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
width:60%;
margin-top:9%;

button{
  padding:10px;
  width:150px;
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
`;

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

const StyledSelect = styled.select`
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
width:60%;
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

const ModalWrapper = ({ isOpen, onClose, onSave, formData, onChange }) => {
  // const [banco, setBanco] = useState('');
  const [tipoConta, setTipoConta] = useState('');
  const [saldo, setSaldo] = useState('');
  const [selectedBanco, setSelectedBanco] = useState('');
  const [selectedTipoConta, setSelectedTipoConta] = useState('');



  const [camposTocados, setCamposTocados] = useState({
    banco: false,
    tipoConta: false,
    saldo: false
  });

  // Salvar os dados das inputs/select
  const handleSalvar = () => {
    const camposNaoTocados = {
      banco: !camposTocados.banco,
      tipoConta: !camposTocados.tipoConta,
      saldo: !camposTocados.saldo
    };

    setCamposTocados({
      banco: camposTocados.banco || camposNaoTocados.banco,
      tipoConta: camposTocados.tipoConta || camposNaoTocados.tipoConta,
      saldo: camposTocados.saldo || camposNaoTocados.saldo
    });

    if (camposNaoTocados.banco || camposNaoTocados.tipoConta || camposNaoTocados.saldo) {
      // Se nenhum campo foi tocado, mostra as bordas vermelhas
      setCamposTocados({
        banco: true,
        tipoConta: true,
        saldo: true
      });
      return;
    }


    if (!selectedBanco || !selectedTipoConta || !saldo) {
      // Mostra uma mensagem de erro, você pode adicionar uma lógica aqui para lidar com a mensagem de erro
      console.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const saldoNumerico = parseFloat(saldo.replace(/[^\d,.-]/g, '').replace(',', '.'));
    const novaConta = {
      banco: selectedBanco,
      tipoConta: selectedTipoConta,
      saldo: parseFloat(saldoNumerico)
    };
    onSave(novaConta);
    setTipoConta('');
    setSaldo('');
    setSelectedBanco('');
    onClose();
    resetCamposTocados();
  };


  //Resetar campos ao adicionar conta ou cancelar
  const resetCamposTocados = () => {
    setCamposTocados({
      banco: false,
      tipoConta: false,
      saldo: false
    });
  };


  //Resetar campos ao cancelar
  const handleCancelarClick = () => {
    onClose();
    resetarCampos();
  };


  const [valorAmortizar, setValorAmortizar] = useState('');

  const handleValorChange = (e) => {
    const valorDigitado = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
    setValorAmortizar(valorDigitado);
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

  const resetarCampos = () => {
    setSaldo('');
    setSelectedBanco('');
    setSelectedTipoConta('');
    resetCamposTocados();
  };

  const handleCancelarClick2 = (e) => {
    // Verifica se o clique ocorreu diretamente no ModalWrap e não em elementos dentro do ModalContent
    if (e.target.classList.contains('ModalWrap')) {
      onClose();
      resetarCampos();
    }
  };



  if (!isOpen) return null;

  return (
    <ModalWrap className="ModalWrap" onClick={handleCancelarClick2} >
      <ModalContent  className="ModalContent">

        <LogoNome>
          <span><img src={Icon('logo')} />
          </span>
          <div>Nova Conta</div>
        </LogoNome>


        <LabelInput>
          <div className="label">Banco</div>
          <BancoSelect
            id="select_banco"
            value={selectedBanco}
            onChange={(e) => {
              setSelectedBanco(e.target.value);
              setCamposTocados({ ...camposTocados, banco: true });
            }}
            style={{ borderColor: camposTocados.banco && !selectedBanco ? 'red' : '' }}
          >
            <option value="">Selecione um banco</option>
            <option value="bradesco">Bradesco</option>
            <option value="itau">Itaú</option>
            <option value="santander">Santander</option>
          </BancoSelect>
        </LabelInput>
        <LabelInput>
          <div className="label">Tipo de Conta</div>
          <StyledSelect
            id="select_tipoConta"
            value={selectedTipoConta}
            onChange={(e) => {
              setSelectedTipoConta(e.target.value);
              setCamposTocados({ ...camposTocados, tipoConta: true });
            }}
            style={{ borderColor: camposTocados.tipoConta && !selectedTipoConta ? 'red' : '' }}
          >

            <option value="">Selecione o tipo de conta</option>
            <option value="corrente">Conta Corrente</option>
            <option value="poupanca">Conta Poupança</option>
          </StyledSelect>
        </LabelInput>
        <LabelInput>
        <div className="label">Saldo (R$)</div>
          <input
            id="select_saldo"
            type="text"
            className="input-field"
            name="saldo"
            value={saldo}
            onChange={(e) => {
              handleValorChange(e);
              setCamposTocados({ ...camposTocados, saldo: true });
            }}
            style={{ borderColor: camposTocados.saldo && !saldo ? 'red' : '' }}
          />
        </LabelInput>


        <Button>
          <button onClick={handleCancelarClick} className='cancelar'>Cancelar</button>
          <button className='adicionar-btn' onClick={handleSalvar} >Adicionar</button>
        </Button>

      </ModalContent>
    </ModalWrap>
  );
};


export default ModalWrapper;
