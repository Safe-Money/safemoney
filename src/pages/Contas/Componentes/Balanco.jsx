import styled from "styled-components";
// import { Icon } from "../../visaoGeral/funcoes/icons";
// import React from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';
import WaterfallChart from '@keyvaluesystems/react-waterfall-chart';



const ContainerBalanco = styled.div`
display:flex;
height:46%;
width:49.5%;
border-radius:10px;
padding:10px 10px 40px 30px;
background-color:#FDFDFD;
flex-direction:column;
margin:1.5% 0 0 0;
box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);


.titulo-icone {
    display: flex;
    align-items: center;
    font-weight: 700;
    height: 10%;
    width: 100%;
    margin-bottom:5%;
    font-size:18px;

  }

  .titulo-icone svg {
    margin-right: 10px;
  }

  .grafico-container {
    height: 100%;
  }

  .texto-container {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  .conteudo{
    display:flex;
    flex-direction:column;
    height:100%;
    position:relative;
  }

  .custom-waterfall-chart text {
    display: none; /* Oculta os números ao lado das barras */
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



function Balanco() {
  const transactionsList = [
    {
      label: "10.1",
      value: 100
    },
    {
      label: "11.1",
      value: 90
    },
    {
      label: "12.1",
      value: -60
    },
    {
      label: "13.1",
      value: -60
    },
    {
      label: "14.1",
      value: -60
    },
    {
      label: "15.1",
      value: 150
    },
    {
      label: "16.1",
      value: 80
    },
    {
      label: "17.1",
      value: -80
    },
    {
      label: "18.1",
      value: -80
    },
    {
      label: "19.1",
      value: -80
    },
    {
      label: "20.1",
      value: 50
    },
    {
      label: "21.1",
      value: -50
    },
    {
      label: "22.1",
      value: 100
    }
  ];

  const customStyles = {
    summaryBar: {
      fill: '#4CAF50', // Cor da barra de resumo
    },
    positiveBar: {
      width: '30px', // Cor das barras de valores positivos
    },
    negativeBar: {
      fill: '#F44336',
      width: '30px', // Cor das barras de valores negativos
    },
    text: {
      display: 'none', // Oculta os números ao lado das barras
    },
  };

  return (
    <>
      <ContainerBalanco>
        <div className="titulo-icone">
          <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="27" rx="8" fill="#2FED42" fillOpacity="0.3" />
            <path d="M20.4767 21H8.61628C7.17209 21 6 19.8279 6 18.3837V6.52326C6 6.23721 6.23721 6 6.52326 6C6.8093 6 7.04651 6.23721 7.04651 6.52326V18.3837C7.04651 19.2488 7.75116 19.9535 8.61628 19.9535H20.4767C20.7628 19.9535 21 20.1907 21 20.4767C21 20.7628 20.7628 21 20.4767 21Z" fill="#08632D" />
            <path d="M8.61591 17.5115C8.4973 17.5115 8.37172 17.4697 8.27404 17.3859C8.05777 17.1976 8.02986 16.8697 8.21823 16.6464L11.4206 12.9069C11.7694 12.5022 12.2717 12.258 12.8019 12.2371C13.3322 12.2231 13.8554 12.4185 14.2322 12.7952L14.895 13.458C15.0694 13.6325 15.2926 13.7162 15.5438 13.7162C15.788 13.7092 16.0112 13.5976 16.1717 13.4092L19.374 9.66967C19.5624 9.4534 19.8903 9.42549 20.1136 9.61386C20.3298 9.80223 20.3578 10.1301 20.1694 10.3534L16.9671 14.0929C16.6182 14.4976 16.1159 14.7418 15.5857 14.7627C15.0485 14.7766 14.5322 14.5813 14.1554 14.2045L13.4996 13.5418C13.3252 13.3673 13.095 13.2766 12.8508 13.2836C12.6066 13.2906 12.3833 13.4022 12.2229 13.5906L9.02056 17.3301C8.90893 17.4487 8.76242 17.5115 8.61591 17.5115Z" fill="#08632D" />
          </svg>

          Balanco
        </div>
        <div className="conteudo">
          <div className="grafico-container">
            <WaterfallChart
              transactions={transactionsList}
              showYAxisScaleLines={false}
              styles={customStyles}
              className="custom-waterfall-chart" // Passa os estilos personalizados como propriedade
            />
          </div>
          <TextoBox>
          </TextoBox>
        </div>
      </ContainerBalanco>
    </>
  );
}



export default Balanco;