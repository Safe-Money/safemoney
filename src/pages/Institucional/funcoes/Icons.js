import calendario from '../../../assets/calendario.png'
import categoria from '../../../assets/categoria.png'
import fatura from '../../../assets/fatura.png'
import material from '../../../assets/material.png'
import index from '../../../assets/imagemIndex.png'
import access from '../../../assets/access.png'
import play from '../../../assets/chart.png'
import chart from '../../../assets/chart2.png'
import chartSaldo from '../../../assets/chart-saldo.png'
import chartFatura from '../../../assets/ChartFatura.png'
import check from '../../../assets/check-solid.svg'
import comece from '../../../assets/comece.png'
import sobre from '../../../assets/sobre.png'
import iconSobre from '../../../assets/sobre-icon.svg'
import chat from '../../../assets/chat.svg'
import logo from '../../../assets/Logo.png'
import facebook from '../../../assets/Facebook.png'
import insta from '../../../assets/insta.png'
import linkedin from '../../../assets/linkedin.png'
import twitter from '../../../assets/twitter.png'
import formas from '../../../assets/Group 3.png'
import imagemFormas from '../../../assets/Group 5.png'
import video from '../../../assets/video.mp4'



const icons = {
    calendario,
    categoria,
    fatura,
    material,
    index,
    access,
    play,
    chart,
    chartSaldo,
    chartFatura,
    check,
    comece,
    sobre,
    iconSobre,
    chat,
    logo,
    facebook,
    insta,
    twitter,
    linkedin,
    formas,
    imagemFormas,
    video
}

export const Icon = (icon) => {
    return icon ? icons[icon] : null
}