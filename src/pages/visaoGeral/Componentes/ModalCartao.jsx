import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "../funcoes/icons";
import Swal from "sweetalert2";
import api from "../../../api";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background: white;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  width: 40em;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #08632d;

  span {
  }

  div {
    font-size: 27px;
    font-weight: 600;
    margin-bottom: 15%;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin-top: 5%;

  button {
    padding: 10px;
    width: 150px;
    border-radius: 5px;
    letter-spacing: 0.8px;
  }

  .cancelar {
    color: white;
    background-color: #d7263d;
    cursor: pointer;
    border: none;
  }
  .adicionar-btn {
    color: white;
    background-color: #08632d;
    border: none;
    cursor: pointer;
  }
`;

const CategoriaSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 1);
  box-sizing: border-box;
  box-shadow: 1 1 1 1;
  border-radius: 5px;
  letter-spacing: 0.8px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
`;
const OrigemSelect = styled.select`
  width: 100% !important;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 1);
  box-sizing: border-box;
  box-shadow: 1 1 1 1;
  border-radius: 5px;
  letter-spacing: 0.8px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
`;

const LocalElementos = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 30%;
  justify-content: space-between;
`;

const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  align-items: center;
  color: #08632d;
  position: relative;
  margin: 3% 0;
  width: 40%;
  box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.1);

  .label {
    position: absolute;
    top: -10px;
    left: 20%;
    transform: translateX(-30%);
    background-color: white;
    padding: 0 10px;
  }

  .input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 1);
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 1 1 1 1;
    letter-spacing: 0.8px;
  }

  input,
  section {
    width: 100% !important;
  }

  #label_vencimento,
  #label_fechamento {
    margin-left: 9px;
  }

  #label_limite {
    transform: translateX(-38%) !important;
  }
`;

const Obrig = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const ModalCartao = ({ isOpen, onClose, onSave, formData, onChange, listar }) => {
  const idUser = sessionStorage.getItem("id");

  const [contas, setContas] = useState([]);

  useEffect(() => {
    listarContas();
  }, []);

  function listarContas() {
    api
      .get(`/contas/listar-contas/${idUser}`)
      .then((respostaObtida) => {
        console.log("Dados das contas: ", respostaObtida.data);
        setContas(respostaObtida.data);
      })
      .catch((erroOcorrido) => {
        console.log(erroOcorrido);
      });
  }

  // const [categoria, setCategoria] = useState('');
  const [valor, setValor] = useState("");
  const [apelido, setApelido] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState("");
  const [selectedOrigem, setSelectedOrigem] = useState("");
  const [selectedBandeira, setSelectedBandeira] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [fechamento, setFechamento] = useState("");
  const [erro, setErro] = useState(false);

  const [camposTocados, setCamposTocados] = useState({
    // categoria: false,
    origem: false,
    valor: false,
    bandeira: false,
    vencimento: false,
    fechamento: false,
    apelido: false,
  });

  // Salvar os dados
  const handleSalvar = async () => {
    const camposNaoTocados = {
      // categoria: !camposTocados.categoria,
      origem: !camposTocados.origem,
      valor: !camposTocados.valor,
      bandeira: !camposTocados.bandeira,
      vencimento: !camposTocados.vencimento,
      fechamento: !camposTocados.fechamento,
      apelido: !camposTocados.apelido,
    };

    setCamposTocados({
      // categoria: camposTocados.categoria || camposNaoTocados.categoria,
      origem: camposTocados.origem || camposNaoTocados.origem,
      valor: camposTocados.valor || camposNaoTocados.valor,
      bandeira: camposTocados.bandeira || camposNaoTocados.bandeira,
      vencimento: camposTocados.vencimento || camposNaoTocados.vencimento,
      fechamento: camposTocados.fechamento || camposNaoTocados.fechamento,
      apelido: camposTocados.apelido || camposNaoTocados.apelido,
    });

    if (
      camposNaoTocados.origem ||
      camposNaoTocados.valor ||
      camposNaoTocados.bandeira ||
      camposNaoTocados.vencimento ||
      camposNaoTocados.fechamento ||
      camposNaoTocados.apelido
    ) {
      // Se nenhum campo foi tocado, mostra as bordas vermelhas
      setCamposTocados({
        origem: true,
        valor: true,
        bandeira: true,
        vencimento: true,
        fechamento: true,
        apelido: true,
      });
      return;
    }

    console.log("apelido:", apelido);
    console.log("selectedCategoria:", selectedCategoria);
    console.log("selectedOrigem:", selectedOrigem);
    console.log("valor:", valor);
    console.log("selectedBandeira:", selectedBandeira);
    console.log("fechamento:", fechamento);
    console.log("vencimento:", vencimento);

    if (
      !selectedOrigem ||
      !valor ||
      !selectedBandeira ||
      !vencimento ||
      !fechamento ||
      !apelido
    ) {
      // Mostra uma mensagem de erro, você pode adicionar uma lógica aqui para lidar com a mensagem de erro
      console.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    console.log("valor no modal:", valor);

    const valorLimpo = valor.replace(/[^\d.,]/g, ""); // Remove todos os caracteres não numéricos
    const valorSemPontoMilhar = valorLimpo.replace(".", ""); // Remove o ponto separador de milhar, se houver
    const valorDouble = parseFloat(
      valorSemPontoMilhar.replace(",", ".")
    ).toFixed(1); // Converte para número de ponto flutuante com uma casa decimal
    console.log(valorDouble);

    const novoCartao = {
      // categoria: selectedCategoria,
      conta: {
        id: selectedOrigem,
      },
      limite: valorDouble,
      bandeira: selectedBandeira,
      dataVencimento: vencimento, // Adicione o campo de vencimento ao objeto novaConta
      dataFechamento: fechamento, // Adicione o campo de vencimento ao objeto novaConta
      nome: apelido, // Adicione o campo de vencimento ao objeto novaConta
    };

    console.log("valor no modal:", valor);

    await api.post(`/cartao-credito/`, novoCartao)
      .then(() => {

        Swal.fire({
          icon: "success",
          title: "Cartão adicionado com sucesso!",
          text: "Seu cartão foi adicionado.",
        }).then(() => {
          setValor("");
          setSelectedOrigem("");
          setSelectedBandeira("");
          setVencimento(""); // Limpe o estado de vencimento
          setFechamento("");
          setApelido("");
          resetarCampos();
          listar();
        });

      })
        .catch((erroOcorrido) => {
        console.log(erroOcorrido);
        resetarCampos();
        onClose();
      });

    setValor("");
    setSelectedOrigem("");
    // setSelectedCategoria('');
    setSelectedBandeira("");
    setVencimento(""); // Limpe o estado de vencimento
    setFechamento("");
    setApelido("");
    resetarCampos();
    onClose();
    
  };

  //Resetar campos ao adicionar conta ou cancelar
  const resetCamposTocados = () => {
    setCamposTocados({
      // categoria: false,
      origem: false,
      valor: false,
      bandeira: false,
      vencimento: false,
      fechamento: false,
      apelido: false,
    });
  };

  //Resetar campos ao cancelar
  const handleCancelarClick = () => {
    onClose();
    resetarCampos();
  };

  const [valorAmortizar, setValorAmortizar] = useState("");

  const handleValorChange = (e) => {
    const valorDigitado = e.target.value.replace(/\D/g, ""); // Remove todos os caracteres que não são dígitos
    setValorAmortizar(valorDigitado);
    formatarValorNoInput(valorDigitado);
  };

  const formatarValorNoInput = (valor) => {
    const valorFormatado = formatarMoeda(valor);
    // Atualize o valor no estado
    setValor(valorFormatado);
  };

  // const checkValor = () => {
  //   const valorAmortizarFloat = parseFloat(valorAmortizar) / 100;
  //   if (valorAmortizarFloat !== 0) {
  //     // Altere o estilo ou faça outras operações necessárias aqui
  //   } else {
  //     // Altere o estilo de volta para o estado original, se necessário
  //   }
  //   console.log(valorAmortizarFloat);
  // };

  const formatarMoeda = (valor) => {
    const valorNumerico = parseFloat(valor) / 100; // Converte centavos para reais
    const valorFormatado = valorNumerico.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return valorFormatado;
  };

  const resetarCampos = () => {
    setValor("");
    setSelectedCategoria("");
    setSelectedOrigem("");
    setSelectedBandeira("");
    setVencimento("");
    setFechamento("");
    setApelido("");
    resetCamposTocados();
  };

  const handleCancelarClick2 = (e) => {
    // Verifica se o clique ocorreu diretamente no ModalWrap e não em elementos dentro do ModalContent
    if (e.target.classList.contains("ModalWrap")) {
      onClose();
      resetarCampos();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalWrapper className="ModalWrap" onClick={handleCancelarClick2}>
      <ModalContent className="ModalContent">
        <LogoNome>
          <span>
            <img src={Icon("logo")} />
          </span>
          <div>Novo Cartão</div>
        </LogoNome>

        <LocalElementos>
          <LabelInput>
            <div className="label" id="label_apelido">
              Apelido
            </div>
            <input
              type="text"
              class="input-field"
              name="apelido"
              value={apelido}
              onChange={(e) => {
                setCamposTocados({ ...camposTocados, apelido: true });
                setApelido(e.target.value);
              }}
              style={{
                borderColor: camposTocados.apelido && !apelido ? "red" : ""
              }}
              placeholder="Cartão Visa"
            />
            {camposTocados.apelido && !apelido && <Obrig>Campo Obrigatório</Obrig>}
          </LabelInput>
          <LabelInput>
            <div className="label">Origem</div>
            <OrigemSelect
              value={selectedOrigem}
              onChange={(e) => {
                setSelectedOrigem(e.target.value);
                setCamposTocados({ ...camposTocados, origem: true });
              }}
              style={{
                borderColor:
                  camposTocados.origem && !selectedOrigem ? "red" : "",
              }}
            >
              <option value="">-- Banco --</option>
              {contas.length > 0 &&
                contas.map((conta) => (
                  <option key={conta.id} value={`${conta.id}`}>
                    {conta.banco}
                  </option>
                ))}
            </OrigemSelect>
            {camposTocados.origem && !selectedOrigem && <Obrig>Campo Obrigatório</Obrig>}
          </LabelInput>
        </LocalElementos>
        <LocalElementos>
          <LabelInput>
            <div class="label" id="label_limite">
              Limite
            </div>
            <input
              type="text"
              class="input-field"
              name="valor"
              // value={valor}
              value={valor}
              onChange={(e) => {
                handleValorChange(e);
              }}
              style={{
                borderColor: camposTocados.valor && !valor ? "red" : "",
              }}
            />
            {camposTocados.valor && !valor && <Obrig>Campo Obrigatório</Obrig>}
          </LabelInput>
          <LabelInput>
            <div class="label">Bandeira</div>
            <CategoriaSelect
              value={selectedBandeira}
              onChange={(e) => {
                setSelectedBandeira(e.target.value);
                setCamposTocados({ ...camposTocados, selectedBandeira: true });
              }}
              style={{
                borderColor:
                  camposTocados.bandeira && !selectedBandeira ? "red" : "",
              }}
            >
              <option value="">-- Bandeira --</option>
              <option value="visa">Visa</option>
              <option value="master">Mastercard</option>
              <option value="elo">Elo</option>
            </CategoriaSelect>

            {camposTocados.bandeira && !selectedBandeira && <Obrig>Campo Obrigatório</Obrig>}

          </LabelInput>
        </LocalElementos>
        <LocalElementos>
          <LabelInput>
            <div class="label" id="label_fechamento">
              Fechamento
            </div>
            <input
              type="date"
              class="input-field"
              placeholder="DD/MM/YYYY"
              onChange={(e) => {
                setFechamento(e.target.value);
                setCamposTocados({ ...camposTocados, fechamento: true });
              }}
              style={{
                borderColor:
                  camposTocados.fechamento && !fechamento ? "red" : "",
              }}
            />

            {camposTocados.fechamento && !fechamento && <Obrig>Campo Obrigatório</Obrig>}
          </LabelInput>

          <LabelInput>
            <div class="label" id="label_vencimento">
              Vencimento
            </div>
            <input
              type="date"
              class="input-field"
              placeholder="DD/MM/YYYY"
              onChange={(e) => {
                setVencimento(e.target.value);
                setCamposTocados({ ...camposTocados, vencimento: true });
              }}
              style={{
                borderColor:
                  camposTocados.vencimento && !vencimento ? "red" : "",
              }}
            />
        {camposTocados.vencimento && !vencimento && <Obrig>Campo Obrigatório</Obrig>}
          </LabelInput>
        </LocalElementos>

        <Button>
          <button onClick={handleCancelarClick} className="cancelar">
            Cancelar
          </button>
          <button className="adicionar-btn" onClick={handleSalvar}>
            Adicionar
          </button>
        </Button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalCartao;
