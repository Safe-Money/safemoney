import styled from "styled-components";
import React, { useState } from 'react';
import { Icon } from "../../visaoGeral/funcoes/icons";
import Swal from 'sweetalert2';
import Container from "./Container";
import ModalEditar from "./ModalEditar";
import ModalCriar from "./ModalCriar";

const LocalTabela = styled.div`
display:flex;
width:100%;
height:100%;
justify-content:space-between;
align-items:flex-end;
`

const TabelaMensal = styled.div`
display:flex;
width:100%;
height:97%;
background-color:white;
border-radius:10px;
justify-content:space-between;
padding:4% 5% 2% 5%;
flex-direction:column;
`

const MesPlano = styled.div`
display:flex;
width:100%;
height:10%;
line-height: normal;
justify-content:flex-end;

.custom-btn {
    padding: 10px;
    color: #fff; /* Cor da letra branca */
    background-color: #08632D; /* Cor de fundo verde */
}

.Mes{
    display:flex;
    justify-content:space-between;
    align-items:center;
    letter-spacing:3px;
    font-size:24px;
    font-weight:500;
    width:30%;
}

.Plano{
    display:flex;
width:40%;
justify-content:center;
align-items:center;
padding:0 0 0 10%;
}

.cardPlano{
display:flex;
justify-content:center;
align-items:end;
font-size: 10px;
padding: 10px;
border-radius:10px;
background-color:#08632D;
color:rgba(253, 253, 253, 1);
cursor:pointer;
}
.cardPlano svg{
margin-right:5px;
padding: 0 0 1px 0;
}

.Mes svg{
    display:flex;
    cursor:pointer;
    width:70%;
}

#svg2{
    display:flex;
    justify-content:flex-end;
}

`

const Lista = styled.div`
display:flex;
width:100%;
height:85%;

.conteudo-lista{
    display:flex;
    width:100%;
    height:90%;
    flex-direction:column; 
    overflow-y:auto;
}

.titulos-categoria{
    display:flex;
    width:93%;
    height:25px;
    font-size:12px;
    font-weight:700;
    margin-bottom:2%;
}
.titulos-categoria .categoria{
    display:flex;
    width:10%;
    // justify-content:center;
}

.titulos-categoria .valor{
    display:flex;
    width:20%;
    // justify-content:center;
}
.titulos-categoria .data{
    display:flex;
    width:20%;
    // justify-content:center;
}

.titulos-categoria .conta{
    display:flex;
    width:35%;
    padding:0 0 0 10%;
    // justify-content:center;
}
.titulos-categoria .acoes{
    display:flex;
    width:15%;
    padding:0 0 0 2%;
    justify-content:center;
}
.container-lista-scroll{
    display:flex;
    width:100%;
    height:100%;
    overflow-x:hidden;
    flex-direction:column;

    overflow-y: scroll;
    scrollbar-width: thin; 
    scrollbar-color: #08632D #FDFDFD; /* Para navegadores Firefox */
    &::-webkit-scrollbar {
        width: 10px; /* Largura da barra de rolagem */
    }
    &::-webkit-scrollbar-thumb {
        background-color: #08632D; /* Cor do polegar da barra de rolagem */
        border-radius: 5px; /* Raio da borda do polegar da barra de rolagem */
    }
    &::-webkit-scrollbar-track {
        background-color: rgba(228, 228, 228, 1);
        border-radius:5px; /* Cor da trilha da barra de rolagem */
    }
}



.container-lista{
    display:flex;
    width:95%;
    height:17%;
    justify-content:center;
    align-items:center;
    // font-size:12px;
    border-bottom: solid 1px #D4D4D4;
    flex-shrink: 0;

}

.container-lista .icone-lista{
    width:10%;
    display:flex;
    // justify-content:center;
    padding:0 0 0 1%;
    align-items:center;
}
.icone-lista img{
    border-radius:50%;
    width:30%;
}

.container-lista .valor-lista{
    width:20%;
    display:flex;
    // justify-content:center;
    align-items:center;
    padding:0 0 0 2%;
    font-size:12px;
}
.container-lista .data-lista{
    width:20%;
    display:flex;
    // justify-content:center;
    align-items:center;
    padding:0 0 0 1%;
    font-size:12px;

}

.container-lista .conta-lista{
    width:35%;
    display:flex;
    // justify-content:center;
    align-items:center;
    color:#08632D;
    font-weight:700;
    font-size:12px;
}
.container-lista .acoes-lista{
    width:15%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 5% 0 5%;
}

.container-lista .acoes-lista img{
    width:40%;
    cursor:pointer;
}

.barra{
    display:flex;
    height:10px;
    width:70%;
    background-color:rgba(226, 232, 240, 1);
    color:#08632D;
    font-weight:700;
    border-radius:10px;
    margin-right:10px;
}

.progressoBarra{
    height:100%;
    width:50%;
    background-color:rgba(152, 211, 137, 1);
    border-radius:10px;
}

`

