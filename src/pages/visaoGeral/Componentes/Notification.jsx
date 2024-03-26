import React, { useState } from "react";
import { Icon } from "../funcoes/icons";
import styled from "styled-components";

const NotificacaoWrapper = styled.div`
  position: relative;
`;

const Notifica = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10vh;
  width: 100px;
  font-size: 13px;
  cursor: pointer;
  justify-content: space-evenly;

`;

const ListaNotificacoes = styled.div`
border-radius:10px;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 90%;
  right: -50%;
  width: 200px;
  font-size: 11px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: ${(props) => (props.visible ? "block" : "none")};
  overflow:auto;

  div{
    margin: 10px auto;
  }

  .line{
    width: 100%;
    height: 1px;
    background-color: black;
    opacity: 0.2;
  }
`;

function Notification() {
  const [mostrarNotificacoes, setMostrar] = useState(false);

  const handleNotificacaoClick = () => {
    setMostrar(!mostrarNotificacoes);
  };

  const notificacoes = ["Notificação 1", "Notificação 2", "Notificação 3"];

  return (
    <NotificacaoWrapper>
      <Notifica onClick={handleNotificacaoClick}>
        <img className="imgNotificacao" src={Icon("notificacaoIcon")} alt="Ícone de notificação" />
        <p>Notificações</p>
      </Notifica>
      <ListaNotificacoes visible={mostrarNotificacoes}>
        {/* Renderizar notificações aqui */}
        {notificacoes.map((notificacao, index) => (
          <div key={index}>
            <p>{index+1} - {notificacao}</p>
            <p className="line"></p>
        </div>
        ))}
      </ListaNotificacoes>
    </NotificacaoWrapper>
  );
}

export default Notification;
