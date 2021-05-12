import {SET_ALL_VISITS, SET_NEW_VISITS} from "../utils/actionsConsts";

export default (state = {},action) => {
    switch (action.type) {
        case SET_ALL_VISITS:
        case SET_NEW_VISITS:
            return { ...action.data };
        default:
            return state;
    }
};
