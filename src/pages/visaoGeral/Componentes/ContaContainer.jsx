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



const ContaContainer = ({ banco, tipoConta, saldo,onContainerClick  }) => {
  return (
    <div className="containers" onClick={onContainerClick}>
      <div className="icon">
        <img src={Icon(`${banco.toLowerCase()}Icon`)} alt={banco} />
      </div>
      <div className="nomeBanco">{banco}<span>Conta {tipoConta}</span></div>
      <div className="saldoBanco">{formatarValorMoeda(parseFloat(saldo))}</div>
    </div>
  );
};

export default ContaContainer;
