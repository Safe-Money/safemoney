import Modal from "../../../components/Modal2";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import api from "../../../api";

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
  const [parcelas, setParcelas] = useState("");
  const [desativadoDisplay, setDesativadoDisplay] = useState('block');
  const [ativarDisplay, setAtivarDisplay] = useState('none');
  const [fixo, setFixo] = useState(false);


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
    if (fixo == false) {
      setFixo(true);
    } else {
      setFixo(false);
    }
  };

  useEffect(() => {
    console.log(fixo); // Aqui o valor de fixo estará atualizado sempre que mudar
  }, [fixo]);


  let dadosSalvar = {
    nome: description,
    data: date,
    valor: saldo,
    categoria: selectedCategoria,
    origem: selectedBanco,
    fixo: fixo,
    despesa: "despesa"
  };


  function validarReceita() {
    if (dadosSalvar.fixo == true) {
      console.log("Receita Fixa");

      console.log(dadosSalvar)

      const valorLimpo = dadosSalvar.valor.replace(/[^\d.,]/g, ''); // Remove todos os caracteres não numéricos
      const valorSemPontoMilhar = valorLimpo.replace('.', ''); // Remove o ponto separador de milhar, se houver
      const valorDouble = parseFloat(valorSemPontoMilhar.replace(',', '.')).toFixed(1); // Converte para número de ponto flutuante com uma casa decimal

      console.log(valorDouble); // Saída: 1000.0

      const corpo = {
        nome: dadosSalvar.nome,
        data: dadosSalvar.data,
        valor: valorDouble,
        fkConta: {
          id: dadosSalvar.origem
        },
        fkCategoria: {
          id: dadosSalvar.categoria
        },
        fkTipoTransacao: {
          id: 5
        }
      }
      console.log(corpo);
      api.post(`lancamento-fixo/cadastrar`, corpo)
        .then((respostaObtida) => {
          props.onClose();

          Swal.fire({
            icon: 'success',
            title: 'Despesa fixa foi adicionada!',
            text: 'Sua despesa foi adicionada com sucesso!!.',
          }).then(() => {
            listar(); 
            listarGrafico(); 
          });


        })
        .catch((erroOcorrido) => {
          console.log(erroOcorrido);
        });

    } else {
      console.log("Receita normal");
      console.log(dadosSalvar)

      const valorLimpo = dadosSalvar.valor.replace(/[^\d.,]/g, ''); // Remove todos os caracteres não numéricos
      const valorSemPontoMilhar = valorLimpo.replace('.', ''); // Remove o ponto separador de milhar, se houver
      const valorDouble = parseFloat(valorSemPontoMilhar.replace(',', '.')).toFixed(1); // Converte para número de ponto flutuante com uma casa decimal
      console.log(valorDouble);

      const corpo = {
        nome: dadosSalvar.nome,
        data: dadosSalvar.data,
        valor: valorDouble,
        conta: {
          id: dadosSalvar.origem
        },
        categoria: {
          id: dadosSalvar.categoria
        },
        tipo: {
          id: 4
        }
      }
      console.log(corpo);
      api.post(`transacoes/receita`, corpo)
        .then((respostaObtida) => {
          props.onClose();

          Swal.fire({
            icon: 'success',
            title: 'Despesa adicionada!',
            text: 'Sua despesa foi adicionada com sucesso!!.',
          }).then(() => {
            listar();
          });


        })
        .catch((erroOcorrido) => {
          console.log(erroOcorrido);
        });
    }
  }

  return (
    <Modal title="Adicionar Receita" cancelar={props.onClose} salvar={() => validarReceita()}>
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
              <option value="0">-- Selecione --</option>
              <option value="1">Lazer</option>
              <option value="2">Saúde</option>
              <option value="3">Alimentação</option>
              <option value="4">Transporte</option>
              <option value="5">Moradia</option>
              <option value="6">Educação</option>
              <option value="7">Vestuário</option>
              <option value="8">Academia</option>
              <option value="9">Viagem</option>
            </BancoSelect>
            
          </LabelInput>

          <LabelInput>
            <div className="label" id="label_origem">Origem</div>
            <BancoSelect
              id="select_origem"
              value={selectedBanco}
              onChange={(e) => {
                setContaSelecionada(e.target.value);
              }}
            >
              <option value="0">-- Selecione --</option>
              {/* Opções de contas */}
              {props.contas.length > 0 &&
                props.contas.map(conta => (
                  <option key={conta.id} value={`${conta.id}`}>{conta.banco}</option>
                ))
              }

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
              onChange={(e) => {
                setDate(e.target.value);
              }}
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
              onChange={(e) => {
                setParcelas(e.target.value);
              }}
            >
              <option value="0">-- Selecione --</option>
              <option value="1">1 vez</option>
              <option value="2">2 vezes</option>
              <option value="3">3 vezes</option>
              <option value="4">4 vezes</option>
              <option value="5">5 vezes</option>
              <option value="6">6 vezes</option>
              <option value="7">7 vezes</option>
              <option value="8">8 vezes</option>
              <option value="9">8 vezes</option>
              <option value="10">10 vezes</option>
              <option value="11">11 vezes</option>
              <option value="12">12 vezes</option>
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
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            />
          </DescricaoInput>
        </LabelInput>
      </LocalConteudo>
    </Modal>
  )
}

export default ModalReceita;