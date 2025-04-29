document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.table__row');
    rows.forEach(row => {
        row.addEventListener('click', (e) => {
            let rowActive = document.querySelector('.table__row.active');
            rowActive && rowActive.classList.toggle('active');
            let row = e.target.closest('.table__row');
            row.classList.toggle('active');
        })
    })

    let highcharts = document.querySelectorAll('.highcharts-figure');
    highcharts.forEach(highchart => {
        let childId = highchart.firstElementChild.id
        let data = highchart.getAttribute("data-highcharts-series").split(',').map(Number);
        highchartsFigure(data, childId);
    })
})



const highchartsFigure = (data, elId) =>  Highcharts.chart(elId, {
    title: false,
    subtitle: false,
    tooltip: {
        enabled: false
    },
    chart: {
        type: 'line', // тип диаграммы
        backgroundColor: 'transparent' // прозрачный фон
    },
    yAxis: {
        title: {
            text: false // название оси Y
        },
        labels: {
            enabled: true // показывать метки
        },
        min: 0,
    },
    xAxis: {
        title: {
            text: false // название оси Y
        },
        labels: {
            enabled: true // показывать метки
        }
    },
    series: [{data }],
});