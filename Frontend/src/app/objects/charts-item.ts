export class ChartOption{
    responsive = true;
    animation = false;
    plugins = {
        legend: {
            display: false
        },
        tooltip: {
            enabled: true
        }
    };
    scales = {
        x: {
            title:{
            display:true,
            text:'X'
            },
            type: 'linear', 
            grid: {
                color: 'rgba(255,0,0,0.3)',
            }
        }, 
        y: {
            title:{
                display:true,
                text:'Y'
            },
            type:'linear', 
            grid: {
                color: 'rgba(255,0,0,0.3)',
            }
        }
    }
     
}

export class BarChartData {
    labels = [];
    datasets= 
    [
        {
          label: '',
          data: []
        }
    ]
}

export class LineChartData {
    labels = [];
    datasets= 
    [
        {
          label: '',
          data: [],                
          borderColor: 'rgba(148,159,177,1)',
          pointHoverBackgroundColor: 'rgba(148,159,177,1)',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          backgroundColor:'rgba(148,159,177,1)',
        }
    ]
}