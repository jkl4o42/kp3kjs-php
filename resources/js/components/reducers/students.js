import {ADD_STUDENT, REMOVE_STUDENT, SET_ALL_STUDENTS, UPDATE_STUDENT} from "../utils/actionsConsts";

export default (state = [], action) => {
    switch (action.type) {
        case ADD_STUDENT:
            return [action.data, ...state];
        case SET_ALL_STUDENTS:
            return [...action.data];
        case UPDATE_STUDENT:
            return [...state.map(student => student.id === action.data.id
                ? { ...action.data }
                : student
            )];
        case REMOVE_STUDENT:
            return [...state.filter(student => student.id !== action.id)];
        default:
            return state;
    }
};
