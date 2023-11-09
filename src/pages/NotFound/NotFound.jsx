import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

        return (
            <div>
                Opa voce nao deveria estar aqui volte para onde voce estava
                <button onClick={() => navigate(-1)}>Voltar para onde eu estava</button>
            </div>
        )
}

export default NotFound;
