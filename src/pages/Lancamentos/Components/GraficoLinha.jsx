import React from 'react';
import ReactApexChart from 'react-apexcharts';

const GraficoLinha = (props) => {
  const lineChartData = props.dados;

  const options = {
    chart: {
      height: '100%',
      type: 'line',
    },
    series: [
      {
        name: 'Gastos',
        data: lineChartData != null ? lineChartData.map((item) => item.valor) : 0,
      },
    ],
    xaxis: {
      categories: lineChartData != null ? lineChartData.map((item) => item.data) : 0,
      labels: {
        show: true,
      },
    },
    stroke: {
      width: 2, // Ajuste o valor conforme necessário para diminuir a espessura da linha
      colors: ['#08632D'],
    },
  };  

  return <ReactApexChart options={options} series={options.series} type="line" style={props.style} />;
};

export default GraficoLinha;
