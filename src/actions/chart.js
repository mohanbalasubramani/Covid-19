import axios from 'axios';
import * as API from '../constants/api/covid';
import * as Constants from '../constants/actionType/covid'


export const covidSummary = () => {
    return dispatch => {
        axios
            .get( API.COVID_SUMMARY )
            .then( res => dispatch({ type: Constants.COVID_SUMMARY, payload: res.data }) )  
            .catch( err => console.error( err ) );
    }     
}

export const covidCountryList = ( country ) => {
    return dispatch => {
        axios
        .get( API.COVID_COUNTRY_NAME.replace('{id}', country) )
        .then( res => dispatch ({ type: Constants.COVID_COUNTRYLIST, payload: res.data }) )
        .catch( err => console.error( err ) );
    }
}

export const covidTimeLine = (countryCode) => {
    return dispatch => {
        axios
        .get( API.COVID_TIMELINE_COUNTRY.replace('{countryCode}',countryCode) )
        .then( res => dispatch ({ type: Constants.COVID_TIMELINE, payload: res.data.timelineitems[0] }) )
        .catch( err => console.error( err ) );
    }
}