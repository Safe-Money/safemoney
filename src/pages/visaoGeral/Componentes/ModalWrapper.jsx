import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from "../funcoes/icons";
import Swal from 'sweetalert2';
import api from '../../../api';
import { useNavigate } from 'react-router-dom';


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
  const [saldo, setSaldo] = useState('');
  const [selectedBanco, setSelectedBanco] = useState('');
  const [selectedTipoConta, setSelectedTipoConta] = useState('');
  const [tipo, setTipo] = useState('sel');
  const id = localStorage.getItem('id');
  const navigate = useNavigate();



  const [camposTocados, setCamposTocados] = useState({
    banco: false,
    tipoConta: false,
    saldo: false
  });


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


  const formatarMoeda = (valor) => {
    if (!valor) return '';
  
    const valorNumerico = parseFloat(valor.replace(/[^\d,.-]/g, '').replace(',', '.'));
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



  const handleChange = (event) => {
    setTipo(event.target.value);
  };

  async function inserirConta() {
    const saldoNumerico = parseFloat(saldo.replace(/[^\d,.-]/g, '').replace(',', '.'));

    const novaConta = {
      banco: selectedBanco,
      nome: selectedBanco,
      saldo: saldoNumerico,
      tipo: tipo,
      fkUsuario: {
        id: id
      }
    };

    api
    .post(`/contas/`, novaConta)
    .then((response) => {
      console.log(response);
      onClose();
      resetarCampos()

      Swal.fire({
        icon: 'success',
        title: 'Conta adicionada!',
        text: 'Sua conta foi adicionada com sucesso!!.',
      });

      navigate('/visao-geral');
    })
    .catch(() => {
      alert("Erro ao atualizar música!");
      const errorMessage = 'Não foi possível adicionar a conta. Tente novamente.';

      Swal.fire({
        icon: 'error',
        title: 'Erro ao adicionar conta!',
        text: errorMessage,
      });

      console.error('Erro na adição de conta:', error.message);
    });
  }

  if (!isOpen) return null;

  return (
    <ModalWrap className="ModalWrap" onClick={handleCancelarClick2} >
      <ModalContent className="ModalContent">

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
              console.log(e.target.value);
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
            value={tipo}
            onChange={(e) => {
              handleChange(e);
            }}
            style={{ borderColor: camposTocados.tipoConta && !selectedTipoConta ? 'red' : '' }}>
            <option value="sel">Selecione o tipo de conta</option>
            <option value="0">Conta Corrente</option>
            <option value="1">Conta Poupança</option>
          </StyledSelect>
        </LabelInput>
        <LabelInput>
          <div className="label">Saldo (R$)</div>
          <input
            id="select_saldo"
            type="text"
            className="input-field"
            name="saldo"
            value={formatarMoeda(saldo)}
            onChange={(e) => {
              handleValorChange(e);
              setCamposTocados({ ...camposTocados, saldo: true });
            }}
            style={{ borderColor: camposTocados.saldo && !saldo ? 'red' : '' }}
          />
        </LabelInput>


        <Button>
          <button onClick={handleCancelarClick} className='cancelar'>Cancelar</button>
          <button className='adicionar-btn' onClick={inserirConta} >Adicionar</button>
        </Button>

      </ModalContent>
    </ModalWrap>
  );
};


export default ModalWrapper;
