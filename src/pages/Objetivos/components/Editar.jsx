import Modal from "../../../components/Modal";
import styled from "styled-components";
import { useState } from "react";
import api from "../../../api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
  padding: 0 5px;
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

const DatasInput = styled.div`
display:flex;
width:50%;
justify-content:space-between;
`

const Data = styled.div`
display:flex;
flex-direction:column;
margin-bottom:30px;
align-items:center;
color:#08632D;
position: relative;
border: none;
cursor: pointer;
margin: 3% 0;
width:49%;
box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);

.label {
  position: absolute;
  top: -10px; 
  transform: translateX(-10%);
  background-color: white; 
  padding: 0 5px;
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

function Edita(props) {
  const idUser = sessionStorage.getItem("id")
  const objetivo = props.objetivo
  const [nome, setNome] = useState(objetivo.nome)
  const [urlImagem, setUrlImagem] = useState(objetivo.urlImagem)
  const [dataInicio, setDataInicio] = useState(objetivo.dataInicio)
  const [dataFinal, setDataFinal] = useState(objetivo.dataTermino)
  const [concluida, setConcluida] = useState(objetivo.concluida)
  const [valorFinal, setValorFinal] = useState(objetivo.valorFinal)

  const [camposTocados, setCamposTocados] = useState({
    nome: false,
    urlImagem: false,
    dataInicio: false,
    dataTermino: false,
    valorFinal: false,
  });


  const handleValorChange = (e) => {
    const valorDigitado = e.target.value.replace(/\D/g, '');
    formatarValorNoInput(valorDigitado);
  };

  const formatarValorNoInput = (valor) => {
    const valorFormatado = formatarMoeda(valor);
    if (isNaN(valorFormatado)) return "";

    setValorFinal(valorFormatado);
  };

  const formatarMoeda = (saldo) => {
    const valorNumerico = parseFloat(saldo) / 100;
    return valorNumerico.toFixed(2);
  };

  const editarObjetivo = async (id) => {
    if (!nome || !urlImagem || !dataInicio || !dataFinal || !valorFinal || valorFinal <= 0) {
      setCamposTocados({
        nome: !nome,
        urlImagem: !urlImagem,
        dataInicio: !dataInicio,
        dataTermino: !dataFinal,
        valorFinal: !valorFinal
      });

      return;
    }

      const dataInicioFormatada = new Date(dataInicio);
      const dataFimFormatada = new Date(dataFinal);

      await api.put(`/objetivos/${id}`, {
        nome: nome,
        urlImagem: urlImagem,
        dataInicio: dataInicioFormatada,
        dataTermino: dataFimFormatada,
        concluida: 0,
        valorInvestido: 0,
        valorFinal: valorFinal,
        fkUsuario: {
            id: idUser
        }

      }).then((response) => {
        console.log(response.data)
        props.onClose()
        
        Swal.fire({
            icon: 'success',
            title: 'Objetivo atualizado!',
            text: 'Seu objetivo foi atualizado!',
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
        });

      }).catch((error) => {
        props.onClose()
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Não foi possível atualizar o objetivo! Tente novamente.',
        });

        console.log('Houve um erro na aplicação. Tente novamente!' + error)
      });
  }

  return (
    <Modal title="Editar Objetivo" cancelar={props.onClose} salvar={() => editarObjetivo(objetivo.id)}>
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
        <div className="label">Imagem</div>
        <input
          id="select_saldo"
          type="text"
          className="input-field"
          name="saldo"
          value={urlImagem}
          onChange={(e) => {
            setUrlImagem(e.target.value);
            setCamposTocados({ ...camposTocados, urlImagem: true });
          }}
          style={{ borderColor: urlImagem === "" && camposTocados.urlImagem ? "red" : "" }}
        />
        {urlImagem === "" && camposTocados.urlImagem && <Error>Campo obrigatório</Error>}

      </LabelInput>

     <DatasInput>
        
     <Data>
        <div className="label">Data Início: </div>
        <input
          id="dt_inicio"
          type="date"
          className="input-field"
          name="dataInicio"
          value={dataInicio}
          onChange={(e) => {
            setDataInicio(e.target.value);
            setCamposTocados({ ...camposTocados, dataInicio: true });
          }}
          style={{ borderColor: dataInicio === "" && camposTocados.dataInicio ? "red" : "" }}
        />
        {dataInicio === "" && camposTocados.dataInicio && <Error>Campo obrigatório</Error>}

      </Data>

      <Data>
        <div className="label">Data Final: </div>
        <input
          id="dt_final"
          type="date"
          className="input-field"
          name="dataFim"
          value={dataFinal}
          onChange={(e) => {
            setDataFinal(e.target.value);
            setCamposTocados({ ...camposTocados, dataTermino: true });
          }}
          style={{ borderColor: dataFinal === "" && camposTocados.dataTermino ? "red" : "" }}
        />
        {dataFinal === "" && camposTocados.dataTermino && <Error>Campo obrigatório</Error>}

      </Data>
     </DatasInput>

      <LabelInput>
        <div className="label">Valor Final (R$): </div>
        <input
          id="select_saldo"
          type="text"
          className="input-field"
          name="saldo"
          value={valorFinal}
          onChange={(e) => {
            handleValorChange(e);
            console.log(valorFinal)
            setCamposTocados({ ...camposTocados, valorFinal: true });
          }}
          style={{ borderColor: valorFinal === "" && camposTocados.valorFinal ? "red" : "" }}
        />
        {valorFinal === "" && camposTocados.valorFinal && <Error>Campo obrigatório</Error>}

      </LabelInput>

    </Modal>
  )
}

export default Edita;