import {ADD_SCHEDULE, REMOVE_SCHEDULE, SET_ALL_SCHEDULES} from "../utils/actionsConsts";

export default (state = [], action) => {
    switch (action.type) {
        case ADD_SCHEDULE:
            return [...state, action.data];
        case SET_ALL_SCHEDULES:
            return [...action.data];
        case REMOVE_SCHEDULE:
            return [...state.filter(schedule => schedule.id !== action.id)];
        default:
            return state;
    }
};
