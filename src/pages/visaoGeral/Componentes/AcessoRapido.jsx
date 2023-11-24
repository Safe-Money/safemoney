import styled from "styled-components";
import { Icon } from "../funcoes/icons";
import Notification from "./Notification";
import Swal from 'sweetalert2';

const ContainerAcessoRapido = styled.div`
display:flex;
height:20%;
width:100%;
border-radius:10px;
padding:20px 10px 20px 10px;
background-color:#FDFDFD;
flex-direction:column;
fill: #FDFDFD;
// filter: drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.15));
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);


.titulo-icone{
    display:flex;
    align-items:center;
    font-weight:700;
    height:10%;
    width:100%;
    margin-bottom:10px;
    font-size:15px;

}
.titulo-icone svg{
    margin-left:10px;
    margin-right:10px;

}

.area-conteudo{
    display:flex;
    height:90%;
}

.area-conteudo .conteudoBloco1{
    display:flex;
    flex-direction:column;
    width:95%;
    height:100%;
    justify-content:space-between;
}

.conteudoBloco1 .box-tree{
    display: flex;
    flex-direction: row; 
    justify-content: space-evenly;
    height:40%;
}

.conteudoBloco1 .box-tree .box{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    margin:5% 0;
    padding:3%;
    width:70vw;
    height:100%;
    font-size:11px;
    cursor:pointer;
}

.box img{
    width:40%;
    margin: 8px 0;
}

.box img:hover{
    opacity:0.7;
    transition:0.3s ease;
}


.number_saldo{
    color:rgba(2, 102, 44, 1);
    font-size:13px;
    font-weight: 600;
}
.number_despesa{
    color:rgba(165, 0, 0, 1);
    font-size:13px;
    font-weight:600;
}
.number_gasto{
    color:rgba(57, 41, 156, 1);
    font-size:13px;
    font-weight:600;
}

.tituloResumo{
    font-weight:700;
    margin-left:7%;
    margin-top:5%;
    bottom:0;
}

.area-conteudo .conteudoBloco2{
    display:flex;
    width:30%;
    justify-content:end;
}
`


function AcessoRapido() {
    const iconHtml = `<img src="${Icon('logo')}" style="width:110px" />`;

    const showSweetDespesas = () => {
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
            title: "Criar Despesa",
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

        // const modal = document.querySelector('.swal2-modal');
        const confirmButton = document.querySelector('.swal2-confirm');
        const cancelButton = document.querySelector('.swal2-cancel');
        const localButton = document.querySelector('.swal2-actions');

        // modal.style.width = '700px';

        if (confirmButton && cancelButton) {
            confirmButton.style.padding = '10px 20px 10px 20px';
            confirmButton.style.borderRadius = '5px';
            confirmButton.style.border = 'none';
            confirmButton.style.color = '#fff';
            confirmButton.style.backgroundColor = 'rgba(9, 180, 81, 1)';
            confirmButton.style.marginLeft = '10px';
            localButton.style.width='70%';


            cancelButton.style.padding = '10px 20px 10px 20px';
            cancelButton.style.borderRadius = '5px';
            cancelButton.style.border = 'none';
            cancelButton.style.color = '#fff';
            cancelButton.style.backgroundColor = 'rgba(255, 0, 0, 1)';
            cancelButton.style.marginRight = '10px';
        }
    };
    const showSweetReceita = () => {
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
            title: "Criar Despesa",
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
            confirmButton.style.border = 'none';
            confirmButton.style.color = '#fff';
            confirmButton.style.backgroundColor = 'rgba(9, 180, 81, 1)';
            confirmButton.style.marginLeft = '10px';


            cancelButton.style.padding = '10px 20px 10px 20px';
            cancelButton.style.borderRadius = '5px';
            cancelButton.style.border = 'none';
            cancelButton.style.color = '#fff';
            cancelButton.style.backgroundColor = 'rgba(255, 0, 0, 1)';
            cancelButton.style.marginRight = '10px';
        }
    };
    const showSweetTransition = () => {
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
            title: "Criar Despesa",
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
            confirmButton.style.border = 'none';
            confirmButton.style.color = '#fff';
            confirmButton.style.backgroundColor = 'rgba(9, 180, 81, 1)';
            confirmButton.style.marginLeft = '10px';


            cancelButton.style.padding = '10px 20px 10px 20px';
            cancelButton.style.borderRadius = '5px';
            cancelButton.style.border = 'none';
            cancelButton.style.color = '#fff';
            cancelButton.style.backgroundColor = 'rgba(255, 0, 0, 1)';
            cancelButton.style.marginRight = '10px';
        }
    };



    return (
        <>
            <ContainerAcessoRapido>
                <div className="titulo-icone">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="18" height="17.1429" rx="8" fill="#2FED42" fill-opacity="0.3" />
                        <path d="M9.90314 11.9496C9.80712 11.9496 9.71111 11.9139 9.6353 11.8375C9.48875 11.6897 9.48875 11.4451 9.6353 11.2973L12.4349 8.47415L9.6353 5.65101C9.48875 5.50322 9.48875 5.25862 9.6353 5.11084C9.78185 4.96305 10.0244 4.96305 10.171 5.11084L13.2384 8.20407C13.385 8.35185 13.385 8.59645 13.2384 8.74424L10.171 11.8375C10.0952 11.9139 9.99915 11.9496 9.90314 11.9496Z" fill="#08632D" />
                        <path d="M12.884 8.85627H4.37901C4.17182 8.85627 4 8.683 4 8.47407C4 8.26514 4.17182 8.09187 4.37901 8.09187H12.884C13.0912 8.09187 13.263 8.26514 13.263 8.47407C13.263 8.683 13.0912 8.85627 12.884 8.85627Z" fill="#08632D" />
                    </svg>
                    Acesso Rápido
                </div>
                <div className="area-conteudo">
                    <div className="conteudoBloco1">
                        <div className="box-tree">
                            <span className="box">
                                <img src={Icon('negativoIcon')} onClick={showSweetDespesas}/>
                                <span className="action">Nova despesa</span>
                            </span>

                            <span className="box">
                                <img src={Icon('positivoIcon')} onClick={showSweetReceita} />
                                <span className="action">Nova receita</span>
                            </span>

                            <span className="box">
                                <img src={Icon('transferenciaIcon')} onClick={showSweetTransition}/>
                                <span className="action">Transferir</span>
                            </span>

                            <span className="box">
                                <Notification />
                            </span>
                        </div>
                    </div>

                </div>
            </ContainerAcessoRapido>
        </>
    )
}



export default AcessoRapido;