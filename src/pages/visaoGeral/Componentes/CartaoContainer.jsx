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


const CartaoContainer = (props) => {
  const origemCartao = props.origem;

  const origemAbreviada = origemCartao.slice(0, 4).charAt(0).toUpperCase() + origemCartao.slice(1, 4);


  return (
    <div className="containers">
      <div className="icon">
        <img src={Icon(`${props.bandeira.toLowerCase()}Icon`)} alt={props.bandeira} />
      </div>
      <div className="nomeBanco">{props.nome}<span>Vinculada a {props.origem}</span></div>
      <div className="vencimentoBanco">{props.vencimento}</div>
      <div className="saldoBanco">{formatarValorMoeda(parseFloat(props.valor))}</div>
    </div>
  );
};

export default CartaoContainer;
