import { combineReducers } from 'redux';
//Data Coming into the ReduxStore. This is usually first point of entry to this reactJS program.
import housingData from "./housingData/housingData";

//... Import Next Data Sets

export default combineReducers({ housingData });//JSON: separate w/ comma.