function Tabela() {
    const months = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];

    const [currentMonth, setCurrentMonth] = useState("AGOSTO");
    const [listaDados, setListaDados] = useState([
        { id: 1, categoria: "lazer", valor: "R$300,00", data: "R$50,00" },
        { id: 2, categoria: "comida", valor: "R$150,00", data: "R$75,00" },
        { id: 3, categoria: "medico", valor: "R$200,00", data: "R$100,00" },
        { id: 4, categoria: "medico", valor: "R$200,00", data: "R$100,00" },
        { id: 5, categoria: "medico", valor: "R$200,00", data: "R$100,00" },
        { id: 6, categoria: "medico", valor: "R$200,00", data: "R$100,00" },
    ]);


    const [selectedItem, setSelectedItem] = useState(null);
    const [editingPlan, setEditingPlan] = useState(null);

    const changeMonth = (increment) => {
        const currentIndex = months.indexOf(currentMonth);
        const newIndex = (currentIndex + increment + months.length) % months.length;
        setCurrentMonth(months[newIndex]);
    };

    const adicionarConta = (categoria, valor, data) => {
        const progresso = ((data / valor) * 100).toFixed(2) + "%";

        const novaConta = {
            id: Date.now(),
            categoria,
            valor: `R$${valor.toFixed(2)}`, // Format the value as currency
            data: `R$${data.toFixed(2)}`,
            progresso: 0,
        };
        setListaDados([...listaDados, novaConta]);
    };



    const iconHtml = `<img src="${Icon('logo')}" style="width:110px" />`;


    const excluirConta = (index) => {
        console.log(index);
        Swal.fire({
            title: "Você tem certeza?",
            text: "Você não vai poder reverter isso!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#D0112B",
            confirmButtonText: "Sim, deletar!",
            confirmButtonColor: "#08632D",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                // Código para deletar a conta aqui
                setListaDados((prevLista) => {
                    const novaLista = [...prevLista];
                    novaLista.splice(index, 1);
                    return novaLista;
                });
    
                Swal.fire({
                    title: "Deletado!",
                    text: "Seu planejamento foi deletado.",
                    icon: "success"
                });
            }
        });
    };
    

  
    

    const [selectedModal, setSelectedModal] = useState(null);

    const openModal = (modalType, selectedItem) => {
        setSelectedItem(selectedItem);
        setSelectedModal(modalType);
    };

    const closeModal = () => {
        setSelectedModal(null);
    };


    const contasRenderizadas = listaDados.map((conta, index) => (
        <Container
        key={index}
        id={`someContainerId${index}`}
        categoria={conta.categoria}
        valor={conta.valor}
        data={conta.data}
        progresso={conta.progresso}
        excluirConta={() => excluirConta(index)}
        sweetEditar={() => openModal('editar', conta)}
    />
    ));


    return (
        <>
            <LocalTabela>
                <TabelaMensal>
                    <MesPlano>
                        <div className="Mes">
                            <span

                                onClick={() => changeMonth(-1)}
                            ><svg width="59" height="23" viewBox="0 0 59 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2812 2L2 11.2812L11.2812 20.5625" stroke="#08632D" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M56.9932 11.2813L2.25977 11.2812" stroke="#08632D" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <p id="textoMes">{currentMonth}</p>

                            <span onClick={() => changeMonth(1)} id="svg2">
                                <svg width="59" height="23" viewBox="0 0 59 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47.712 20.5625L56.9932 11.2813L47.712 2" stroke="#08632D" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 11.2813L56.7334 11.2812" stroke="#08632D" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>

                        <div className="Plano" >      
                            <div className="cardPlano" onClick={() => openModal('criar')}>
                                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.21289 5.5H7.78828" stroke="#FDFDFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 7.28767V3.71228" stroke="#FDFDFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.65972 9.96924H7.34126C9.57588 9.96924 10.4697 9.07539 10.4697 6.84077V4.15923C10.4697 1.92461 9.57588 1.03076 7.34126 1.03076H4.65972C2.4251 1.03076 1.53125 1.92461 1.53125 4.15923V6.84077C1.53125 9.07539 2.4251 9.96924 4.65972 9.96924Z" stroke="#FDFDFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Novo Plano
                            </div>
                        </div>
                    </MesPlano>
                    {selectedModal === 'criar' && <ModalCriar onClose={closeModal} />}

                    <Lista>
                        <div className="conteudo-lista">
                            <div className="titulos-categoria">
                                <div className="categoria">
                                    Categoria
                                </div>

                                <div className="valor">
                                    Valor Planejado
                                </div>
                                <div className="data">
                                    Total Gasto
                                </div>
                                <div className="conta">
                                    Progresso
                                </div>
                                <div className="acoes">
                                    Ações
                                    <img src="" alt="" />
                                </div>

                            </div>
                            <div className="container-lista-scroll">
                                {contasRenderizadas}
                                {/* {<Container categoria="lazer" valor="R$100,00" data="R$50,00" progresso="50%" excluirConta={() => excluirConta(Date.now())} />}
                                {<Container categoria="comida" valor="R$150,00" data="R$75,00" progresso="60%" excluirConta={() => excluirConta(Date.now())} />}
                                {<Container categoria="medico" valor="R$200,00" data="R$100,00" progresso="70%" excluirConta={() => excluirConta(Date.now())} />}
                                {<Container categoria="medico" valor="R$200,00" data="R$100,00" progresso="70%" excluirConta={() => excluirConta(Date.now())} />}
                                {<Container categoria="medico" valor="R$200,00" data="R$100,00" progresso="70%" excluirConta={() => excluirConta(Date.now())} />}
                                {<Container categoria="medico" valor="R$200,00" data="R$100,00" progresso="70%" excluirConta={() => excluirConta(Date.now())} />} */}
                            </div>

                        </div>
                    </Lista>

                </TabelaMensal>
            </LocalTabela>

        </>
    )
}

export default Tabela;
