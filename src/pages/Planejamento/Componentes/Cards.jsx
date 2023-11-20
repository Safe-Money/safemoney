import styled from "styled-components";
import { Icon } from "../../visaoGeral/funcoes/icons";

const LocalCard = styled.div`
display:flex;
width:100%;
height:100%;
justify-content:space-between;
`

const Card = styled.div`
display:flex;
width:24%;
height:100%;
background: linear-gradient(to right, #08632D, #08632D 3%, #ffffff 3%, #ffffff);
border-radius:10px;
padding:10px 10px 10px 20px;
justify-content:space-between;

.logo-texto-numero{
    display:flex;
    flex-direction:column;
    height:100%;
    width:100%;
    justify-content:space-around;
}

.logo{
    display:flex;
}
.texto{
    display:flex;
    font-weight:700;
    font-size:15px;
}
.numero{
    display:flex;
    background-color:#C1FAC6;
    width:60%;
    font-size:14px;
    border-radius:10px;
    padding:1px 1px 1px 10px;
}

img{
    padding:3px;
    border-radius:7px;
    background-color:#C1FAC6;
}

`



function Cards() {

    return (
        <>
            <LocalCard>
                <Card>
                    <div className="logo-texto-numero">
                        <div className="logo">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="22" height="22" rx="8" fill="#2FED42" fill-opacity="0.3" />
                                <path d="M8.625 12.8127C8.625 13.5402 9.1875 14.1252 9.8775 14.1252H11.2875C11.8875 14.1252 12.375 13.6152 12.375 12.9777C12.375 12.2952 12.075 12.0477 11.6325 11.8902L9.375 11.1027C8.9325 10.9452 8.63251 10.7052 8.63251 10.0152C8.63251 9.38518 9.12 8.86768 9.72 8.86768H11.13C11.82 8.86768 12.3825 9.45268 12.3825 10.1802" stroke="#292D32" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18 11.5C18 15.64 14.64 19 10.5 19C6.36 19 3 15.64 3 11.5C3 7.36 6.36 4 10.5 4" stroke="#292D32" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.999 7V4H14.999" stroke="#292D32" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.249 7.75L17.999 4" stroke="#292D32" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div className="texto">
                            Valor planejado no mês
                        </div>
                        <div className="numero">
                            R$ 10.000,00
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="logo-texto-numero">
                        <div className="logo">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="22" height="22" rx="8" fill="#2FED42" fill-opacity="0.3" />
                                <path d="M8.625 12.8127C8.625 13.5402 9.1875 14.1252 9.8775 14.1252H11.2875C11.8875 14.1252 12.375 13.6152 12.375 12.9777C12.375 12.2952 12.075 12.0477 11.6325 11.8902L9.375 11.1027C8.9325 10.9452 8.63251 10.7052 8.63251 10.0152C8.63251 9.38518 9.12 8.86768 9.72 8.86768H11.13C11.82 8.86768 12.3825 9.45268 12.3825 10.1802" stroke="#292D32" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18 11.5C18 15.64 14.64 19 10.5 19C6.36 19 3 15.64 3 11.5C3 7.36 6.36 4 10.5 4" stroke="#292D32" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.999 7V4H14.999" stroke="#292D32" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.249 7.75L17.999 4" stroke="#292D32" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div className="texto">
                            Valor planejado no mês
                        </div>
                        <div className="numero">
                            R$ 10.000,00
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="logo-texto-numero">
                        <div className="logo">

                        <img src={Icon('sacoDeDolarIcon')}  />


                        </div>
                        <div className="texto">
                            Categorias sem Alerta
                        </div>
                        <div className="numero">
                            2
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="logo-texto-numero">
                        <div className="logo">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="22" height="22" rx="8" fill="#2FED42" fill-opacity="0.3" />
                                <path d="M9.93316 12.685L9.66316 5.5H11.3582L11.0732 12.685H9.93316ZM10.5182 16.09C10.2382 16.09 10.0032 15.995 9.81316 15.805C9.62316 15.615 9.52816 15.39 9.52816 15.13C9.52816 14.85 9.62316 14.62 9.81316 14.44C10.0032 14.26 10.2382 14.17 10.5182 14.17C10.7982 14.17 11.0282 14.26 11.2082 14.44C11.3882 14.62 11.4782 14.85 11.4782 15.13C11.4782 15.39 11.3882 15.615 11.2082 15.805C11.0282 15.995 10.7982 16.09 10.5182 16.09Z" fill="black" />
                            </svg>

                        </div>
                        <div className="texto">
                            Categoria com +2 alertas
                        </div>
                        <div className="numero">
                            R$ 10.000,00
                        </div>
                    </div>
                </Card>

            </LocalCard>

        </>
    )
}

export default Cards;
