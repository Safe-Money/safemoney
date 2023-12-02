import { Icon } from "../../visaoGeral/funcoes/icons";

function LancamentoFixoContainer(props) {
    return (
        <>
            <div className="container-lista">

              <span className="icone-lista">
                <img src={Icon('lazerIcon')} />
              </span>
              <span className="nome-lista">{props.nome}</span>
              <span className="valor-lista">{props.valor}</span>
              <span className="data-lista">{props.data}</span>
            </div>
        </>
    )
}

export default LancamentoFixoContainer;