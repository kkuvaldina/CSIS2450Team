import {
    FETCH_HOUSINGDATA, SET_FILTER,
    /*ADD_USER*/
} from "./actionTypes";

import axios from "axios";

let idCount = 0;
/*
export const addUser = (email) => {
    return function (dispatch) {
        const userObject = {
            id: ++idCount,
            email: email,
            admin: false,
            active: true
        }//post-write to this api
        return axios.post('https://localhost:44338/api/users/', userObject).then(({ data }) => {
            dispatch(addUserToState(data))
        }
        )
    }
}

export const addUserToState = (data) => ({
    type: ADD_USER,
    payload: data
});
*/

//Fetch User API for User List on the Admin Page.
export const fetchHousingData = () => {
    return function (dispatch) {
        return axios.get('https://localhost:44382/api/housingdataobjects').then(({ data }) => {
            dispatch(setHousingDataToReduxState(data))
            idCount = data.length;
        });
    }
}
//Update the Redux Store with Housing Data
export const setHousingDataToReduxState = (data) => ({
    type: FETCH_HOUSINGDATA,
    payload: data
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });