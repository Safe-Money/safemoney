import GraficoLinha from './GraficoLinha';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from '../../visaoGeral/funcoes/icons';
import LateralHeader from '../../visaoGeral/Componentes/LateralHeader';
import api from '../../../api';
import GraficoPizzaApex from './GraficoPizza';

const PieChartContainer = styled.div`
  width: 100%;
  height: 50%; /* Ajuste a altura conforme necessário */
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 95%;
  width: 85%;
  border-radius: 10px;
  padding: 2px;
  background-color: white;
  margin: auto;
  justify-content: flex-start;
  align-items: flex-start;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const DivsChartsContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content:flex-start;
 margin-left:80px;
 width:40vw;
 height:88vh; 
 margin-top: -20px;
`;

const SideDiv = styled.div`
  margin-bottom: 20px;
  width: 90%;
  height: 45%;
  border: 1px solid #08632D;
  border-radius: 10px;
  background: #FFF;
  display: flex;
  flex-direction: row;
  padding: 10px;
  position:relative;

  .textSide {
    font-size: 15px;
    margin-left: px;
  }

  

  img{
    width:20px;
    height:20px;
  }

  

  .cabeçalho{
    display:flex;
    justify-content:center;
    width: 200%;
    mar
   
  }

  table {
    position: relative;   
    white-space: nowrap;
    margin-top:20px;
    right: 5%;

  }

  thead {
    font-size: 11px;
    align-items: center;
  }

  tbody {
    font-size: 11px;
  }

  tbody .valor {
    font-weight: 600;
  }

  td {
    text-align: center;
    border-bottom: 0.1px solid rgba(220, 229, 238);
    padding: 0.6rem;
  }

  .info {
    position: absolute;
    right: 0;
    top: 20%;
    margin-right:5%;
  }

  .info-box {
    position: relative;
    width: 130px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: #FDFDFD;
    margin-bottom: 20px;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
  }

  .limite {
    color: #08632D;
  }

  .gasto {
    color: #AD0000;
  }

  .livre {
    color: #4232A9;
  }

  .p{   
      color: #000;
      font-family: Montserrat;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  


`;

const Content = styled.div`
  margin-top: 3%;
  margin-left: 3%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Text = styled.span`
  color: #000;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 20px;
  &.filtro {
    font-size: 12px;
    font-weight: 100;
    margin-top: 1.2%;
    margin-left: 150px;
    position: relative;
  }
`;

const Image = styled.img`
  margin-right: 10px;
`;

const TableContainer = styled.div`

  margin-top: 40px;
  width: 40vw;
  overflow-x: none;
  margin-left: 2px;
  align-items: center;
  flex-grow: 1;
  position: relative;
  left:20px;
`;

const StyledTable = styled.table`
  width: 100%;
  text-align: left;
  font-size: 12px;
  border-collapse: collapse;

  .categoria-valor-data {
    width: 150px; // Ajuste conforme necessário
  }

`;

const TableHeader = styled.thead`
  th {
    padding: 0.5rem;
  }

 

  
`;

const TableRow = styled.tr`
  th {
    text-align: center;
    border-bottom: 0px solid rgba(220, 229, 238);
    padding: 0.5rem;
  }

  td {
    text-align: center;
    border-bottom: 0.1px solid rgba(220, 229, 238);
    padding: 0.5rem;
  }

  .tdEspacoConta {
    padding-left: 8.5rem; // Ajuste o valor conforme necessário
  }

  
`;

const TableFooter = styled.div`
  width: 47%;
  display: flex;
  justify-content: flex-end;
  background: white; 
  margin-top: -35px;
  margin-left: -1px;
`;

const Button = styled.button`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  color: #000;
  &:hover {
    text-decoration: none;
  }
`;

const BotaoAnterior = styled.button`
  border: none;
  margin: 0 5px;
  background-color: white;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.12px;
`;

const SelecionarOrdenacao = styled.select`
  font-size: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: #000;
  width: 50%; 
  
  
