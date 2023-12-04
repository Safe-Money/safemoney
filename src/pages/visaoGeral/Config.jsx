import Input from "../Login/components/Input";
import styled from "styled-components";
import "../Login/login.css";
import { Button } from "../../components/Button";
import { useState, useEffect } from "react";
import LateralHeader from "./Componentes/LateralHeader";
import api from '../../api'; 
import Swal from "sweetalert2";


const AllContainers = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: none;
  justify-content: center;
  align-items: center;

  .container {
    width: 80%;
  }
`;

const ConfigContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Config = () => {
  const [ativo, setAtivo] = useState(false);
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [id, setId] = useState(sessionStorage.getItem("id"));
  const [dtNascimento, setDtNascimento] = useState("");
  const [originalSenha, setOriginalSenha] = useState("");
  const [originalEmail, setOriginalEmail] = useState("");
  const [originalNome, setOriginalNome] = useState("");
  
  const handleDelete = () => {
    Swal.fire({
      title: "Tem certeza?",
      text: "Você não poderá reverter essa ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D0112B",
      cancelButtonColor: "#08632D",
      confirmButtonText: "Sim, exclua!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        api.delete(`/usuarios/${id}`)
          .then(response => {
            if (response.status === 200) {
              console.log('Usuário excluído com sucesso!');
              sessionStorage.clear();
              window.location.href = "/";
            } else {
              handleApiError(response.data);
            }
          })
          .catch(error => {
            handleApiError(error.response ? error.response.data : error.message);
          });
      }
    });
  };

  const handleApiError = (error) => {
    console.error('Erro ao processar a solicitação:', error);
    Swal.fire({
      icon: 'error',
      title: 'Erro!',
      text: 'Ocorreu um erro ao processar a solicitação.',
    });
  };

  const handleClick = () => {
    setAtivo(!ativo);
    setSenha("");
  };

  useEffect(() => {
    if (id) {
      api.get(`/usuarios/${id}`)
        .then(response => {
          const userData = response.data;
          setEmail(userData.email);
          setNome(userData.nome);
          setOriginalSenha(userData.senha || "");
          setDtNascimento(userData.dtNascimento);
        })
        .catch(error => {
          handleApiError(error.response ? error.response.data : error.message);
        });
    }
  }, [id]);
 
  
  const handleSave = () => {
    const dadosAtualizados = {
      nome: nome,
      email: email,
      dtNascimento: dtNascimento,
    };
  
    if (senha && senha !== originalSenha) {
      dadosAtualizados.senha = senha;
    }
  
    if (Object.keys(dadosAtualizados).length === 0) {
      console.log('Nenhum dado foi alterado, nada será enviado.');
      return;
    }
  
    api.put(`/usuarios/${id}`, dadosAtualizados)
      .then(response => {
        if (response.status === 200) {
          console.log('Usuário atualizado com sucesso!');
          Swal.fire({
            icon: 'success',
            title: 'Dados Alterados!',
            text: 'Você será redirecionado para a página de login.',
          })
          setTimeout(() => {
            window.location.href = "/Login";
          }, 1000);
          sessionStorage.clear();
        } else {
          handleApiError(response.data);
        }
      })
      .catch(error => {
        handleApiError(error.response ? error.response.data : error.message);
      });
  };

  return (
    <>
      <AllContainers>
        <LateralHeader selecionado="config" />

        <div className="container" id="config">

          <h1>Configurações</h1>

          <div className="form">

            <ConfigContainer>

              <Input type="text" name="email" id="email" label="Email" valor={email} change={(e) => setEmail(e.target.value)} />
              <Input type="text" name="nome" id="nome" label="Nome" valor={nome} change={(e) => setNome(e.target.value)} />
              <Input type="password" name="senha" id="senha" label="Senha" valor={senha} change={(e) => setSenha(e.target.value)} />

              <Footer>
                <Button bg="#08632D" color='white' width="45%" height="50px" onClick={() => { handleSave(); handleClick(); }}>
                  Salvar
                </Button>
                
                {id && (
                  <Button bg="#D0112B" color="white" width="45%" height="50px" onClick={handleDelete}>
                    Excluir
                  </Button>
                )}
              </Footer>
            </ConfigContainer>
          </div>
        </div>
      </AllContainers>
    </>
  );
}

export default Config;