import styled from "styled-components";
import { Icon } from "../funcoes/icons";
import Notification from "./Notification";
import Swal from 'sweetalert2';
import React, { useState } from 'react';


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
    const [isAtivado, setIsAtivado] = useState(true);


    const iconHtml = `<img src="${Icon('logo')}" style="width:71px" />`;

    const showSweetDespesas = () => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success custom-btn",
                cancelButton: "btn btn-danger custom-btn",
                input: 'swal2-input custom-input'

            },
            buttonsStyling: false,
        });


        swalWithBootstrapButtons.fire({
            title: "Nova Despesa",
            text: "You won't be able to revert this!",
            html: `
        <div class="all" style="display: flex; flex-direction: column; width: 100%;">
            <div style="display: flex; margin-bottom: 10px;justify-content:center;align-items:center; height: 70px; position:relative;">
                <div className="label_select" id="ipt_categoria">
                    <label style="margin-left: 23%; padding: 0 8px; color:#08632D;  font-size:16px; margin-top:1%; position: absolute; background-color: white; left: 0;top: 0;" for="nomePlano" id="label_categoria">Categoria</label>
                    <select style="width: 150px; font-size: 12px; border:1px solid rgba(0, 0, 0, 1); padding: 10px; margin: 0;border-radius:5px;" id="categoriaPlano" class="swal2-select">
                        <option value="busca">Buscar a categoria</option>
                        <option value="lazer">Lazer</option>
                        <option value="comida">Comida</option>
                        <option value="medico">Médico</option>
                    </select>
                </div>
        
                <div className="label_select">
                    <label style="margin-left: 54%; padding: 0 8px; color:#08632D;  font-size:16px; margin-top:1%; position: absolute; background-color: white; left: 0;top: 0;" for="name" id="label_cartoes">Origem</label>
                    <select style="width: 150px; font-size: 12px; border:1px solid rgba(0, 0, 0, 1); padding: 10px; margin: 0 0 0 15px;border-radius:5px;" id="select_cartoes" class="swal2-select">
                        <option value="busca">Buscar Origem</option>
                        <option value="conta">${iconHtml}Conta</option>
                        <option value="credito">Credito</option>
                        <option value="conta">Conta</option>
                    </select>
                </div>
            </div>

        <div style="display: flex;justify-content:center;align-items:center; height: 70px; position:relative;">
            <div className="label_select">
                <label style="margin-left: 23%; padding: 0 8px; color:#08632D;  font-size:16px; margin-top:1%; position: absolute; background-color: white; left: 0;top: 0; for="nomePlano">Valor</label>
                <input
                type="text"
                style="width: 150px; height:38px;border:solid 1px black; font-size: 12px; border-radius:5px; padding: 10px; margin: 0;"
                id="valorPlano"
                class="swal2-input"
                placeholder="Digite o valor do plano"
            >
            </div>
    
            <div className="label_select">
                <label style="margin-left: 54%; padding: 0 8px; color:#08632D; font-size:16px; margin-top:1%; position: absolute; background-color: white; left: 0;top: 0; for="name">Data</label>
             
                <input type="date" style="width: 150px; margin: 0 0 0 15px; height:38px; border:solid 1px black; font-size: 12px; border-radius:5px; padding: 10px;" id="valorPlano" class="swal2-input" placeholder="Digite o valor do plano">
            </div>
            
            
        </div>

        <div style="display: block;justify-content:center;align-items:center; height:70px; padding: 15px 0;" >
            <div className="label_select" >

            <label style="margin-left: 31%; margin-top:50%; padding: 0 8px; color:#08632D;  font-size:12px; position: absolute; background-color: white; left: 0;top: 0;" for="nomePlano">Despesa Fixa</label>
            <svg id="desativado" style="display:block; position:absolute; left:0; top:0; margin-left:25%;margin-top:50%; cursor:pointer;" width="36" height="15" viewBox="0 0 36 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="15" rx="7.5" fill="#E6E6E6"/>
            <ellipse cx="8" cy="7.5" rx="8" ry="7.5" fill="#568C6D"/>
            </svg>

            <svg  id="ativar" style="display:none; position:absolute; left:0; top:0; margin-left:25%;margin-top:50%; cursor:pointer;" width="36" height="15" viewBox="0 0 36 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="15" rx="7.5" fill="#E6E6E6"/>
            <ellipse cx="28" cy="7.5" rx="8" ry="7.5" fill="#3ABA6F"/>
            </svg>


            <div className="parcelaEstado" style="display:none;" id="parcelaEstado">   
            <label style="margin-left: 53%; margin-top:46.4%; padding: 0 8px; color:#08632D; font-size:16px; position: absolute; background-color: white; left: 0;top: 0;" for="nomePlano">Parcelas</label>
            <select style="width: 150px !important; font-size: 12px; border:1px solid rgba(0, 0, 0, 1); padding: 10px; margin: 0 0 0 30.5%;border-radius:5px;" id="categoriaPlano" class="">
                <option value="one">1 vez</option>
                <option value="two">2 vezes</option>
                <option value="tree">3 vezes</option>
                <option value="four">4 vezes</option>
            </select>
            </div> 
        </div>
        </div>
    </div>
        
             <label for="my-input" class="ipt_label" >Descrição</label>
        `,

            // iconHtml:``,
            // imageUrl: Icon('logo'),
            select: "text",
            label: "olha",
            input: "text",
            inputAttributes: {
                autocapitalize: "off",
                id: 'my-input'
            },
            iconHtml: `${iconHtml}`,
            showCancelButton: true,
            confirmButtonText: "Adicionar",
            cancelButtonText: "Cancelar",
            reverseButtons: true,
            didOpen: () => {

                const cartoesSelect = document.getElementById("select_cartoes");
                const parcelaEstado = document.getElementById("parcelaEstado");

                const handleCategoriaPlanoChange = () => {
                    const opcaoSelecionada = cartoesSelect.value;

                    // Exibe ou oculta a seção de parcelas com base na opção selecionada
                    if (opcaoSelecionada === "credito") {
                        console.log("Exibir a seção de parcelas");
                        parcelaEstado.style.display = "block";
                    } else {
                        console.log("Ocultar a seção de parcelas");
                        parcelaEstado.style.display = "none";
                    }
                };

                // Adiciona um ouvinte de evento para a mudança na opção selecionada
                cartoesSelect.addEventListener("change", handleCategoriaPlanoChange);


                const svgDesativado = document.getElementById('desativado');
                const svgAtivar = document.getElementById('ativar'); // Corrigido o ID aqui
                const categoria = document.getElementById('ipt_categoria'); // Corrigido o ID aqui
                const labelcartoes = document.getElementById('label_cartoes'); // Corrigido o ID aqui

                const toggleAtivacao = () => {
                    console.log("Clique no SVG");

                    // Se o estado atual for ativado, altera para desativado e vice-versa

                    // Aplica estilos aos SVGs com base no novo estado
                    if (svgDesativado.style.display === "block") {
                        // Se estava ativado, agora desativa
                        svgDesativado.style.display = "none";
                        svgAtivar.style.display = "block";
                        categoria.style.display = "none";
                        labelcartoes.style.marginLeft = "39.5%";

                    } else {
                        // Se estava desativado, agora ativa
                        svgDesativado.style.display = "block";
                        svgAtivar.style.display = "none";
                        categoria.style.display = "block";
                        labelcartoes.style.marginLeft = "54%";
                    };
                    setIsAtivado(!isAtivado);
                };

                svgDesativado.addEventListener('click', toggleAtivacao);
                svgAtivar.addEventListener('click', toggleAtivacao);




                const inputValorPlano = document.getElementById('valorPlano');
                inputValorPlano.addEventListener('input', () => formatarValor(inputValorPlano));


                function formatarValor(input) {
                    let valor = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

                    if (valor.length > 0) {
                        // Remove zeros à esquerda
                        valor = valor.replace(/^0+/, '');

                        // Adiciona zeros à esquerda até ter pelo menos 3 dígitos
                        while (valor.length < 3) {
                            valor = '0' + valor;
                        }

                        // Separa os centavos dos reais com vírgula
                        const centavos = valor.slice(-2);
                        const reais = valor.slice(0, -2);

                        // Adiciona ponto como separador de milhares aos reais
                        valor = `${reais.slice(0, -3)}.${reais.slice(-3)}`;

                        // Atualiza o valor no input
                        input.value = `R$${valor},${centavos}`;
                    }
                }

                const htmlInput = document.querySelector('#swal2-html-container');
                const actions = document.querySelector('.swal2-actions');

                actions.style.position = 'absolute';
                actions.style.bottom = '0';
                actions.style.marginBottom = '50px';

                htmlInput.style.width = "100%";
                htmlInput.style.display = "flex";
                htmlInput.style.display = "justify-content:center";
                htmlInput.style.display = "align-items:center";


                const labelModal = document.querySelector('.ipt_label');
                labelModal.style.position = "absolute";
                labelModal.style.display = "flex";
                labelModal.style.justifyContent = "center";
                labelModal.style.color = "#08632D";
                labelModal.style.marginTop = "35.8%";
                labelModal.style.backgroundColor = "white";
                labelModal.style.left = "0";
                labelModal.style.marginLeft = "27%";
                labelModal.style.fontSize = "16px";
                labelModal.style.padding = "0 8px";

                //    labelModal.style.marginRight= "90%";

                // Estilize os botões diretamente
                const confirmButton = Swal.getConfirmButton();
                const cancelButton = Swal.getCancelButton();

                if (confirmButton && cancelButton) {
                    confirmButton.style.padding = '10px';
                    confirmButton.style.width = '150px';
                    confirmButton.style.borderRadius = '5px';
                    confirmButton.style.border = 'none';
                    confirmButton.style.color = '#fff';
                    confirmButton.style.backgroundColor = '#08632D';
                    confirmButton.style.marginLeft = '20px';
                    confirmButton.style.cursor = 'pointer';
                    // localButton.style.width='70%';

                    cancelButton.style.padding = '10px';
                    cancelButton.style.width = '150px';
                    cancelButton.style.borderRadius = '5px';
                    cancelButton.style.border = 'none';
                    cancelButton.style.color = '#fff';
                    cancelButton.style.backgroundColor = '#D0112B';
                    cancelButton.style.marginRight = '10px';
                    cancelButton.style.cursor = 'pointer';
                }

                const iconSwal = Swal.getIcon();
                iconSwal.style.border = 'none';
                iconSwal.style.width = '71px';
                iconSwal.style.height = '39px';
                iconSwal.style.margin = '0';

                const titleSwal = Swal.getTitle();
                titleSwal.style.color = '#08632D';
                titleSwal.style.padding = '0';
                titleSwal.style.fontSize = '27px';

                const modal = Swal.getPopup();
                if (modal) {
                    modal.style.width = '40em';
                    modal.style.height = '550px';
                    modal.style.borderRadius = '10px';
                    modal.style.display = 'flex';
                    modal.style.flexDirection = 'column';
                    modal.style.alignItems = 'center';
                    modal.style.padding = '50px';
                }

                const inputSwal = Swal.getInput();
                inputSwal.style.border = '1px solid rgba(0, 0, 0, 1)';
                inputSwal.style.borderRadius = '5px';
                inputSwal.style.width = '60%';
                inputSwal.style.height = '38px';
                inputSwal.style.position = 'relative';
                inputSwal.style.marginTop = '2.5%';
                



                // Atualize o modal para aplicar os estilos
                Swal.update();
            }

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
                    text: "Sua Despesa foi criada.",
                    icon: "success"
                });
            } 
        });

    };



    const showSweetReceita = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success custom-btn",
                cancelButton: "btn btn-danger custom-btn",
                input: 'swal2-input custom-input'

            },
            buttonsStyling: false,
        });


        swalWithBootstrapButtons.fire({
            title: "Nova Receita",
            text: "You won't be able to revert this!",
            html: `
        <div class="all" style="display: flex; flex-direction: column; width: 100%;">
            <div style="display: flex; margin-bottom: 10px;justify-content:center;align-items:center; height: 70px; position:relative;">
                <div className="label_select" id="ipt_categoria">
                    <label style="margin-left: 23%; padding: 0 8px; color:#08632D;  font-size:16px; margin-top:1%; position: absolute; background-color: white; left: 0;top: 0;" for="nomePlano" id="label_categoria">Categoria</label>
                    <select style="width: 150px; font-size: 12px; border:1px solid rgba(0, 0, 0, 1); padding: 10px; margin: 0;border-radius:5px;" id="categoriaPlano" class="swal2-select">
                        <option value="busca">Buscar a categoria</option>
                        <option value="lazer">Lazer</option>
                        <option value="comida">Comida</option>
                        <option value="medico">Médico</option>
                    </select>
                </div>
        
                <div className="label_select">
                    <label style="margin-left: 54%; padding: 0 8px; color:#08632D;  font-size:16px; margin-top:1%; position: absolute; background-color: white; left: 0;top: 0;" for="name" id="label_cartoes">Origem</label>
                    <select style="width: 150px; font-size: 12px; border:1px solid rgba(0, 0, 0, 1); padding: 10px; margin: 0 0 0 15px;border-radius:5px;" id="select_cartoes" class="swal2-select">
                        <option value="busca">Buscar Origem</option>
                        <option value="conta">${iconHtml}Conta</option>
                        <option value="credito">Credito</option>
                        <option value="conta">Conta</option>
                    </select>
                </div>
            </div>

        <div style="display: flex;justify-content:center;align-items:center; height: 70px; position:relative;">
            <div className="label_select">
                <label style="margin-left: 23%; padding: 0 8px; color:#08632D;  font-size:16px; margin-top:1%; position: absolute; background-color: white; left: 0;top: 0; for="nomePlano">Valor</label>
                <input
                type="text"
                style="width: 150px; height:38px;border:solid 1px black; font-size: 12px; border-radius:5px; padding: 10px; margin: 0;"
                id="valorPlano"
                class="swal2-input"
                placeholder="Digite o valor do plano"
            >
            </div>
    
            <div className="label_select">
                <label style="margin-left: 54%; padding: 0 8px; color:#08632D; font-size:16px; margin-top:1%; position: absolute; background-color: white; left: 0;top: 0; for="name">Data</label>
             
                <input type="date" style="width: 150px; margin: 0 0 0 15px; height:38px; border:solid 1px black; font-size: 12px; border-radius:5px; padding: 10px;" id="valorPlano" class="swal2-input" placeholder="Digite o valor do plano">
            </div>
            
            
        </div>

        <div style="display: block;justify-content:center;align-items:center; height:70px; padding: 15px 0;" >
            <div className="label_select" >

            <label style="margin-left: 31%; margin-top:50%; padding: 0 8px; color:#08632D;  font-size:12px; position: absolute; background-color: white; left: 0;top: 0;" for="nomePlano">Despesa Fixa</label>
            <svg id="desativado" style="display:block; position:absolute; left:0; top:0; margin-left:25%;margin-top:50%; cursor:pointer;" width="36" height="15" viewBox="0 0 36 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="15" rx="7.5" fill="#E6E6E6"/>
            <ellipse cx="8" cy="7.5" rx="8" ry="7.5" fill="#568C6D"/>
            </svg>

            <svg  id="ativar" style="display:none; position:absolute; left:0; top:0; margin-left:25%;margin-top:50%; cursor:pointer;" width="36" height="15" viewBox="0 0 36 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="15" rx="7.5" fill="#E6E6E6"/>
            <ellipse cx="28" cy="7.5" rx="8" ry="7.5" fill="#3ABA6F"/>
            </svg>


            <div className="parcelaEstado" style="display:none;" id="parcelaEstado">   
            <label style="margin-left: 53%; margin-top:46.4%; padding: 0 8px; color:#08632D; font-size:16px; position: absolute; background-color: white; left: 0;top: 0;" for="nomePlano">Parcelas</label>
            <select style="width: 150px !important; font-size: 12px; border:1px solid rgba(0, 0, 0, 1); padding: 10px; margin: 0 0 0 30.5%;border-radius:5px;" id="categoriaPlano" class="">
                <option value="one">1 vez</option>
                <option value="two">2 vezes</option>
                <option value="tree">3 vezes</option>
                <option value="four">4 vezes</option>
            </select>
            </div> 
        </div>
        </div>
    </div>
        
             <label for="my-input" class="ipt_label" >Descrição</label>
        `,

            // iconHtml:``,
            // imageUrl: Icon('logo'),
            select: "text",
            label: "olha",
            input: "text",
            inputAttributes: {
                autocapitalize: "off",
                id: 'my-input'
            },
            iconHtml: `${iconHtml}`,
            showCancelButton: true,
            confirmButtonText: "Adicionar",
            cancelButtonText: "Cancelar",
            reverseButtons: true,
            didOpen: () => {

                const cartoesSelect = document.getElementById("select_cartoes");
                const parcelaEstado = document.getElementById("parcelaEstado");

                const handleCategoriaPlanoChange = () => {
                    const opcaoSelecionada = cartoesSelect.value;

                    // Exibe ou oculta a seção de parcelas com base na opção selecionada
                    if (opcaoSelecionada === "credito") {
                        console.log("Exibir a seção de parcelas");
                        parcelaEstado.style.display = "block";
                    } else {
                        console.log("Ocultar a seção de parcelas");
                        parcelaEstado.style.display = "none";
                    }
                };

                // Adiciona um ouvinte de evento para a mudança na opção selecionada
                cartoesSelect.addEventListener("change", handleCategoriaPlanoChange);


                const svgDesativado = document.getElementById('desativado');
                const svgAtivar = document.getElementById('ativar'); // Corrigido o ID aqui
                const categoria = document.getElementById('ipt_categoria'); // Corrigido o ID aqui
                const labelcartoes = document.getElementById('label_cartoes'); // Corrigido o ID aqui

                const toggleAtivacao = () => {
                    console.log("Clique no SVG");

                    // Se o estado atual for ativado, altera para desativado e vice-versa

                    // Aplica estilos aos SVGs com base no novo estado
                    if (svgDesativado.style.display === "block") {
                        // Se estava ativado, agora desativa
                        svgDesativado.style.display = "none";
                        svgAtivar.style.display = "block";
                        categoria.style.display = "none";
                        labelcartoes.style.marginLeft = "39.5%";

                    } else {
                        // Se estava desativado, agora ativa
                        svgDesativado.style.display = "block";
                        svgAtivar.style.display = "none";
                        categoria.style.display = "block";
                        labelcartoes.style.marginLeft = "54%";
                    };
                    setIsAtivado(!isAtivado);
                };

                svgDesativado.addEventListener('click', toggleAtivacao);
                svgAtivar.addEventListener('click', toggleAtivacao);




                const inputValorPlano = document.getElementById('valorPlano');
                inputValorPlano.addEventListener('input', () => formatarValor(inputValorPlano));


                function formatarValor(input) {
                    let valor = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

                    if (valor.length > 0) {
                        // Remove zeros à esquerda
                        valor = valor.replace(/^0+/, '');

                        // Adiciona zeros à esquerda até ter pelo menos 3 dígitos
                        while (valor.length < 3) {
                            valor = '0' + valor;
                        }

                        // Separa os centavos dos reais com vírgula
                        const centavos = valor.slice(-2);
                        const reais = valor.slice(0, -2);

                        // Adiciona ponto como separador de milhares aos reais
                        valor = `${reais.slice(0, -3)}.${reais.slice(-3)}`;

                        // Atualiza o valor no input
                        input.value = `R$${valor},${centavos}`;
                    }
                }

                const htmlInput = document.querySelector('#swal2-html-container');
                const actions = document.querySelector('.swal2-actions');

                actions.style.position = 'absolute';
                actions.style.bottom = '0';
                actions.style.marginBottom = '50px';

                htmlInput.style.width = "100%";
                htmlInput.style.display = "flex";
                htmlInput.style.display = "justify-content:center";
                htmlInput.style.display = "align-items:center";


                const labelModal = document.querySelector('.ipt_label');
                labelModal.style.position = "absolute";
                labelModal.style.display = "flex";
                labelModal.style.justifyContent = "center";
                labelModal.style.color = "#08632D";
                labelModal.style.marginTop = "35.8%";
                labelModal.style.backgroundColor = "white";
                labelModal.style.left = "0";
                labelModal.style.marginLeft = "27%";
                labelModal.style.fontSize = "16px";
                labelModal.style.padding = "0 8px";

                //    labelModal.style.marginRight= "90%";

                // Estilize os botões diretamente
                const confirmButton = Swal.getConfirmButton();
                const cancelButton = Swal.getCancelButton();

                if (confirmButton && cancelButton) {
                    confirmButton.style.padding = '10px';
                    confirmButton.style.width = '150px';
                    confirmButton.style.borderRadius = '5px';
                    confirmButton.style.border = 'none';
                    confirmButton.style.color = '#fff';
                    confirmButton.style.backgroundColor = '#08632D';
                    confirmButton.style.marginLeft = '20px';
                    confirmButton.style.cursor = 'pointer';
                    // localButton.style.width='70%';

                    cancelButton.style.padding = '10px';
                    cancelButton.style.width = '150px';
                    cancelButton.style.borderRadius = '5px';
                    cancelButton.style.border = 'none';
                    cancelButton.style.color = '#fff';
                    cancelButton.style.backgroundColor = '#D0112B';
                    cancelButton.style.marginRight = '10px';
                    cancelButton.style.cursor = 'pointer';
                }

                const iconSwal = Swal.getIcon();
                iconSwal.style.border = 'none';
                iconSwal.style.width = '71px';
                iconSwal.style.height = '39px';
                iconSwal.style.margin = '0';

                const titleSwal = Swal.getTitle();
                titleSwal.style.color = '#08632D';
                titleSwal.style.padding = '0';
                titleSwal.style.fontSize = '27px';

                const modal = Swal.getPopup();
                if (modal) {
                    modal.style.width = '40em';
                    modal.style.height = '550px';
                    modal.style.borderRadius = '10px';
                    modal.style.display = 'flex';
                    modal.style.flexDirection = 'column';
                    modal.style.alignItems = 'center';
                    modal.style.padding = '50px';
                }

                const inputSwal = Swal.getInput();
                inputSwal.style.border = '1px solid rgba(0, 0, 0, 1)';
                inputSwal.style.borderRadius = '5px';
                inputSwal.style.width = '60%';
                inputSwal.style.height = '38px';
                inputSwal.style.position = 'relative';
                inputSwal.style.marginTop = '2.5%';
                



                // Atualize o modal para aplicar os estilos
                Swal.update();
            }


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
                    text: "Sua Despesa foi criada.",
                    icon: "success"
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelada",
                    text: "Sua criação de Despesa foi cancelada! :)",
                    icon: "error"
                });

            }
        });

    };


    const showSweetTransition = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success custom-btn",
                cancelButton: "btn btn-danger custom-btn",
                input: 'swal2-input custom-input'

            },
            buttonsStyling: false,
        });


        swalWithBootstrapButtons.fire({
            title: "Nova Transferência",
            text: "You won't be able to revert this!",
            html: `
        <div class="all" style="display: flex; flex-direction: column; width: 100%;">
            <div style="display: flex; margin-bottom: 10px;justify-content:center;align-items:center; height: 70px; position:relative;">
                <div className="label_select" id="ipt_categoria">
                    <label style="margin-left: 23%; padding: 0 8px; color:#08632D;  font-size:12px; margin-top:1%; position: absolute; background-color: white; left: 0;top: 0;" for="nomePlano" id="label_categoria">Conta Remetente</label>
                    <select style="width: 150px; font-size: 12px; border:1px solid rgba(0, 0, 0, 1); padding: 10px; margin: 0;border-radius:5px;" id="categoriaPlano" class="swal2-select">
                        <option value="busca">Buscar Conta</option>
                        <option value="conta">${iconHtml}Conta</option>
                        <option value="credito">Credito</option>
                        <option value="conta">Conta</option>
                    </select>
                </div>
        
                <div className="label_select">
                    <label style="margin-left: 53.5%; padding: 0 8px; color:#08632D;  font-size:12px; margin-top:1%; position: absolute; background-color: white; left: 0;top: 0;" for="name" id="label_cartoes">Conta Destinatario</label>
                    <select style="width: 150px; font-size: 12px; border:1px solid rgba(0, 0, 0, 1); padding: 10px; margin: 0 0 0 15px;border-radius:5px;" id="select_cartoes" class="swal2-select">
                        <option value="busca">Buscar Conta</option>
                        <option value="conta">${iconHtml}Conta</option>
                        <option value="credito">Credito</option>
                        <option value="conta">Conta</option>
                    </select>
                </div>
                </div>
                    <div style="display: flex;justify-content:center;align-items:center; height: 70px; position:relative;">
                        <div className="label_select">
                            <label style="margin-left: 38.5%; padding: 0 8px; color:#08632D;  font-size:16px; margin-top:1%; position: absolute;  background-color: white; left: 0;top: 0; for="nomePlano">Valor</label>
                            <input
                            type="text"
                            style="width: 150px; height:38px;border:solid 1px black; font-size: 12px; border-radius:5px; padding: 10px; margin: 0;"
                            id="valorPlano"
                            class="swal2-input"
                             placeholder="Valor da Transferencia"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
             <label for="my-input" class="ipt_label" >Descrição</label>
        `,

            select: "text",
            label: "olha",
            input: "text",
            inputAttributes: {
                autocapitalize: "off",
                id: 'my-input'
            },
            iconHtml: `${iconHtml}`,
            showCancelButton: true,
            confirmButtonText: "Adicionar",
            cancelButtonText: "Cancelar",
            reverseButtons: true,
            didOpen: () => {

                const inputValorPlano = document.getElementById('valorPlano');
                inputValorPlano.addEventListener('input', () => formatarValor(inputValorPlano));


                function formatarValor(input) {
                    let valor = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

                    if (valor.length > 0) {
                        // Remove zeros à esquerda
                        valor = valor.replace(/^0+/, '');

                        // Adiciona zeros à esquerda até ter pelo menos 3 dígitos
                        while (valor.length < 3) {
                            valor = '0' + valor;
                        }

                        // Separa os centavos dos reais com vírgula
                        const centavos = valor.slice(-2);
                        const reais = valor.slice(0, -2);

                        // Adiciona ponto como separador de milhares aos reais
                        valor = `${reais.slice(0, -3)}.${reais.slice(-3)}`;

                        // Atualiza o valor no input
                        input.value = `R$${valor},${centavos}`;
                    }
                }

                const htmlInput = document.querySelector('#swal2-html-container');
                const actions = document.querySelector('.swal2-actions');

                actions.style.position = 'absolute';
                actions.style.bottom = '0';
                actions.style.marginBottom = '50px';

                htmlInput.style.width = "100%";
                htmlInput.style.display = "flex";
                htmlInput.style.display = "justify-content:center";
                htmlInput.style.display = "align-items:center";


                const labelModal = document.querySelector('.ipt_label');
                labelModal.style.position = "absolute";
                labelModal.style.display = "flex";
                labelModal.style.justifyContent = "center";
                labelModal.style.color = "#08632D";
                labelModal.style.marginTop = "24.5%";
                labelModal.style.backgroundColor = "white";
                labelModal.style.left = "0";
                labelModal.style.marginLeft = "27%";
                labelModal.style.fontSize = "16px";
                labelModal.style.padding = "0 8px";
                //    labelModal.style.marginRight= "90%";

                // Estilize os botões diretamente
                const confirmButton = Swal.getConfirmButton();
                const cancelButton = Swal.getCancelButton();

                if (confirmButton && cancelButton) {
                    confirmButton.style.padding = '10px';
                    confirmButton.style.width = '150px';
                    confirmButton.style.borderRadius = '5px';
                    confirmButton.style.border = 'none';
                    confirmButton.style.color = '#fff';
                    confirmButton.style.backgroundColor = '#08632D';
                    confirmButton.style.marginLeft = '20px';
                    confirmButton.style.cursor = 'pointer';
                    // localButton.style.width='70%';

                    cancelButton.style.padding = '10px';
                    cancelButton.style.width = '150px';
                    cancelButton.style.borderRadius = '5px';
                    cancelButton.style.border = 'none';
                    cancelButton.style.color = '#fff';
                    cancelButton.style.backgroundColor = '#D0112B';
                    cancelButton.style.marginRight = '10px';
                    cancelButton.style.cursor = 'pointer';
                }

                const iconSwal = Swal.getIcon();
                iconSwal.style.border = 'none';
                iconSwal.style.width = '71px';
                iconSwal.style.height = '39px';
                iconSwal.style.margin = '0';

                const titleSwal = Swal.getTitle();
                titleSwal.style.color = '#08632D';
                titleSwal.style.padding = '0';
                titleSwal.style.fontSize = '27px';

                const modal = Swal.getPopup();
                if (modal) {
                    modal.style.width = '40em';
                    modal.style.height = '500px';
                    modal.style.borderRadius = '10px';
                    modal.style.display = 'flex';
                    modal.style.flexDirection = 'column';
                    modal.style.alignItems = 'center';
                    modal.style.padding = '50px';
                }

                const inputSwal = Swal.getInput();
                inputSwal.style.border = '1px solid rgba(0, 0, 0, 1)';
                inputSwal.style.borderRadius = '5px';
                inputSwal.style.width = '60%';
                inputSwal.style.height = '38px';
                inputSwal.style.position = 'relative';
                inputSwal.style.marginTop = '2.5%';

                // Atualize o modal para aplicar os estilos
                Swal.update();
            }

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
                    text: "Sua Despesa foi criada.",
                    icon: "success"
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelada",
                    text: "Sua criação de Despesa foi cancelada! :)",
                    icon: "error"
                });

            }
        });

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
                                <img src={Icon('negativoIcon')} onClick={showSweetDespesas} />
                                <span className="action">Nova despesa</span>
                            </span>

                            <span className="box">
                                <img src={Icon('positivoIcon')} onClick={showSweetReceita} />
                                <span className="action">Nova receita</span>
                            </span>

                            <span className="box">
                                <img src={Icon('transferenciaIcon')} onClick={showSweetTransition} />
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