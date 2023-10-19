import React from "react";
import styled from "styled-components";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from "recharts";


const ContainerPrevisao = styled.div`
  display: flex;
  height: 30%;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  background-color: #fdfdfd;
  flex-direction: column;
  

  .titulo-icone {
    display: flex;
    align-items: center;
    font-weight: 700;
    height: 10%;
    width: 100%;
    margin-bottom: 10px;

  }

  .titulo-icone svg {
    margin-left: 10px;
    margin-right: 10px;
  }

  .grafico-container {
    height: 50%;
  }

  .texto-container {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  .conteudo{
    height:100%;
    position:relative;
  }
  `;


const TextoBox = styled.div`
  position:absolute;
  display:flex;
  flex-direction:column;
  height:80%;
  right:50px;
  top:10px;
  justify-content:space-between;

  div{
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    padding:10px;
    border-radius: 10px;
  }

  span{
    font-weight:700;
    color:black;
  }

  .receitaBox{
    color:#08632D;
  }
  .despesaBox{
    color:#AD0000;
  }
  .saldoBox{
    color:#4232A9;
  }
  `;



function Previsao() {
  const dadosGrafico = [
    { name: "Receita", valor: 4500, cor: "#51D474" },
    { name: "Despesa", valor: 3000, cor: "rgba(252, 1, 1, 1)" },
  ];
  return (
    <>
      <ContainerPrevisao>
        <div className="titulo-icone">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="20" rx="8" fill="#2FED42" fillOpacity="0.3" />
            <path d="M6 7H14" stroke="#08632D" strokeLinecap="round" />
            <path d="M6 10H14" stroke="#08632D" strokeLinecap="round" />
            <path d="M6 13H14" stroke="#08632D" strokeLinecap="round" />
          </svg>
          Previsão para final de setembro
        </div>
        <div className="conteudo">
          <div className="grafico-container">
            <ResponsiveContainer width="100%" height="200%" position="absolute">
              <BarChart data={dadosGrafico} margin={{ top: 20, right: 300, bottom: 20, left: 10 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="valor">
                  {dadosGrafico.map((entry, index) => (
                    <Cell key={index} fill={entry.cor} /> // 
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <TextoBox>
            <div className="receitaBox"><span>Receita:</span> R$ 4500,00</div>
            <div className="despesaBox"><span>Despesa:</span> R$ 3000,00</div>
            <div className="saldoBox"><span>Saldo:</span> R$ 4500,00</div>
          </TextoBox>
        </div>
      </ContainerPrevisao>
    </>
  );
}

export default Previsao;
