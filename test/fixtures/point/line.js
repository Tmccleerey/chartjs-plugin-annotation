module.exports = {
  tolerance: 0.0055,
  config: {
    type: 'scatter',
    options: {
      scales: {
        x: {
          display: true,
          min: -10,
          max: 10
        },
        y: {
          display: true,
          min: -10,
          max: 10
        }
      },
      plugins: {
        legend: false,
        annotation: {
          annotations: {
            lineSmall: {
              type: 'point',
              xValue: -5,
              yValue: -5,
              backgroundColor: 'rgba(101, 33, 171, 0.5)',
              borderColor: 'rgb(101, 33, 171)',
              borderWidth: 3,
              pointStyle: 'line',
              radius: 10
            },
            line: {
              type: 'point',
              xValue: 0,
              yValue: 0,
              backgroundColor: 'rgba(101, 33, 171, 0.5)',
              borderColor: 'rgb(101, 33, 171)',
              borderWidth: 5,
              pointStyle: 'line',
              radius: 25
            },
            lineBig: {
              type: 'point',
              xValue: 5,
              yValue: 5,
              backgroundColor: 'rgba(101, 33, 171, 0.5)',
              borderColor: 'rgb(101, 33, 171)',
              borderWidth: 15,
              pointStyle: 'line',
              radius: 50
            }
          }
        }
      }
    }
  }
};