`;

const AllContainers = styled.div`
  display: flex;
  height:100vh;
  overflow-y:none;
  justify-content:center;
  align-items:center;
  background-color: #DBE7E0;

  .container{
    width: 80vw;
  }

  *{
    box-sizing: border-box;
  }

  .footer{
    display:flex;
    justify-content:space-between;
    margin: auto;
    width: 23vw;
  }
`
const TableIcon = styled.img`
  height: 40px;
  margin-left:10px;
  margin: 0;
  vertical-align: middle;
`;

const FiltroContainer = styled.div`
  cursor: pointer;
`;




const lineChartData = [
  { data: 'Jan', valor: 100 },
  { data: 'Fev', valor: 10 },
  { data: 'Mar', valor: 120 },
  { data: 'Abr', valor: 10 },
  { data: 'Mai', valor: 200 },
  { data: 'Jun', valor: 20 },

];
const itensPorPagina = 8;

function ContainerGeral() {
  const idUser = sessionStorage.getItem('id');

  const [paginaAtual, setPaginaAtual] = useState(1);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('Valor');
  const [dadosTabela, setDadosTabela] = useState([]);

  const totalItens = dadosTabela.length;
  const totalPaginas = Math.ceil(totalItens / itensPorPagina);

  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const indiceFinal = indiceInicial + itensPorPagina;

  const dadosExibidos = dadosTabela.slice(indiceInicial, indiceFinal);

  const mudarPagina = (numeroPagina) => {
    setPaginaAtual(numeroPagina);
  };

  const irParaPaginaAnterior = () => {
    if (paginaAtual > 1) {
      mudarPagina(paginaAtual - 1);
    }
  };

  const irParaProximaPagina = () => {
    if (paginaAtual < totalPaginas) {
      mudarPagina(paginaAtual + 1);
    }
  };

  useEffect(() => {
    listar()
  }, []);

  function listar() {
    api
      .get(`transacoes/listar-gastos/${idUser}`)
      .then((respostaObtida) => {
        console.log(respostaObtida.data);
        setDadosTabela(respostaObtida.data);
      })
      .catch((erroOcorrido) => {
        console.log(erroOcorrido);
      });
  }


  const [dataPizza, setDataPizza] = useState([]);
  const [dataLine, setDataLine] = useState([]);

  useEffect(() => {
    listarGraficoPizza();
    listarDadosGraficoLine();
    listarGraficoLinhaKpi();
  }, []);


  function listarGraficoPizza() {
    api
      .get(`graficos/gastos-por-categoria/${idUser}`)
      .then((respostaObtida) => {
        console.log("Dados do gráfico de pizza: ", respostaObtida.data);
        setDataPizza(respostaObtida.data);
      })
      .catch((erroOcorrido) => {
        console.log(erroOcorrido);
      });
  }



  function listarDadosGraficoLine() {
    api.get(`graficos/grafico-linha-geral/${idUser}`)
      .then((respostaObtida) => {
        console.log("Dados do gráfico de linha: ", respostaObtida.data);
        setDataLine(respostaObtida.data);
      })
      .catch((erroOcorrido) => {
        console.log(erroOcorrido);
      });
  }

  const [menorValor, setMenorValor] = useState([]);
  const [maiorValor, setMaiorValor] = useState([]);
  const [variacaoPercentual, setVariacaoPercentual] = useState([]);

  function listarGraficoLinhaKpi() {
    api.get(`graficos/grafico-linha-kpi/${idUser}`)
      .then((respostaObtida) => {
        console.log("Dados da KPI do grafico de linha ", respostaObtida.data);

        setMenorValor(respostaObtida.data.menorValor);
        setMaiorValor(respostaObtida.data.maiorValor);
        setVariacaoPercentual(respostaObtida.data.variacaoPercentual);
      })
      .catch((erroOcorrido) => {
        console.log(erroOcorrido);
      });
  }

  const styleCss = {
    position: 'absolute',
    padding: '30px 20px 20px 20px',
    left: 0,
    top: 10,
    width: '70%',
    height: '70%',
  };

  function removerAcentos(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  return (
    <AllContainers>
      <LateralHeader selecionado="lancamentos" />

      <Container>
        <Content>

          <Image src={Icon('maisIcon')} />
          <Text>Lançamentos</Text>

          <Text className="filtro">
            <FiltroContainer onClick={() => console.log('Clicou no filtro')}>
              Ordenar por:{" "}
              <SelecionarOrdenacao
                value={opcaoSelecionada}
                onChange={(e) => setOpcaoSelecionada(e.target.value)}
              >
                <option value="Valor">Valor</option>
                <option value="Data">Data</option>
                <option value="Categoria">Categoria</option>
              </SelecionarOrdenacao>
            </FiltroContainer>
          </Text>

        </Content>

        <MainContent>
          <TableContainer>

            <StyledTable id="machineTable">
              <TableHeader>
                <TableRow>
                  <th>Categoria</th>
                  <th>Valor</th>
                  <th>Data</th>
                  <th className='tdEspacoConta'>Conta</th>
                </TableRow>
              </TableHeader>
              <tbody>
                {dadosExibidos.map((item, index) => (
                  <TableRow key={index}>
                    <td class>
                      <TableIcon src={Icon(removerAcentos(item.categoria.nome))} alt="Ícone" />
                    </td>

                    <td>{item.valor}</td>
                    <td >{item.data}</td>
                    <td className='tdEspacoConta'>{item.conta != null ? item.conta.banco : item.fatura.fkCartao.nome}</td>
                  </TableRow>
                ))}
              </tbody>
            </StyledTable>

          </TableContainer>

          <DivsChartsContainer>
            <SideDiv>
              {/* Cabeçalho */}
              <div className='cabeçalho'>
                <Image src={Icon('iconChart1')} />
                <Text className='textSide'>Gastos por categoria</Text>
              </div>
              <PieChartContainer>

                {/* Gráfico de Pizza (não é GPT, sou eu msm comentando)*/}
                {dataPizza.length > 0 ? <GraficoPizzaApex dados={dataPizza} /> : <p>Nenhum dado para exibir</p>}


              </PieChartContainer>
              <table>
                <thead>
                  <tr>
                    {dataPizza.length > 0 && <th colSpan="2" style={{ textAlign: "center" }}>TOP 5 Gastos</th>}
                  </tr>
                </thead>
                <tbody>
                  {dataPizza.length > 0 &&
                    dataPizza.map((item, index) => (
                      <tr key={index}>
                        <td>{item.categoria}</td>
                        <td className='valor'>{item.valor}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </SideDiv>

            <SideDiv>
              <Image src={Icon('iconChart1')} />
              <Text className='textSide'>Gastos com débito ao longo do tempo</Text>

              <GraficoLinha style={styleCss} dados={dataLine} />

              <div className="info">
                <div className="info-box">
                  <p className='p'>Maior gasto:<span className='limite'>{maiorValor}</span></p>
                </div>
                <div className="info-box">
                  <p className='p' >Menor gasto: <span className='gasto'>{menorValor}</span></p>
                </div>
                <div className="info-box">
                  <p className='p'>Variação percentual: <span className='livre'>{variacaoPercentual}%</span></p>
                </div>
              </div>
            </SideDiv>

          </DivsChartsContainer>

        </MainContent>

        <TableFooter>
          <BotaoAnterior onClick={irParaPaginaAnterior}>&lt; </BotaoAnterior>
          {Array.from({ length: totalPaginas }, (_, index) => {
            const numeroPagina = index + 1;
            const ePaginaAtual = paginaAtual === numeroPagina;
            return (
              <Button
                key={index}
                onClick={() => mudarPagina(numeroPagina)}
                style={{
                  backgroundColor: ePaginaAtual ? '#08632D' : 'transparent',
                  color: ePaginaAtual ? 'white' : 'black',
                  borderRadius: '4px',
                }}
              >
                {numeroPagina}
              </Button>
            );
          })}
          <BotaoAnterior onClick={irParaProximaPagina}> &gt;</BotaoAnterior>
        </TableFooter>
      </Container>
    </AllContainers>
  );
}

export default ContainerGeral;
