import visaoIcon from '../../../assets/visaoGeral.svg'
import lancamentosIcon from '../../../assets/lancamentos.svg'
import planejamentosIcon from '../../../assets/planejamentos.svg'
import objetivosIcon from '../../../assets/objetivos.svg'
import configuracoesIcon from '../../../assets/configuracoes.svg'
import logo from '../../../assets/logo.svg';
import sairIcon from '../../../assets/sair.svg';
import bradescoIcon from '../../../assets/Bradesco-logo 2.svg';
import visaIcon from '../../../assets/Visa-logo 1.svg';
import santanderIcon from '../../../assets/santander-banner 1.svg';
import itauIcon from '../../../assets/logo-itau 2.svg';
import masterIcon from '../../../assets/Mastercard-logo 2.svg';
import eloIcon from '../../../assets/elo-logo 2.svg';
import negativoIcon from '../../../assets/negativo 2.svg';
import positivoIcon from '../../../assets/positivo 2.svg';
import transferenciaIcon from '../../../assets/transferencia.svg';
import notificacaoIcon from '../../../assets/sino-de-notificacao 2.svg';
import contasIcon from '../../../assets/ContasIcon.svg';
import lazerIcon from '../../../assets/lazer.svg';
import medicoIcon from '../../../assets/medico.svg';
import comidaIcon from '../../../assets/comida.svg';


const icons = {
    visaoIcon,
    lancamentosIcon,
    planejamentosIcon,
    objetivosIcon,
    configuracoesIcon,
    logo,
    sairIcon,
    bradescoIcon,
    visaIcon,
    santanderIcon,
    itauIcon,
    masterIcon,
    eloIcon,
    negativoIcon,
    positivoIcon,
    transferenciaIcon,
    notificacaoIcon,
    contasIcon,
    lazerIcon,
    medicoIcon,
    comidaIcon
}

export const Icon = (icon) => {
    return icon ? icons[icon] : null
}