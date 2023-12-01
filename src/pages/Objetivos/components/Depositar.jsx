import Modal from "../../../components/Modal";
import styled from "styled-components";
import { useState } from "react";
import api from "../../../api";
import Swal from "sweetalert2";

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
const Dados = styled.div`
display:flex;
justify-content:space-between;
width:40%;
margin: 1% 0;
.title{
    color: #043116;
    font-size: 16px;
}

span{
    font-size: 16px;
    width: 50%;
}
`

function Depositar(props) {
    const [valor, setValor] = useState("");
    const [campoTocado, setCampoTocado] = useState(false);
    const objetivo = props.objetivo;
    const idUser = sessionStorage.getItem("id");
    const dataFinalFormatada = new Date(objetivo.dataTermino)

    const formatarData = () => {
        return dataFinalFormatada.getDate() + "/" + (dataFinalFormatada.getMonth() + 1) + "/" + dataFinalFormatada.getFullYear();
    }

    const handleValorChange = (e) => {
        const valorDigitado = e.target.value.replace(/\D/g, '');
        formatarValorNoInput(valorDigitado);
    };

    const formatarValorNoInput = (valor) => {
        const valorFormatado = formatarMoeda(valor);
        if (isNaN(valorFormatado)) return "";

        setValor(valorFormatado);
    };

    const formatarMoeda = (saldo) => {
        const valorNumerico = parseFloat(saldo) / 100;
        return valorNumerico.toFixed(2);
    };

    const depositar = () => {
        if (!valor) {
            setCampoTocado(true);
        return;
    }

        api.put(`/objetivos/${objetivo.id}/${valor}/${idUser}`)
            .then(() => {
                props.onClose();
                Swal.fire({
                    title: "Depósito efetuado!",
                    text: "Depósito efetuado com êxito!",
                    icon: "success"
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                });
            }).catch(error => {
                props.onClose()
                Swal.fire({
                    title: "Erro!",
                    text: "Não foi possível efetuar o depósito! Tente novamente",
                    icon: "error"
                })
                console.log("Erro ao efetuar depósito");
                console.log(error);
            })
    }

    return (
        <>
            <Modal title="Investir no Objetivo" cancelar={props.onClose} salvar={depositar} tamanho="50%">
                <Dados>
                    <span className="title">Objetivo:</span>
                    <span> {objetivo.nome}</span>
                </Dados>

                <Dados>
                    <span className="title">Valor já investido:</span>
                    <span> R${formatarMoeda(objetivo.valorInvestido)}</span>
                </Dados>

                <Dados>
                    <span className="title">Data Final:</span>
                    <span> {formatarData()}</span>
                </Dados>
                <LabelInput>

                    <div className="label">Valor (R$): </div>
                    <input
                        id="select_saldo"
                        type="text"
                        className="input-field"
                        name="saldo"
                        value={valor}
                        onChange={(e) => {
                            handleValorChange(e);
                            console.log(valor)
                            setCampoTocado(true);
                        }}
                        style={{ borderColor: valor === "" && campoTocado ? "red" : "" }}
                    />
                    {valor === "" && campoTocado && <Error>Campo obrigatório</Error>}

                </LabelInput>

            </Modal>
        </>
    )
}

export default Depositar;