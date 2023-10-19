import React from 'react';
import { Icon } from '../funcoes/icons';

const CartaoContainer = ({ origem, categoria, valor }) => {
  return (
    <div className="containers">
      <div className="icon">
        <img src={Icon(`${origem.toLowerCase()}Icon`)} alt={origem} />
      </div>
      <div className="nomeBanco">{categoria}<span>Vinculada a {categoria}</span></div>
      <div className="vencimentoBanco">{origem}</div>
      <div className="saldoBanco">R$ {valor}</div>
    </div>
  );
};

export default CartaoContainer;
