import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { covidTimeLine } from '../../actions/chart';
import { topTenCountry, cases } from '../../utilities/data';
import ActivityIndicator from '../ActivityIndicator';
import './style.css';

function Line(props) {

    const [categories, setCategories] = useState(null),
        [series, setSeries] = useState(null),
        [option, setSelectedOption] = useState('IN'),
        [active, setActive] = useState(false)

    useEffect(() => {

        if (!props.timeLineRecords) props.covidTimeLine('IN');
        if (props.timeLineRecords) handleCountry();

    }, [props.timeLineRecords]);

    const handleCountry = () => {
        let keys = Object.keys(props.timeLineRecords), values = Object.values(props.timeLineRecords),
            series = [];
        keys.pop(); values.pop();
        values.map((val, index) => {
            val.date = keys[index];
        });

        const grouped = groupBy(values, value => value.date);

        cases.forEach((data) => series.push({ name: data, data: [] }));

        grouped.forEach((data, i) => {
            series[0].data.push(data[0].new_daily_cases);
            series[1].data.push(data[0].new_daily_deaths);
            series[2].data.push(data[0].total_recoveries);
            series[3].data.push(data[0].total_deaths);
            series[4].data.push(data[0].total_cases)
        })
        setSeries(series);
        setCategories(keys);
        setActive(true)
    }

    const groupBy = (list, keyGetter) => {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return map;
    }

    const handleChange = (e) => {
        setActive(false)
        props.covidTimeLine(e.target.value);
        setSelectedOption(e.target.value);
    }

    const options = {
        title: {
            text: `${option} Daily counts`
        },
        yAxis: {
            title: {
                text: 'Number of Counts'
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2017'
            },
            categories: categories
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                }
            }
        },

        series: series,
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    };

    return (
        <div className="line chart">

            <label className="labels country" htmlFor="country">Please select a country:</label>
            <select name="country" id="country" onChange={handleChange} defaultValue={'IN'} className="form-control col-md-2 col-xs-12">
                {
                    topTenCountry.map((val, index) =>
                        <option value={val.code}
                            key={index}
                            data-value={val.country}
                        >{val.country}</option>
                    )
                }

            </select>
            {!active ? <ActivityIndicator medium /> :
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options} />

            }
        </div>
    )
}

const mapStateToProps = state => ({
    timeLineRecords: state.covid.timeLine
});

const mapDispatchToProps = dispatch => bindActionCreators({ covidTimeLine }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Line);
