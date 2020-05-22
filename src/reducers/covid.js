import * as Constants from '../constants/actionType/covid'

const INITIAL_STATE = {
    allData:null
};

const reducer = (state = INITIAL_STATE, action) => {

    switch( action.type ){
        case Constants.COVID_SUMMARY:
            let totalConfirmed = action.payload.Countries.sort((a, b) => (a.TotalConfirmed > b.TotalConfirmed ? -1 : 1))
            return { ...state, allData: action.payload, totalConfirmed };
        default:
			return state;
    }
}

export default reducer;