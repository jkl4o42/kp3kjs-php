import {ADD_LECTURE, REMOVE_LECTURE, SET_ALL_LECTURES, UPDATE_LECTURE} from "../utils/actionsConsts";

export default (state = [], action) => {
    switch (action.type) {
        case ADD_LECTURE:
            return [action.data, ...state];
        case SET_ALL_LECTURES:
            return [...action.data];
        case UPDATE_LECTURE:
            return [...state.map(lecture => lecture.id === action.data.id
                ? { ...action.data }
                : lecture
            )];
        case REMOVE_LECTURE:
            return [...state.filter(student => student.id !== action.id)];
        default:
            return state;
    }
};
