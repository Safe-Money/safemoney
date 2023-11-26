import React, { useState, useEffect } from 'react';
import LateralHeader from '../../visaoGeral/Componentes/LateralHeader';
import styled from "styled-components";
import { Icon } from '../../visaoGeral/funcoes/icons';
import Swal from 'sweetalert2';
import axios from 'axios';

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

  @media (max-width: 1200px) {
    width: 90%;
  }

  
  @media (max-width: 768px) {
    width: 95%;
  }

`;

const AllContainers = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: none;
  justify-content: center;
  align-items: center;
  background-color: #DBE7E0;

  .container {
    width: 80vw;
    max-width: 1200px;
  }

  * {
    box-sizing: border-box;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 1200px;
  }

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;



const Content = styled.div`
  margin-top: 3%;
  margin-left: 3%;
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #FDFDFD;
  font-family: Montserrat;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  .botaoSuperiorDireito {
    border-radius: 10px;
    background: #D0112B;
    color: white;
    border: none;
    cursor: pointer;
    font-family: Montserrat;
    font-size: 11px;
    padding: 8px;
    font-weight: 500;
    position: absolute;
    top: 5%;
    right: 3%;
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
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
const CardGeralCard = styled.div`
  display: flex;
  height: 82vh;
  flex-direction: column;
  overflow: auto;
  width: 40vw;
  max-width: 600px;
  margin-right: 20px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #08632D;
    height: 5px;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #E4E4E4;
    height: 100px;
    margin-right: 100px;
    border-radius: 6px;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  @media (max-width: 1200px) {
    width: 50vw;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
`;


const CardContainer = styled.div`
 
  margin-left: auto;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 95%;
  max-height: 400px; 
  border-bottom: 1px solid #ddd; 
  padding: 12px;
  background-color: #fff;
  margin-bottom:-10px;
  margin-right:3px;
`;
const CardInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CardTitle = styled.span`
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CardSub = styled.span`
  position: relative;
  top: 20px;
  right: 134px;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CardLogo = styled.img`
  width: 37px; 
  height: 37px;
  margin-right: 25px;
  
`;

const CardDetails = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardDetail = styled.span`
  font-size: 11px;

  &.fatura-limite {
    display: flex;
    flex-direction: column;
    margin: 0; 
  }

  &:nth-child(2) {
    margin-left: 10px;  
  }
`;

const CardFatura = styled(CardDetail)`
  margin-right: 1px;  
`;

const CardLimite = styled(CardDetail)`
  margin-right: 201px;  
`;

const ProgressBarWrapper = styled.div`
  margin-top: 8px;
`;

const CardDates = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px; 

  .negri{
    font-weight:900;
  }
`;

const ProgressBar = styled.div`
  width: 60%;
  height: 8px;
  border-radius: 4px;
  background-color: #E2E8F0;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: 50%; 
  border-radius: 4px;
  background-color: #98D389;
`;

const CardButton = styled.button`
  align-self: flex-end;  
  margin-left: auto;
  color: white;  
  display:flex;
  align-items:center;
  border-radius: 10px;
  background: #08632D;
  border: none;
  cursor: pointer;
  font-family: Montserrat;
  font-size: 12px;
  padding:8px;
  height: 29px;
  &:hover {
    background-color: #083803;
  }

  svg{
    margin-right:5px;
  }
`;


const CardCategoria = styled.div`
  border-radius: 5px;
  border: 1px solid #FDFDFD;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 78vh;
  width: 40vw;
  max-width: 600px;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 20px;
  padding: 30px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #08632D;
    border-radius: 6px;
    box-shadow: inset 0 0 25px px #E4E4E4;
  }

  &::-webkit-scrollbar-track {
    margin-top: 60px;
    margin-bottom: 30px;
    background-color: #E4E4E4;
  }

  & {
    scrollbar-color: #08632D #E4E4E4;
    scrollbar-width: thin;
  }
`;

const TableContainer = styled.div`
  overflow-y: auto;
  padding: 10px;
  margin-top: 10px;
  z-index: 1;
  position: relative; 
  

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #08632D;
    border-radius: 6px;
    box-shadow: inset 0 0 25px px #E4E4E4;
  }

  &::-webkit-scrollbar-track {
    margin-top: 40px;
    margin-bottom: 0px;
    background-color: #E4E4E4;
  }

  & {
    scrollbar-color: #08632D #E4E4E4;
    scrollbar-width: thin;
  }
`;


const Wrapper = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
const TituloContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 

`;

