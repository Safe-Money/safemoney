import styled from "styled-components";
import React, { useState } from 'react';
import { Icon } from "../../visaoGeral/funcoes/icons";
import Swal from 'sweetalert2';
import Container from "./Container";

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
    cursor:pointer;
    width:70%;
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
    font-size:12px;
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
}
.container-lista .data-lista{
    width:20%;
    display:flex;
    // justify-content:center;
    align-items:center;
    padding:0 0 0 1%;

}

.container-lista .conta-lista{
    width:35%;
    display:flex;
    // justify-content:center;
    align-items:center;
    color:#08632D;
    font-weight:700;
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

    /*
      Modal para criar novo plano
  
    */
    const showSweetAlert = () => {
        const styleInput = `
            width: 100%;
            padding: 10px;
            margin: 0;
            box-sizing: border-box;
        `;

        const styleSwal2Input = `
            margin: 0 !important;
        `;


        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success custom-btn",
                cancelButton: "btn btn-danger custom-btn"
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: "Criar Plano",
            text: "You won't be able to revert this!",
            customClass: {
                input: 'swal2-input custom-input',
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            html: `
            <div style="width:90%; display:flex; justify-content:center; flex-direction:column; margin:auto; border-sizing:border-box">
                <div style="display: flex; flex-direction: column; margin-bottom: 10px;">
                    <label style="margin-right:64%" for="nomePlano">Categoria</label>
                    <select style="{styleInput};margin:0.4em 2em 3px" id="categoriaPlano" class="swal2-input">
                    <option value="lazer">Lazer</option>
                    <option value="comida">Comida</option>
                    <option value="medico">Médico</option>
                    </select>
                </div>
          
                <div style="display: flex; flex-direction: column; margin-bottom: 10px;">
                    <label  style="margin-right:43%" style="justify-content:flex-start" for="valorPlano">Valor Planejado</label>
                    <input  style="{styleInput};margin:0.4em 2em 3px" type="number" id="valorPlano" class="swal2-input" placeholder="Digite o valor do plano">
                </div>
                
                <div style="display: flex; flex-direction: column; margin-bottom: 10px;">
                    <label  style="margin-right:53%" style="justify-content:flex-start" for="valorPlano">Total Gasto</label>
                    <input  style="{styleInput};margin:0.4em 2em 3px" type="number" id="totalGasto" class="swal2-input" placeholder="Digite o valor do plano">
                </div>
            </div>
        `,
            // iconHtml:``,
            // imageUrl: Icon('logo'),
            iconHtml: `${iconHtml}`,
            showCancelButton: true,
            confirmButtonText: "Adicionar",
            cancelButtonText: "Cancelar",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const categoriaSelecionada = document.getElementById("categoriaPlano").value;
                const valorSelecionadoString = document.getElementById("valorPlano").value;
                const totalGastoSelecionadoString = document.getElementById("totalGasto").value;

                if (!categoriaSelecionada || !valorSelecionadoString || !totalGastoSelecionadoString) {
                    Swal.fire({
                        title: "Erro",
                        text: "Preencha todos os campos corretamente.",
                        icon: "error",
                    });
                    return; // Impede a criação da nova conta se houver erros
                }

                const valorSelecionado = parseFloat(valorSelecionadoString.replace(',', '.'));
                const totalGastoSelecionado = parseFloat(totalGastoSelecionadoString.replace(',', '.'));


                if (isNaN(valorSelecionado) || isNaN(totalGastoSelecionado) || valorSelecionado < 0 || totalGastoSelecionado < 0) {
                    Swal.fire({
                        title: "Erro",
                        text: "Os valores informados são inválidos.",
                        icon: "error",
                    });
                    return; // Impede a criação da nova conta se houver erros
                }

                if (!isNaN(valorSelecionado) && valorSelecionado >= 0) {
                    const novaConta = {
                        categoria: categoriaSelecionada,
                        valor: `R$${valorSelecionado.toFixed(2)}`, // Format o valor como moeda
                        data: `R$${totalGastoSelecionado.toFixed(2)}`, // Substitua pelo valor real
                        progresso: "70%", // Substitua pelo valor real
                    }
                };
                adicionarConta(categoriaSelecionada, valorSelecionado, totalGastoSelecionado);
                swalWithBootstrapButtons.fire({
                    title: "Criada!",
                    text: "Seu Planejamento foi criado.",
                    icon: "success"
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelada",
                    text: "Sua criação de Planejamento foi cancelada! :)",
                    icon: "error"
                });

            }
        });

        const confirmButton = document.querySelector('.swal2-confirm');
        const cancelButton = document.querySelector('.swal2-cancel');

        if (confirmButton && cancelButton) {
            confirmButton.style.padding = '10px 20px 10px 20px';
            confirmButton.style.borderRadius = '5px';
            confirmButton.style.color = '#fff';
            confirmButton.style.backgroundColor = 'rgba(9, 180, 81, 1)';
            confirmButton.style.marginLeft = '10px';


            cancelButton.style.padding = '10px 20px 10px 20px';
            cancelButton.style.borderRadius = '5px';
            cancelButton.style.color = '#fff';
            cancelButton.style.backgroundColor = 'rgba(255, 0, 0, 1)';
            cancelButton.style.marginRight = '10px';
        }
    };


    const sweetEditar = (index) => {
        setEditingPlan(listaDados[index]);
    
        const { categoria, valor, data } = listaDados[index];

    

        const styleInput = `
        width: 100%;
        padding: 10px;
        margin: 0;
        box-sizing: border-box;
    `;

        const styleSwal2Input = `
    margin: 0 !important;
    `;
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
                confirmButton: "btn btn-success custom-btn",
                cancelButton: "btn btn-danger custom-btn"
            },
            buttonsStyling: false
        });
    
        swalWithBootstrapButtons.fire({
            title: "Editar Plano",
            text: "Você não poderá reverter isso!",
    
            customClass: {
                input: 'swal2-input custom-input',
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            html: `
            <div style="width:90%; display:flex; justify-content:center; flex-direction:column; margin:auto; border-sizing:border-box">
                <div style="display: flex; flex-direction: column; margin-bottom: 10px;">
                    <label style="margin-right:64%" for="nomePlano">Categoria</label>
                    <select style="{styleInput};margin:0.4em 2em 3px" id="categoriaPlano" class="swal2-input" >
                    <option value="lazer" ${categoria === 'lazer' ? 'selected' : ''}>Lazer</option>
                    <option value="comida" ${categoria === 'comida' ? 'selected' : ''}>Comida</option>
                    <option value="medico" ${categoria === 'medico' ? 'selected' : ''}>Médico</option>
                    </select>
                </div>
          
                <div style="display: flex; flex-direction: column; margin-bottom: 10px;">
                    <label  style="margin-right:43%" style="justify-content:flex-start" for="valorPlano">Valor Planejado</label>
                    <input  style="{styleInput};margin:0.4em 2em 3px" type="number" id="valorPlano" class="swal2-input" value="${parseFloat(valor.replace('R$', ''))}" placeholder="Digite o valor do plano">
                </div>
                
                <div style="display: flex; flex-direction: column; margin-bottom: 10px;">
                    <label  style="margin-right:53%" style="justify-content:flex-start" for="valorPlano">Total Gasto</label>
                    <input  style="{styleInput};margin:0.4em 2em 3px" type="number" id="totalGasto" class="swal2-input" 
                    value="${parseFloat(data.replace('R$', ''))}" placeholder="Digite o valor do plano">
                </div>
            </div>
        `,
        iconHtml: `${iconHtml}`,
            showCancelButton: true,
            confirmButtonText: "Alterar",
            cancelButtonText: "Cancelar",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const categoriaSelecionada = document.getElementById("categoriaPlano").value;
                const valorSelecionadoString = document.getElementById("valorPlano").value;
                const totalGastoSelecionadoString = document.getElementById("totalGasto").value;

                if (!categoriaSelecionada || !valorSelecionadoString || !totalGastoSelecionadoString) {
                    Swal.fire({
                        title: "Erro",
                        text: "Preencha todos os campos corretamente.",
                        icon: "error",
                    });
                    return; // Impede a criação da nova conta se houver erros
                }

                const valorSelecionado = parseFloat(valorSelecionadoString.replace(',', '.'));
                const totalGastoSelecionado = parseFloat(totalGastoSelecionadoString.replace(',', '.'));


                if (isNaN(valorSelecionado) || isNaN(totalGastoSelecionado) || valorSelecionado < 0 || totalGastoSelecionado < 0) {
                    Swal.fire({
                        title: "Erro",
                        text: "Os valores informados são inválidos.",
                        icon: "error",
                    });
                    return; // Impede a criação da nova conta se houver erros
                }

                const progresso = (valorSelecionado !== 0 && totalGastoSelecionado !== 0) ? ((totalGastoSelecionado / valorSelecionado) * 100).toFixed(2) + "%" : "0%";

                const updatedList = listaDados.map((conta, i) => {
                    if (i === index) {
                        console.log(progresso);
                        return {
                            ...conta,
                            categoria: categoriaSelecionada,
                            valor: `R$${valorSelecionado.toFixed(2)}`,
                            data: `R$${totalGastoSelecionado.toFixed(2)}`,
                            progresso: 2,
                        };
                    }
                    return conta;
                });
                
        
                setListaDados(updatedList);
                swalWithBootstrapButtons.fire({
                    title: "Atualizado!",
                    text: "Seu planejamento foi atualizado.",
                    icon: "success"
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelada",
                    text: "A edição do planejamento foi cancelada! :)",
                    icon: "error"
                });
            }
        });

        const confirmButton = document.querySelector('.swal2-confirm');
        const cancelButton = document.querySelector('.swal2-cancel');

        if (confirmButton && cancelButton) {
            confirmButton.style.padding = '10px 20px 10px 20px';
            confirmButton.style.borderRadius = '5px';
            confirmButton.style.color = '#fff';
            confirmButton.style.backgroundColor = 'rgba(9, 180, 81, 1)';
            confirmButton.style.marginLeft = '10px';


            cancelButton.style.padding = '10px 20px 10px 20px';
            cancelButton.style.borderRadius = '5px';
            cancelButton.style.color = '#fff';
            cancelButton.style.backgroundColor = 'rgba(255, 0, 0, 1)';
            cancelButton.style.marginRight = '10px';
        }
    };

    /*
    Modal para excluir plano
    */
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
                setListaDados((prevLista) => {
                    const novaLista = [...prevLista];
                    novaLista.splice(index, 1);
                    return novaLista;
                });

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
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
            sweetEditar={() => sweetEditar(index)}
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

                            <span onClick={() => changeMonth(1)}>
                                <svg width="59" height="23" viewBox="0 0 59 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47.712 20.5625L56.9932 11.2813L47.712 2" stroke="#08632D" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 11.2813L56.7334 11.2812" stroke="#08632D" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>

                        <div className="Plano" >
                            <div className="cardPlano" onClick={showSweetAlert}>
                                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.21289 5.5H7.78828" stroke="#FDFDFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 7.28767V3.71228" stroke="#FDFDFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.65972 9.96924H7.34126C9.57588 9.96924 10.4697 9.07539 10.4697 6.84077V4.15923C10.4697 1.92461 9.57588 1.03076 7.34126 1.03076H4.65972C2.4251 1.03076 1.53125 1.92461 1.53125 4.15923V6.84077C1.53125 9.07539 2.4251 9.96924 4.65972 9.96924Z" stroke="#FDFDFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Novo Plano
                            </div>
                        </div>
                    </MesPlano>

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
