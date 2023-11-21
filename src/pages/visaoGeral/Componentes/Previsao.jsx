import React from "react";
import styled from "styled-components";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer,CartesianGrid } from "recharts";


const ContainerPrevisao = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  background-color: #fdfdfd;
  flex-direction: column;
  fill: #FDFDFD;
  // filter: drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.1));
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);

  

  .titulo-icone {
    display: flex;
    align-items: center;
    font-weight: 700;
    height: 10%;
    width: 100%;
    margin-bottom: 10px;
    font-size:15px;

  }

  .titulo-icone svg {
    margin-left: 10px;
    margin-right: 10px;
  }

  .grafico-container {
    height: 52%;
    width: 93%;
    font-size: 11px;
  }

  .texto-container {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  .conteudo{
    height:100%;
    position:relative;
    padding:2% 5% 5% 10%;
  }
  `;


const TextoBox = styled.div`
  position:absolute;
  display:flex;
  flex-direction:column;
  height:50%;
  right:20px;
  top:20px;
  justify-content:space-between;

  div{
    padding:10px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    margin-bottom:15px;
  }

  span{
    font-weight:700;
    color:black;
  }

  .receitaBox{
    color:#08632D;
    font-weight:700;
    font-size:12px;
  }
  .despesaBox{
    color:#AD0000;
    font-weight:700;
    font-size:12px;
  }
  .saldoBox{
    color:#4232A9;
    font-weight:700;
    font-size:12px;
  }
  `;



function Previsao() {
  const dadosGrafico = [
    { name: "Receita", valor: 4500, cor: "#51D474" },
    { name: "Despesa", valor: 3000, cor: "rgba(252, 1, 1, 1)" },
  ];

  function CustomYAxisLabel(props) {
    const { x, y, width, height, value } = props;
    return (
      <text x={x + width + 10} y={y + height / 2} dy={4} textAnchor="start" fill="#666">
        {value}
      </text>
    );
  }

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
          Resumo - Saldo Projetado
        </div>
        <div className="conteudo">
          <div className="grafico-container">
            <ResponsiveContainer width="100%" height="200%" position="absolute" marginLeft="100px">
              <BarChart data={dadosGrafico} margin={{ top: 20, right: 180, bottom: 20, left: 0 }} barCategoryGap={30}>
              <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={<CustomYAxisLabel />}
                  tickMargin={20}
                  axisLine={true} // Remove the axis line
                />
                 {/* <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} /> */}
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
