import Modal from "../../../components/Modal2";
import styled from "styled-components";
import { useState, useEffect } from "react";
import api from '../../../API';
import Swal from "sweetalert2";

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
width:90%;
height:30%;
`


const BancoSelect = styled.select`
display:flex;
margin:auto;
width: 80%;
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
width:86%;

.label {
  position: absolute;
  top: -10px;
  left:0; 
  transform: translateX(20%);
  background-color: white; 
  padding: 0 10px;
  
}

.input-field {
  width: 80%;
  margin-right:25px;
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

.input-date{
  width: 80%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 1); 
  box-sizing: border-box;
  box-shadow: 1 1 1 1;
  border-radius:5px;
  letter-spacing: 0.8px;
  margin-left:27px;
  box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);
}

#label_date{
  margin-left:5px;
  transform: translateX(70%);
}
#label_origem{
  transform: translateX(60%);

}
#label_parcelas{
  transform: translateX(56%);
}

#select_categoria{
  margin-right:38px;
  box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);
}

#select_origem{
  margin-left:38px;
  box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);
}

#select_parcelas{
  margin-left:38px;
  box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);
}

.despesaFixa{
  width:20px;
}
`;

const DescricaoInput = styled.div`
width:100%;


.input-description{
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 1); 
  box-sizing: border-box;
  box-shadow: 1 1 1 1;
  border-radius:5px;
  letter-spacing: 0.8px;
  box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);
}
`

function ModalFatura(props) {
    // const contas = props.contas;
    const [selectedBanco, setContaSelecionada] = useState(null);
    const [saldo, setSaldo] = useState("");
    const [selectedCategoria, setCategoria] = useState(null);
    const [date, setDate] = useState("");
    const [nome, setDescription] = useState("");
    const [parcelasDisplay, setParcelasDisplay] = useState('none');
    const [desativadoDisplay, setDesativadoDisplay] = useState('block');
    const [ativarDisplay, setAtivarDisplay] = useState('none');
    const [cartoesUsuario, setCartoesUsuario] = useState([]);
    const [error, setError] = useState(null);
    const [selectedCategoriaId, setCategoriaSelecionadaId] = useState(null);
    const [categorias, setCategorias] = useState([]);
    const [selectedParcelas, setParcelas] = useState(1);

    const [selectedCartao, setSelectedCartao] = useState(props.cartaoOrigem);
    const [selectedCartaoId, setCartaoSelecionado] = useState(props.cartaoOrigem.id);




    useEffect(() => {
        api.get("/categoria/")
            .then(response => {
                console.log('Categorias obtidas com sucesso:', response.data);

                setCategorias(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter categorias:', error);
            });
    }, []);


    useEffect(() => {
        const userId = sessionStorage.getItem('id');
        if (userId) {
            api.get(`/cartao-credito/listar-cartoes/${userId}`)
                .then(response => {
                    console.log('Cartões do usuário:', response.data);
                    setCartoesUsuario(Array.isArray(response.data) ? response.data : []);
                })
                .catch(error => {
                    console.error('Erro ao buscar cartões do usuário:', error);
                });
        } else {
            console.error('ID do usuário não encontrado na sessionStorage.');
        }
    }, []);


    const handleSalvar = () => {
        const valorNumerico = parseFloat(saldo.replace('R$', '').replace(',', '.'));

        const dadosASalvar = {
            nome: nome,
            data: date,
            valor: valorNumerico,
            parcelas: parseInt(selectedParcelas),
            categoria: {
                id: parseInt(selectedCategoriaId),
            },
            tipo: {
                id: 3,
            },
            cartao: {
                id: parseInt(selectedCartaoId),
            },
        };
        api.post("/transacoes/despesa-credito", dadosASalvar)
            .then(response => {
                console.log('Fatura cadastrada com sucesso:', response.data);
                window.location.reload();
                Swal.fire({
                    icon: "success",
                    title: "Fatura cadastrada com sucesso",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.error('Erro ao cadastrar a fatura:', error);
                console.log('Payload da Requisição:', dadosASalvar);
                if (error.response) {
                    console.error('Status da resposta:', error.response.status);
                    console.error('Dados da resposta:', error.response.data);
                } else if (error.request) {
                    console.error('Nenhuma resposta recebida. Solicitação:', error.request);
                } else {
                    console.error('Erro durante a configuração da solicitação:', error.message);
                }
            });

        props.onClose();
    };



    const handleValorChange = (e) => {
        const valorDigitado = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
        formatarValorNoInput(valorDigitado);
    };

    const formatarValorNoInput = (saldo) => {
        const valorFormatado = formatarMoeda(saldo);
        // // Atualize o valor no estado
        setSaldo(valorFormatado);
    };

    const formatarMoeda = (saldo) => {
        const valorNumerico = parseFloat(saldo) / 100; // Converte centavos para reais
        const valorFormatado = valorNumerico.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        return valorFormatado;
    };


    const toggleSVG = () => {
        setDesativadoDisplay((prevState) => (prevState === 'block' ? 'none' : 'block'));
        setAtivarDisplay((prevState) => (prevState === 'block' ? 'none' : 'block'));

    };


    return (
        <Modal title="Adicionar Fatura" cancelar={props.onClose} salvar={handleSalvar}>
            <LocalConteudo>
                <LocalElementos>

                    <LabelInput>
                        <div className="label">Categoria</div>
                        <BancoSelect
                            id="select_categoria"
                            value={selectedCategoriaId}
                            onChange={(e) => {
                                setCategoriaSelecionadaId(Number(e.target.value));
                                setCategoriaSelecionada(e.target.value);
                            }}
                        >
                            <option value="">Categoria</option>
                            {categorias && categorias.map((categoria) => (
                                <option key={categoria.id} value={categoria.id}>

                                    {categoria.nome}
                                </option>
                            ))}
                        </BancoSelect>
                    </LabelInput>

                    <LabelInput>
                        <div className="label" id="label_origem">Origem</div>
                        <BancoSelect
                            id="select_origem"
                    value={selectedCartao?.id}
                            onChange={(e) => {
                                setCartaoSelecionado(e.target.value);
                                const cartaoSelecionado = cartoesUsuario.find(cartao => cartao.id === e.target.value);
                                setSelectedCartao(cartaoSelecionado);
                            }}
                        >
                            <option value="">Selecione</option>
                            {cartoesUsuario.map((cartao) => (
                                <option key={cartao.id} value={cartao.id}>
                                    {cartao.nome} - {cartao.bandeira}
                                </option>
                            ))}
                        </BancoSelect>
                    </LabelInput>

                </LocalElementos>
                <LocalElementos>

                    <LabelInput>
                        <div className="label">Valor (R$)</div>
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

                    <LabelInput>
                        <div className="label" id="label_date">Data</div>
                        <input
                            id="input_date"
                            type="date"
                            className="input-date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </LabelInput>
                </LocalElementos>

                <LocalElementos>

                    <LabelInput>
                        <LabelInput>
                            <div className="despesaFixa">
                                <label style={{
                                    width: '150px',
                                    marginLeft: '50px',
                                    padding: '0 8px',
                                    color: '#08632D',
                                    fontSize: '12px',
                                    position: 'absolute',
                                    backgroundColor: 'white',
                                    left: 0,
                                    top: 0,
                                    marginTop: -9,
                                }} htmlFor="nomePlano">Despesa Fixa</label>

                                <svg
                                    id="desativado"
                                    style={{
                                        display: desativadoDisplay,
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        marginTop: -9,
                                        cursor: 'pointer',
                                    }}
                                    width="36"
                                    height="15"
                                    viewBox="0 0 36 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={toggleSVG}
                                >
                                    <rect width="36" height="15" rx="7.5" fill="#E6E6E6" />
                                    <ellipse cx="8" cy="7.5" rx="8" ry="7.5" fill="#568C6D" />
                                </svg>

                                <svg
                                    id="ativar"
                                    style={{
                                        display: ativarDisplay,
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        marginTop: -9,
                                        cursor: 'pointer',
                                    }}
                                    width="36"
                                    height="15"
                                    viewBox="0 0 36 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={toggleSVG}
                                >
                                    <rect width="36" height="15" rx="7.5" fill="#E6E6E6" />
                                    <ellipse cx="28" cy="7.5" rx="8" ry="7.5" fill="#3ABA6F" />
                                </svg>
                            </div>
                        </LabelInput>
                    </LabelInput>

                    <LabelInput>
                        <div className="label" id="label_parcelas">Parcelas</div>
                        <BancoSelect id="select_parcelas" value={selectedParcelas} onChange={(e) => setParcelas(e.target.value)}>
                            <option value="1">1 vez</option>
                            <option value="2">2 vezes</option>
                            <option value="3">3 vezes</option>
                            <option value="4">4 vezes</option>
                            <option value="5">5 vezes</option>
                            <option value="6">6 vezes</option>
                            <option value="7">7 vezes</option>
                        </BancoSelect>
                    </LabelInput>

                </LocalElementos>

                <LabelInput>
                    <div className="label_description">Nome</div>
                    <DescricaoInput>
                        <input
                            id="input_description"
                            type="text"
                            className="input-description"
                            name="nome"
                            value={nome}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </DescricaoInput>
                </LabelInput>
            </LocalConteudo>
        </Modal>
    )
}

export default ModalFatura;