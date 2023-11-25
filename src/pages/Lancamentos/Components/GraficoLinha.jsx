import React from 'react';
import ReactApexChart from 'react-apexcharts';

const GraficoLinha = () => {
  const lineChartData = [
    { data: 'Jan', valor: 100 },
    { data: 'Fev', valor: 10 },
    { data: 'Mar', valor: 120 },
    { data: 'Abr', valor: 10 },
    { data: 'Mai', valor: 200 },
    { data: 'Jun', valor: 20 },
  ];

  const options = {
    chart: {
      height: '100%',
      type: 'line',
    },
    series: [
      {
        name: 'Gastos',
        data: lineChartData.map((item) => item.valor),
      },
    ],
    xaxis: {
      categories: lineChartData.map((item) => item.data),
      labels: {
        show: false,
      },
    },
    stroke: {
      width: 2, // Ajuste o valor conforme necessário para diminuir a espessura da linha
      colors: ['#08632D'],
    },
  };

  const style = {
    position: 'absolute',
    padding: '30px 20px 20px 20px',
    left: 0,
    top: 10,
    width: '70%',
    height: '70%',
  };

  return <ReactApexChart options={options} series={options.series} type="line" style={style} />;
};

export default GraficoLinha;
