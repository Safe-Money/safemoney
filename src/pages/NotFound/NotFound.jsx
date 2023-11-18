import React from 'react';
import notFound from '../../assets/notfound.svg';
import styled from 'styled-components';
import {Button} from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Titulo = styled.h1`
    margin: 20px 0;
`

function NotFound() {
    const navigate = useNavigate();

        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px'}}>
                <img src={notFound} style={{height: '80vh', margin: '0 20%'}}/>
                <Titulo>Página não encontrada</Titulo>
                <Button bg="#08632D" color="white" onClick={() => navigate(-1)}>Voltar</Button>
            </div>
        )
}

export default NotFound;
