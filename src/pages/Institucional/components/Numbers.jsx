import styled from "styled-components"

const Divisoria = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20%;
    


    .obj{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center; 
    }

`

const Title = styled.p`
    font-size: 50px;
    font-weight: bolder;
    color: #08632D;
`

const Subtitle = styled.p`
    font-size: 16px;
    font-weight: bolder;
    margin-top: -30px;
    margin-bottom: 100px;
`

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 10px;
    margin-top: 80px;
    width: 100%;
`

function Numbers(props) {

    const objects = [
        {
            title: 'Usuários Cadastrados',
            num: props.cadastros
        },
        {
            title: 'Visitas Mensais',
            num: props.visitas
        },
        {
            title: 'Clientes satisfeitos',
            num: props.clientes
        }
    ]

    return (
        <>
            <div>
                <Divisoria className="comece scroll-reveal-element">
                    <Container>
                        {objects.map((numero) => (
                            <div className="obj">
                                <Title>{numero.num}</Title>
                                <Subtitle>{numero.title}</Subtitle>
                            </div>
                        ))}
                    </Container>
                </Divisoria>
            </div>
        </>
    )
}

export default Numbers
