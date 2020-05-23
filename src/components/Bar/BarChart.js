import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

function BarChart(props) {

    const [ data, setData ] = useState( null ),
          [ categories, setCategories ] = useState( null );

    useEffect(() => {
        const handleConsent = () => {
            let myData=[],categoriess=[];
            props.countryRecords.slice(0,15).map((val)=>{
            myData.push([val.cases]);
            return categoriess.push(val.country);
            })
            setData(myData);
            setCategories(categoriess);
        }
        
        handleConsent();
    },[ props.countryRecords ])

    
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: `COVID'19 World count`
        },
        subtitle: {
            text: `Source: <a href="https://coronavirus-19-api.herokuapp.com/" target="_blank">COVID'19</a>`
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
            colorByPoint: true,
            name: 'Count',
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
