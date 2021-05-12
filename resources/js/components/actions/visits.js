import * as visitsApi from "../http/visitsApi";
import {SET_ALL_VISITS, SET_NEW_VISITS} from "../utils/actionsConsts";
import {getFromToDatesArr} from "../helpers/dateNormalizer";

const setAllVisits = data => ({
   type: SET_ALL_VISITS,
   data
});

const setNewVisitStatus = data => ({
    type: SET_NEW_VISITS,
    data
});

export const getAllVisits = (date = null) => async dispatch => {
    let fromToArr = null;

    if (date) {
        fromToArr = getFromToDatesArr(date);
    }

    const response = await visitsApi.getAll({dates: JSON.stringify(fromToArr)});
    const visits = {};

    response.map(visit => {
       if (!visits[visit.date]) {
           visits[visit.date] = [];
       }

       visits[visit.date].push(visit);
    });

    dispatch(setAllVisits(visits));
};

export const createVisitsStatus = data => async (dispatch, getRootState) => {
    const response = await visitsApi.create(data);
    const { visits } = getRootState();

    if (!visits[response.date]) {
        visits[response.date] = [];
    }

    visits[response.date].push(response);

    dispatch(setNewVisitStatus(visits));
};

export const removeVisitMark = (date, lectureId, studentId) => async (dispatch, getRootState) => {
    let newVisits = {};
    const {visits} = getRootState();
    const visitObj = visits[date].filter(visit => (visit.lectureId === lectureId && visit.studentId === studentId))[0];

    const response = await visitsApi.remove(visitObj.id);

    if (response.success) {
        newVisits = { ...visits, [date]: visits[date].filter(visit => visit.id !== response.id) };
    }

    dispatch(setAllVisits(newVisits));
};
