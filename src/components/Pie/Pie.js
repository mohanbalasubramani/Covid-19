import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { covidCountryList } from '../../actions/chart';
import ActivityIndicator from '../ActivityIndicator';
import './style.css';

function Pie(props) {

    const [countryName] = useState(props.countryRecords.map(data => data.country)),
        [option, setSelectedOption] = useState('India'),
        [countryInfo, setCountryInfo] = useState(props.contryDetails),
        [active, setActive] = useState(true);

    useEffect(() => {
        if (!countryInfo) props.covidCountryList('India');
        if (props.contryDetails) handleCountry();
    }, [props.contryDetails]);


    const handleCountry = () => {
        let myData = [];
        let keys = Object.keys(props.contryDetails), values = Object.values(props.contryDetails);
        keys.forEach((data) => myData.push({ name: data }));
        values.forEach((data, index) => myData[index].y = data);
        myData.shift();
        setCountryInfo(myData)
        setActive(false)
    }

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
        props.covidCountryList(e.target.value);
        setActive(true);
    }

    const options = {
        chart: {
            type: 'pie'
        },
        title: {
            text: `${option} Records`
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: countryInfo

        }]
    };

    return (
        <div>
            <label htmlFor="country">Please select a country:</label>
            <select name="country" id="country" onChange={handleChange} defaultValue={'India'} className="form-control col-md-4">
                {
                    countryName.map((val, index) =>
                        <option value={val}
                            key={index}
                        >{val}</option>
                    )
                }

            </select>
            {active ? <ActivityIndicator medium /> :
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options} />
            }
        </div>
    );

}

const mapStateToProps = state => ({
    countryRecords: state.covid.countryRecords,
    contryDetails: state.covid.countryInfo
});

const mapDispatchToProps = dispatch => bindActionCreators({ covidCountryList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pie);
