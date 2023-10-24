import styled from "styled-components";
import { Icon } from "../../visaoGeral/funcoes/icons";



const Header = styled.div`
width: 13.1%;
border-top-right-radius: 8px;
border-radius: 0px 15px 15px 0px;
background: #08632D;
background-color:#08632D;
padding: 5% 0 0 0;
position:relative;
`
const PerfilNome = styled.div`
display:flex;
height: 20%;
width:100%;
justify-content:center;
align-items:center;
flex-direction:column;
padding:0;
margin-bottom:30%;
color:#FCFEFD;

.bem-vindo{
    display:flex;
    justify-content:center;
    align-items:center;
    height:20%;
    width:100%;  
    font-size:14px;  
}
.nome{
    justify-content:center;
    align-items:center;
    display:flex;
    height:20%;
    width:100%;
    font-weight:500;
    font-size: 16px;
    
}

.foto{
    display:flex;
    box-sizing: border-box;
    width:100%;
    height:60%;
    justify-content:center;
    align-items:center;
    margin:0;
}

.foto span{
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    height:60px;
    width:60px;
    background-color:white;
}
`

const NavbarLateral = styled.div`
display:flex;
box-sizing: border-box;
height: 50%;
width:100%;
padding: 0 10px;
font-size:12.5px;
flex-direction:column;
margin-bottom:40%;

.selecoes{
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    height:35px;
    width:100%;
    color:white;
    margin-bottom:10px;
}

.selecoes-icone{
    display:flex;
    align-items:center;
    justify-content:center;
    width:35%;
    height: 20%;
}

.selecoes-texto{
    width:80%;
    font-weight:596;
}

.selecionado{
    color:#08632D;
    background-color:white;
}

svg{
    margin-right:15px;
    margin-left:12px;
    
}


`

const Sair = styled.div`
display:flex;
align-items:center;
width:100%;
padding:0 10px;
color:white;
font-weight:596;
position:absolute;
bottom: 5%;
font-size:12.5px;
margin-left:10px;

img{
    margin-right:12px;
    width:22px;
}
`

