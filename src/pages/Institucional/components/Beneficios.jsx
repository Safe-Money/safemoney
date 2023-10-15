import styled from "styled-components";

const Content = styled.div`

flex-shrink: 0;
display: flex;
flex-direction: column;
justify-content: center; 
width: 264px;
height: 264.39px;
align-items: left;
box-shadow: 8px 8px 8px 5px #CCC;
margin-left: 30px; 


`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px;

    .titulo{
        
        font-weight: 750;
        color: black;
    }

    .subtitle{
        width: 100%;
        font-size:15px;
        color:#5F5F5F;
    }
`

const Icon = styled.div`
    border-radius: 33px;
    padding: 5px;
    display: flex;
    height: 8vh;
    width: 4vw;
    background-color: #08632D;

    img{
        height: 28px;
        margin: auto;
    }
`

const Line = styled.div`
    background-color: #08632D;
    height: 2px;
    border-radius: 5px;
    width: 20%
`

function Beneficio(props) {
    return (
        <>
            <Content >
                <Info>
                    <Icon>
                        <img src={props.img} alt="icone" />
                    </Icon>

                    <p className="titulo">{props.title}</p>

                    <Line></Line>

                    <div className="subtitle">
                        <p>{props.subtitle}</p>
                    </div>
                </Info>
            </Content>
        </>
    )
}

export default Beneficio