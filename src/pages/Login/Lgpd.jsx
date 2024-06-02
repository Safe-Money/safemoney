import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../visaoGeral/funcoes/icons';
import "../../assets/css/pages/lgpd.css"

const Lgpd = () => {

    return (
        <div class="container-lgpd">
            <div class="logo">
                <img className="loginImg" src={Icon('Logo2')} alt="Safemoney logo" />
            </div>

            <h1>Termos de Uso e Política de Privacidade</h1>

            <p>A Safemoney valoriza a privacidade e a segurança dos dados pessoais de seus usuários. Este documento descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.</p>

            <h2>1. Coleta de Dados Pessoais</h2>
            <p>Coletamos as seguintes informações pessoais dos usuários:</p>
            <ul>
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Informações financeiras, como contas bancárias, saldos, cartões de crédito, limites e gastos</li>
                <li>Outras informações relevantes para a gestão financeira pessoal</li>
            </ul>

            <h2>2. Uso dos Dados Pessoais</h2>
            <p>Os dados coletados são utilizados para as seguintes finalidades:</p>
            <ul>
                <li>Fornecer e melhorar os serviços oferecidos pela Safemoney</li>
                <li>Gerenciar o acesso e o uso do aplicativo</li>
                <li>Personalizar a experiência do usuário</li>
                <li>Enviar comunicações relevantes, como notificações e atualizações do serviço</li>
            </ul>

            <h2>3. Compartilhamento de Dados</h2>
            <p>Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para cumprir obrigações legais ou mediante seu consentimento explícito.</p>

            <h2>4. Segurança dos Dados</h2>
            <p>A Safemoney adota uma abordagem abrangente para garantir a segurança dos dados pessoais dos usuários. Implementamos uma série de medidas técnicas e administrativas para proteger as informações contra acessos não autorizados, perda, alteração ou destruição. Entre essas medidas, destacamos:</p>
            <ul>
                <li><strong>Criptografia:</strong> Utilizamos criptografia avançada (SSL/TLS) para proteger os dados transmitidos entre os usuários e nossos servidores, garantindo que as informações pessoais sejam transmitidas de forma segura.</li>
                <li><strong>Armazenamento Seguro:</strong> Os dados são armazenados em servidores protegidos por firewalls e outras tecnologias de segurança de última geração, localizados em data centers que seguem rigorosos padrões de segurança física e digital.</li>
                <li><strong>Controle de Acesso:</strong> Restringimos o acesso aos dados pessoais a funcionários e colaboradores que necessitam dessas informações para realizar suas funções. Todos os nossos colaboradores são treinados em práticas de privacidade e segurança de dados.</li>
                <li><strong>Auditorias e Monitoramento:</strong> Realizamos auditorias periódicas e monitoramento contínuo de nossos sistemas para detectar e responder prontamente a quaisquer vulnerabilidades ou incidentes de segurança.</li>
                <li><strong>Gestão de Vulnerabilidades:</strong> Implementamos políticas de gestão de vulnerabilidades que incluem a aplicação de patches e atualizações regulares em nossos sistemas e software para prevenir possíveis brechas de segurança.</li>
                <li><strong>Backup Regular:</strong> Mantemos backups regulares e seguros dos dados pessoais para garantir a recuperação em caso de perda de dados ou incidentes de segurança.</li>
                <li><strong>Planos de Resposta a Incidentes:</strong> Desenvolvemos e mantemos planos de resposta a incidentes de segurança para garantir uma resposta rápida e eficaz a quaisquer eventos que possam comprometer a segurança dos dados pessoais.</li>
            </ul>
            <p>Essas medidas são continuamente revisadas e aprimoradas para garantir que estamos sempre à frente das ameaças e tendências de segurança cibernética.</p>

            <h2>5. Direitos dos Titulares dos Dados</h2>
            <p>Os usuários têm os seguintes direitos em relação aos seus dados pessoais:</p>
            <ul>
                <li>Acesso aos dados pessoais</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos</li>
                <li>Portabilidade dos dados a outro fornecedor de serviço</li>
                <li>Eliminação dos dados pessoais tratados com consentimento</li>
                <li>Informação sobre as entidades com as quais seus dados foram compartilhados</li>
                <li>Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa</li>
                <li>Revogação do consentimento</li>
            </ul>

            <h2>6. Alterações nesta Política</h2>
            <p>Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Qualquer alteração será comunicada aos usuários através dos canais habituais de comunicação.</p>

            <h2>7. Contato</h2>
            <p>Em caso de dúvidas ou solicitações relacionadas a esta Política de Privacidade, entre em contato conosco através do e-mail: suporte@safemoney.com.br.</p>

            <p>Data da última atualização: 2 de junho de 2024</p>
        </div >
    );
};

export default Lgpd;