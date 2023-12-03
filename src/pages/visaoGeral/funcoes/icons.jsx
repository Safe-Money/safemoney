import visaoIcon from '../../../assets/visaoGeral.svg'
import lancamentosIcon from '../../../assets/lancamentos.svg'
import planejamentosIcon from '../../../assets/planejamentos.svg'
import planejamentosAtiva from '../../../assets/planejamentos-active.svg'
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
import visaoDesativa from '../../../assets/visaoDesactive.png'
import lancamentosAtiva from '../../../assets/lancamentos-active.png';
import objetivosAtiva from '../../../assets/objetivos-active.png';
import configAtiva from '../../../assets/configuracoes-active.svg';
import maisIcon from '../../../assets/Mais.png'
import iconPrato from '../../../assets/iconPrato.png'
import seta1 from '../../../assets/seta.png'
import iconChart1 from '../../../assets/graficIcon.png'
import cardIcon from '../../../assets/cardIcon.png'
import seta22 from '../../../assets/seta22.png'
import seta33 from '../../../assets/seta33.png'
import editar1Icon from '../../../assets/editar1.svg';
import botaoApagarIcon from '../../../assets/botao-apagar1.svg';
import sacoDeDolarIcon from '../../../assets/saco-de-dolar1.svg';
import cartoesIcon from '../../../assets/cartoesIcon.png';
import cartoesAtiva from '../../../assets/cartoesAtiva.png';
import Logo2 from '../../../assets/logo2.png';
import moneyRecive from '../../../assets/money_recive.svg';
import lazer from '../../../assets/lazer.svg';
import gym from '../../../assets/gym.png';
import pet from '../../../assets/pet.png';
import saude from '../../../assets/remedio.png';
import alimentacao from '../../../assets/restaurante.png';
import vestuario from '../../../assets/vestuario.png';
import transporte from '../../../assets/transporte.png';
import economia from '../../../assets/poupanca.png';







const icons = {
    visaoDesativa,
    lancamentosAtiva,
    planejamentosAtiva,
    objetivosAtiva,
    configAtiva,
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
    comidaIcon,
    maisIcon,
    iconPrato,
    seta1,
    iconChart1,
    cardIcon,
    seta22,
    seta33,
    editar1Icon,
    botaoApagarIcon,
    sacoDeDolarIcon,
    cartoesIcon,
    cartoesAtiva,
    Logo2,
    moneyRecive,
    lazer,
    gym,

    pet,
    saude,
    alimentacao, 
    vestuario,
    transporte,
    economia
}

export const Icon = (icon) => {
 
    return icon ? icons[icon] : null
}