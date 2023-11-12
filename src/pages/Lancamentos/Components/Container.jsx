import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../visaoGeral/funcoes/icons';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend as RechartsLegend } from 'recharts';
import LateralHeader from '../../visaoGeral/Componentes/LateralHeader';

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

const ChartContainer1 = styled.div`
  position: fixed;
  top: 5%;
  left: 61%;
  margin: 24px 30px 10px 10px;
  height: 40%;
  width: 35%;
  border-radius: 10px;
  border: 1px solid #08632D;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  table {
    position: relative;
    right: 45%;
    white-space: nowrap;
  }

  thead {
    font-size: 11px;
    align-items: center;
  }

  tbody {
    font-size: 11px;
  }

  tbody .valor {
    font-weight: 500;
  }

  td {
    text-align: center;
    border-bottom: 0.1px solid rgba(220, 229, 238);
    padding: 0.6rem;
  }
`;

const IconChart = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
  color: #000;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 22px;
  height: 22px;
`;

const ChartText = styled.span`
  position: absolute;
  top: 0;
  left: 30px;
  margin: 10px;
  color: #000;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ChartContainer2 = styled.div`
  position: fixed;
  margin: 20px 42px 10px 10px;
  right: 0;
  height: 40%;
  width: 35%;
  border-radius: 10px;
  border: 1px solid #08632D;
  top: 50%;

  .info {
    position: relative;
    left: 70%;
    bottom: 70%;
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

  p {
    color: #000;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
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
  width: 50%;
  overflow-x: none;
  margin-left: -5px;
  align-items: center;
  flex-grow: 1;
  position: relative;
`;

const StyledTable = styled.table`
  width: 100%;
  text-align: left;
  font-size: 12px;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  th {
    padding: 0.5rem;
  }

  th:nth-child(5) {
    padding-left: 9rem;
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
    border-width: -31px;
    padding: 0.5rem;
  }

  td:nth-child(5) {
    padding-left: 9rem;
  }
`;

const TableFooter = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  background: white;
  z-index: 1;
  margin-bottom: 2%;
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

const dadosGrafico = [
  { valor: 300, cor: '#C568F6' },
  { valor: 300, cor: '#C568F6' },
  { valor: 300, cor: '#C568F6' },
  { valor: 300, cor: '#C568F6' },
  { valor: 100, cor: '#C568F6' },
];

const data = [
  {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 200.00',
    data: '2023-13-21',
    conta: 'Conta A',
  },
  {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 300.00',
    data: '2023-15-21',
    conta: 'Conta A',
  },
  {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 400.00',
    data: '2023-10-21',
    conta: 'Conta A',
  },
  {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 500.00',
    data: '2023-10-21',
    conta: 'Conta A',
  },
  {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 600.00',
    data: '2023-10-21',
    conta: 'Conta A',
  },
  {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 700.00',
    data: '2023-10-21',
    conta: 'Conta A',
  },
  {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 800.00',
    data: '2023-10-21',
    conta: 'Conta A',
  },
  {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 900.00',
    data: '2023-10-21',
    conta: 'Conta A',
  },
  {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 1900.00',
    data: '2023-10-21',
    conta: 'Conta A',
  }, {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 2100.00',
    data: '2023-10-21',
    conta: 'Conta A',
  }, {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 4100.00',
    data: '2023-10-21',
    conta: 'Conta A',
  },
  {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 5100.00',
    data: '2023-10-21',
    conta: 'Conta A',
  },
  {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 6100.00',
    data: '2023-10-21',
    conta: 'Conta A',
  },
  {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 1700.00',
    data: '2023-10-21',
    conta: 'Conta A',
  },
  {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 10.00',
    data: '2023-10-21',
    conta: 'Conta A',
  },
  {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 600.00',
    data: '2023-10-21',
    conta: 'Conta A',
  },
  {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 1200.00',
    data: '2023-10-21',
    conta: 'Conta A',
  },
  {
    icon: 'icone1',
    categoria: <Image src={Icon('iconPrato')} style={{ width: '30px', height: '30px' }} />,
    valor: 'R$ 4100.00',
    data: '2023-10-21',
    conta: 'Conta A',
  }
];

const data2 = [
  {
    icon: 'icone1',
    categoria: 'Lazer',
    valor: 'R$ 100.00',
  },
  {
    icon: 'icone1',
    categoria: 'Comida',
    valor: 'R$ 200.00',
  },
  {
    icon: 'icone1',
    categoria: 'Comida',
    valor: 'R$ 2030.00',
  },
  {
    icon: 'icone1',
    categoria: 'Estudos',
    valor: 'R$ 200.00',
  },
  {
    icon: 'icone1',
    categoria: 'Médico',
    valor: 'R$ 200.00',
  },
];

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
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('Valor');

  const totalItens = data.length;
  const totalPaginas = Math.ceil(totalItens / itensPorPagina);

  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const indiceFinal = indiceInicial + itensPorPagina;

  const dadosExibidos = data.slice(indiceInicial, indiceFinal);

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

  return (
    <AllContainers>
      <LateralHeader selecionado="lancamentos" />
      
      <Container>
        <Content>
          <Image src={Icon('maisIcon')} />
          <Text>Lançamentos</Text>
          <Text className="filtro">
            Ordenar por:{" "}
            <SelecionarOrdenacao
              value={opcaoSelecionada}
              onChange={(e) => setOpcaoSelecionada(e.target.value)}
            >
              <option value="Valor">Valor</option>
              <option value="Data">Data</option>
              <option value="Categoria">Categoria</option>
            </SelecionarOrdenacao>
          </Text>
        </Content>
        <TableContainer>
          <StyledTable id="machineTable">
            <TableHeader>
              <TableRow>
                <th></th>
                <th>Categoria</th>
                <th>Valor</th>
                <th>Data</th>
                <th>Conta</th>
              </TableRow>
            </TableHeader>
            <tbody>
              {dadosExibidos.map((item, index) => (
                <TableRow key={index}>
                  <th>
                    <Icon name={item.icon} />
                  </th>
                  <td>{item.categoria}</td>
                  <td>{item.valor}</td>
                  <td>{item.data}</td>
                  <td>{item.conta}</td>
                </TableRow>
              ))}
            </tbody>
          </StyledTable>
        </TableContainer>
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
        <ChartContainer1>
          <IconChart src={Icon('iconChart1')} />
          <ChartText>Gastos por categoria</ChartText>
          <PieChart width={700} height={300} margin={{ right: 50, top: 20 }}>
            <Pie
              data={dadosGrafico}
              dataKey="valor"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#FF5733"
              label
            >
              {dadosGrafico.map((entry, index) => (
                <Cell key={index} fill={entry.cor} />
              ))}
            </Pie>
            <Tooltip />
            <Legend iconType="none" />
          </PieChart>
          <table>
            <thead>
              <tr>
                <th colSpan="2" style={{ textAlign: "center" }}>TOP 5 Gastos</th>
              </tr>
            </thead>
            <tbody>
              {data2.map((item, index) => (
                <tr key={index}>
                  <td>{item.categoria}</td>
                  <td className='valor'>{item.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ChartContainer1>
        <ChartContainer2>
          <IconChart src={Icon('iconChart1')} />
          <ChartText>Evolução dos gastos com cartão de crédito</ChartText>
          <LineChart width={350} height={250} data={lineChartData} margin={{ right: 50, top: 80 }}>
            <CartesianGrid />
            <XAxis dataKey="data" tick={false} />
            <YAxis />
            <Tooltip />
            <Legend iconType="none" />
            <Line type="linear" dataKey="valor" stroke="#08632D" />
          </LineChart>
          <div className="info">
            <div className="info-box">
              <p >Limite:<span className='limite'> R$ 300</span></p>
            </div>
            <div className="info-box">
              <p >Gasto: <span className='gasto'>R$ 300</span></p>
            </div>
            <div className="info-box">
              <p>Livre: <span className='livre'>R$ 300</span></p>
            </div>
          </div>
        </ChartContainer2>
      </Container>
    </AllContainers>
  );
}

export default ContainerGeral;
