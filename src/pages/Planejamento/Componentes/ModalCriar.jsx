import Modal from "../../../components/Modal2";
import styled from "styled-components";
import { useState } from "react";


const LocalConteudo = styled.div`
display:flex;
height:70%;
width:100%;
flex-direction:column;
justify-content:space-around;
align-items:center;
`

const LocalElementos = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:85%;
height:30%;
`


const BancoSelect = styled.select`
display:flex;
margin:auto;
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
width:70%;

.label {
  position: absolute;
  top: -10px;
  left:0; 
  transform: translateX(20%);
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
  box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);
}


.label_description{
  position: absolute;
  top: -10px; 
  transform: translateX(-170%);
  background-color: white; 
  padding: 0 10px;
}


#select_categoria{
  margin-right:38px;
  box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);
}

#label_total{
    transform: translateX(10%);


`;

function ModalCriar(props) {
    // const contas = props.contas;
    const [selectedBanco, setContaSelecionada] = useState(null);
    const [saldo, setSaldo] = useState("");
    const [total, setTotal] = useState("");
    const [selectedCategoria, setCategoria] = useState(null);


  
    const handleValorChange = (e) => {
      const valorDigitado = e.target.value.replace(/\D/g, "");
      formatarValorNoInput(valorDigitado);
    };
  
    const formatarValorNoInput = (valor) => {
      const valorFormatado = formatarMoeda(valor);
      setSaldo(valorFormatado);
    };
  
    const formatarMoeda = (valor) => {
      const valorNumerico = parseFloat(valor) / 100;
      const valorFormatado = valorNumerico.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return valorFormatado;
    };

    const handleValorChange2 = (e) => {
      const valorDigitado = e.target.value.replace(/\D/g, "");
      formatarValorNoInput2(valorDigitado);
    };
  
    const formatarValorNoInput2 = (total) => {
      const valorFormatado = formatarMoeda2(total);
      setTotal(valorFormatado);
    };
  
    const formatarMoeda2 = (total) => {
      const valorNumerico = parseFloat(total) / 100;
      const valorFormatado = valorNumerico.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return valorFormatado;
    };


    


    const handleSalvar = () => {
        // Aqui você pode fazer o que quiser com os dados, como enviá-los para o servidor ou atualizar o estado no componente pai.
        const dadosASalvar = {
            categoria: selectedCategoria,
            total: total,
            valor: saldo,
        };

        // Exemplo: enviando os dados para uma função de salvamento fornecida como propriedade
        props.salvarDados(dadosASalvar);

        // Fechar o modal após salvar
        props.onClose();
    };

    return (
        <Modal title="Adicionar Planejamento" cancelar={props.onClose} salvar={props.handleSalvar}>
            <LocalConteudo>
                <LocalElementos>

                    <LabelInput>
                        <div className="label">Categoria</div>
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

                </LocalElementos>
                <LocalElementos>

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

                </LocalElementos>
                <LocalElementos>
                    <LabelInput>
                        <div className="label" id="label_total">Total Gasto (R$)</div>
                        <input
                            id="select_saldo"
                            type="text"
                            className="input-field"
                            name="saldo"
                            value={total}
                            onChange={(e) => {
                                handleValorChange2(e);
                            }}
                        />
                    </LabelInput>
                </LocalElementos>
            </LocalConteudo>
        </Modal>
    )
}

export default ModalCriar;