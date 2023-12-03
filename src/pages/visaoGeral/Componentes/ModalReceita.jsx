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
width:90%;
height:30%;
`

const BancoSelect = styled.select`
display:flex;
margin:auto;
width: 80%;
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
width:86%;

.label {
  position: absolute;
  top: -10px;
  left:0; 
  transform: translateX(20%);
  background-color: white; 
  padding: 0 10px;
  
}

.input-field {
  width: 80%;
  margin-right:25px;
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

.input-date{
  width: 80%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 1); 
  box-sizing: border-box;
  box-shadow: 1 1 1 1;
  border-radius:5px;
  letter-spacing: 0.8px;
  margin-left:27px;
  box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);
}

#label_date{
  margin-left:5px;
  transform: translateX(70%);
}
#label_origem{
  transform: translateX(60%);

}
#label_parcelas{
  transform: translateX(56%);
}

#select_categoria{
  margin-right:38px;
  box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);
}

#select_origem{
  margin-left:38px;
  box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);
}

#select_parcelas{
  margin-left:38px;
  box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);
}

.despesaFixa{
  width:20px;
}
`;

const DescricaoInput = styled.div`
width:100%;


.input-description{
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 1); 
  box-sizing: border-box;
  box-shadow: 1 1 1 1;
  border-radius:5px;
  letter-spacing: 0.8px;
  box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);
}
`

function ModalReceita(props) {
  // const contas = props.contas;
  const [selectedBanco, setContaSelecionada] = useState(null);
  const [saldo, setSaldo] = useState("");
  const [selectedCategoria, setCategoria] = useState(null);
  const [date, setDate] = useState(""); // Adicionei o estado para a data
  const [description, setDescription] = useState(""); // Adicionei o estado para a descrição
  const [parcelasDisplay, setParcelasDisplay] = useState('none');
  const [desativadoDisplay, setDesativadoDisplay] = useState('block');
  const [ativarDisplay, setAtivarDisplay] = useState('none');


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


  const toggleSVG = () => {
    setDesativadoDisplay((prevState) => (prevState === 'block' ? 'none' : 'block'));
    setAtivarDisplay((prevState) => (prevState === 'block' ? 'none' : 'block'));

  };

  const handleSalvar = () => {
    // Aqui você pode fazer o que quiser com os dados, como enviá-los para o servidor ou atualizar o estado no componente pai.
    const dadosASalvar = {
      categoria: selectedCategoria,
      origem: selectedBanco,
      valor: saldo,
      date: date,
      description: description,
    };

    // Exemplo: enviando os dados para uma função de salvamento fornecida como propriedade
    props.salvarDados(dadosASalvar);

    // Fechar o modal após salvar
    props.onClose();
  };

  return (
    <Modal title="Adicionar Despesa" cancelar={props.onClose} salvar={props.handleSalvar}>
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

          <LabelInput>
            <div className="label" id="label_origem">Origem</div>
            <BancoSelect
              id="select_origem"
              value={selectedBanco}
              onChange={(e) => {
                setContaSelecionada(e.target.value);
                const isCartao = e.target.value === 'credito';
                setParcelasDisplay(isCartao ? 'block' : 'none');
              }}
            >
              <option value="origem">Origem</option>
              <option value="banco">Banco</option>
              <option value="credito">Cartão de Crédito</option>
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

          <LabelInput>
            <div className="label" id="label_date">Date</div>
            <input
              id="input_date"
              type="date"
              className="input-date"
              name="description"

            />
          </LabelInput>

        </LocalElementos>

        <LocalElementos>

          <LabelInput>
            <LabelInput>
              <div className="despesaFixa">
                <label style={{
                  width: '150px',
                  marginLeft: '50px',
                  padding: '0 8px',
                  color: '#08632D',
                  fontSize: '12px',
                  position: 'absolute',
                  backgroundColor: 'white',
                  left: 0,
                  top: 0,
                  marginTop: -9,
                }} htmlFor="nomePlano">Despesa Fixa</label>

                <svg
                  id="desativado"
                  style={{
                    display: desativadoDisplay,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    marginTop: -9,
                    cursor: 'pointer',
                  }}
                  width="36"
                  height="15"
                  viewBox="0 0 36 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleSVG}
                >
                  <rect width="36" height="15" rx="7.5" fill="#E6E6E6" />
                  <ellipse cx="8" cy="7.5" rx="8" ry="7.5" fill="#568C6D" />
                </svg>

                <svg
                  id="ativar"
                  style={{
                    display: ativarDisplay,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    marginTop: -9,
                    cursor: 'pointer',
                  }}
                  width="36"
                  height="15"
                  viewBox="0 0 36 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleSVG}
                >
                  <rect width="36" height="15" rx="7.5" fill="#E6E6E6" />
                  <ellipse cx="28" cy="7.5" rx="8" ry="7.5" fill="#3ABA6F" />
                </svg>
              </div>
            </LabelInput>
          </LabelInput>

          <LabelInput 
           onChange={(e) => {
            setContaSelecionada(e.target.value);
          }}
          style={{ display: parcelasDisplay }}>
            <div className="label" id="label_parcelas">Parcelas</div>
            <BancoSelect
              id="select_parcelas"
              value={selectedBanco}
             
            >
              <option value="one">1 vez</option>
              <option value="two">2 vezes</option>
              <option value="three">3 vezes</option>
            </BancoSelect>
          </LabelInput>

        </LocalElementos>

        <LabelInput>
          <div className="label_description">Descrição</div>
          <DescricaoInput>
            <input
              id="input_description"
              type="text"
              className="input-description"
              name="description"

            />
          </DescricaoInput>
        </LabelInput>
      </LocalConteudo>
    </Modal>
  )
}

export default ModalReceita;