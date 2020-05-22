import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { covidSummary } from '../src/actions/chart';
import Global from '../src/components/Global';
import BarChart from '../src/components/Bar';
import './App.css';

function App( props ) {

  useEffect(() => {
    props.covidSummary();
  }, [])

  if (!props.globalData) return false;

  const handleDateFormat = ( dateObj ) => {
    return dateObj.split('T')[0];
  }

  const handleBlink = () => {

  }

  return (
    <div className="app">
      <header className="header name">
        <h2>COVID'19 Latest News</h2>
      </header>
      <p className="date">{ handleDateFormat(props.globalData.Date) }</p>
      <Global globalData={ props.globalData } />
      <BarChart totalConfirmed={ props.totalConfirmed } />
    </div>
  );
}

const mapStateToProps = state => ({
  all: state,
  globalData: state.covid.allData,
  totalConfirmed: state.covid.totalConfirmed,
});

const mapDispatchToProps = dispatch => bindActionCreators({ covidSummary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
