import styled from "styled-components";
import { Icon } from "../../visaoGeral/funcoes/icons";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";



const ContainerConta = styled.div`
display:flex;
width:100%;
height:100%;
justify-content:center;
align-items:center;
background-color:white;
border-radius:10px;
padding:1% 3%;
flex-direction:column;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);

.titulo-removerConta {
    display: flex;
    align-items: center;
    font-weight: 700;
    height: 30%;
    width: 100%;
    font-size:18px;
    justify-content:space-between;

  }
  
.titulo-icone {
    display: flex;
    align-items: center;
    font-weight: 700;
    height: 10%;
    width: 85%;
    font-size:15px;

  }

  .titulo-icone img {
    margin-right: 10px;
    width:3%;
  }

  .removerConta{
    display:flex;
    justify-content:center;
    align-items:end;
    font-size: 10px;
    padding: 10px;
    border-radius:10px;
    background-color:rgba(208, 17, 43, 1);
    color:rgba(253, 253, 253, 1);
    cursor:pointer;

  }
  .removerConta svg{
    margin-right:10px;
    padding: 0 0 1px 0;
  }
`

const Conteudo = styled.div`
height:70%;
width:100%;
display:flex;
`

const TextoNumero = styled.div`
display:flex;
width:20%;
height:100%;
flex-direction:column;
justify-content:space-between;
font-size:16px;

.numeros{
    font-weight:700;
}

.texto{
    margin-top:10px;
}
`

function conta() {
    /*
    Modal para excluir plano
    */
   const navigate = useNavigate();
   const excluirConta = (index) => {
       
        
        console.log(index);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                    navigate("/visao-geral")


                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    const nomeConta = sessionStorage.NOMEBANCO;

    // Converte todo o nome para minúsculas
    const nomeContaMinusculo = nomeConta.toLowerCase();
    
    // Gera o nome do ícone com o nome todo em minúsculas
    const nomeIcone = `${nomeContaMinusculo}Icon`;
    
    // Obtém o caminho do ícone usando a função Icon (supondo que você já a tenha definida)
    const caminhoIcone = Icon(nomeIcone);
    console.log(caminhoIcone);
        return (
    
            <ContainerConta>
                <div className="titulo-removerConta">
                    <div className="titulo-icone">
                    <img src={caminhoIcone} alt="Account Icon" />

                    {sessionStorage.NOMEBANCO}
                </div>
                <div className="removerConta" onClick={excluirConta
                }>
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.21289 5.5H7.78828" stroke="#FDFDFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 7.28767V3.71228" stroke="#FDFDFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.65972 9.96924H7.34126C9.57588 9.96924 10.4697 9.07539 10.4697 6.84077V4.15923C10.4697 1.92461 9.57588 1.03076 7.34126 1.03076H4.65972C2.4251 1.03076 1.53125 1.92461 1.53125 4.15923V6.84077C1.53125 9.07539 2.4251 9.96924 4.65972 9.96924Z" stroke="#FDFDFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    Remover Conta

                </div>

            </div>
            <Conteudo>
                <TextoNumero>
                    <span className="texto">Saldo Geral</span>
                    <span className="numeros">R${sessionStorage.NOMESALDO}</span>
                </TextoNumero>
                <TextoNumero>
                    <span className="texto">Despesas</span>
                    <span className="numeros">R$ 10.000,00</span>
                </TextoNumero>
                <TextoNumero>
                    <span className="texto">Receita</span>
                    <span className="numeros">R$ 10.000,00</span>
                </TextoNumero>
                </Conteudo>

        </ContainerConta>




    )
}


export default conta;

