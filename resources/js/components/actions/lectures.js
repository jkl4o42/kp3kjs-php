import * as lecturesApi from "../http/lecturesApi";
import {ADD_LECTURE, REMOVE_LECTURE, SET_ALL_LECTURES, UPDATE_LECTURE} from "../utils/actionsConsts";

const setNewLecture = data => ({
    type: ADD_LECTURE,
    data
});

const setAllLectures = data => ({
    type: SET_ALL_LECTURES,
    data
});

const updateLecture = data => ({
    type: UPDATE_LECTURE,
    data
});

const lectureRemove = id => ({
    type: REMOVE_LECTURE,
    id
});

export const addNewLecture = data => async dispatch => {
    const response = await lecturesApi.create(data);
    dispatch(setNewLecture(response));
};

export const getAllLecture = () => async dispatch => {
    const response = await lecturesApi.getAll();
    dispatch(setAllLectures(response));
};

export const updateLectureData = data => async dispatch => {
    const response = await lecturesApi.update(data);
    dispatch(updateLecture(response));
};

export const removeLecture = id => async dispatch => {
    const response = await lecturesApi.remove(id);
    dispatch(lectureRemove(response.id));
};
