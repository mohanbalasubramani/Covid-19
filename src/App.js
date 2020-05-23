import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { covidSummary } from '../src/actions/chart';
import Global from '../src/components/Global';
import BarChart from '../src/components/Bar';
import Pie from '../src/components/Pie';
import './App.css';

function App(props) {

  useEffect(() => {
    if (!props.countryRecords) props.covidSummary();
  })

  if (!props.countryRecords) return false;

  const handleDateFormat = (dateObj) => {
    return dateObj.split('2020')[0];
  }

  return (
    <div className="app">
      <header className="header name">
        <h2>COVID'19 Latest News</h2>
      </header>
      <div className="body content">
        <p className="date">{handleDateFormat(Date())}</p>

        <Global />
        <div className="row chart section">
        <div className="col-md-6">
          <BarChart countryRecords={props.countryRecords} />
        </div>
        <div className="col-md-6">
          <Pie />
        </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  countryRecords: state.covid.countryRecords
});

const mapDispatchToProps = dispatch => bindActionCreators({ covidSummary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
