import React, { useState, useEffect } from 'react';
import LateralHeader from '../../visaoGeral/Componentes/LateralHeader';
import styled from "styled-components";
import { Icon } from '../../visaoGeral/funcoes/icons';
import Swal from 'sweetalert2';
import api from '../../../api';
import ModalFatura from "../Components/ModalFatura";
import poupancaImg from '../../../assets/poupanca.png';
import saudeImg from '../../../assets/medico.png';
import vesteImg from '../../../assets/vestuario.png';
import petImg from '../../../assets/pet.png';
import alimentacaoImg from '../../../assets/restaurante.png';
import carroImg from '../../../assets/transporte.png';
import gymImg from '../../../assets/gym.png';
import viagemImg from '../../../assets/viagem.png';
import lazerImg from '../../../assets/lazer.png';


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

  .botaoSuperiorDireito.disabled {
    opacity: 0.5; /* Opacidade reduzida */
    /* Ou ajuste a cor do texto para torná-lo mais claro */
    /* color: #999; */
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
  width: 100%;
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
cursor: pointer;
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

  div{
    display: flex;
    flex-direction: column;
    margin-top:10px;
   
  }


  }
`;

const CardTitle = styled.span`  
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CardSub = styled.span`  
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CardLogo = styled.img`
  width: 37px; 
  height: 37px;
  margin-right: 15px;
  
`;

const CardDetails = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .div1{
    display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 120px;
  }
`;

const CardDetail = styled.span`
  font-size: 11px;

  &.fatura-limite {
    display: flex;
    flex-direction: column;
    margin: 0; 
  }


  
 
`;

const CardFatura = styled(CardDetail)`
  margin-right: 1px;  
`;

const CardLimite = styled(CardDetail)`
  margin-right: 215px;  
`;

const ProgressBarWrapper = styled.div`
  margin-top: 8px;
`;

