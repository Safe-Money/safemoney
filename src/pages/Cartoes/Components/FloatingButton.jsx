import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const BotaoFlutuanteAnimado = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #08632D;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  &:hover {
    background-color: #083803;
  }

  animation: ${pulse} 1s infinite;
`;

const SobreposicaoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

const ConteudoModal = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SecaoInput = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const EntradaModal = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #08632D;
  }
`;

const CaixaSelecao = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const BotaoModal = styled.button`
  background-color: #08632d;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 20px;
`;

const TituloModal = styled.h2`
  font-size: 1.5em;
  margin-bottom: 15px;
  color: #08632D;
`;

const simbolosMoeda = {
  BRL: 'Real - R$',
  USD: 'Dólar - $ ',
  EUR: 'Euro- €',
  GBP: 'Libra - £',
};

const FloatingButton = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [valorInput, setValorInput] = useState('');
  const [moedaOrigem, setMoedaOrigem] = useState('BRL');
  const [moedaDestino, setMoedaDestino] = useState('USD');
  const [valorConvertido, setValorConvertido] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setValorConvertido('0');
    }, 3000);
  }, []);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const handleMoedaOrigemChange = (novaMoeda) => {
    setMoedaOrigem(novaMoeda);
  };

  const handleMoedaDestinoChange = (novaMoeda) => {
    setMoedaDestino(novaMoeda);
  };

  const lidarComConversao = async () => {
    try {
      if (!valorInput) {
        setValorConvertido('0');
        return;
      }

      const response = await axios.get(`https://open.er-api.com/v6/latest/${moedaOrigem}`);
      const rates = response.data.rates;
      const taxaDeConversaoOrigem = rates[moedaDestino];
      const valorConvertido = parseFloat(valorInput) * taxaDeConversaoOrigem;

      setValorConvertido(`${simbolosMoeda[moedaDestino]} ${valorConvertido.toFixed(2)}`);
    } catch (error) {
      console.error('Erro ao obter as taxas de câmbio:', error);
      alert('Ocorreu um erro ao converter o valor. Tente novamente mais tarde.');
    }
  };

  return (
    <>
      <BotaoFlutuanteAnimado onClick={abrirModal}>
        +
      </BotaoFlutuanteAnimado>

      <SobreposicaoModal isOpen={modalAberto} onClick={fecharModal}>
        <ConteudoModal onClick={(e) => e.stopPropagation()}>
          <TituloModal>Conversor</TituloModal>
          <SecaoInput>
            <EntradaModal
              type="number"
              placeholder={`Valor em ${simbolosMoeda[moedaOrigem]}`}
              value={valorInput}
              onChange={(e) => setValorInput(e.target.value)}
            />
            <CaixaSelecao
              value={moedaOrigem}
              onChange={(e) => handleMoedaOrigemChange(e.target.value)}
            >
              {Object.entries(simbolosMoeda).map(([sigla, simbolo]) => (
                <option key={sigla} value={sigla}>
                  {simbolo} ({sigla})
                </option>
              ))}
            </CaixaSelecao>
          </SecaoInput>
          <BotaoModal onClick={lidarComConversao}>
            Converter para {simbolosMoeda[moedaDestino]}
          </BotaoModal>
          <SecaoInput>
            <EntradaModal
              type="text"
              placeholder={`Valor em ${simbolosMoeda[moedaDestino]}`}
              value={valorConvertido}
              readOnly
            />
            <CaixaSelecao
              value={moedaDestino}
              onChange={(e) => handleMoedaDestinoChange(e.target.value)}
            >
              {Object.entries(simbolosMoeda).map(([sigla, simbolo]) => (
                <option key={sigla} value={sigla}>
                  {simbolo} ({sigla})
                </option>
              ))}
            </CaixaSelecao>
          </SecaoInput>
        </ConteudoModal>
      </SobreposicaoModal>
    </>
  );
};

export default FloatingButton;
