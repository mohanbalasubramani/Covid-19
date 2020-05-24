import React, { useState } from 'react';
import './style.css';

function Search(props) {

    const [country, setCountry] = useState(null);

    const handleChange = (e) => {
        let values = props.countryRecords.filter((data) => {
            if ( data.country.toUpperCase().indexOf(e.target.value.toUpperCase()) !== -1 ) return data;
        });
        setCountry(values);
    }

    return (
        <div className="search content">
            <h2>COVID'19 by Country</h2>
            <input type="text" placeholder="Type to search" onChange={handleChange} className="form-control" />
            <ul className="search">
                {
                    country ? country.length !== 0 ? country.slice(0, 5).map((values, index) =>
                        <li key={index}>
                            <h3>{values.country}</h3>
                    Cases: {values.cases} | Active: {values.active} | Deaths: {values.deaths} <br />
                    Recovered: {values.recovered} | Total Tests: {values.totalTests} | Today Deaths: {values.todayDeaths} <br></br>
                        </li>
                    ) :
                        <h3>Search result not found</h3>
                        :
                        props.countryRecords.slice(0, 5).map((values, index) =>
                            <li key={index}>
                                <h3>{values.country}</h3>
                    Cases: {values.cases} | Active: {values.active} | Deaths: {values.deaths} <br />
                    Recovered: {values.recovered} | Total Tests: {values.totalTests} | Today Deaths: {values.todayDeaths} <br></br>
                            </li>)
                }
            </ul>
        </div>
    )
}

export default Search
