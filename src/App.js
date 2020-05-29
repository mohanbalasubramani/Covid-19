import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { covidSummary } from './actions/chart';
import Global from './components/Global';
import BarChart from './components/Bar';
import Pie from './components/Pie';
import Search from './components/Search';
import Line from './components/Line';
import ActivityIndicator from './components/ActivityIndicator';
import './App.css';

function App(props) {

  useEffect(() => {
    if (!props.countryRecords) props.covidSummary();
  })

  const handleDateFormat = (dateObj) => {
    return dateObj.split('2020')[0];
  }

  return (
    <div className="app">
      <header className="header name">
        <h2>COVID'19 Latest Updates</h2>
      </header>
      {
        (!props.countryRecords) ? <ActivityIndicator large /> :
          <div className="body content">
            <p className="date">{handleDateFormat(Date())}</p>
            <Global />
            <Search countryRecords={props.countryRecords} />
            <Line />
            <div className="row chart section">
              <div className="col-md-6">
                <BarChart countryRecords={props.countryRecords} />
              </div>
              <div className="col-md-6">
                <Pie />
              </div>
            </div>
          </div>
      }
    </div>
  );
}

const mapStateToProps = state => ({
  countryRecords: state.covid.countryRecords
});

const mapDispatchToProps = dispatch => bindActionCreators({ covidSummary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
