import * as Constants from '../constants/actionType/covid'

const INITIAL_STATE = {
    allData:null,
    countryInfo: null,
    timeLine: null,
    countryCode :['US','BR','RU','ES','UK','IT','FR','DE','TR','IN','IR','PE','CA','CN','SA']
};

const reducer = (state = INITIAL_STATE, action) => {

    switch( action.type ){
        case Constants.COVID_SUMMARY:
            let globalRecords = action.payload.shift(),
                countryRecords = action.payload;
            return { ...state, globalRecords, countryRecords };
        case Constants.COVID_COUNTRYLIST:
            return {...state, countryInfo: action.payload }
        case Constants.COVID_TIMELINE:
            // console.log("object",action.payload)
            return {...state, timeLine: action.payload }
        default:
			return state;
    }
}

export default reducer;