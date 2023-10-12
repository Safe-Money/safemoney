export const estilo = () =>{
    return `display: flex;
    align-items: center;
    width: 50%;
    margin-top: 20%;

   img{
        position: absolute;
   }

   .play{
        margin: 0 0 -1% 20%;
   }

   .chartFatura{
        margin: 0 5% 20% 15%;
   }

   .chart{
        height: 70%;
        margin: 10% 0 0 5%;
   }

   .chartSaldo{
        margin: 0 0 27% 0;
   } `
}

export const graficos = () => {
    return ["chart", "chartFatura" ,"chartSaldo", "play"]
}