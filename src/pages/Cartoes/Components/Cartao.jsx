import React from 'react';
import LateralHeader from '../../visaoGeral/Componentes/LateralHeader';
import styled from "styled-components";
import { Icon } from '../../visaoGeral/funcoes/icons';
import Swal from 'sweetalert2';


const AllContainers = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: none;
  justify-content: center;
  align-items: center;
  background-color: #DBE7E0;

  .container {
    width: 80vw;
  }

  * {
    box-sizing: border-box;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 23vw;
  }
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

const BotaoSuperiorDireito = styled.button`
  margin-top: 1.2%;
  margin-right: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: #d0112b;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  color: #fdfdfd;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
  display:flex;
  align-items: center;

  &:hover {
    background-color: #b7112b;
  }

  svg {
    margin-right: 5px;
  }
`;

const CardGeralCard = styled.div`
display: flex;
height: 82vh;
flex-direction:column;
overflow: auto;
width:40vw;
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
  height:100px; 
  border-radius: 6px; 
}
`;


const CardContainer = styled.div`
 
  margin-left: 3%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 95%;
  max-height: 400px; 
  border-bottom: 1.5px solid #ddd; 
  padding: 12px;
  background-color: #fff;
  margin-bottom:-10px;
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
  margin-left: 10px;
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
  height: 79vh;
  flex-direction: column;
  overflow: auto;
  width: 40.5vw;
  margin-left: 10px;
  margin-top: 20px;
  padding:30px;

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
    height:100px; 
    border-radius: 6px; 
  }
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  color: #000;
  

  thead{
    font-family: Montserrat;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal
  }

  tbody{
    font-family: Montserrat;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal
  }

  img{
    width:20px;
  }

  

;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  text-align: center;

`;

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  text-align: center;

`;


const Wrapper = styled.div`
  display: flex;
`;
const TituloContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
`;

const TituloCardCategoria = styled.h2`
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  margin-bottom: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;


  .setaR{
    border: none;
    background: transparent;
    cursor: pointer;
    position: relative;
    left: 70px; 
  }

  .setaL{
    border: none;
    background: transparent;
    cursor: pointer;
    position: relative;
    right: 70px; 
  }


`;

function CartoesGeral() {
  const cartoes = [
    { logo: 'visaIcon', title: 'Cartão do Brad', sub: 'Vinculado a Bradesco', fatura: 'R$2500', limite: '$5000', vencimento: '16/01', fechamento: '15/01' },
    { logo: 'eloIcon', title: 'Cartão do Brad', sub: 'Vinculado a Bradesco', fatura: 'R$2500', limite: '$5000', vencimento: '16/01', fechamento: '15/01' },
    { logo: 'masterIcon', title: 'Cartão do Brad', sub: 'Vinculado a Bradesco', fatura: 'R$2500', limite: '$5000', vencimento: '16/01', fechamento: '15/01' },
    { logo: 'visaIcon', title: 'Cartão do Brad', sub: 'Vinculado a Bradesco', fatura: 'R$2500', limite: '$5000', vencimento: '16/01', fechamento: '15/01' },
    { logo: 'visaIcon', title: 'Cartão do Brad', sub: 'Vinculado a Bradesco', fatura: 'R$2500', limite: '$5000', vencimento: '16/01', fechamento: '15/01' },

  ];

  const dadosTabela = [
    { icone: 'iconPrato', descricao: 'Descrição 1', valor: '$100', data: '01/01/2023' },
    { icone: 'iconPrato', descricao: 'Descrição 2', valor: '$150', data: '05/01/2023' },
    { icone: 'iconPrato', descricao: 'Descrição 2', valor: '$150', data: '05/01/2023' },
    { icone: 'iconPrato', descricao: 'Descrição 2', valor: '$150', data: '05/01/2023' },
    { icone: 'iconPrato', descricao: 'Descrição 2', valor: '$150', data: '05/01/2023' },
    { icone: 'iconPrato', descricao: 'Descrição 2', valor: '$150', data: '05/01/2023' },
    { icone: 'iconPrato', descricao: 'Descrição 2', valor: '$150', data: '05/01/2023' },    
  ];



  return (
    <>
      <AllContainers>
      <LateralHeader selecionado="geral" />
        <Container>
          <Content>
            <Image src={Icon('cardIcon')} />
            <Text>Cartões</Text>
          </Content>


          <BotaoSuperiorDireito onClick={() => Swal.fire({
        title: 'Você tem certeza?',
        text: 'Esta ação não pode ser desfeita.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sim, continuar!',
        cancelButtonText: 'Não, cancelar!',
        
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Confirmado!', 'Sua ação foi bem-sucedida.', 'success');
        } else if (result.isDismissed === Swal.DismissReason.cancel) {
          Swal.fire('Cancelado', 'Sua ação foi cancelada.', 'error');
        }
      })}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 12 11" fill="none">
              <path d="M4.21289 5.5H7.78828" stroke="#FDFDFD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 7.28755V3.71216" stroke="#FDFDFD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4.65972 9.96924H7.34126C9.57588 9.96924 10.4697 9.07539 10.4697 6.84077V4.15923C10.4697 1.92461 9.57588 1.03076 7.34126 1.03076H4.65972C2.4251 1.03076 1.53125 1.92461 1.53125 4.15923V6.84077C1.53125 9.07539 2.4251 9.96924 4.65972 9.96924Z" stroke="#FDFDFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Remover Cartão
          </BotaoSuperiorDireito>
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
                    <path d="M4.21289 5.5H7.78828" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 7.28755V3.71216" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.65972 9.96924H7.34126C9.57588 9.96924 10.4697 9.07539 10.4697 6.84077V4.15923C10.4697 1.92461 9.57588 1.03076 7.34126 1.03076H4.65972C2.4251 1.03076 1.53125 1.92461 1.53125 4.15923V6.84077C1.53125 9.07539 2.4251 9.96924 4.65972 9.96924Z" stroke="#FDFDFD" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Adicionar fatura
                </CardButton>
              </CardInfo>
              <CardDetails>
                <CardFatura>Fatura: {cartao.fatura}</CardFatura>
                <CardLimite>Limite: {cartao.limite}</CardLimite>
              </CardDetails>
              <ProgressBarWrapper>
                <ProgressBar>
                  <ProgressFill />
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
                <button className='setaL'  onClick={() => alert("Botão Clicado!")}> <img src={Icon('seta22')}  alt="Seta" /></button>
                Fatura - Novembro 
                <button className='setaR'> <img src={Icon('seta33')}  alt="Seta" /></button></TituloCardCategoria>
             
            </TituloContainer>
       <Table>
          <thead>
            <TableRow>
              <TableCell>Ícone</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </thead>
          <tbody>
            {dadosTabela.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img src={Icon(item.icone)} alt="Ícone" />
                </TableCell>
                <TableCell>{item.descricao}</TableCell>
                <TableCell>{item.valor}</TableCell>
                <TableCell>{item.data}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
        
       </CardCategoria>
          </Wrapper>
        </Container>
      </AllContainers>
    </>
  );
}

export default CartoesGeral;
