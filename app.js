values = [
    {
      day: "mon",
      amount: 17.45
    },
    {
      day: "tue",
      amount: 34.91
    },
    {
      day: "wed",
      amount: 52.36
    },
    {
      day: "thu",
      amount: 31.07
    },
    {
      day: "fri",
      amount: 23.39
    },
    {
      day: "sat",
      amount: 43.28
    },
    {
      day: "sun",
      amount: 25.48
    }
]

const chartContainer = document.getElementById('chart')

var xValues = values.map(function(item) {
  return `${item.day}`
})

var yValues = values.map(function(item) {
  return `${item.amount}`
})

var barColors = 'hsl(10, 79%, 65%)'
var wedColors = 'hsl(186, 34%, 60%)'

const myChart = new Chart(chartContainer, {
    type: 'bar',
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: [barColors, barColors, wedColors, barColors, barColors , barColors, barColors],
            data: yValues,
            borderRadius: 5,
        }]
    },
    options: {
        legend: {display: false},
        title: {display: false},
        tooltips: {
          displayColors: false,
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              display: false
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }],
          xAxes: [{
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              fontColor: 'hsl(28, 10%, 53%)'
            }
          }]
        }
    }
})



