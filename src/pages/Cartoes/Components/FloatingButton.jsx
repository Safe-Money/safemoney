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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedBotaoFlutuante = styled.button`
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

const ModalOverlay = styled.div`
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

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  margin-top: 25px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const ModalInput = styled.input`
  width: 95%;
  padding: 10px;
  margin-right: 10px;
`;

const SelectBox = styled.select`
  width: 100%;
  padding: 10px;
`;

const ModalButton = styled.button`
  background-color: #08632d;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 15px;
  width: 100%;
`;

const MessageBox = styled.div`
  position: fixed;
  
  bottom: 70px;
  right: 10px;
  background-color: #08632D;
  color: white;
  padding: 5px;
  border-radius: 5px;
  display: ${(props) => (props.show ? 'block' : 'none')};
  justify-content: center;
  animation: ${fadeIn} 1s;

  span{
    font-size:11px;
  }
`;

const FloatingButton = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [valorInput, setValorInput] = useState('');
  const [moedaDestino, setMoedaDestino] = useState('USD');
  const [valorConvertido, setValorConvertido] = useState('');
  const [showMessageBox, setShowMessageBox] = useState(true);

  useEffect(() => {
    // Ocultar a caixa de mensagem após 3 segundos (3000 milissegundos)
    setTimeout(() => {
      setShowMessageBox(false);
    }, 3000);
  }, []);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const handleMoedaDestinoChange = (novaMoeda) => {
    setMoedaDestino(novaMoeda);
  };

  const lidarComConversao = async () => {
    try {
      const response = await axios.get(`https://open.er-api.com/v6/latest/${moedaDestino}`);
      const rates = response.data.rates;
      const taxaDeConversao = rates.BRL;
      const valorEmDolar = parseFloat(valorInput) / taxaDeConversao;

      setValorConvertido(`Valor em ${moedaDestino}: ${valorEmDolar.toFixed(2)}`);
    } catch (error) {
      console.error('Erro ao obter as taxas de câmbio:', error);
      alert('Ocorreu um erro ao converter o valor. Tente novamente mais tarde.');
    }
  };

  return (
    <>
      <AnimatedBotaoFlutuante onClick={abrirModal}>
        +
      </AnimatedBotaoFlutuante>

      <MessageBox show={showMessageBox}>
        <span>Conversor</span>
      </MessageBox>

      <ModalOverlay isOpen={modalAberto} onClick={fecharModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <InputContainer>
            <label>
              <ModalInput
                type="number"
                placeholder="Valor em reais"
                value={valorInput}
                onChange={(e) => setValorInput(e.target.value)}
              />
            </label>
            <label>
              <SelectBox
                value={moedaDestino}
                onChange={(e) => handleMoedaDestinoChange(e.target.value)}
              >
                <option value="USD">Dólar Americano (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="JPY">Iene Japonês (JPY)</option>
                <option value="GBP">Libra (GBP)</option>
                <option value="AUD">Dólar Australiano (AUD)</option>
              </SelectBox>
            </label>
          </InputContainer>
          <ModalButton onClick={lidarComConversao}>
            Converter para {moedaDestino}
          </ModalButton>
          {valorConvertido && <div>{valorConvertido}</div>}
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default FloatingButton;
