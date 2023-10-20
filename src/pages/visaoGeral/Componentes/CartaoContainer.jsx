import React from 'react';
import { Icon } from '../funcoes/icons';

function formatarValorMoeda(valor) {
  if (typeof valor !== 'number') {
    return '';
  }

  const valorFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

  return valorFormatado;
}


const CartaoContainer = ({ origem, valor,bandeira,vencimento }) => {

  console.log('Props no CartaoContainer:', { origem, valor, bandeira, vencimento });
  const origemCartao = origem;

  const origemAbreviada = origemCartao.slice(0, 4).charAt(0).toUpperCase() + origemCartao.slice(1, 4);


  return (
    <div className="containers">
      <div className="icon">
        <img src={Icon(`${bandeira.toLowerCase()}Icon`)} alt={bandeira} />
      </div>
      <div className="nomeBanco">Cartão-{origemAbreviada}<span>Vinculada a {origem}</span></div>
      <div className="vencimentoBanco">{vencimento}</div>
      <div className="saldoBanco">{formatarValorMoeda(parseFloat(valor))}</div>
    </div>
  );
};

export default CartaoContainer;
