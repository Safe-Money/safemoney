import { Icon } from "../../visaoGeral/funcoes/icons";


function LancamentoFixoContainer(props) {

  function removerAcentos(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }


  return (
    <>
      <div className="container-lista">

        <span className="icone-lista">
          <img src={Icon(removerAcentos(props.categoria))} />
        </span>
        <span className="nome-lista">{props.nome}</span>
        <span className="valor-lista">{props.valor}</span>
        <span className="data-lista">{props.data}</span>
      </div>
    </>
  )
}

export default LancamentoFixoContainer;