function Nav() {
    return (
        <>
            <Header>

                <PerfilNome>
                    <div className="foto">
                        <span>
                            <img src={Icon('logo')} />
                        </span>
                    </div>
                    <div className="bem-vindo">
                        Bem Vindo!
                    </div>
                    <div className="nome">
                        Gabriel
                    </div>

                </PerfilNome>
                <NavbarLateral>
                    <div className="selecoes" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
                            <g clip-path="url(#clip0_332_2201)">
                                <path d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_332_2201">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="selecoes-texto">
                            Visão Geral
                        </div>

                    </div>
                    <div className="selecoes selecionado" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#08632D">
                            <g clip-path="url(#clip0_332_2204)">
                                <path d="M21 7.28V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V16.72C21.59 16.37 22 15.74 22 15V9C22 8.26 21.59 7.63 21 7.28ZM20 9V15H13V9H20ZM5 19V5H19V7H13C11.9 7 11 7.9 11 9V15C11 16.1 11.9 17 13 17H19V19H5Z" fill="#08632D" />
                                <path d="M16 13.5C16.8284 13.5 17.5 12.8284 17.5 12C17.5 11.1716 16.8284 10.5 16 10.5C15.1716 10.5 14.5 11.1716 14.5 12C14.5 12.8284 15.1716 13.5 16 13.5Z" fill="#08632D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_332_2204">
                                    <rect width="24" height="24" fill="#08632D" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="selecoes-texto  selecionado ">
                            Lancamentos
                        </div>

                    </div>

                    <div className="selecoes" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_332_2207)">
                                <path d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V10H20V21ZM20 8H4V5H20V8Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_332_2207">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="selecoes-texto">
                            Planejamentos
                        </div>

                    </div>
                    <div className="selecoes" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_332_2210)">
                                <path d="M3.5 18.4898L9.5 12.4798L13.5 16.4798L22 6.91977L20.59 5.50977L13.5 13.4798L9.5 9.47976L2 16.9898L3.5 18.4898Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_332_2210">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="selecoes-texto">
                            Objetivos
                        </div>

                    </div>
                    <div className="selecoes" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_332_2213)">
                                <path d="M19.4298 12.98C19.4698 12.66 19.4998 12.34 19.4998 12C19.4998 11.66 19.4698 11.34 19.4298 11.02L21.5398 9.37C21.7298 9.22 21.7798 8.95 21.6598 8.73L19.6598 5.27C19.5698 5.11 19.3998 5.02 19.2198 5.02C19.1598 5.02 19.0998 5.03 19.0498 5.05L16.5598 6.05C16.0398 5.65 15.4798 5.32 14.8698 5.07L14.4898 2.42C14.4598 2.18 14.2498 2 13.9998 2H9.99984C9.74984 2 9.53984 2.18 9.50984 2.42L9.12984 5.07C8.51984 5.32 7.95984 5.66 7.43984 6.05L4.94984 5.05C4.88984 5.03 4.82984 5.02 4.76984 5.02C4.59984 5.02 4.42984 5.11 4.33984 5.27L2.33984 8.73C2.20984 8.95 2.26984 9.22 2.45984 9.37L4.56984 11.02C4.52984 11.34 4.49984 11.67 4.49984 12C4.49984 12.33 4.52984 12.66 4.56984 12.98L2.45984 14.63C2.26984 14.78 2.21984 15.05 2.33984 15.27L4.33984 18.73C4.42984 18.89 4.59984 18.98 4.77984 18.98C4.83984 18.98 4.89984 18.97 4.94984 18.95L7.43984 17.95C7.95984 18.35 8.51984 18.68 9.12984 18.93L9.50984 21.58C9.53984 21.82 9.74984 22 9.99984 22H13.9998C14.2498 22 14.4598 21.82 14.4898 21.58L14.8698 18.93C15.4798 18.68 16.0398 18.34 16.5598 17.95L19.0498 18.95C19.1098 18.97 19.1698 18.98 19.2298 18.98C19.3998 18.98 19.5698 18.89 19.6598 18.73L21.6598 15.27C21.7798 15.05 21.7298 14.78 21.5398 14.63L19.4298 12.98ZM17.4498 11.27C17.4898 11.58 17.4998 11.79 17.4998 12C17.4998 12.21 17.4798 12.43 17.4498 12.73L17.3098 13.86L18.1998 14.56L19.2798 15.4L18.5798 16.61L17.3098 16.1L16.2698 15.68L15.3698 16.36C14.9398 16.68 14.5298 16.92 14.1198 17.09L13.0598 17.52L12.8998 18.65L12.6998 20H11.2998L11.1098 18.65L10.9498 17.52L9.88984 17.09C9.45984 16.91 9.05984 16.68 8.65984 16.38L7.74984 15.68L6.68984 16.11L5.41984 16.62L4.71984 15.41L5.79984 14.57L6.68984 13.87L6.54984 12.74C6.51984 12.43 6.49984 12.2 6.49984 12C6.49984 11.8 6.51984 11.57 6.54984 11.27L6.68984 10.14L5.79984 9.44L4.71984 8.6L5.41984 7.39L6.68984 7.9L7.72984 8.32L8.62984 7.64C9.05984 7.32 9.46984 7.08 9.87984 6.91L10.9398 6.48L11.0998 5.35L11.2998 4H12.6898L12.8798 5.35L13.0398 6.48L14.0998 6.91C14.5298 7.09 14.9298 7.32 15.3298 7.62L16.2398 8.32L17.2998 7.89L18.5698 7.38L19.2698 8.59L18.1998 9.44L17.3098 10.14L17.4498 11.27ZM11.9998 8C9.78984 8 7.99984 9.79 7.99984 12C7.99984 14.21 9.78984 16 11.9998 16C14.2098 16 15.9998 14.21 15.9998 12C15.9998 9.79 14.2098 8 11.9998 8ZM11.9998 14C10.8998 14 9.99984 13.1 9.99984 12C9.99984 10.9 10.8998 10 11.9998 10C13.0998 10 13.9998 10.9 13.9998 12C13.9998 13.1 13.0998 14 11.9998 14Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_332_2213">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="selecoes-texto">
                            Configurações
                        </div>

                    </div>
                </NavbarLateral>

                <Sair>
                    <img src={Icon('sairIcon')} />
                    Sair
                </Sair>
            </Header>
        </>
    )
}
export default Nav;