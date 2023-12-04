import Modal from "../../../components/Modal";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import api from "../../../api";


const LocalConteudo = styled.div`
display:flex;
height:70%;
width:100%;
flex-direction:column;
justify-content:space-around;
align-items:center;
`

const LocalElementos = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:85%;
height:30%;
`


const BancoSelect = styled.select`
display:flex;
margin:auto;
width: 100%;
padding: 10px;
border: 1px solid rgba(0, 0, 0, 1);
box-sizing: border-box;
box-shadow: 1 1 1 1;
border-radius: 5px;
letter-spacing: 0.8px;
background-color: #FFF;
color: #000;
`;

const LabelInput = styled.div`
display:flex;
flex-direction:column;
margin-bottom:30px;
align-items:center;
color:#08632D;
position: relative;
border: none;
cursor: pointer;
margin: 3% 0;
width:70%;

.label {
  position: absolute;
  top: -10px;
  left:0; 
  transform: translateX(20%);
  background-color: white; 
  padding: 0 10px;
  
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 1); 
  box-sizing: border-box;
  box-shadow: 1 1 1 1;
  border-radius:5px;
  letter-spacing: 0.8px;
  box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);
}


.label_description{
  position: absolute;
  top: -10px; 
  transform: translateX(-170%);
  background-color: white; 
  padding: 0 10px;
}


#select_categoria{
  margin-right:38px;
  box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);
}

#label_total{
    transform: translateX(10%);


`;

function ModalEditar(props) {
  const planejamento = props.planejamento
  const [categorias, setCategorias] = useState([]);
  const [saldo, setSaldo] = useState(planejamento.valorPlanejado);
  const [data, setData] = useState(planejamento.data);
  const [selectedCategoria, setCategoria] = useState(planejamento.categoria.id);
  const idUser = sessionStorage.getItem("id");


  const handleValorChange = (e) => {
    const valorDigitado = e.target.value.replace(/\D/g, '');
    formatarValorNoInput(valorDigitado);
  };

  const formatarValorNoInput = (valor) => {
    const valorFormatado = formatarMoeda(valor);
    if (isNaN(valorFormatado)) return "";

    setSaldo(valorFormatado);
  };

  const formatarMoeda = (saldo) => {
    const valorNumerico = parseFloat(saldo) / 100;
    return valorNumerico.toFixed(2);
  };


  const handleSalvar = async (id) => {

    console.log("Saldo: ", saldo)
    console.log("Data: ", data)
    console.log("Categoria: ", selectedCategoria)
    console.log("Usuario: ", idUser)

    await api.put(`/planejamento/${id}`, {
      valorPlanejado: saldo,
      data: data,
      categoria: {
        id: selectedCategoria,
      },
      usuario: {
        id: idUser,
      
      },
    }).then((response) => {
      props.onClose()
      console.log(response.data)

      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Planejamento alterado com sucesso!',
      }).then(() => {
        window.location.reload();
      })
    }).catch((error) => {
      props.onClose()
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Erro ao alterar planejamento!',
      })
    })
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/categoria/");
        setCategorias(response.data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }

      console.log(categorias);
    };
  
    fetchData();
  }, []);

  return (
    <Modal title="Adicionar Planejamento" cancelar={props.onClose} salvar={() => handleSalvar(planejamento.id)}>
      <LocalConteudo>
        <LocalElementos>

          <LabelInput>
            <div className="label">Categoria</div>
            <BancoSelect
              id="select_categoria"
              value={selectedCategoria}
              onChange={(e) => {
                setCategoria(e.target.value);
              }}
            >
             {categorias.length > 0 ? categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nome}
                </option>
              )): null}
            </BancoSelect>
          </LabelInput>

        </LocalElementos>
        <LocalElementos>

          <LabelInput>
            <div className="label">Valor Planejado(R$)</div>
            <input
              id="select_saldo"
              type="text"
              className="input-field"
              name="saldo"
              value={saldo}
              onChange={(e) => {
                handleValorChange(e);
              }}
            />
          </LabelInput>

        </LocalElementos>

        <LocalElementos>

          <LabelInput>
            <div className="label">Data Final:</div>
            <input
              id="select_data"
              type="date"
              className="input-field"
              name="data"
              value={data}
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
          </LabelInput>

        </LocalElementos>
      </LocalConteudo>
    </Modal>
  )
}

export default ModalEditar;