import {
    ADD_USER, FETCH_HOUSINGDATA
} from "../../actionTypes";

const initialState = {
    ids: [],
    data: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_USER: {
            const { id, email, admin, active } = action.payload;
            return {
                ...state,
                ids: [...state.ids, id],
                data: {
                    ...state.data,
                    [id]: {
                        email,
                        admin,
                        active
                    }
                }
            }
        }
        case FETCH_HOUSINGDATA: {
            console.log(action.payload.length);
            
            let ids = [];
            let data = [];
            for (let i = 0; i <= action.payload.length - 1; i++) {
                ids.push(action.payload[i].id);
                data.push(action.payload[i]);
            }
            console.log(state);
            console.log(ids);
            console.log(data);
            return {
                ...state,
                ids: ids,
                data: data
            }
            console.log(state);
            console.log(ids);
            console.log(data);
        }
        default:
            return state;
    }
}