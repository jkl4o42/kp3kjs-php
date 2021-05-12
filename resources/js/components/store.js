import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import students from "./reducers/students";
import lectures from "./reducers/lectures";
import schedules from "./reducers/schedules";
import visits from "./reducers/visits";

const initialState = {};
const middlewares = [
    thunk
];

const composedEnhancers = compose(
    applyMiddleware(...middlewares)
);

const reducers = {
    students,
    lectures,
    schedules,
    visits
};

const rootReducer = combineReducers({...reducers});

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

//for development
window.store = store;

export default store;
