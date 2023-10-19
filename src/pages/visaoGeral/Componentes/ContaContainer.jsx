import React from 'react';
import { Icon } from '../funcoes/icons';

const ContaContainer = ({ banco, tipoConta, saldo }) => {
  return (
    <div className="containers">
      <div className="icon">
        <img src={Icon(`${banco.toLowerCase()}Icon`)} alt={banco} />
      </div>
      <div className="nomeBanco">{banco}<span>Conta {tipoConta}</span></div>
      <div className="saldoBanco">R$ {saldo}</div>
    </div>
  );
};

export default ContaContainer;