const CardDates = styled.div`
  display: flex; 
  margin-top: 25px; 
  gap:10px;

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

  button
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
  // position:absolute;
  // right:0;
  margin-right:5%;

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
  width:100%;
  justify-content: space-between;
  // position: relative;

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
    cursor: pointer; 
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

const CartoesGeral = () => {
  const [cartoes, setCartoes] = useState([]);
  const [progressos, setProgressos] = useState([]);
  const [dadosTabela, setDadosTabela] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartaoSelecionado, setCartaoSelecionado] = useState(null);
  const [mesAtualIndex, setMesAtualIndex] = useState(11);
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Nenhuma");
  const [isBotaoSuperiorHabilitado, setIsBotaoSuperiorHabilitado] = useState(false);
  const [cartaoClicadoIndex, setCartaoClicadoIndex] = useState(null);

  useEffect(() => {
    setIsBotaoSuperiorHabilitado(cartaoClicadoIndex !== null);
  }, [cartaoClicadoIndex]);
  
  const handleRemoverCartao = () => {
    if (cartaoSelecionado) {
      Swal.fire({
        title: 'Você tem certeza?',
        text: 'Esta ação não pode ser desfeita!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#D0112B',
        cancelButtonColor: '#08632D',
        confirmButtonText: 'Sim, remover!',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          api.delete(`/cartao-credito/${cartaoSelecionado}`)
            .then(response => {
              console.log('Cartão removido com sucesso:', response.data);
              setCartoes(prevCartoes => prevCartoes.filter(cartao => cartao.id !== cartaoSelecionado));
              Swal.fire({
                title: "Excluído!",
                text: "Cartão excluído com êxito!",
                icon: "success"
            })
              
            })
            .catch(error => {
              console.error('Erro ao remover cartão:', error);
            });
        }
      });
    }
  };
  
  useEffect(() => {
    const userId = sessionStorage.getItem('id');


  

    if (userId) {
      api.get(`/cartao-credito/listar-cartoes/${userId}`)
        .then(response => {
          console.log('Resposta da API (Cartões):', response.data);
          setCartoes(Array.isArray(response.data) ? response.data : []);
        })
        .catch(error => {
          console.error('Erro ao buscar dados da API (Cartões):', error);
        });
    } else {
      console.error('ID do usuário não encontrado na sessionStorage.');
    }
  }, []);

  useEffect(() => {
    if (cartaoSelecionado) {
      api.get(`/cartao-credito/listar-fatura/${cartaoSelecionado}/${mesAtualIndex + 1}`)
        .then(responseFatura => {
          console.log('Resposta da API (Fatura):', responseFatura.data);
          setDadosTabela(Array.isArray(responseFatura.data) ? responseFatura.data : []);
        })
        .catch(error => {
          console.error('Erro ao buscar dados da API (Fatura):', error);
        });
    }
  }, [cartaoSelecionado, mesAtualIndex]);

  const handleCartaoClick = (idDoCartao, index) => {
    setCartaoSelecionado(idDoCartao);
    setCartaoClicadoIndex(index); 
  };
  const handleMesChange = (increment) => {

    setMesAtualIndex((prevIndex) => {
      let newIndex = prevIndex + increment;


      if (newIndex < 0) {
        newIndex = meses.length - 1;
      } else if (newIndex >= meses.length) {
        newIndex = 0;
      }

      return newIndex;
    });
  };

  const getCardIcon = (bandeira) => {
    switch (bandeira) {
      case 'Visa':
        return Icon('visaIcon');
      case 'Master':
        return Icon('masterIcon');
      case 'Elo':
        return Icon('eloIcon');
      case 'Bradesco':
        return Icon('bradescoIcon');
      default:
        return Icon('defaultIcon');
    }
  };

  const handleCartaoSelect = (cartao) => {
    setSelectedCartao(cartao);
    setCartaoSelecionado(cartao.id);
  };

  const [cartaoOrigem, setCartaoOrigem] = useState("")


  return (
    <>
      <AllContainers>
        <LateralHeader selecionado="cartoes" />
        <Container>

          <Content>
          <button
              className={`botaoSuperiorDireito ${isBotaoSuperiorHabilitado ? '' : 'disabled'}`}
              onClick={() => {
                if (isBotaoSuperiorHabilitado) {
                  handleRemoverCartao();  
                }
              }}
              disabled={!isBotaoSuperiorHabilitado}
            >
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
             <CardContainer
             key={index}
             onClick={() => handleCartaoClick(cartao.id, index)}
             onSelectCartao={() => handleCartaoSelect(cartao)}
             className={index === cartaoClicadoIndex ? 'cartao-selecionado' : ''}
           >
               <CardInfo>
                    <CardLogo src={getCardIcon(cartao.bandeira)} />
                    <div>
                    <CardTitle>{cartao.nome}</CardTitle>
                    <CardSub>{cartao.bandeira}</CardSub>
                    </div>
                    <CardButton onClick={() => {setIsModalOpen(true) 
                    setCartaoOrigem(cartao)}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                        <path d="M4.21289 5.5H7.78828" stroke="#FDFDFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 7.28755V3.71216" stroke="#FDFDFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.65972 9.96924H7.34126C9.57588 9.96924 10.4697 9.07539 10.4697 6.84077V4.15923C10.4697 1.92461 9.57588 1.03076 7.34126 1.03076H4.65972C2.4251 1.03076 1.53125 1.92461 1.53125 4.15923V6.84077C1.53125 9.07539 2.4251 9.96924 4.65972 9.96924Z" stroke="#FDFDFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Adicionar fatura
                    </CardButton>
                  </CardInfo>
                  
                  <CardDetails>
                    <div className='div1'>
                    <CardFatura>Fatura R$: {cartao.faturaValor.toFixed(2)}</CardFatura>
                    <CardLimite>Limite R$: {cartao.limite.toFixed(2)}</CardLimite>
                    </div>
                  </CardDetails>
                  <ProgressBarWrapper>
                    <ProgressBar>
                      <ProgressFill style={{ width: `${(cartao.faturaValor / cartao.limite) * 100}%` }} />
                    </ProgressBar>
                  </ProgressBarWrapper>
                  
                    <CardDates>                    
                  <CardDetail >Fechamento: <span className='negri'>{cartao.fechamento}</span></CardDetail>
                    <CardDetail className='fechamento'>Vencimento: <span className='negri'>{cartao.vencimento}</span></CardDetail>
                   </CardDates>
                  
                </CardContainer>
              ))}
            </CardGeralCard>

            <CardCategoria>
              <TituloContainer>
                <TituloCardCategoria>
                  <button className='setaL' onClick={() => handleMesChange(-1)}>
                    <img src={Icon('seta22')} alt="Seta" />
                  </button>
                  Fatura - {meses[mesAtualIndex]}
                  <button className='setaR' onClick={() => handleMesChange(1)}>
                    <img src={Icon('seta33')} alt="Seta" />
                  </button>
                </TituloCardCategoria>
              </TituloContainer>
              <TableContainer>
                <Table>
                  <thead>
                    <TableRow>
                      <th>Ícone</th>
                      <th>Nome</th>
                      <th>Valor</th>
                      <th>Data</th>
                    </TableRow>
                  </thead>
                  <tbody>
                    {dadosTabela.map((item, index) => {

                      return (
                        <TableRow key={index}>
                          <TableCell>
                            {item.categoria.nome === 'economia' && (
                              <img src={poupancaImg} alt="Economia" />
                            )}
                            {item.categoria.nome === 'transporte' && (
                              <img src={carroImg} alt='Transporte' />
                            )}
                            {item.categoria.nome === 'vestuario' && (
                              <img src={vesteImg} alt='Vestuario' />
                            )}
                             {item.categoria.nome === 'alimentacao' && (
                              <img src={alimentacaoImg} alt='Alimento' />
                            )}
                             {item.categoria.nome === 'saude' && (
                              <img src={saudeImg} alt='Saúde' />
                            )} 
                            {item.categoria.nome === 'gym' && (
                              <img src={gymImg} alt='Gym' />
                            )}
                             {item.categoria.nome === 'pet' && (
                              <img src={petImg} alt='PEt' />
                            )}
                            {item.categoria.nome === 'lazer' && (
                              <img src={lazerImg} alt='Lazer' />
                            )}


                            
                          </TableCell>
                          <td>{item.nome}</td>
                          <td>R$ {item.valor}</td>
                          <td>{item.data}</td>
                        </TableRow>
                      );
                    })}

                  </tbody>
                </Table>
              </TableContainer>
            </CardCategoria>
            {isModalOpen && <ModalFatura cartaoOrigem={cartaoOrigem} onClose={() => setIsModalOpen(false)} />}
          </Wrapper>


        </Container>
      </AllContainers>
    </>
  );
}


export default CartoesGeral;