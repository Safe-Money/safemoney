import Modal from "../../../components/Modal";
import styled from "styled-components";
import { useState } from "react";
import api from "../../../api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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

const Error = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 11px;
  color: red;
`

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

function ModalEditar(props) {
  const contaAtual = props.conta
  const idUser = sessionStorage.getItem("id")
  const [valorAmortizar, setValorAmortizar] = useState('');
  const [nome, setNome] = useState(contaAtual.nome)
  const [selectedBanco, setSelectedBanco] = useState(contaAtual.banco);
  const [saldo, setSaldo] = useState(contaAtual.saldo);
  const [tipo, setTipo] = useState(contaAtual.tipo);
  const navigate = useNavigate();

  console.log(contaAtual)

  const [camposTocados, setCamposTocados] = useState({
    nome: false,
    banco: false,
    tipoConta: false,
    saldo: false
  });


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

  const editarConta = async () => {
    if (!nome || !selectedBanco || tipo === 'sel' || !saldo) {
      setCamposTocados({
        nome: !nome,
        banco: !selectedBanco,
        tipoConta: tipo === 'sel',
        saldo: !saldo
      });

      return;
    }

    await api.put(`/contas/${contaAtual.id}`, {
      banco: selectedBanco,
      nome: nome,
      saldo: saldo,
      tipo: tipo,
      fkUsuario: {
        id: idUser
      }
    })
      .then((response) => {
        props.onClose()
        console.log(response.data)
        Swal.fire({
          title: "Editado!",
          text: "Conta editada!",
          icon: "success"
        });

        navigate(`/conta/${contaAtual.id}`)

      }).catch((error) => {
        props.onClose()
        console.log("Erro ao editar: " + error.message)

        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Não foi possível editar. Tente novamente mais tarde!',
        });
      })
  }

  return (
    <Modal title="Editar Conta" cancelar={props.onClose} salvar={editarConta}>
      <LabelInput>
        <div className="label">Nome</div>
        <input
          id="nome"
          type="text"
          className="input-field"
          name="nome"
          defaultValue={nome}
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
          defaultValue={selectedBanco}
          onChange={(e) => {
            setSelectedBanco(e.target.value);
            console.log(selectedBanco)
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

        {!selectedBanco && camposTocados.banco && <Error>Campo obrigatório</Error>}

      </LabelInput>

      <LabelInput>
        <div className="label">Tipo de Conta</div>
        <StyledSelect
          id="select_tipoConta"
          value={tipo}
          onChange={(e) => {
            setTipo(e.target.value);
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
            console.log(saldo)
            setCamposTocados({ ...camposTocados, saldo: true });
          }}
          style={{ borderColor: saldo === "" && camposTocados.saldo ? "red" : "" }}
        />
        {saldo === "" && camposTocados.saldo && <Error>Campo obrigatório</Error>}

      </LabelInput>

    </Modal>
  )
}

export default ModalEditar;