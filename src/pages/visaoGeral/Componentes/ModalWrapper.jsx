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
  height:550px;
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
  margin-bottom:25%;

}

`;

const Button = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:60%;
margin-top:4%;

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
width:60%;
outline: 0;
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

const Error = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 11px;
  color: red;
`

const ModalWrapper = ({ isOpen, onClose, listar}) => {
  const [saldo, setSaldo] = useState('');
  const [selectedBanco, setSelectedBanco] = useState('');
  const [tipo, setTipo] = useState('sel');
  const [valorAmortizar, setValorAmortizar] = useState('');
  const [nome, setNome] = useState('');
  const id = sessionStorage.getItem('id');
  const navigate = useNavigate();

  const [camposTocados, setCamposTocados] = useState({
    nome: false,
    banco: false,
    tipoConta: false,
    saldo: false
  });

  const resetCamposTocados = () => {
    setCamposTocados({
      nome: "",
      banco: false,
      tipoConta: false,
      saldo: false
    });
  };

  const handleCancelarClick = () => {
    onClose();
    resetarCampos();
  };

  const handleCancelarClick2 = (e) => {
    if (e.target.classList.contains('ModalWrap')) {
      onClose();
      resetarCampos();
    }
  };

  const handleChange = (event) => {
    setTipo(event.target.value);
  };

  const resetarCampos = () => {
    setSaldo('');
    setSelectedBanco('');
    setTipo('sel');
    setNome('')
    resetCamposTocados();
  };

  const handleValorChange = (e) => {
    const valorDigitado = e.target.value.replace(/\D/g, '');
    setValorAmortizar(valorDigitado);
    formatarValorNoInput(valorDigitado);
  };

  const formatarValorNoInput = (saldoDigitado) => {
    const valorFormatado = formatarMoeda(saldoDigitado);
    if (isNaN(valorFormatado)) return "";

    setSaldo(valorFormatado);
  };

  const formatarMoeda = (saldo) => {
    const valorNumerico = parseFloat(saldo) / 100;
    return valorNumerico.toFixed(2);
  };

  async function inserirConta() {
    if (!nome || !selectedBanco || tipo === 'sel' || !saldo) {
      setCamposTocados({
        nome: !nome,
        banco: !selectedBanco,
        tipoConta: tipo === 'sel',
        saldo: !saldo
      });

      return;
    }

    const novaConta = {
      banco: selectedBanco,
      nome: nome,
      saldo: saldo,
      tipo: tipo,
      fkUsuario: {
        id: id
      }
    };


    await api.post(`/contas/`, novaConta).then((response) => {
      console.log(response);
      onClose();
      resetarCampos();
      

      Swal.fire({
        icon: 'success',
        title: 'Conta adicionada!',
        text: 'Sua conta foi adicionada com sucesso!!.',
      }).then(() => {
        listar()
      })
      

    }).catch((error) => {
      const errorMessage = 'Não foi possível adicionar a conta. Tente novamente.';

      Swal.fire({
        icon: 'error',
        title: 'Erro ao adicionar conta!',
        text: errorMessage,
      });

      console.error('Erro na adição de conta:', error.message);
    })

    return;
  }

  if (!isOpen) return null;

  return (
    <ModalWrap className="ModalWrap" onClick={handleCancelarClick2}>
      <ModalContent className="ModalContent">

        <LogoNome>
          <span><img src={Icon('logo')} />
          </span>
          <div>Nova Conta</div>
        </LogoNome>

        <LabelInput>
          <div className="label">Nome</div>
          <input
            id="nome"
            type="text"
            className="input-field"
            name="nome"
            value={nome}
            style={{ borderColor: nome === "" && camposTocados.nome ? 'red' : '' }}
            onChange={(e) => {
              setNome(e.target.value);
              setCamposTocados({ ...camposTocados, nome: true })
              console.log(e.target.value);
            }} />

          {nome === "" && camposTocados.nome && <Error>Campo obrigatório</Error>}
        </LabelInput>

        <LabelInput>
          <div className="label">Banco</div>
          <BancoSelect
            id="select_banco"
            value={selectedBanco}
            onChange={(e) => {
              setSelectedBanco(e.target.value);
              setCamposTocados({ ...camposTocados, banco: true })
              console.log(e.target.value);
            }}
            style={{ borderColor: !selectedBanco && camposTocados.banco ? 'red' : '' }}
          >
            <option value="">Selecione um banco</option>
            <option value="bradesco">Bradesco</option>
            <option value="itau">Itaú</option>
            <option value="santander">Santander</option>
          </BancoSelect>

          {!selectedBanco  && camposTocados.banco && <Error>Campo obrigatório</Error>}

        </LabelInput>
        <LabelInput>
          <div className="label">Tipo de Conta</div>
          <StyledSelect
            id="select_tipoConta"
            value={tipo}
            onChange={(e) => {
              handleChange(e);
              setCamposTocados({ ...camposTocados, tipoConta: true })
            }}
            style={{ borderColor: tipo === 'sel' && camposTocados.tipoConta ? 'red' : '' }}>
            <option value="sel">Selecione o tipo de conta</option>
            <option value="0">Conta Corrente</option>
            <option value="1">Conta Poupança</option>
          </StyledSelect>

          {tipo === "sel" && camposTocados.tipoConta && <Error>Campo obrigatório</Error>}

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
            style={{ borderColor: saldo === "" && camposTocados.saldo ? "red" : "" }}
          />
          {saldo === "" && camposTocados.saldo && <Error>Campo obrigatório</Error>}

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