const TituloCardCategoria = styled.h2`
  
  top: 0; 
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;


  button{
    background:transparent;
    border:none;
  }
 
  .setaL {
    margin-right: 20px;  
  }

  .setaR {
    margin-left: 20px;
  }

`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom:20px;


  
`;

const Table = styled.table`
  overflow-y: auto;
  width: 100%;
  border-collapse: collapse;
  color: #000;
  position: relative;

  th {
    position: sticky;
    height:20px;
    background: white;
    z-index: 1;
  }

   img {
    width: 20px;
  }

  thead {
    position: sticky;
    font-size:10px;
    top: 0;
    z-index: 1;
    background-color: #fff;
    max-height: 50px;
    box-shadow: 0 -8px 0 8px white;
  }

  tbody {
    font-family: Montserrat;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    z-index: 0;
    margin-top:15px;
    position: relative;
    max-height: calc(80vh - 50px);
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  text-align: center;
  
`;

const TableCell = styled.td`
  padding: 10px;
`;



function CartoesGeral() {
  const [cartoes, setCartoes] = useState([]);
  const [progressos, setProgressos] = useState([]);
  const [dadosTabela, setDadosTabela] = useState([]);


  const fetchData = async () => {
    try {
      console.log('Chamando fetchCartoes...');
      await fetchCartoes();

      console.log('Chamando endpoint dadostabela...');
      const responseTabela = await axios.get('http://localhost:3001/dadostabela');
      const dataTabela = responseTabela.data;
      console.log('Dados do endpoint dadostabela:', dataTabela);


      setDadosTabela(dataTabela);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };






  const fetchCartoes = async () => {
    try {
      const response = await axios.get('http://localhost:3001/cartoes');

      const data = response.data;


      if (Array.isArray(data) && data.length > 0) {

        const primeiroCartao = data[0];


        if ('fatura' in primeiroCartao && 'limite' in primeiroCartao) {

          setCartoes(data);

        } else {
          console.error('Propriedades necessárias não encontradas no objeto da API:', primeiroCartao);
        }
      } else {
        console.error('Formato de resposta da API inválido:', data);
      }
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  useEffect(() => {
    const fetchDataAndCartoes = async () => {
      await fetchCartoes();
      await fetchData();
      atualizarProgressos();
    };

    fetchDataAndCartoes();
  }, []);




  const calcularPorcentagem = (fatura, limite) => {
    return (fatura / limite) * 100;
  };

  const atualizarProgressos = () => {
    const novosProgressos = cartoes.map((cartao) => {
      return calcularPorcentagem(cartao.fatura, cartao.limite);
    });
    setProgressos(novosProgressos);
  };


  return (
    <>
      <AllContainers>
        <LateralHeader selecionado="cartoes" />
        <Container>
          <Content>
            <button className="botaoSuperiorDireito" onClick={() => alert("Botão Superior Direito Clicado!")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                <path d="M4.21289 5.5H7.78828" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 7.28755V3.71216" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.65972 9.96924H7.34126C9.57588 9.96924 10.4697 9.07539 10.4697 6.84077V4.15923C10.4697 1.92461 9.57588 1.03076 7.34126 1.03076H4.65972C2.4251 1.03076 1.53125 1.92461 1.53125 4.15923V6.84077C1.53125 9.07539 2.4251 9.96924 4.65972 9.96924Z" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Remover cartão
            </button>
            <Image src={Icon('cardIcon')} />
            <Text>Cartões</Text>
          </Content>


          <Wrapper>
            <CardGeralCard>
              {cartoes.map((cartao, index) => (
                <CardContainer key={index}>
                  <CardInfo>
                    <CardLogo src={Icon(cartao.logo)} />
                    <CardTitle>{cartao.title}</CardTitle>
                    <CardSub>{cartao.sub}</CardSub>
                    <CardButton>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                        <path d="M4.21289 5.5H7.78828" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 7.28755V3.71216" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.65972 9.96924H7.34126C9.57588 9.96924 10.4697 9.07539 10.4697 6.84077V4.15923C10.4697 1.92461 9.57588 1.03076 7.34126 1.03076H4.65972C2.4251 1.03076 1.53125 1.92461 1.53125 4.15923V6.84077C1.53125 9.07539 2.4251 9.96924 4.65972 9.96924Z" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Adicionar fatura
                    </CardButton>
                  </CardInfo>
                  <CardDetails>
                    <CardFatura>Fatura R$: {cartao.fatura}</CardFatura>
                    <CardLimite>Limite R$: {cartao.limite}</CardLimite>
                  </CardDetails>
                  <ProgressBarWrapper>
                    <ProgressBar>
                      <ProgressFill style={{ width: `${progressos[index] || 0}%` }} />
                    </ProgressBar>
                  </ProgressBarWrapper>
                  <CardDates>
                    <CardDetail>Vencimento: <span className='negri'>{cartao.vencimento}</span></CardDetail>
                    <CardDetail>Fechamento: <span className='negri'>{cartao.fechamento}</span></CardDetail>
                  </CardDates>
                </CardContainer>
              ))}
            </CardGeralCard>

            <CardCategoria>
            <TituloContainer>
            <TituloCardCategoria>
  <button className='setaL' onClick={() => alert("Botão Clicado!")}>
    <img src={Icon('seta22')} alt="Seta" />
  </button>
  Fatura - Novembro
  <button className='setaR'>
    <img src={Icon('seta33')} alt="Seta" />
  </button>
</TituloCardCategoria>
            </TituloContainer>
            <TableContainer>
              <Table>
                <thead>
                  <TableRow>
                  <th>Ícone</th>
                  <th>Descrição</th>
                  <th>Valor</th>
                  <th>Data</th>
                  </TableRow>
                </thead>
                <tbody>
                  {dadosTabela.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <img src={Icon(item.icone)} alt="Ícone" />
                      </TableCell>
                      <td>{item.descricao}</td>
                      <td>{item.valor}</td>
                      <td>{item.data}</td>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </CardCategoria>
          </Wrapper>
   

        </Container>
      </AllContainers>
    </>
  );
}


export default CartoesGeral;