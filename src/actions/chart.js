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