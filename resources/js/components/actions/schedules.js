import * as schedulesApi from "../http/schedulesApi";
import {ADD_SCHEDULE, REMOVE_SCHEDULE, SET_ALL_SCHEDULES} from "../utils/actionsConsts";


const setNewLectureToSchedule = data => ({
    type: ADD_SCHEDULE,
    data
});

const setAllSchedules = data => ({
    type: SET_ALL_SCHEDULES,
    data
});

const scheduleRemove = id => ({
    type: REMOVE_SCHEDULE,
    id
});

export const addNewSchedule = data => async dispatch => {
    const response = await schedulesApi.create(data);
    dispatch(setNewLectureToSchedule(response));
};

export const getAllSchedules = () => async dispatch => {
    const response = await schedulesApi.getAll();
    dispatch(setAllSchedules(response));
};

export const removeSchedule = id => async dispatch => {
    const response = await schedulesApi.remove(id);
    dispatch(scheduleRemove(response.id));
};
