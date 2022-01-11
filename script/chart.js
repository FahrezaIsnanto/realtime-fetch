var id = [];var currac = [];var currdc = [];var voltac = [];var voltdc = [];

$(document).ready(function(){
    /* dipanggil untuk pertama kali */
    fetchDataAndBuildChart();
    setInterval(()=>{
        /* Dipanggil untuk realtime (5 detik sekali)*/
        fetchDataAndBuildChart();
    },5000);
});

function fetchDataAndBuildChart(){
    
    fetch("https://kelompok2-gmedia.herokuapp.com/tampil")
    .then(data=>{
        return data.json();
    })
    .then(results=>{
        var i = 0;
        results.map(result=>{
            id[i] = result.id;
            currac[i] = result.currentac;
            currdc[i] = result.currentdc;
            voltac[i] = result.voltageac;
            voltdc[i] = result.voltagedc;
            i++;
        });
        buildChart();
    })
    .catch(error=>{
        console.log('errror',error);
    })

}

function buildChart(){
    const chart = Highcharts.chart('container', {
        chart: {
            scrollablePlotArea: {
                minWidth: 700,
                scrollPositionX: 1
            }
        },
        title: {
            text: 'Grafik Data'
        },
        subtitle: {
            text: 'Source: smg@gmedia.co.id'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        xAxis: {
            categories:id,
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: {
            tickPixelInterval: 10,
            title: {
                text: 'Data yang masuk'
            }
        },
        tooltip: {
            split: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
    
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
    
                marker: {
                    enabled: false
                }
            }
        },
        series: [{
            name: 'Volt AC',
            data: voltac
        }, {
            name: 'Curr AC',
            data: currac
        }, {
            name: 'Volt DC',
            data: voltdc
        }, {
            name: 'Curr DC',
            data: currdc
        }],
        
    });    
}
