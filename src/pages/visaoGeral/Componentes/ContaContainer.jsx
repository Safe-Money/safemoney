import React from 'react';
import { Icon } from '../funcoes/icons';

function formatarValorMoeda(valor) {
  if (typeof valor !== 'number') {
    return '';
  }

  const valorFormatado = valor.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return valorFormatado;
}



const ContaContainer = ({ nome, banco, tipoConta, saldo, onContainerClick  }) => {
  return (
    <div className="containers" onClick={onContainerClick}>
      <div className="icon">
        <img src={Icon(`${banco}Icon`)} alt={banco} />
      </div>
      <div className="nomeBanco">{nome}<span>{tipoConta === 0 ? "Conta Corrente" : "Conta Poupança"}</span></div>
      <div className="saldoBanco">{formatarValorMoeda(saldo)}</div>
    </div>
  );
};

export default ContaContainer;
