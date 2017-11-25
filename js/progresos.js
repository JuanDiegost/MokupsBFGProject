
/**
 * Grafica peso
 */
Chart.defaults.global.legend.position="bottom";

var lineCtx =  document.getElementById("peso");
var myLineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
    labels: ["Enero", "Febrero", "Marzo", "April", "Mayo", "Junio", "Julio","Septiembre", "Octubre","Nobiembre","Diciembre"],
    datasets: [
        {
            label: "Peso(Kg)",
            fill: true,
            lineTension: 0.2,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(255,0,0,1)",
            pointHoverBorderColor: "rgba(255,0,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [90, 95, 80, 81, 76, 75, 75,75,74,73],
            spanGaps: false,
        }
    ]
},
    options: {
        title: {
            display: true,
            text: 'Peso'
        },
        scales: {
            xAxes: [{
                display: true
            }]
        }
    }
});

/**
 * Grafica Inidice de Masa Muscular
 */
Chart.defaults.global.legend.position="bottom";

var lineCtx =  document.getElementById("masa-muscular");
var myLineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
    labels: ["Enero", "Febrero", "Marzo", "April", "Mayo", "Junio", "Julio","Septiembre", "Octubre","Nobiembre","Diciembre"],
    datasets: [
        {
            label: "Inidice de Masa Muscular(IMC)",
            fill: true,
            lineTension: 0.2,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(255,0,0,1)",
            pointHoverBorderColor: "rgba(255,0,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [40, 41, 35, 36, 37, 35, 34,34,33,32],
            spanGaps: false,
        }
    ]
},
    options: {
        title: {
            display: true,
            text: 'Inidice de Masa Muscular'
        },
        scales: {
            xAxes: [{
                display: true
            }]
        }
    }
});


/**
 * Grafica Inidice de hombros
 */

Chart.defaults.global.legend.position="bottom";

var lineCtx =  document.getElementById("hombros");
var myLineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
    labels: ["Enero", "Febrero", "Marzo", "April", "Mayo", "Junio", "Julio","Septiembre", "Octubre","Nobiembre","Diciembre"],
    datasets: [
        {
            label: "Anchura Hombros(cm)",
            fill: true,
            lineTension: 0.2,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(255,0,0,1)",
            pointHoverBorderColor: "rgba(255,0,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [50, 51, 51, 51, 52, 51, 53,54,54,55],
            spanGaps: false,
        }
    ]
},
    options: {
        title: {
            display: true,
            text: 'Hombros'
        },
        scales: {
            xAxes: [{
                display: true
            }]
        }
    }
});


/**
 * Grafica Epalda
 */

Chart.defaults.global.legend.position="bottom";

var lineCtx =  document.getElementById("espalda");
var myLineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
    labels: ["Enero", "Febrero", "Marzo", "April", "Mayo", "Junio", "Julio","Septiembre", "Octubre","Nobiembre","Diciembre"],
    datasets: [
        {
            label: "Anchura Espalda(cm)",
            fill: true,
            lineTension: 0.2,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(255,0,0,1)",
            pointHoverBorderColor: "rgba(255,0,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [50, 51, 51, 51, 52, 51, 51,51,51,52],
            spanGaps: false,
        }
    ]
},
    options: {
        title: {
            display: true,
            text: 'Espalda'
        },
        scales: {
            xAxes: [{
                display: true
            }]
        }
    }
});

/**
 * Grafica pectorales
 */

Chart.defaults.global.legend.position="bottom";

var lineCtx =  document.getElementById("pectorales");
var myLineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
    labels: ["Enero", "Febrero", "Marzo", "April", "Mayo", "Junio", "Julio","Septiembre", "Octubre","Nobiembre","Diciembre"],
    datasets: [
        {
            label: "Anchura Pectorales(cm)",
            fill: true,
            lineTension: 0.2,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(255,0,0,1)",
            pointHoverBorderColor: "rgba(255,0,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [37, 37, 37, 38, 39, 39, 39,40,41,42],
            spanGaps: false,
        }
    ]
},
    options: {
        title: {
            display: true,
            text: 'Pectorales'
        },
        scales: {
            xAxes: [{
                display: true
            }]
        }
    }
});


/**
 * Grafica cintura
 */

Chart.defaults.global.legend.position="bottom";

var lineCtx =  document.getElementById("cintura");
var myLineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
    labels: ["Enero", "Febrero", "Marzo", "April", "Mayo", "Junio", "Julio","Septiembre", "Octubre","Nobiembre","Diciembre"],
    datasets: [
        {
            label: "Anchura Cintura(cm)",
            fill: true,
            lineTension: 0.2,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(255,0,0,1)",
            pointHoverBorderColor: "rgba(255,0,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [45, 45, 46, 47, 47, 49, 49,50,51,52],
            spanGaps: false,
        }
    ]
},
    options: {
        title: {
            display: true,
            text: 'Cintura'
        },
        scales: {
            xAxes: [{
                display: true
            }]
        }
    }
});

/**
 * Grafica brazo
 */

Chart.defaults.global.legend.position="bottom";

var lineCtx =  document.getElementById("pantorrilla");
var myLineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
    labels: ["Enero", "Febrero", "Marzo", "April", "Mayo", "Junio", "Julio","Septiembre", "Octubre","Nobiembre","Diciembre"],
    datasets: [
        {
            label: "Diametro pantorrillas(cm)",
            fill: true,
            lineTension: 0.2,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(255,0,0,1)",
            pointHoverBorderColor: "rgba(255,0,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [35, 35, 35, 36, 36, 36, 37,37,37,38],
            spanGaps: false,
        }
    ]
},
    options: {
        title: {
            display: true,
            text: 'Pantorrillas'
        },
        scales: {
            xAxes: [{
                display: true
            }]
        }
    }
});

/**
 * Grafica brazo
 */

Chart.defaults.global.legend.position="bottom";

var lineCtx =  document.getElementById("brazo");
var myLineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
    labels: ["Enero", "Febrero", "Marzo", "April", "Mayo", "Junio", "Julio","Septiembre", "Octubre","Nobiembre","Diciembre"],
    datasets: [
        {
            label: "Diametro Brazos(cm)",
            fill: true,
            lineTension: 0.2,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(255,0,0,1)",
            pointHoverBorderColor: "rgba(255,0,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [30, 31, 32, 32, 33, 33, 33,33,34,34],
            spanGaps: false,
        }
    ]
},
    options: {
        title: {
            display: true,
            text: 'Brazos'
        },
        scales: {
            xAxes: [{
                display: true
            }]
        }
    }
});