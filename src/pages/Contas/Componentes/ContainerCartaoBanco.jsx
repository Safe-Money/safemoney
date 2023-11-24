import React from 'react';
import styled from 'styled-components';
import Cartao from '../../visaoGeral/Componentes/CartaoContainer'; // Importe o componente necessário

const ContainerCartaoBancoStyled = styled.div`
  /* Adicione os estilos conforme necessário */
`;

const ContainerCartaoBanco = ({ conta }) => {
  const contas = JSON.parse(conta) || [];
  const bancoProcurado = sessionStorage.NOMEBANCO;

  // Filtra apenas os cartões de origem Bradesco
  const contasBradesco = contas.filter((conta) => conta.origem === `${bancoProcurado}`);

  return (
    <ContainerCartaoBancoStyled>
      {contasBradesco.map((conta, index) => (
        <Cartao
          key={index}
          origem={conta.origem}
          valor={conta.valor}
          bandeira={conta.bandeira}
          vencimento={conta.vencimento}
        />
      ))}
      
    </ContainerCartaoBancoStyled>
  );
};

export default ContainerCartaoBanco;
