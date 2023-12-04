import { useState, useEffect } from "react";
import { Icon } from "../../visaoGeral/funcoes/icons";

const createContainer = ({ id, categoria, valor, data, progresso, excluirConta, sweetEditar }) => {

    const [containerIds, setContainerIds] = useState([]);

    useEffect(() => {
        const newContainerId = `container-lista-${containerIds.length + 1}`;
        setContainerIds((prevIds) => [...prevIds, newContainerId]);
    }, []);

    const progressoFloat = parseFloat(progresso?.replace('%', '')) || 0;
    const teste = isNaN(progressoFloat) || !isFinite(progressoFloat) ? 0.1 : progressoFloat;

    const progressoStyle2 = {
        width: `${teste}%`,
        backgroundColor: teste > 100 ? 'red' : 'rgba(152, 211, 137, 1)',
    };
    const [selectedModal, setSelectedModal] = useState(null);

    const openModal = (modalType) => {
        setSelectedModal(modalType);
    };

    const closeModal = () => {
        setSelectedModal(null);
    };

    return (
        <div className="container-lista" id={`container-lista-${id}`}>
            <span className="icone-lista">
                <img src={Icon(`${categoria}`)} alt={`${categoria} Icon`} />
            </span>
            <span className="valor-lista">{valor}</span>
            <span className="data-lista">{data}</span>
            <span className="conta-lista">
                <span className="barra">
                    <span className="progressoBarra" style={progressoStyle2}></span>
                </span>
                {progresso}
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