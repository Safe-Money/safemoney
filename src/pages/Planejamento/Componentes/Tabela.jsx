import styled from "styled-components";
import { useState } from "react";
import Swal from "sweetalert2";
import Container from "./Container";
import ModalEditar from "./ModalEditar";
import ModalCriar from "./ModalCriar";
import { useEffect } from "react";
import api from "../../../api";
const LocalTabela = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

const TabelaMensal = styled.div`
  display: flex;
  width: 100%;
  height: 97%;
  background-color: white;
  border-radius: 10px;
  justify-content: space-between;
  padding: 4% 5% 2% 5%;
  flex-direction: column;
`;

const MesPlano = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  line-height: normal;
  justify-content: flex-end;

  .custom-btn {
    padding: 10px;
    color: #fff; /* Cor da letra branca */
    background-color: #08632d; /* Cor de fundo verde */
  }

  .Mes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 3px;
    font-size: 24px;
    font-weight: 500;
    width: 30%;
  }

  .Plano {
    display: flex;
    width: 40%;
    justify-content: center;
    align-items: center;
    padding: 0 0 0 10%;
  }

  .cardPlano {
    display: flex;
    justify-content: center;
    align-items: end;
    font-size: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #08632d;
    color: rgba(253, 253, 253, 1);
    cursor: pointer;
  }
  .cardPlano svg {
    margin-right: 5px;
    padding: 0 0 1px 0;
  }

  .Mes svg {
    display: flex;
    cursor: pointer;
    width: 70%;
  }

  #svg2 {
    display: flex;
    justify-content: flex-end;
  }
`;

const Lista = styled.div`
  display: flex;
  width: 100%;
  height: 85%;

  .conteudo-lista {
    display: flex;
    width: 100%;
    height: 90%;
    flex-direction: column;
    overflow-y: auto;
  }

  .titulos-categoria {
    display: flex;
    width: 93%;
    height: 25px;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 2%;
  }
  .titulos-categoria .categoria {
    display: flex;
    width: 10%;
    // justify-content:center;
  }

  .titulos-categoria .valor {
    display: flex;
    width: 20%;
    // justify-content:center;
  }
  .titulos-categoria .data {
    display: flex;
    width: 20%;
    // justify-content:center;
  }

  .titulos-categoria .conta {
    display: flex;
    width: 35%;
    padding: 0 0 0 10%;
    // justify-content:center;
  }
  .titulos-categoria .acoes {
    display: flex;
    width: 15%;
    padding: 0 0 0 2%;
    justify-content: center;
  }
  .container-lista-scroll {
    display: flex;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    flex-direction: column;

    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #08632d #fdfdfd; /* Para navegadores Firefox */
    &::-webkit-scrollbar {
      width: 10px; /* Largura da barra de rolagem */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #08632d; /* Cor do polegar da barra de rolagem */
      border-radius: 5px; /* Raio da borda do polegar da barra de rolagem */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(228, 228, 228, 1);
      border-radius: 5px; /* Cor da trilha da barra de rolagem */
    }
  }

  .container-lista {
    display: flex;
    width: 95%;
    height: 17%;
    justify-content: center;
    align-items: center;
    // font-size:12px;
    border-bottom: solid 1px #d4d4d4;
    flex-shrink: 0;
  }

  .container-lista .icone-lista {
    width: 10%;
    display: flex;
    // justify-content:center;
    padding: 0 0 0 1%;
    align-items: center;
  }
  .icone-lista img {
    border-radius: 50%;
    width: 30%;
  }

  .container-lista .valor-lista {
    width: 20%;
    display: flex;
    // justify-content:center;
    align-items: center;
    padding: 0 0 0 2%;
    font-size: 12px;
  }
  .container-lista .data-lista {
    width: 20%;
    display: flex;
    // justify-content:center;
    align-items: center;
    padding: 0 0 0 1%;
    font-size: 12px;
  }

  .container-lista .conta-lista {
    width: 35%;
    display: flex;
    // justify-content:center;
    align-items: center;
    color: #08632d;
    font-weight: 700;
    font-size: 12px;
  }
  .container-lista .acoes-lista {
    width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5% 0 5%;
  }

  .container-lista .acoes-lista img {
    width: 40%;
    cursor: pointer;
  }
