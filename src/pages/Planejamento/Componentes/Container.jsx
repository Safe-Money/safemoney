import { useState, useEffect } from "react";
import { Icon } from "../../visaoGeral/funcoes/icons";
import "../styles/progressBar.css"

const createContainer = ({ id, categoria, valor, totalGasto, progresso, excluirConta, sweetEditar }) => {

    const [containerIds, setContainerIds] = useState([]);
    const [alerta, setAlerta] = useState(false);

    useEffect(() => {
        const newContainerId = `container-lista-${containerIds.length + 1}`;
        setContainerIds((prevIds) => [...prevIds, newContainerId]);

        if(progresso > 80){
            setAlerta(true);
        }
    }, []);



    const [selectedModal, setSelectedModal] = useState(null);


    const closeModal = () => {
        setSelectedModal(null);
    };

    return (
        <div className="container-lista" id={`container-lista-${id}`}>
            <span className="icone-lista">
                <img src={Icon(`${categoria}`)} alt={`${categoria} Icon`} />
            </span>
            <span className="valor-lista">{valor}</span>
            <span className="data-lista">{totalGasto}</span>
            <span className="conta-lista">
                <span className="barra">
                    <progress className={alerta ? "progressAlert" : "progressBar"} value={progresso} max="100"></progress>
                </span>
                {progresso}%
            </span>
            <span className="acoes-lista">
                <img src={Icon('editar1Icon')} alt="Editar" onClick={() => sweetEditar()} />
                <img src={Icon('botaoApagarIcon')} alt="Apagar" onClick={() => excluirConta()} />
                {selectedModal === 'editar' && <ModalEditar onClose={closeModal} />}
            </span>
        </div>
    );
};

export default createContainer;