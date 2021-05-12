import * as studentsApi from "../http/studentsApi";
import {ADD_STUDENT, REMOVE_STUDENT, SET_ALL_STUDENTS, UPDATE_STUDENT} from "../utils/actionsConsts";

const setNewStudent = data => ({
    type: ADD_STUDENT,
    data
});

const setAllStudents = data => ({
    type: SET_ALL_STUDENTS,
    data
});

const updateStudent = data => ({
    type: UPDATE_STUDENT,
    data
});

const studentRemove = id => ({
    type: REMOVE_STUDENT,
    id
});

export const addNewStudent = data => async dispatch => {
    const response = await studentsApi.create(data);
    dispatch(setNewStudent(response));
};

export const getAllStudents = () => async dispatch => {
    const response = await studentsApi.getAll();
    dispatch(setAllStudents(response));
};

export const updateStudentData = data => async dispatch => {
    const response = await studentsApi.update(data);
    dispatch(updateStudent(response));
};

export const removeStudent = id => async dispatch => {
    const response = await studentsApi.remove(id);
    dispatch(studentRemove(response.id));
};