`;

function Tabela() {
  const [listaDados, setListaDados] = useState([]);
  const [message, setMessage] = useState(null);
  const id = sessionStorage.getItem("id");

  const [selectedItem, setSelectedItem] = useState(null);

  const excluirConta = (id) => {
    Swal.fire({
      title: "Você tem certeza?",
      text: "Você não poderá reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#08632D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        api
          .delete(`/planejamento/${id}`)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Sucesso!",
              text: "Conta excluída com sucesso!",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Erro!",
              text: "Erro ao excluir conta!",
            });
            console.log(error);
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

  function removerAcentos(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  const retornarProgresso = (planejamento) => {
    const progresso = (
      (planejamento.totalGasto / planejamento.valorPlanejado) *
      100
    ).toFixed(2);
    return progresso;
  };

  const contasRenderizadas =
    listaDados.length > 0
      ? listaDados.map((conta, index) => (
        <Container
          key={index}
          id={`someContainerId${index}`}
          categoria={removerAcentos(conta.nomeCategoria)}
          valor={"R$ " + conta.valorPlanejado.toFixed(2)}
          totalGasto={"R$ " + conta.totalGasto.toFixed(2)}
          progresso={retornarProgresso(conta)}
          excluirConta={() => excluirConta(conta.idPlanejamento)}
          sweetEditar={() => openModal("editar", conta)}
        />
      ))
      : null;

  useEffect(() => {


    listarPlanejamento();
  }, []);


  function listarPlanejamento() {
    api.get(`/planejamento/busca-gastos-categoria/${id}`)
      .then((respostaObtida) => {
        setListaDados(respostaObtida.data);
        console.log(respostaObtida.data);
        setMessage(null);

        if (listaDados.length === 0) {
          setMessage("Não há planejamentos cadastrados!");
        }
      })
      .catch((erroOcorrido) => {
        console.log(erroOcorrido);
      });
  }

  var total = 0;

  for (let i = 0; i < listaDados.length; i++) {
    total += listaDados[i].totalGasto;
    console.log(total);
  }

  if (isNaN(total)) {
    total = 0;
  }

  console.log(total);

  sessionStorage.setItem("totalGasto", total.toFixed(2));

  return (
    <>
      <LocalTabela>
        <TabelaMensal>
          <MesPlano>
            <div className="Plano">
              <div className="cardPlano" onClick={() => openModal("criar")}>
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.21289 5.5H7.78828"
                    stroke="#FDFDFD"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 7.28767V3.71228"
                    stroke="#FDFDFD"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.65972 9.96924H7.34126C9.57588 9.96924 10.4697 9.07539 10.4697 6.84077V4.15923C10.4697 1.92461 9.57588 1.03076 7.34126 1.03076H4.65972C2.4251 1.03076 1.53125 1.92461 1.53125 4.15923V6.84077C1.53125 9.07539 2.4251 9.96924 4.65972 9.96924Z"
                    stroke="#FDFDFD"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Novo Plano
              </div>
            </div>
          </MesPlano>
          {selectedModal === "criar" && <ModalCriar onClose={closeModal} listar={listarPlanejamento} />}
          {selectedModal === "editar" && (
            <ModalEditar onClose={closeModal} planejamento={selectedItem} />
          )}

          <Lista>
            {listaDados.length > 0 ? (
              <div className="conteudo-lista">
                <div className="titulos-categoria">
                  <div className="categoria">Categoria</div>

                  <div className="valor">Valor Planejado</div>
                  <div className="data">Total Gasto</div>
                  <div className="conta">Progresso</div>
                  <div className="acoes">
                    Ações
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="container-lista-scroll">
                  {contasRenderizadas}
                </div>
              </div>
            ) : (
              <p>{message}</p>
            )}
          </Lista>
        </TabelaMensal>
      </LocalTabela>
    </>
  );
}

export default Tabela;
