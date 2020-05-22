import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

function BarChart(props) {

    const [data, setData] = useState([]),
          [categories, setCategories] = useState([]);

    useEffect(() => {
        handleConsent();
        
    },[])

    const handleConsent = () => {
        let myData=[],categoriess=[];
        props.totalConfirmed.slice(0,15).map((val)=>{
        myData.push([val.TotalConfirmed]);
        categoriess.push(val.Country)
        })
        setData(myData);
        setCategories(categoriess)
        console.log("categories",categoriess,myData)
    }
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: `COVID'19 World count`
        },
        subtitle: {
            text: `Source: <a href="https://covid19api.com/" target="_blank">COVID'19</a>`
        },
        xAxis: {
            categories:  categories ,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Count ',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' counts'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Countries',
            data: data
        }]
    };


    return (
        <div>
            <HighchartsReact
                highcharts={ Highcharts }
                options={ options } />
        </div>
    )
}

export default BarChart
