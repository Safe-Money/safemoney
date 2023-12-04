import React from 'react';
import ReactApexChart from 'react-apexcharts';

const GraficoPizzaApex = (props) => {
    const opcoesGraficoPizza = {
        cores: ['#C568F6', '#53246B', '#F81F1F', '#FFA588', '#00F828'],
    };

    const options = {
        labels: Array.isArray(props.dados) ? props.dados.map(item => item.categoria) : [],
        colors: opcoesGraficoPizza.cores,
        legend: {
            show: true,
        },
        dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
                return opts.w.globals.series[opts.seriesIndex];
            },
            style: {
                fontSize: '0px',
                colors: ['white', '#333', '#555', '#777', '#999'],
            },
        },
    };

    const style = {
        position: 'absolute',
        left: 20,
        top: 60,
        width: '50%',
        height: '50%',
    };

    return (
        <ReactApexChart
            type="pie"
            options={options}
            series={Array.isArray(props.dados) ? props.dados.map(item => item.valor) : 0}
            style={style}
        />
    );
};

export default GraficoPizzaApex;