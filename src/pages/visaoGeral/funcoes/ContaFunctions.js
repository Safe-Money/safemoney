import React, { useEffect, useState } from 'react';


export function MinhasContas(props) {
    const idUser = sessionStorage.getItem('id');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contas, setContas] = useState([]);


    const [novaConta, setNovaConta] = useState({
        banco: '',
        tipoConta: '',
        saldo: ''
    })
    const openModal = () => {
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setIsModalOpen(false);
    };


    const handleSalvarConta = (novaConta) => {
        const saldoString = novaConta.saldo.toString();

        const saldoNumerico = parseFloat(saldoString.replace(/[^\d.-]/g, '')); // Remove caracteres não numéricos


        // Verifica se o saldo é um número válido
        if (!isNaN(saldoNumerico) && saldoNumerico >= 0) {
            novaConta.saldo = saldoNumerico;
            // Adiciona a nova conta ao estado
            novaConta.banco = capitalizeFirstLetter(novaConta.banco); // Capitalizar a primeira letra do banco
            setContas([...contas, novaConta]);
            setNovaConta({
                banco: '',
                tipoConta: '',
                saldo: ''
            });
            closeModal();
        } else {
            // Mostra uma mensagem de erro ou lida com o erro de outra forma
            console.error('Saldo inválido');
        }

    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNovaConta({
            ...novaConta,
            [name]: value
        });
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    useEffect(() => {
        const fetchContas = async () => {
            try {
                const response = await api.get(`/contas/listar-contas/${idUser}`);
                setContas(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchContas();
    }, []);
}